import fs from 'fs';
import { resolve } from 'path';
import { pkgPath } from './path';

const stayFile = ['package.json', 'README.md'];

const delPath = async (path: string) => {
  let files: string[] = [];

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);

    files.forEach(async (file) => {
      const curPath = resolve(path, file as string);

      if (fs.statSync(curPath).isDirectory()) {
        if (file !== 'node_modules') await delPath(curPath);
      } else {
        if (!stayFile.includes(file as string)) {
          fs.unlinkSync(curPath);
        }
      }
    });

    if (path !== `${pkgPath}/mholos-ui`) {
      fs.rmdirSync(path);
    }
  }
};

export default delPath;
