/* prettier-ignore */
const extensions = {
  'cc':           '',
  'clj':          '',
  'cljc':         '',
  'coffee':       '',
  'conf':         '',
  'cp':           '',
  'cpp':          '',
  'cs':           '',
  'csh':          '',
  'css':          '',
  'cxx':          '',
  'd':            '',
  'dart':         '',
  'db':           '',
  'diff':         '',
  'dump':         '',
  'edn':          '',
  'eex':          '',
  'ejs':          '',
  'erl':          '',
  'ex':           '',
  'exs':          '',
  'f#':           '',
  'fish':         '',
  'fs':           '',
  'fsi':          '',
  'fsscript':     '',
  'fsx':          '',
  'gif':          '',
  'go':           '',
  'h':            '',
  'haml':         '',
  'hbs':          '',
  'hh':           '',
  'hpp':          '',
  'hrl':          '',
  'hs':           '',
  'htm':          '',
  'html':         '',
  'hxx':          '',
  'ico':          '',
  'ini':          '',
  'java':         '',
  'jl':           '',
  'jpeg':         '',
  'jpg':          '',
  'js':           '',
  'json':         '',
  'jsx':          '',
  'ksh':          '',
  'leex':         '',
  'less':         '',
  'lhs':          '',
  'lua':          '',
  'markdown':     '',
  'md':           '',
  'mdx':          '',
  'mjs':          '',
  'ml':           'λ',
  'mli':          'λ',
  'mustache':     '',
  'nix':          '',
  'php':          '',
  'pl':           '',
  'pm':           '',
  'png':          '',
  'pp':           '',
  'ps1':          '',
  'psb':          '',
  'psd':          '',
  'py':           '',
  'pyc':          '',
  'pyd':          '',
  'pyo':          '',
  'r':            'ﳒ',
  'rake':         '',
  'rb':           '',
  'rlib':         '',
  'rmd':          '',
  'rproj':        '鉶',
  'rs':           '',
  'rss':          '',
  'sass':         '',
  'scala':        '',
  'scss':         '',
  'sh':           '',
  'slim':         '',
};

const exactMatches = {
  'exact-match-case-sensitive-1.txt': '1',
  'exact-match-case-sensitive-2': '2',
  'gruntfile.coffee':   '',
  'gruntfile.js':       '',
  'gruntfile.ls':       '',
  'gulpfile.coffee':    '',
  'gulpfile.js':        '',
  'gulpfile.ls':        '',
  'mix.lock':           '',
  'dropbox':            '',
  '.ds_store':          '',
  '.gitconfig':         '',
  '.gitignore':         '',
  '.gitattributes':     '',
  '.gitlab-ci.yml':     '',
  '.bashrc':            '',
  '.zshrc':             '',
  '.zshenv':            '',
  '.bashprofile':       '',
  'favicon.ico':        '',
  'license':            '',
  'node_modules':       '',
  'react.jsx':          '',
  'procfile':           '',
  'dockerfile':         '',
  'docker-compose.yml': '',
  'rakefile':           '',
  'config.ru':          '',
  'gemfile':            '',
  'makefile':           '',
  'cmakelists.txt':     ''
};

const patternMatches = {
  '.*jquery.*.js$':       '',
  '.*angular.*.js$':      '',
  '.*backbone.*.js$':     '',
  '.*require.*.js$':      '',
  '.*materialize.*.js$':  '',
  '.*materialize.*.css$': '',
  '.*mootools.*.js$':     '',
  'Vagrantfile$':         ''
};


