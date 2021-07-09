const { attachDevIcons } = require('./devicons');

describe('devicons.js', () => {

  // ["favicon.ico"]:    { icon: "", color: "#cbcb41", name: "Favicon" },
  it('Should return correct icon for exact file match', () => {
    const res = attachDevIcons(['favicon.ico']);
    expect(res[0]).to.be.an('object').with.keys(['name', 'color', 'icon', 'file']);
    expect(res[0].name).to.equal('Favicon');

  });
  it('Should return correct icon for extension match', () => {
    const res = attachDevIcons(['file.svg']);
    expect(res[0]).to.be.an('object').with.keys(['name', 'color', 'icon', 'file']);
    expect(res[0].name).to.equal('Svg');

  });
  it('Should return correct icon for nomatch', () => {
    const res = attachDevIcons(['file.zzz']);
    expect(res[0]).to.be.an('object').with.keys(['name', 'color', 'icon', 'file']);
  });
});
