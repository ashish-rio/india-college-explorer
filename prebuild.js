import fs from 'fs';
import path from 'path';

console.log('--- PREBUILD DIAGNOSTICS & CASING FIXER ---');
const rootFiles = fs.readdirSync('.');
console.log('Root files present:', rootFiles);

// Case-insensitive match for 'src' folder
const srcDirName = rootFiles.find(f => f.toLowerCase() === 'src');

if (srcDirName && srcDirName !== 'src') {
  console.log(`Found folder with alternative casing: "${srcDirName}". Copying/Symlinking to lowercase "src"...`);
  try {
    fs.symlinkSync(srcDirName, 'src', 'dir');
    console.log('Symlink created: src -> ' + srcDirName);
  } catch (e) {
    console.log('Symlink failed (might be on Windows or limited permissions). Attempting copy. Error:', e.message);
    copyDirRecursive(srcDirName, 'src');
  }
}

// Double check and ensure we have a valid src folder
if (!fs.existsSync('src') && srcDirName) {
  console.log('Re-checking: src does not exist, so copying from ' + srcDirName);
  copyDirRecursive(srcDirName, 'src');
}

if (fs.existsSync('src')) {
  const srcFiles = fs.readdirSync('src');
  console.log('Files inside src directory:', srcFiles);
  
  // Case-insensitive match for 'main.tsx'
  const mainFile = srcFiles.find(f => f.toLowerCase() === 'main.tsx');
  if (mainFile && mainFile !== 'main.tsx') {
    console.log(`Found main.tsx with different casing: "${mainFile}". Copying to exact "main.tsx"...`);
    try {
      fs.copyFileSync(path.join('src', mainFile), path.join('src', 'main.tsx'));
      console.log('Casing fallback successful!');
    } catch (e) {
      console.log('Failed to copy main.tsx:', e.message);
    }
  }
} else {
  console.log('WARNING: "src" directory could not be located or created!');
}

console.log('--- PREBUILD STEP COMPLETE ---');

function copyDirRecursive(src, dest) {
  try {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (let entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        copyDirRecursive(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
    console.log(`Successfully copied "${src}" contents recursively to "${dest}"`);
  } catch (err) {
    console.log(`Error during copy recursive from ${src} to ${dest}:`, err.message);
  }
}
