import delPath from "../utils/delpath";
import { series, parallel, src, dest } from 'gulp'
import { componentPath, pkgPath } from '../utils/path'
import less from 'gulp-less'
import autoprefixer from 'gulp-autoprefixer'
import run from "../utils/run";

export const removeDist = () => {
  return delPath(`${pkgPath}/mholos-ui`)
}

export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/mholos-ui/lib/src`))
    .pipe(dest(`${pkgPath}/mholos-ui/es/src`))
}

export const buildComponent = async () => {
  run('pnpm run build', componentPath)
}

export default series(async () => removeDist(), parallel(
  async () => buildStyle(),
  async () => buildComponent()
))