#!/usr/bin/env node
// Import dependencies
import * as fs from 'fs';
import { fileURLToPath } from 'url'
import * as path from 'path';
import * as inquirer from 'inquirer';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const CURR_DIR = process.cwd();
const templatePat = path.join(__dirname, 'template');
const tartgetPat = path.join(CURR_DIR, 'peppubuild');

const prompt = inquirer.createPromptModule();

prompt([
    {
        type: 'confirm',
        message: 'Do you want to install a self-hosted version of peppubuild?',
        name: 'install'
    }
])
    .then((answer) => {
        if (answer['install'] == true) {

            // Call createProject in inquirerPrecss
            if (!createProject(tartgetPat)) {
                return;
            }

            // Call createDirectoryContents
            createDirectoryContents(templatePat, 'peppubuild');
        }
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            
        }
    });

// Create project folder with path
function createProject(projectPath) {
    // Check if project path already exists
    if (fs.existsSync(projectPath)) {
        console.log(chalk.red(`Folder ${projectPath} exists. Delete or use another name.`));
        return false;
    }
    // Create folder if path doesn't exist
    fs.mkdirSync(projectPath);

    return true;
}

// Add contents into the directory
// Add contents into the directory
function createDirectoryContents(templatePath, projectName) {
    // read all files/folders (1 level) from template folder
    const filesToCreate = fs.readdirSync(templatePath);
    // loop each file/folder
    filesToCreate.forEach(file => {
        const origFilePath = path.join(templatePath, file);

        // get stats about the current file
        const stats = fs.statSync(origFilePath);
        if (stats.isFile()) {
            // read file content and transform it using template engine
            let contents = fs.readFileSync(origFilePath, 'utf8');
            // write file to destination folder
            const writePath = path.join(CURR_DIR, projectName, file);
            fs.writeFileSync(writePath, contents, 'utf8');
        } else if (stats.isDirectory()) {
            // create folder in destination folder
            fs.mkdirSync(path.join(CURR_DIR, projectName, file));
            // copy files/folder inside current folder recursively
            createDirectoryContents(path.join(templatePath, file), path.join(projectName, file));
        }
    })
}