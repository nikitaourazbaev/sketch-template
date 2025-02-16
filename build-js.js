import * as esbuild from 'esbuild';

const [, , ...args] = process.argv;

const commonOptions = {
  outdir: 'dist',
  bundle: true,
  format: 'esm',
  target: 'safari14.1',
  logLevel: 'info',
};

const allOptions = [
  {
    entryPoints: ['src/*.js'],
    outExtension: {
      '.js': '.bundle.js',
    },
    entryNames: '[dir]/[name]',
    ...commonOptions,
  },
];

if (args.includes('--watch')) {
  for (const options of allOptions) {
    const ctx = await esbuild.context(options);

    await ctx.watch();
  }
} else {
  for (const options of allOptions) {
    esbuild.build(options);
  }
}
