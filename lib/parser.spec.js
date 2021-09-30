const { processLine } = require('./parser');
const defaultConfig = require('./defaultConfig');

describe('parser', () => {
  const config = {
    colors: defaultConfig.colors,
    idFile: true,
    showIcons: true,
    colorIcons: true,
    showScore: false,
    showDate: false,
    showSize: false,
    homeShortcut: false,
    // homeShortcut: "~",
  };
  const missingFiles = [
    '/opt/bin/eritrea_back_end_e_commerce.csh',
    '/var/spool/outdoors_synergy_purple.glb',
    '/var/fakedirectory'
  ];
  const files = [
    '/etc/apt/sorces.list',
    '/usr/bin',
    '/var/log/syslog',
    '/home/nicholas/package.json',
    '/home/nicholas/bin/asynctask.py',
    '/home/nicholas/bin/tty-yank.sh',
  ];
  const scoreFiles = [
    '2.36196    /home/nicholas/projects/fzfman/vendors/igit/commands/add.zsh',
    '2.36196    /home/nicholas/projects/fzfman/vendors/igit/commands/delete.zsh',
    '10.467     /home/nicholas/projects/sdcli/lib/tmp2.js',
    '1.06254    /home/nicholas/.config/i3/bin/launch-shell-scratchpad.sh',
    '1.07985    /home/nicholas/reference/zsh-zinit/zinit-configs/lmburns/.config/zsh/functions',
    '5.8407     /home/nicholas/.config/nvim-profiles/default/lua/colorschemes/themes/nord-orig/nord.vim',
    '9.91186    /home/nicholas/projects/fzfweb/package.json',
    '14.6602    /home/nicholas/resources/bin',
    '15         /home/nicholas/projects/personal/prettyfile',
    '15.9564    /home/nicholas/projects/fzfweb/.env',
    '24.7588    /home/nicholas/resources/bin/fzf-rsc/modules/fz-rg.previewer.sh',
    '25.1269    /home/nicholas/.config/nvim-profiles/default/lua/mappings/init.lua',
    '25.312     /home/nicholas/projects/fzfweb/lib/actions.js',
    '189.157    /home/nicholas/projects/sdcli/lib',
  ];

  const outputFiles = (override) => {
    it('missing files', () => {
      console.log("");
      missingFiles.map(file => processLine({ ...config, ...override } , file));
      expect(true).to.equal(true);
    });

    it('files', () => {
      console.log("");
      files.forEach(file => processLine({ ...config, ...override }, file))
      expect(true).to.equal(true);
    });

    it('score files', () => { console.log(""); scoreFiles.forEach(file => processLine({ ...config, ...override }, file))
      expect(true).to.equal(true);
    });
  }

  // describe('default config', () => outputFiles());
  // describe('with score', () => outputFiles({ showScore: true }));
  // describe('with size', () => outputFiles({ showSize: true }));
  // describe('with score and size', () => outputFiles({ showSize: true, showScore: true }));
  describe('with date', () => outputFiles({ homeShortcut: '~', showSize: true, showScore: true, showDate: true }));
});
