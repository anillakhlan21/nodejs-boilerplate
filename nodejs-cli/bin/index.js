#!/usr/bin/env node

const { Command } = require("commander");
const generateProject = require("../lib/generate");

const program = new Command();

program
  .name("create-node-backend")
  .description("Scaffold a new Node.js backend boilerplate")
  .argument("<project-name>", "Project name")
  .action((projectName) => {
    generateProject(projectName);
  });

program.parse();