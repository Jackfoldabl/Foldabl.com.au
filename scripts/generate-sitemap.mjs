#!/usr/bin/env node
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const SITE_URL = process.env.SITE_URL?.replace(/\/$/, '') || 'https://foldabl.com.au';

// Define planned routes; expand as real pages are added
const routes = [
  '/',
  '/about',
  '/process',
  '/installation',
  '/homes',
  '/service-areas',
  '/modular-homes',
  '/council-approval',
  '/homes/nsw',
  '/homes/qld',
  '/homes/vic',
  '/homes/sa',
  '/homes/wa',
  '/homes/tas',
  '/homes/nt',
  '/homes/act',
  '/homes/foldabl-studio',
  '/homes/foldabl-42',
  '/homes/expandabl-20',
  '/tiny-homes',
  '/blog'
];

// include blog posts from manifest if present
import { readFileSync, existsSync } from 'node:fs';
const manifestPath = resolve(process.cwd(), 'content', 'blog-manifest.json');
let blogRoutes = [];
if (existsSync(manifestPath)) {
  try {
    const json = JSON.parse(readFileSync(manifestPath, 'utf8'));
    if (Array.isArray(json.posts)) {
      blogRoutes = json.posts.map((p) => `/blog/${p.slug}`);
    }
  } catch (e) {
    console.warn('Failed to read blog-manifest.json', e);
  }
}

const now = new Date().toISOString();

function getPriority(path) {
  if (path === '/') return '1.0';
  if (/^\/(council-approval|installation)$/.test(path)) return '0.9';
  if (/^\/homes\/(nsw|qld|vic|sa|wa|tas|nt|act)$/.test(path)) return '0.9';
  const isModel = (/^\/homes\/(foldabl\-studio|foldabl\-42|expandabl\-20)$/).test(path);
  if (path === '/modular-homes' || isModel) return '0.8';
  if (path === '/blog' || path.startsWith('/blog/')) return '0.7';
  return '0.7';
}

const urlset = [...routes, ...blogRoutes]
  .map((path) => {
    const loc = `${SITE_URL}${path}`;
    const priority = getPriority(path);
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>\n`;

// Write into static so Vite copies it to dist
const outPath = resolve(process.cwd(), 'static', 'sitemap.xml');
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, xml, 'utf8');
console.log(`Generated sitemap at ${outPath}`);
