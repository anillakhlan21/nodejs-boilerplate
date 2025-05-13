#!/usr/bin/env node

import { Command } from "commander";
import generateProject from "../lib/generate";

const program = new Command();

program
  .name("create-node-backend")
  .description("Scaffold a new Node.js backend boilerplate")
  .argument("<project-name>", "Project name")
  .action((projectName: string) => {
    generateProject(projectName);
  });

program.parse();