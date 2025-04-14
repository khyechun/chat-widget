require('esbuild').build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'dist/chat-widget.js',
    format: 'iife', // Makes it accessible via <script>
    globalName: 'ChatWidget',
    target: ['es2015'],
  }).catch(() => process.exit(1));