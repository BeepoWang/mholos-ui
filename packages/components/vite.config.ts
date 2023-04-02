import { defineConfig, PluginOption } from "vite";
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
// @ts-ignore
import DefineOptions from "unplugin-vue-define-options/vite";


export default defineConfig({
  build: {
    //打包文件目录
    outDir: "es",
    rollupOptions: {
      //忽略打包vue和.less文件
      external: ["vue", /\.less/],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: "[name].mjs",
          preserveModules: true,
          exports: 'named',
          dir: '../mholos-ui/es'
        }, {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: '../mholos-ui/lib'
        }
      ]
    },
    lib: {
      entry: './index.ts',
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: './src',
      outputDir: ['../mholos-ui/es/src', '../mholos-ui/lib/src'],
      tsConfigFilePath: '../../tsconfig.json'
    }),
    DefineOptions(),
    {
      name: "style",
      generateBundle(config: any, bundle: { [x: string]: any; }) {
        //这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件
          //@ts-ignore
          this.emitFile({
            type: "asset",
            fileName: key, //文件名名不变
            source: bundler.code.replace(/\.less/g, ".css"),
          });
        }
      },
    } as PluginOption, // 将对象字面量包装在数组中，并将其断言为 PluginOption 类型
  ]
})