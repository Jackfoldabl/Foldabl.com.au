#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync } from 'fs';

console.log('🚀 Starting Vercel build process...');

try {
  // Generate sitemap first
  console.log('📋 Generating sitemap...');
  execSync('node scripts/generate-sitemap.mjs', { stdio: 'inherit' });

  // Build with Vite
  console.log('🏗️  Building with Vite...');
  execSync('vite build', { stdio: 'inherit' });

  // Check if we should attempt prerendering
  const shouldPrerender = process.env.PRERENDER === 'true';
  const chromeExists = existsSync('/usr/bin/google-chrome-stable') || 
                      existsSync('/usr/bin/chromium-browser') ||
                      existsSync('/usr/bin/chromium');

  if (shouldPrerender && chromeExists) {
    console.log('🔄 Attempting prerendering with react-snap...');
    try {
      execSync('react-snap', { stdio: 'inherit' });
      console.log('✅ Prerendering completed successfully');
    } catch (prerenderError) {
      console.warn('⚠️  Prerendering failed, but build continues:', prerenderError.message);
    }
  } else {
    console.log('⏭️  Skipping prerendering (Chrome not available or PRERENDER not set)');
  }

  console.log('🎉 Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
