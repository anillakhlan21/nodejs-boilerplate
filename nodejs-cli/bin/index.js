#!/usr/bin/env node

import { Command } from "commander";
import { generateController, generateModel, generateModule, generateProject, generateRoute, generateService } from "../lib/generate";

const program = new Command();

const ComponentType = Object.freeze({
    PROJECT: 'project',
    MODULE: 'module',
    ROUTE: 'route',
    CONTROLLER: 'controller',
    SERVICE: 'service',
    MODEL: 'model'
})

const componentTypeToActionFnMap = {
  [ComponentType.PROJECT]: generateProject,
  [ComponentType.MODULE]: generateModule,
  [ComponentType.ROUTE]: generateRoute,
  [ComponentType.CONTROLLER]: generateController,
  [ComponentType.SERVICE]: generateService,
  [ComponentType.MODEL]: generateModel,
}

const availableCommands = Object.values(ComponentType);

program
  .name('repoji')
  .description('CLI to generate Node.js backend boilerplate')
  .version('1.0.0');


program
  .command('generate')
  .argument('<type>', 'Type of component, e.g., module')
  .argument('<name>', 'Name of the component')
  .action((type, ...args)=>{
    if(!availableCommands.includes(type)){
      console.log(`Unknown type: ${type}`);
    }
    componentTypeToActionFnMap[type](args);
  })


 

program.parse();