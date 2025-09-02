// validate-jsons.js
const fs = require("fs");
const path = require("path");

function validateJSON(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    JSON.parse(content);
    return true;
  } catch (err) {
    console.error(`❌ Archivo JSON inválido: ${filePath}`);
    console.error(`   → ${err.message}`);
    return false;
  }
}

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else if (f.endsWith(".json")) {
      callback(path.join(dir, f));
    }
  });
}

console.log("🔎 Validando JSONs en el proyecto...");

walkDir(process.cwd(), (filePath) => {
  validateJSON(filePath);
});

console.log("✅ Revisión completada");
