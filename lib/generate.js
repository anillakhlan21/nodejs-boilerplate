import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATE_DIR = path.join(__dirname, "..", "templates");

export async function generateProject(projectName) {
  const targetPath = path.join(process.cwd(), projectName);

  if (fs.existsSync(targetPath)) {
    console.error(chalk.red("Project already exists!"));
    return;
  }

  try {
    await fs.copy(TEMPLATE_DIR, targetPath);
    console.log(chalk.yellow(`📂 cd ${projectName} && npm install && npm run dev`));
  } catch (error) {
    console.error(chalk.red("Failed to create project: "), error);
  }
}

export async function generateRoute(moduleName) {
  const targetPath = path.join(process.cwd(), `src/modules/${moduleName}`, `${moduleName}.route.ts`);
  try {
    fs.writeFileSync(targetPath);
  } catch (error) {
    console.error(chalk.red("Failed to create route: "), error);
  }
}

export async function generateController() {
  const targetPath = path.join(process.cwd(), `src/modules/${moduleName}`, `${moduleName}.controller.ts`);
  try {
    fs.writeFileSync(targetPath);
  } catch (error) {
    console.error(chalk.red("Failed to create controller: "), error);
  }
}

export async function generateService() { 
  const targetPath = path.join(process.cwd(), `src/modules/${moduleName}`, `${moduleName}.service.ts`);
  try {
    fs.writeFileSync(targetPath);
  } catch (error) {
    console.error(chalk.red("Failed to create service: "), error);
  }
}

export async function generateModel() { 
  const targetPath = path.join(process.cwd(), `src/modules/${moduleName}`, `${moduleName}.model.ts`);
  try {
    fs.writeFileSync(targetPath);
  } catch (error) {
    console.error(chalk.red("Failed to create model: "), error);
  }
}

export async function generateModule(moduleName) {
  const targetPath = path.join(process.cwd(), `src/modules/${moduleName}`);
  try {
  await fs.mkdirSync(targetPath);

  await generateRoute(moduleName);
  await generateController(moduleName);
  await generateService(moduleName);
  await generateModel(moduleName);
  } catch (error) {
    console.error(chalk.red("Failed to create module: "), error);
  }
 }