import { readFileSync, writeFileSync, readdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function getAllFiles(dir) {
  const files = [];
  const items = readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      files.push(...getAllFiles(join(dir, item.name)));
    } else if (item.name.endsWith(".js")) {
      files.push(join(dir, item.name));
    }
  }

  return files;
}

const files = getAllFiles(join(root, "dist"));

// Lista de paquetes que no deben tener extensión .js
const nodePackages = ['express', 'cors', 'morgan', 'chalk', 'dotenv', 'pg'];

files.forEach((file) => {
  const content = readFileSync(file, "utf-8");
  const newContent = content
    // Reemplazar alias de paths
    .replace(/@utils\//g, "../utils/")
    .replace(/@config\//g, "../config/")
    .replace(/@routes\//g, "../routes/")
    .replace(/@middlewares\//g, "../middlewares/")
    .replace(/@services\//g, "../services/")
    .replace(/@db\//g, "../db/")
    // Agregar extensiones .js solo a importaciones relativas
    .replace(/from ['"](\.[^'"]+)['"](?!\.js['"])/g, (match, p1) => {
      return `from '${p1}.js'`;
    })
    .replace(/import ['"](\.[^'"]+)['"](?!\.js['"])/g, (match, p1) => {
      return `import '${p1}.js'`;
    });

  writeFileSync(file, newContent);
});

console.log("✅ Paths fixed successfully");