/* eslint-disable no-useless-computed-key */
const icons = {
  [".babelrc"]: { icon: "ﬥ", color: "#cbcb41", name: "Babelrc", type: 'file' },
  [".bashprofile"]: { icon: "", color: "#89e051", name: "BashProfile", type: 'file' },
  [".bashrc"]: { icon: "", color: "#89e051", name: "Bashrc", type: 'file' },
  [".ds_store"]: { icon: "", color: "#41535b", name: "DsStore", type: 'file' },
  [".gitattributes"]: { icon: "", color: "#41535b", name: "GitAttributes", type: 'file' },
  [".gitconfig"]: { icon: "", color: "#41535b", name: "GitConfig", type: 'file' },
  [".gitignore"]: { icon: "", color: "#41535b", name: "GitIgnore", type: 'file' },
  [".gitlab-ci.yml"]: { icon: "", color: "#e24329", name: "GitlabCI", type: 'file' },
  [".gitmodules"]: { icon: "", color: "#41535b", name: "GitModules", type: 'file' },
  [".gvimrc"]: { icon: "", color: "#019833", name: "Gvimrc", type: 'file' },
  [".npmignore"]: { icon: "", color: "#E8274B", name: "NPMIgnore", type: 'file' },
  [".settings.json"]: { icon: "", color: "#854CC7", name: "SettingsJson", type: 'file' },
  [".vimrc"]: { icon: "", color: "#019833", name: "Vimrc", type: 'file' },
  [".zprofile"]: { icon: "", color: "#89e051", name: "Zshprofile", type: 'file' },
  [".zshenv"]: { icon: "", color: "#89e051", name: "Zshenv", type: 'file' },
  [".zshrc"]: { icon: "", color: "#89e051", name: "Zshrc", type: 'file' },
  ["CMakeLists.txt"]: { icon: "", color: "#6d8086", name: "CMakeLists", type: 'file' },
  ["COMMIT_EDITMSG"]: { icon: "", color: "#41535b", name: "GitCommit", type: 'file' },
  ["COPYING"]: { icon: "", color: "#cbcb41", name: "License", type: 'file' },
  ["COPYING.LESSER"]: { icon: "", color: "#cbcb41", name: "License", type: 'file' },
  ["Dockerfile"]: { icon: "", color: "#384d54", name: "Dockerfile", type: 'file' },
  ["Gemfile$"]: { icon: "", color: "#701516", name: "Gemfile", type: 'file' },
  ["LICENSE"]: { icon: "", color: "#d0bf41", name: "License", type: 'file' },
  ["Makefile"]: { icon: "", color: "#6d8086", name: "Makefile", type: 'file' },
  ["Procfile"]: { icon: "", color: "#a074c4", name: "Procfile", type: 'file' },
  ["R"]: { icon: "ﳒ", color: "#358a5b", name: "R", type: 'ext' },
  ["Rakefile"]: { icon: "", color: "#701516", name: "Rakefile", type: 'file' },
  ["Rmd"]: { icon: "", color: "#519aba", name: "Rmd", type: 'ext' },
  ["Vagrantfile$"]: { icon: "", color: "#1563FF", name: "Vagrantfile", type: 'file' },
  ["_gvimrc"]: { icon: "", color: "#019833", name: "Gvimrc", type: 'file' },
  ["_vimrc"]: { icon: "", color: "#019833", name: "Vimrc", type: 'file' },
  ["ai"]: { icon: "", color: "#cbcb41", name: "Ai", type: 'ext' },
  ["awk"]: { icon: "", color: "#4d5a5e", name: "Awk", type: 'ext' },
  ["bash"]: { icon: "", color: "#89e051", name: "Bash", type: 'ext' },
  ["bat"]: { icon: "", color: "#C1F12E", name: "Bat", type: 'ext' },
  ["bmp"]: { icon: "", color: "#a074c4", name: "Bmp", type: 'ext' },
  ["c"]: { icon: "", color: "#599eff", name: "C", type: 'ext' },
  ["c++"]: { icon: "", color: "#f34b7d", name: "CPlusPlus", type: 'ext' },
  ["cc"]: { icon: "", color: "#f34b7d", name: "CPlusPlus", type: 'ext' },
  ["cfg"]: { icon: "", color: "#ECECEC", name: "Configuration", type: 'ext' },
  ["clj"]: { icon: "", color: "#8dc149", name: "Clojure", type: 'ext' },
  ["cljc"]: { icon: "", color: "#8dc149", name: "ClojureC", type: 'ext' },
  ["cljs"]: { icon: "", color: "#519aba", name: "ClojureJS", type: 'ext' },
  ["cmake"]: { icon: "", color: "#6d8086", name: "CMake", type: 'ext' },
  ["coffee"]: { icon: "", color: "#cbcb41", name: "Coffee", type: 'ext' },
  ["conf"]: { icon: "", color: "#6d8086", name: "Conf", type: 'ext' },
  ["config.ru"]: { icon: "", color: "#701516", name: "ConfigRu", type: 'file' },
  ["cp"]: { icon: "", color: "#519aba", name: "Cp", type: 'ext' },
  ["cpp"]: { icon: "", color: "#519aba", name: "Cpp", type: 'ext' },
  ["cs"]: { icon: "", color: "#596706", name: "Cs", type: 'ext' },
  ["csh"]: { icon: "", color: "#4d5a5e", name: "Csh", type: 'ext' },
  ["cson"]: { icon: "", color: "#cbcb41", name: "Cson", type: 'ext' },
  ["css"]: { icon: "", color: "#563d7c", name: "Css", type: 'ext' },
  ["cxx"]: { icon: "", color: "#519aba", name: "Cxx", type: 'ext' },
  ["d"]: { icon: "", color: "#427819", name: "D", type: 'ext' },
  ["dart"]: { icon: "", color: "#03589C", name: "Dart", type: 'ext' },
  ["db"]: { icon: "", color: "#dad8d8", name: "Db", type: 'ext' },
  ["desktop"]: { icon: "", color: "#563d7c", name: "DesktopEntry", type: 'ext' },
  ["diff"]: { icon: "", color: "#41535b", name: "Diff", type: 'ext' },
  ["doc"]: { icon: "", color: "#185abd", name: "Doc", type: 'ext' },
  ["dropbox"]: { icon: "", color: "#0061FE", name: "Dropbox", type: 'folder' },
  ["dump"]: { icon: "", color: "#dad8d8", name: "Dump", type: 'ext' },
  ["edn"]: { icon: "", color: "#519aba", name: "Edn", type: 'ext' },
  ["eex"]: { icon: "", color: "#a074c4", name: "Eex", type: 'ext' },
  ["ejs"]: { icon: "", color: "#cbcb41", name: "Ejs", type: 'ext' },
  ["elm"]: { icon: "", color: "#519aba", name: "Elm", type: 'ext' },
  ["erb"]: { icon: "", color: "#701516", name: "Erb", type: 'ext' },
  ["erl"]: { icon: "", color: "#B83998", name: "Erl", type: 'ext' },
  ["ex"]: { icon: "", color: "#a074c4", name: "Ex", type: 'ext' },
  ["exs"]: { icon: "", color: "#a074c4", name: "Exs", type: 'ext' },
  ["f#"]: { icon: "", color: "#519aba", name: "Fsharp", type: 'ext' },
  ["favicon.ico"]: { icon: "", color: "#cbcb41", name: "Favicon", type: 'file' },
  ["fish"]: { icon: "", color: "#4d5a5e", name: "Fish", type: 'ext' },
  ["fs"]: { icon: "", color: "#519aba", name: "Fs", type: 'ext' },
  ["fsi"]: { icon: "", color: "#519aba", name: "Fsi", type: 'ext' },
  ["fsscript"]: { icon: "", color: "#519aba", name: "Fsscript", type: 'ext' },
  ["fsx"]: { icon: "", color: "#519aba", name: "Fsx", type: 'ext' },
  ["gd"]: { icon: "", color: "#6d8086", name: "GDScript", type: 'ext' },
  ["gemspec"]: { icon: "", color: "#701516", name: "Gemspec", type: 'ext' },
  ["gif"]: { icon: "", color: "#a074c4", name: "Gif", type: 'ext' },
  ["git"]: { icon: "", color: "#F14C28", name: "GitLogo", type: 'folder' },
  ["glb"]: { icon: "", color: "#FFB13B", name: "BinaryGLTF", type: 'ext' },
  ["go"]: { icon: "", color: "#519aba", name: "Go", type: 'ext' },
  ["godot"]: { icon: "", color: "#6d8086", name: "GodotProject", type: 'ext' },
  ["gruntfile"]: { icon: "", color: "#e37933", name: "Gruntfile", type: 'file' },
  ["gulpfile"]: { icon: "", color: "#cc3e44", name: "Gulpfile", type: 'file' },
  ["h"]: { icon: "", color: "#a074c4", name: "H", type: 'ext' },
  ["haml"]: { icon: "", color: "#eaeae1", name: "Haml", type: 'ext' },
  ["hbs"]: { icon: "", color: "#f0772b", name: "Hbs", type: 'ext' },
  ["hh"]: { icon: "", color: "#a074c4", name: "Hh", type: 'ext' },
  ["hpp"]: { icon: "", color: "#a074c4", name: "Hpp", type: 'ext' },
  ["hrl"]: { icon: "", color: "#B83998", name: "Hrl", type: 'ext' },
  ["hs"]: { icon: "", color: "#a074c4", name: "Hs", type: 'ext' },
  ["htm"]: { icon: "", color: "#e34c26", name: "Htm", type: 'ext' },
  ["html"]: { icon: "", color: "#e34c26", name: "Html", type: 'ext' },
  ["hxx"]: { icon: "", color: "#a074c4", name: "Hxx", type: 'ext' },
  ["ico"]: { icon: "", color: "#cbcb41", name: "Ico", type: 'ext' },
  ["import"]: { icon: "", color: "#ECECEC", name: "ImportConfiguration" },
  ["ini"]: { icon: "", color: "#6d8086", name: "Ini", type: 'ext' },
  ["java"]: { icon: "", color: "#cc3e44", name: "Java", type: 'ext' },
  ["jl"]: { icon: "", color: "#a270ba", name: "Jl", type: 'ext' },
  ["jpeg"]: { icon: "", color: "#a074c4", name: "Jpeg", type: 'ext' },
  ["jpg"]: { icon: "", color: "#a074c4", name: "Jpg", type: 'ext' },
  ["js"]: { icon: "", color: "#cbcb41", name: "Js", type: 'ext' },
  ["json"]: { icon: "", color: "#cbcb41", name: "Json", type: 'ext' },
  ["jsx"]: { icon: "", color: "#519aba", name: "Jsx", type: 'ext' },
  ["ksh"]: { icon: "", color: "#4d5a5e", name: "Ksh", type: 'ext' },
  ["kt"]: { icon: "𝙆", color: "#F88A02", name: "Kotlin", type: 'ext' },
  ["leex"]: { icon: "", color: "#a074c4", name: "Leex", type: 'ext' },
  ["less"]: { icon: "", color: "#563d7c", name: "Less", type: 'ext' },
  ["lhs"]: { icon: "", color: "#a074c4", name: "Lhs", type: 'ext' },
  ["license.md"]: { icon: "", color: "#cbcb41", name: "License", type: 'file' },
  ["lua"]: { icon: "", color: "#51a0cf", name: "Lua", type: 'ext' },
  ["markdown"]: { icon: "", color: "#519aba", name: "Markdown", type: 'ext' },
  ["material"]: { icon: "", color: "#B83998", name: "Material", type: 'ext' },
  ["md"]: { icon: "", color: "#519aba", name: "Md", type: 'ext' },
  ["mdx"]: { icon: "", color: "#519aba", name: "Mdx", type: 'ext' },
  ['mint'] : { icon : "", color :'#87c095', name : "Mint" },
  ["mix.lock"]: { icon: "", color: "#a074c4", name: "MixLock", type: 'file' },
  ["mjs"]: { icon: "", color: "#f1e05a", name: "Mjs", type: 'ext' },
  ["ml"]: { icon: "λ", color: "#e37933", name: "Ml", type: 'ext' },
  ["mli"]: { icon: "λ", color: "#e37933", name: "Mli", type: 'ext' },

  ["mp3"]: { icon: " ", color: "#404bad", name: "mp3", type: 'ext', double: true },
  ["m4a"]: { icon: " ", color: "#804b4d", name: "m4a", type: 'ext', double: true },
  ["flac"]: { icon: " ", color: "#408b8d", name: "flac", type: 'ext', double: true },
  ["wav"]: { icon: " ", color: "#605bfd", name: "wav", type: 'ext', double: true },

  ["mustache"]: { icon: "", color: "#e37933", name: "Mustache", type: 'ext' },
  ["nix"]: { icon: "", color: "#7ebae4", name: "Nix", type: 'ext' },
  ["node_modules"]: { icon: "", color: "#E8274B", name: "NodeModules", type: 'folder' },
  ["opus"]: { icon: "", color: "#F88A02", name: "OPUS", type: 'ext' },
  ["otf"]: { icon: "", color: "#ECECEC", name: "OpenTypeFont", type: 'ext' },
  ["pck"]: { icon: "", color: "#6d8086", name: "PackedResource", type: 'ext' },
  ["pdf"]: { icon: "", color: "#b30b00", name: "Pdf", type: 'ext' },
  ["php"]: { icon: "", color: "#a074c4", name: "Php", type: 'ext' },
  ["pl"]: { icon: "", color: "#519aba", name: "Pl", type: 'ext' },
  ["pm"]: { icon: "", color: "#519aba", name: "Pm", type: 'ext' },
  ["png"]: { icon: "", color: "#a074c4", name: "Png", type: 'ext' },
  ["pp"]: { icon: "", color: "#302B6D", name: "Pp", type: 'ext' },
  ["ppt"]: { icon: "", color: "#cb4a32", name: "Ppt", type: 'ext' },
  ["pro"] : { icon : "", color : "#e4b854", name : "Prolog" },
  ["ps1"]: { icon: "", color: "#4d5a5e", name: "PromptPs1", type: 'ext' },
  ["psb"]: { icon: "", color: "#519aba", name: "Psb", type: 'ext' },
  ["psd"]: { icon: "", color: "#519aba", name: "Psd", type: 'ext' },
  ["py"]: { icon: "", color: "#3572A5", name: "Py", type: 'ext' },
  ["pyc"]: { icon: "", color: "#519aba", name: "Pyc", type: 'ext' },
  ["pyd"]: { icon: "", color: "#519aba", name: "Pyd", type: 'ext', },
  ["pyo"]: { icon: "", color: "#519aba", name: "Pyo", type: 'ext' },
  ["r"]: { icon: "ﳒ", color: "#358a5b", name: "R", type: 'ext' },
  ["rake"]: { icon: "", color: "#701516", name: "Rake", type: 'file' },
  ["rb"]: { icon: "", color: "#701516", name: "Rb", type: 'ext' },
  ["rlib"]: { icon: "", color: "#dea584", name: "Rlib", type: 'ext' },
  ["rmd"]: { icon: "", color: "#519aba", name: "Rmd", type: 'ext' },
  ["rproj"]: { icon: "鉶", color: "#358a5b", name: "Rproj", type: 'ext', double: true },
  ["rs"]: { icon: "", color: "#dea584", name: "Rs", type: 'ext' },
  ["rss"]: { icon: "", color: "#FB9D3B", name: "Rss", type: 'ext' },
  ["sass"]: { icon: "", color: "#f55385", name: "Sass", type: 'ext' },
  ["scala"]: { icon: "", color: "#cc3e44", name: "Scala", type: 'ext' },
  ["scss"]: { icon: "", color: "#f55385", name: "Scss", type: 'ext' },
  ["sh"]: { icon: "", color: "#4d7afe", name: "Sh", type: 'ext' },
  ["slim"]: { icon: "", color: "#e34c26", name: "Slim", type: 'ext' },
  ["sln"]: { icon: "", color: "#854CC7", name: "Sln", type: 'ext' },
  ["sql"]: { icon: "", color: "#dad8d8", name: "Sql", type: 'ext' },
  ["styl"]: { icon: "", color: "#8dc149", name: "Styl", type: 'ext' },
  ["suo"]: { icon: "", color: "#854CC7", name: "Suo", type: 'ext' },
  ["svelte"]: { icon: "", color: "#ff3e00", name: "Svelte", type: 'ext' },
  ["svg"]: { icon: "ﰟ", color: "#FFB13B", name: "Svg", type: 'ext' },
  ["swift"]: { icon: "", color: "#e37933", name: "Swift", type: 'ext' },
  ["t"]: { icon: "", color: "#519aba", name: "Tor", type: 'ext' },
  ["terminal"]: { icon: "", color: "#31B53E", name: "Terminal", type: 'ext' },
  ["tex"]: { icon: "ﭨ", color: "#3D6117", name: "Tex", type: 'ext' },
  ["toml"]: { icon: "", color: "#6d8086", name: "Toml", type: 'ext' },
  ["tres"]: { icon: "", color: "#cbcb41", name: "TextResource", type: 'ext' },
  ["ts"]: { icon: "", color: "#519aba", name: "Ts", type: 'ext' },
  ["tscn"]: { icon: "", color: "#a074c4", name: "TextScene", type: 'ext' },
  ["tsx"]: { icon: "", color: "#519aba", name: "Tsx", type: 'ext' },
  ["twig"]: { icon: "", color: "#8dc149", name: "Twig", type: 'ext' },
  ["vim"]: { icon: "", color: "#019833", name: "Vim", type: 'ext' },
  ["vue"]: { icon: "﵂", color: "#8dc149", name: "Vue", type: 'ext' },
  ["webmanifest"]: { icon: "", color: "#f1e05a", name: "Webmanifest", type: 'file' },
  ["webp"]: { icon: "", color: "#a074c4", name: "Webp", type: 'ext' },
  ["webpack"]: { icon: "ﰩ", color: "#519aba", name: "Webpack", type: 'folder' },
  ["xcplayground"]: { icon: "", color: "#e37933", name: "XcPlayground", },
  ["xls"]: { icon: "", color: "#207245", name: "Xls", type: 'ext' },
  ["xml"]: { icon: "謹", color: "#e37933", name: "Xml", type: 'ext', double: true },
  ["xul"]: { icon: "", color: "#e37933", name: "Xul", type: 'ext' },
  ["yaml"]: { icon: "", color: "#6d8086", name: "Yaml", type: 'ext' },
  ["yml"]: { icon: "", color: "#6d8086", name: "Yml", type: 'ext' },
  ["zig"]:  { icon : '', color : '#f69a1b', name : 'Zig', },
  ["zsh"]: { icon: "", color: "#89e051", name: "Zsh", type: 'ext' },
  ["sty"]: { icon: "ﭨ", color: "#EE6E73", name: "Tex Style", type: 'ext' },
  ["tfm"]: { icon: "ﭨ" , color: "#0E5E43", name: "Tex Font Matric", type: 'ext' },
  ["mf"]: { icon: "" , color: "#4E7Ef3", name: "Metafont", type: 'ext' },
  ["dic"]: { icon: " "  , color: "#cbcb41", name: "Metafont", type: 'ext', double: true },
  ["txt"]: { icon: " "  , color: "#407b81", name: "Text file", type: 'ext', double: true },
  ["Gemfile"]: { icon: " "  , color: "#a03b31", name: "Ruby gemfile", type: 'ext', double: true },
  ["gz"]: { icon: ""  , color: "#603b81", name: "Gzip", type: 'ext'},
  ["zip"]: { icon: ""  , color: "#905b61", name: "Zip", type: 'ext'},
};


