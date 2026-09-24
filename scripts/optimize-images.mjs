import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const MAX_WIDTH = 1920;
const IMG_DIR = 'src/assets/img';
const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

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
    const inputBuffer = fs.readFileSync(file);
    const image = sharp(inputBuffer);
    const metadata = await image.metadata();

    if (metadata.width && metadata.width > MAX_WIDTH) {
        image.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    const ext = path.extname(file).toLowerCase();

    if (ext === '.png') {
        await image.png({ quality: 90, compressionLevel: 9 }).toFile(tempOutput);
    } else if (ext === '.webp') {
        await image.webp({ quality: 85 }).toFile(tempOutput);
    } else {
        await image.jpeg({ quality: 88, mozjpeg: true }).toFile(tempOutput);
    }

    fs.renameSync(tempOutput, file);
    console.log(`Otimizada: ${file}`);
}

if (files.length === 0) {
    console.log(`Nenhuma imagem encontrada em ${path.resolve(IMG_DIR)}`);
}