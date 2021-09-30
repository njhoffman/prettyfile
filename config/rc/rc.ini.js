const INI = require('ini');
const assert = require('assert');
const cc = require('../lib/utils');

function test(obj) {

  let _json; let _ini;
  const json = cc.parse(_json = JSON.stringify(obj));
  const ini = cc.parse(_ini = INI.stringify(obj));
  console.log(_ini, _json);
  assert.deepEqual(json, ini);
}


test({ hello: true });
