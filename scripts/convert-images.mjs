#!/usr/bin/env node
// Batch convert images in static/img to WebP and AVIF using sharp
import { readdirSync, statSync } from 'node:fs';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';

const dir = join(process.cwd(), 'static', 'img');
const exts = new Set(['.jpg', '.jpeg', '.png']);

const files = readdirSync(dir).filter(f => exts.has(extname(f).toLowerCase()));

async function convert(file) {
  const src = join(dir, file);
  const base = basename(file, extname(file));
  const img = sharp(src);
  const meta = await img.metadata();

  await img.webp({ quality: 80 }).toFile(join(dir, `${base}.webp`));
  await img.avif({ quality: 50 }).toFile(join(dir, `${base}.avif`));
  console.log(`Converted ${file} -> ${base}.webp / ${base}.avif (${meta.width}x${meta.height})`);
}

(async () => {
  for (const f of files) {
    try { await convert(f); } catch (e) { console.warn('Failed:', f, e.message); }
  }
})();

