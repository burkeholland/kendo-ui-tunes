import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'

export default {
  entry: 'dist/out-tsc/src/main.js',
  dest: 'dist/build.js', // output a single application bundle
  sourceMap: false,
  format: 'iife',
  onwarn: function(warning) {
    // Skip certain warnings

    // should intercept ... but doesn't in some rollup versions
    if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }

    // console.warn everything else
    console.warn( warning.message );
  },
  plugins: [
      nodeResolve({jsnext: true, module: true}),
      commonjs({
        include: 'node_modules/rxjs/**',
      }),
      uglify()
  ]
}

// rollup.config.vendor.js
// import alias from 'rollup-plugin-alias';
// import typescript from 'rollup-plugin-typescript';
// import resolve from 'rollup-plugin-node-resolve';

// export default {
//  entry: 'src/main.ts',
//  dest: 'dist/build.js',
//  format: 'iife',
//  moduleName: 'vendor',
//  plugins: [
//    typescript(),
//    alias({ rxjs: __dirname + '/node_modules/rxjs-es' }),
//    resolve({ jsnext: true,
//              main: true,
//              browser: true }),
//  ]
// }
