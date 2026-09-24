import ffmpegPath from 'ffmpeg-static';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const input = process.argv[2] ?? 'src/assets/video/video.mp4';
const output = process.argv[3] ?? input;
const ext = path.extname(output).toLowerCase();
const tempOutput = output + '.tmp' + ext;

const isWebm = ext === '.webm';

const scaleFilter = 'scale=1920:-2:flags=lanczos';

const videoArgs = isWebm
    ? [
        '-c:v', 'libsvtav1',
        '-crf', '30',
        '-preset', '6',
        '-pix_fmt', 'yuv420p',
    ]
    : [
        '-c:v', 'libx264',
        '-crf', '22',
        '-preset', 'veryslow',
        '-profile:v', 'high',
        '-level', '4.1',
        '-pix_fmt', 'yuv420p',
    ];

const args = [
    '-y',
    '-i', input,
    '-vf', scaleFilter,
    ...videoArgs,
    '-an',
    '-movflags', '+faststart',
    tempOutput,
];

const result = spawnSync(ffmpegPath, args, { stdio: 'inherit' });

if (result.status !== 0) {
    console.error('Falha ao otimizar o vídeo.');
    process.exit(1);
}

fs.renameSync(tempOutput, output);
console.log(`Vídeo otimizado: ${output}`);