// \ '.*jquery.*\.js$'       : '',
// \ '.*angular.*\.js$'      : '',
// \ '.*backbone.*\.js$'     : '',
// \ '.*require.*\.js$'      : '',
// \ '.*materialize.*\.js$'  : '',
// \ '.*materialize.*\.css$' : '',
// \ '.*mootools.*\.js$'     : '',
// \ '.*vimrc.*'             : '',
// \ 'Vagrantfile$'          : ''

// -- jquery = {
// --   icon = "",
// --   color = "#1B75BB"
// -- },
// -- angular = {
// --   icon = "",
// --   color = "#E23237"
// -- },
// -- backbone = {
// --   icon = "",
// --   color = "#0071B5"
// -- },
// -- requirejs = {
// --   icon = "",
// --   color = "#F44A41"
// -- },
// -- materialize = {
// --   icon = "",
// --   color = "#EE6E73"
// -- },
// -- mootools = {
// --   icon = "",
// --   color = "#ECECEC"
// -- },
// -- puppet = {
// --   icon = "",
// --   color = "#cbcb41"
// -- },
module.exports = icons;

// (fonts) map enc
// zwc, completions

//                                            
//                  


// htf host that file
// list  
// preinst 
// postinst 
// prerm 
// postrm 
// deb 
// sng 
// sha1 
// md5 
// md5sum 
// ri 
// key 
// log 
// crt 
// npm 
// nodejs 
// o 
// so 
// Kconfig 

