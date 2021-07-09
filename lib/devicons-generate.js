const _ = require('lodash');
const faker = require('faker');
const icons = require('./devicons-map');
const { parser } = require('args-command-parser');

const generate = ({num = 10, batchOutput = false}) => {
  let i = num;
  let output = "";
  for (i; i > 0; i--) {
    const isRandom= _.random(1, 5) === 5;
    let filePath = '';
    if (isRandom) {
      filePath = faker.system.filePath();
    } else {
      const iconKey = _.keys(icons)[_.random(0, _.keys(icons).length - 1)];
      const icon = icons[iconKey];
      if (icon.type === 'ext') {
        filePath = `${faker.system.directoryPath()}/${faker.system.fileName().replace(/\..+$/, '')}.${iconKey}`;
      } else {
        filePath = `${faker.system.directoryPath()}/${iconKey}`;
      }
    }
    if (!batchOutput) {
      console.log(filePath);
    } else {
      output += `${filePath}\n`;
    }
  }
  console.log(output);
};
const args = parser(process.argv).data.shortSwitches;
generate(args);
