// "deep-extend": "^0.6.0",
//   "ini": "~1.3.0",
//   "minimist": "^1.2.0",
// "strip-json-comments": "~2.0.1"
const { join } = require('path');
const deepExtend = require('deep-extend');
const cc = require('./rc.utils');

const etc = '/etc';
const win = process.platform === "win32";
const home = win
  ? process.env.USERPROFILE
  : process.env.HOME;

module.exports = function(name, defaults, argv, parse) {
  if (typeof name !== 'string')
    throw new Error('rc(name): name *must* be string');
  if (!argv)
    argv = require('minimist')(process.argv.slice(2));
  defaults = (
    typeof defaults === 'string'
      ? cc.json(defaults) : defaults
  ) || {};

  parse = parse || cc.parse;

  const env = cc.env(`${name}_`);

  const configs = [defaults];
  const configFiles = [];
  function addConfigFile(file) {
    if (configFiles.indexOf(file) >= 0) return;
    const fileConfig = cc.file(file);
    if (fileConfig) {
      configs.push(parse(fileConfig));
      configFiles.push(file);
    }
  }

  // which files do we look at?
  if (!win)
    [join(etc, name, 'config'),
    join(etc, `${name}rc`)].forEach(addConfigFile);
  if (home)
    [join(home, '.config', name, 'config'),
    join(home, '.config', name),
    join(home, `.${name}`, 'config'),
    join(home, `.${name}rc`)].forEach(addConfigFile);

  addConfigFile(cc.find(`.${name}rc`));

  if (env.config) addConfigFile(env.config);
  if (argv.config) addConfigFile(argv.config);

  return deepExtend.apply(null, configs.concat([
    env,
    argv,
    configFiles.length ? { configs: configFiles, config: configFiles[configFiles.length - 1] } : undefined,
  ]));
};
