
const { spawn } = require('child_process')
const sourceQuery = ([name, cmd, ...args]) => new Promise(((resolve, reject) => {
  console.log("Spawning", cmd);
  const child = spawn(`${cmd}`, args)
  let output = '';
  child.stdout.on('data', function(data) {
    output += data.toString().trim();
  });
  child.on('error', function(err) {
    console.log(`err ${cmd}:`, pe.render(err));
    reject(err, output);
  });
  child.stderr.on('data', function(data) {
    console.log(`stderr ${cmd}: ` + data);
    reject(data, output);
  });
  child.on('close', function(/* code */) {
    resolve([name, output.split('\n')]);
  });
}));

module.exports = { sourceQuery };