// nf-oct-file_symlink_directory                 
// nf-oct-file_symlink_file                      
// nf-oct-file_zip                               
// nf-fa-file_archive_o                                      

// VIDEO
// WebM	.webm	Matroska	VP8, VP9, AV1	Vorbis, Opus	Royalty-free format created for HTML5 video.
// Matroska	.mkv	Matroska	any	any
// Flash Video (FLV)	.flv	FLV	VP6, Sorenson Spark, Screen video, Screen video 2, H.264	MP3, ADPCM, Nellymoser, Speex, AAC	Use of the H.264 and AAC compression formats in the FLV file format has some limitations and authors of Flash Player strongly encourage everyone to embrace the new standard F4V file format[2] de facto standard for web-based streaming video (over RTMP).
// F4V	.flv	MPEG-4 Part 12	H.264	MP3, AAC	Replacement for FLV.
// Vob	.vob	VOB	H.262/MPEG-2 Part 2 or MPEG-1 Part 2	PCM, DTS, MPEG-1, Audio Layer II (MP2), or Dolby Digital (AC-3)	Files in VOB format have .vob filename extension and are typically stored in the VIDEO_TS folder at the root of a DVD. The VOB format is based on the MPEG program stream format.
// Ogg Video	.ogv, .ogg	Ogg	Theora, Dirac	Vorbis, FLAC
// Dirac	.drc	?	Dirac	?
// GIF	.gif	N/A	N/A	none	Simple animation, inefficient compression, no sound, widely supported
// Video alternative to GIF	.gifv	HTML	any	none	Not standardized, and not a real video file in the classical meaning since it merely references the real video file (e.g. a .webm file), which has to exist separately elsewhere. A .gifv "file" is simply a HTML webpage which includes a HTML5 video tag, where the video has no sound. As there were large communities online which create art using the medium of short soundless videos in GIF format, GIFV was created as a functionally similar replacement with vastly smaller filesizes than the inefficient GIF format.
// Multiple-image Network Graphics	.mng	N/A	N/A	none	Inefficient, not widely used.
// AVI	.avi	AVI	any	any	Uses RIFF
// MPEG Transport Stream	.MTS, .M2TS, .TS	AVCHD	AVCHD (MPEG-4 / H.264 )	Dolby AC-3 or uncompressed linear PCM	The standard video format used by many Sony and Panasonic HD camcorders. It is also used for storing high definition video on Blu-ray discs.
// QuickTime File Format	.mov, .qt	QuickTime	many[3]	AAC, MP3, others[3]
// Windows Media Video	.wmv	ASF	Windows Media Video, Windows Media Video Screen, Windows Media Video Image	Windows Media Audio, Sipro ACELP.net
// Raw video format	.yuv	Further documentation needed	Doesn't apply	Doesn't apply	Supports all resolutions, sampling structures, and frame rates
// RealMedia (RM)	.rm	RealMedia	RealVideo	RealAudio	Made for RealPlayer
// RealMedia Variable Bitrate (RMVB)	.rmvb	RealMedia Variable Bitrate	RealVideo	RealAudio	Made for RealPlayer
// VivoActive (VIV)	.viv	VIV	based upon H.263 video	G.723 ADPCM audio (not the G.723.1 speech codec)	Made for VivoActive Player
// Advanced Systems Format (ASF)	.asf	ASF	any	any
// AMV video format	.amv	Modified version of AVI[4]	Variant of Motion JPEG	Variant of IMA, ADPCM	Proprietary video file format produced for MP4 players and S1 MP3 players with video playback
// MPEG-4 Part 14 (MP4)	.mp4, .m4p (with DRM), .m4v	MPEG-4 Part 12	H.264, H.265, MPEG-4 Part 2, MPEG-2, MPEG-1	Advanced Audio Coding, MP3, others
// MPEG-1	.mpg, .mp2, .mpeg, .mpe, .mpv	MPEG-1 part 1	MPEG-1 part 2	MPEG-1 Audio Layer I, MPEG-1 Audio Layer I, MPEG-1 Audio Layer III (MP3)	Old, but very widely used due to installed base.
// MPEG-2 – Video	.mpg, .mpeg, .m2v	?	H.262	AAC, MP3, MPEG-2 Part 3, others
// M4V	.m4v	MPEG-4 Part 12	H.264	AAC, Dolby Digital	Developed by Apple, used in iTunes. Very similar to MP4 format, but may optionally have DRM.
// SVI	.svi	MPEG-4 utilising a special header	?	?	Samsung video format for portable players
// 3GPP	.3gp	MPEG-4 Part 12	MPEG-4 Part 2, H.263, H.264	AMR-NB, AMR-WB, AMR-WB+, AAC-LC, HE-AAC v1 or Enhanced aacPlus (HE-AAC v2)	Common video format for cell phones
// 3GPP2	.3g2	MPEG-4 Part 12	MPEG-4 Part 2, H.263, H.264	AMR-NB, AMR-WB, AMR-WB+, AAC-LC, HE-AAC v1 or Enhanced aacPlus (HE-AAC v2), EVRC, SMV or VMR-WB	Common video format for cell phones
// Material Exchange Format (MXF)	.mxf	MXF	?	?
// ROQ	.roq	?	?	?	used by Quake 3[5]
// Nullsoft Streaming Video (NSV)	.nsv	NSV	?	?	For streaming video content over the Internet
// Flash Video (FLV)	.flv .f4v .f4p .f4a .f4b	Audio, video, text, data	Adobe Flash Platform	SWF, F4V, ISO base media file format	Developed by the Adobe Flash Platform

