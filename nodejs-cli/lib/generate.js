import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import ejs from "ejs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATE_DIR = path.join(__dirname, "..", "templates");

const renderFile = async (filePath, data) => {
  const content = await fs.readFile(filePath, "utf-8");
  return ejs.render(content, data);
};

async function generateProject(projectName) {
  const targetPath = path.join(process.cwd(), projectName);

  if (fs.existsSync(targetPath)) {
    console.error(chalk.red("Project already exists!"));
    return;
  }

  try {
    await fs.copy(TEMPLATE_DIR, targetPath, {
      filter: (src) => !src.endsWith(".ejs"),
    });

    // Render ejs files
    const ejsFiles = fs.readdirSync(TEMPLATE_DIR).filter(f => f.endsWith(".ejs"));
    for (const file of ejsFiles) {
      const filePath = path.join(TEMPLATE_DIR, file);
      const content = await renderFile(filePath, { projectName });
      const destPath = path.join(targetPath, file.replace(".ejs", ""));
      await fs.outputFile(destPath, content);
    }

    console.log(chalk.green("✅ Project created successfully!"));
    console.log(chalk.yellow(`📂 cd ${projectName} && npm install && npm run dev`));
  } catch (error) {
    console.error(chalk.red("Failed to create project: "), error);
  }
}

export default generateProject;