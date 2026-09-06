import ffmpegPath from 'ffmpeg-static';
import { spawnSync } from 'node:child_process';

const input = process.argv[2] ?? 'src/assets/video/video.mp4';
const output = process.argv[3] ?? input;
const tempOutput = output + '.tmp.mp4';

const result = spawnSync(
    ffmpegPath,
    [
        '-y',
        '-i', input,
        '-vf', 'scale=1920:-2',
        '-c:v', 'libx264',
        '-crf', '26',
        '-preset', 'slow',
        '-an',
        '-movflags', '+faststart',
        tempOutput,
    ],
    { stdio: 'inherit' }
);

if (result.status !== 0) {
    console.error('Falha ao otimizar o vídeo.');
    process.exit(1);
}

const fs = await import('node:fs');
fs.renameSync(tempOutput, output);
console.log(`Vídeo otimizado: ${output}`);