// AUDIO
//   
// .3gp		Multimedia container format can contain proprietary formats as AMR, AMR-WB or AMR-WB+, but also some open formats
// .aa	Audible (Amazon.com)	A low-bitrate audiobook container format with DRM, containing audio encoded as either MP3 or the ACELP speech codec.
// .aac		The Advanced Audio Coding format is based on the MPEG-2 and MPEG-4 standards. AAC files are usually ADTS or ADIF containers.
// .aax	Audible (Amazon.com)	An Audiobook format, which is a variable-bitrate (allowing high quality) M4B file encrypted with DRM. MPB contains AAC or ALAC encoded audio in an MPEG-4 container. (More details below.)
// .act		ACT is a lossy ADPCM 8 kbit/s compressed audio format recorded by most Chinese MP3 and MP4 players with a recording function, and voice recorders
// .aiff	Apple	A standard uncompressed CD-quality, audio file format used by Apple. Established 3 years prior to Microsoft's uncompressed version wav.
// .alac	Apple	An audio coding format developed by Apple Inc. for lossless data compression of digital music.
// .amr		AMR-NB audio, used primarily for speech.
// .ape	Matthew T. Ashland	Monkey's Audio lossless audio compression format.
// .au	Sun Microsystems	The standard audio file format used by Sun, Unix and Java. The audio in au files can be PCM or compressed with the μ-law, a-law or G729 codecs.
// .awb		AMR-WB audio, used primarily for speech, same as the ITU-T's G.722.2 specification.
// .dss	Olympus	DSS files are an Olympus proprietary format. It is a fairly old and poor codec. GSM or MP3 are generally preferred where the recorder allows. It allows additional data to be held in the file header.
// .dvf	Sony	A Sony proprietary format for compressed voice files; commonly used by Sony dictation recorders.
// .gsm		Designed for telephony use in Europe, gsm is a very practical format for telephone quality voice. It makes a good compromise between file size and quality. Note that wav files can also be encoded with the gsm codec.
// .iklax	iKlax	An iKlax Media proprietary format, the iKlax format is a multi-track digital audio format allowing various actions on musical data, for instance on mixing and volumes arrangements.
// .ivs	3D Solar UK Ltd	A proprietary version with Digital Rights Management developed by 3D Solar UK Ltd for use in music downloaded from their Tronme Music Store and interactive music and video player.
// .m4b		An Audiobook / podcast extension with AAC or ALAC encoded audio in an MPEG-4 container. Both M4A and M4B formats can contain metadata including chapter markers, images, and hyperlinks, but M4B allows "bookmarks" (remembering the last listening spot), whereas M4A does not.[7]
// .m4p	Apple	A version of AAC with proprietary Digital Rights Management developed by Apple for use in music downloaded from their iTunes Music Store and their music streaming service known as Apple Music.
// .mmf	Yamaha, Samsung	A Samsung audio format that is used in ringtones. Developed by Yamaha (SMAF stands for "Synthetic music Mobile Application Format", and is a multimedia data format invented by the Yamaha Corporation, .mmf file format).
// .mpc		Musepack or MPC (formerly known as MPEGplus, MPEG+ or MP+) is an open source lossy audio codec, specifically optimized for transparent compression of stereo audio at bitrates of 160–180 kbit/s.
// .msv	Sony	A Sony proprietary format for Memory Stick compressed voice files.
// .nmf	NICE	NICE Media Player audio file
// .ogg, .oga, .mogg	Xiph.Org Foundation	A free, open source container format supporting a variety of formats, the most popular of which is the audio format Vorbis. Vorbis offers compression similar to MP3 but is less popular. Mogg, the "Multi-Track-Single-Logical-Stream Ogg-Vorbis", is the multi-channel or multi-track Ogg file format.
// .opus	Internet Engineering Task Force	A lossy audio compression format developed by the Internet Engineering Task Force (IETF) and made especially suitable for interactive real-time applications over the Internet. As an open format standardised through RFC 6716, a reference implementation is provided under the 3-clause BSD license.
// .ra, .rm	RealNetworks	A RealAudio format designed for streaming audio over the Internet. The .ra format allows files to be stored in a self-contained fashion on a computer, with all of the audio data contained inside the file itself.
// .raw		A raw file can contain audio in any format but is usually used with PCM audio data. It is rarely used except for technical tests.
// .rf64		One successor to the Wav format, overcoming the 4GiB size limitation.
// .sln		Signed Linear PCM format used by Asterisk. Prior to v.10 the standard formats were 16-bit Signed Linear PCM sampled at 8 kHz and at 16 kHz. With v.10 many more sampling rates were added.[8]
// .tta		The True Audio, real-time lossless audio codec.
// .voc	Creative Technology	The file format consists of a 26-byte header and a series of subsequent data blocks containing the audio information
// .vox		The vox format most commonly uses the Dialogic ADPCM (Adaptive Differential Pulse Code Modulation) codec. Similar to other ADPCM formats, it compresses to 4-bits. Vox format files are similar to wave files except that the vox files contain no information about the file itself so the codec sample rate and number of channels must first be specified in order to play a vox file.
// .wma	Microsoft	Windows Media Audio format, created by Microsoft. Designed with Digital Rights Management (DRM) abilities for copy protection.
// .wv		Format for wavpack files.
// .webm		Royalty-free format created for HTML5 video.
// .8svx	Electronic Arts	The IFF-8SVX format for 8-bit sound samples, created by Electronic Arts in 1984 at the birth of the Amiga.
// .cda		Format for cda files for Radio.
// "acm", "wav", 'aiff', 'aac', 'ogg', 'wma', 'flac', 'mp4',
