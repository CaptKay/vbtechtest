import * as fs from 'fs';
import * as path from 'path';

interface Data {
    [key: string]: string;
}

function readJsonFile(filePath: string): Data {
    const jsonString = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonString.toString());
}

export const findKeyInNestedFolders = async (startPath: string, key: string): Promise<string> => {
    const files = fs.readdirSync(startPath);
    let result = '';
    files.forEach((fileName) => {
        const filePath = path.join(startPath, fileName);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            findKeyInNestedFolders(filePath, key);
        } else if (path.extname(filePath) === '.json') {
            try {
                const data = readJsonFile(filePath);
                console.log(`Value of ${key} in ${filePath}: ${data[key]}`);
                result = (data[key]).toString();
            } catch (error) {
                console.log(`Error reading ${filePath}: ${error}`);
            }
        }
    });
    return result;
}

