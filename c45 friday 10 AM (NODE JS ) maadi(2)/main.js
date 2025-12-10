const fs = require('fs');
const path = require('path');
const os = require('os');

function logCurrentFilePath() {
    const currentFile = __filename;
    const currentDir = __dirname;
    console.log(`{File: "${currentFile}", Dir: "${currentDir}"}`);
}

function getFileName(filePath) {
    return path.basename(filePath);
}

function buildPathFromObject(pathObj) {
    return path.join(pathObj.dir, `${pathObj.name}.${pathObj.ext}`);
}

function getFileExtension(filePath) {
    return path.extname(filePath).replace('.', '');
}

function parseFilePath(filePath) {
    const fileName = path.basename(filePath, path.extname(filePath));
    const ext = path.extname(filePath).replace('.', '');
    return { Name: fileName, Ext: ext };
}

function isPathAbsolute(filePath) {
    return path.isAbsolute(filePath);
}

function joinPathSegments(...segments) {
    return path.join(...segments);
}

function resolveRelativePath(relativePath) {
    const basePath = '/home/user/project/src';
    return path.resolve(basePath, relativePath);
}

function joinTwoPaths(path1, path2) {
    return path.join(path1, path2);
}

function deleteFileAsync(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(`Error deleting file: ${err.message}`);
        } else {
            console.log(`The ${path.basename(filePath)} is deleted.`);
        }
    });
}

function createFolderSync(folderPath) {
    try {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
            console.log("Success");
        } else {
            console.log("Folder already exists");
        }
    } catch (err) {
        console.error(`Error creating folder: ${err.message}`);
    }
}

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('Welcome event triggered!');
});

eventEmitter.on('login', (username) => {
    console.log(`User logged in: ${username}`);
});

function readFileSync(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        console.log(`the file content => "${content}"`);
        return content;
    } catch (err) {
        console.error(`Error reading file: ${err.message}`);
        return null;
    }
}

function writeFileAsync(filePath, content) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing to file: ${err.message}`);
        } else {
            console.log(`Successfully wrote to ${path.basename(filePath)}`);
        }
    });
}

function checkDirectoryExists(dirPath) {
    try {
        return fs.existsSync(dirPath);
    } catch (err) {
        console.error(`Error checking directory: ${err.message}`);
        return false;
    }
}

function getSystemInfo() {
    return {
        Platform: os.platform(),
        Arch: os.arch()
    };
}

console.log("=== Testing Assignment Functions ===\n");

console.log("1. Current file path and directory:");
logCurrentFilePath();

console.log("\n2. Get file name:");
console.log(getFileName("/user/files/report.pdf"));

console.log("\n3. Build path from object:");
const pathObj = { dir: "/folder", name: "app", ext: "js" };
console.log(buildPathFromObject(pathObj));

console.log("\n4. Get file extension:");
console.log(getFileExtension("/docs/readme.md"));

console.log("\n5. Parse path to name and extension:");
console.log(parseFilePath("/home/app/main.js"));

console.log("\n6. Check if path is absolute:");
console.log(isPathAbsolute("/home/user/file.txt"));

console.log("\n7. Join multiple segments:");
console.log(joinPathSegments("src", "components", "App.js"));

console.log("\n8. Resolve relative path:");
console.log(resolveRelativePath("./index.js"));

console.log("\n9. Join two paths:");
console.log(joinTwoPaths("/folder1", "folder2/file.txt"));

console.log("\n12 & 13. Event emitter tests:");
eventEmitter.emit('start');
eventEmitter.emit('login', 'Ahmed');

console.log("\n14. Read file synchronously (example - create test file first):");

console.log("\n15. Write file asynchronously (example):");

console.log("\n16. Check if directory exists:");
console.log(checkDirectoryExists("/notes.txt"));

console.log("\n17. Get system info:");
console.log(getSystemInfo());

console.log("\n=== End of Tests ===");

/**
 * class Solution {
public:
    int findKthPositive(vector<int>& arr, int k) {
        int current = 1;
        int index = 0;
        int missingCount = 0;
        
        while (missingCount < k) {
            if (index < arr.size() && arr[index] == current) {
                index++;
            } else {
                missingCount++;
            }
            
            if (missingCount == k) {
                return current;
            }
            
            current++;
        }
        
        return current - 1;
    }
};
 */