const { readdirSync, readFileSync, writeFileSync } = require('fs')

const COMPONENTS_DIR = 'src/components'

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

getDirectories(COMPONENTS_DIR).forEach((dir) => {
  const styleFile = readFileSync(`${COMPONENTS_DIR}/${dir}/style.module.css`, 'utf8')
  writeFileSync(`lib/cjs/${dir}/style.module.css`, styleFile)
  writeFileSync(`lib/esm/${dir}/style.module.css`, styleFile)
})

console.log('copied all styles files')
