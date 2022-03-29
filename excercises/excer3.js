"use strict";

function getFiles(srcdir) {
  let files = [];
  try {
    if (!fs.existsSync(srcdir)) {
      throw Error(`No dir exists with given name:${srcdir}...`);
    }
    if (fs.readdirSync(srcdir).length < 1) {
      throw Error(`No file exists in given dir:${srcdir}...`);
    }
    fs.readdirSync(srcdir).forEach((file) => {
      files.push(file);
    });
  } catch (err) {
    throw Error(`Error while getting files from: ${srcdir}, ${err}`);
  }
  return files;
}
