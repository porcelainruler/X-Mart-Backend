module.exports.logError = (category, file, line, err) => {
  console.log(`${category} ----- ${file}:${line}   ${err}`);
};
