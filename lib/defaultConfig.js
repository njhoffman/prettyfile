const defaults = {
  colors: {
    pathDirectory: '#556789',
    pathFilename: '#4489bb',
    score: '#8864fc',
    directory: '#4d70aa',
    date: '#556789',
    size: '#957769',
    missing: '#334455',
  },
  output: 'fzf', // fzf, stdout
  force256: false,
  colorIcons: true,
  showIcons: true,
  idFile: false,
  showScore: false,
  showDate: false,
  showSize: false,
  homeShortcut: '~',
};

// 215390
module.exports = {
  ...defaults,
  // idFile: true,
  // showIcons: true,
  // colorIcons: true,
  // showScore: true,
  // showSize: false,
  // showDate: false
};

// import YAML from 'yaml'

// YAML.parse('3.14159')
// // 3.14159

// YAML.parse('[ true, false, maybe, null ]\n')
// // [ true, false, 'maybe', null ]

// const file = fs.readFileSync('./file.yml', 'utf8')
// YAML.parse(file)
// // { YAML:
// //   [ 'A human-readable data serialization language',
// //     'https://en.wikipedia.org/wiki/YAML' ],
// //   yaml:
// //   [ 'A complete JavaScript implementation',
// //     'https://www.npmjs.com/package/yaml' ] }
