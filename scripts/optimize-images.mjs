import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const MAX_WIDTH = 1920;
const IMG_DIR = 'src/assets/img';
const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

function findImages(dir) {
    let results = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results = results.concat(findImages(fullPath));
        } else if (EXTENSIONS.includes(path.extname(entry.name).toLowerCase())) {
            results.push(fullPath);
        }
    }
    return results;
}

const files = findImages(IMG_DIR);

for (const file of files) {
    const tempOutput = file + '.tmp';
    const image = sharp(file);
    const metadata = await image.metadata();

    if (metadata.width && metadata.width > MAX_WIDTH) {
        image.resize({ width: MAX_WIDTH });
    }

    await image.jpeg({ quality: 75 }).toFile(tempOutput);
    fs.renameSync(tempOutput, file);
    console.log(`Imagem otimizada: ${file}`);
}

if (files.length === 0) {
    console.log(`Nenhuma imagem encontrada em ${path.resolve(IMG_DIR)}`);
}