const path = require('path');
const fs = require('fs');

const InsurCircleContract = path.resolve(__dirname, './build/contracts/InsurCircle.json');

const getSubContent = ({abi, bytecode, sourceMap, source, compiler, schemaVersion}) => ({abi, bytecode, sourceMap, source, compiler, schemaVersion})

const contractsContent = {
  InsurCircle: getSubContent(require(InsurCircleContract)),
}

fs.writeFileSync('./.exported.js', `module.exports = ${JSON.stringify(contractsContent)};`, 'utf-8');
