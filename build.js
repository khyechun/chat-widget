require('esbuild').build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/chat-widget.js',
  format: 'iife',
  target: ['es2015'],
}).catch(() => process.exit(1));