const { readdirSync, readFileSync, writeFileSync } = require('fs');

const COMPONENTS_DIR = 'src/components';

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

getDirectories(COMPONENTS_DIR).forEach((dir) => {
  if (dir !== 'types') {
    const styleFile = readFileSync(
      `${COMPONENTS_DIR}/${dir}/style.module.css`,
      'utf8'
    );
    writeFileSync(
      `lib/cjs/${COMPONENTS_DIR}/${dir}/style.module.css`,
      styleFile
    );
  }
});

console.log('copied all styles files');
