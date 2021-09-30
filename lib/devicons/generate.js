const _ = require('lodash');
const faker = require('faker');
const { parser } = require('args-command-parser');
const icons = require('./devicons-map');

const generate = ({
  n = 10,
  batch = false,
  scores = false
}) => {
  let i = n;
  let output = "";
  for (i; i > 0; i--) {
    const isRandom = _.random(1, 5) === 5;
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
    let lineOut = `${filePath}\n`;
    if (scores) {
      const score = _.random(0, 500 * 1000) / 1000;
      const rightPad = ' '.repeat(7 - score.toString().length);
      lineOut = `${score}${rightPad} ${lineOut}`;
    }

    if (!batch) {
      process.stdout.write(lineOut);
    } else {
      output += lineOut;
    }
  }
  process.stdout.write(output);
  console.log(output);
};

const args = parser(process.argv).data.shortSwitches;

args.scores = true;

generate(args);
