const fs = require('fs');
const path = require('path');
const chroma = require('chroma-js')

const _ = chroma;

const colors = {
  bg0: _('#1b1b1c'), 
  bg1: _('#212122'), 
  bg2: _('#252526'),
  bg3: _('#303031'), 
  bg4: _('#373738'),
  fg0: _('#d8d8d9'),
  border0: _('#cccccc').alpha(.135)
}

const getThemeColors = () => ({
  "editor.background": colors.bg0.hex(),
  "editor.foreground": colors.fg0.hex(),
  "menu.background": colors.bg1.hex(),
  "sideBar.background": colors.bg1.hex(),
  "activityBar.background": colors.bg1.hex(),
  "activityBar.border": colors.border0.hex(),
  "editorGroup.dropBackground": colors.bg3.hex(),
  "list.dropBackground": colors.bg3.hex(),
  "list.hoverBackground": colors.bg3.hex(),
  "list.inactiveSelectionBackground":colors.bg3.hex(),
  "sideBarSectionHeader.border": colors.border0.hex(),
  "tab.border": colors.bg0.hex(),
  "tab.inactiveBackground": colors.bg2.hex(),
  "input.background": colors.bg4.hex(),
  "editorSuggestWidget.background": colors.bg1.hex(),
  "editorSuggestWidget.border": colors.border0.hex(),
})

const createTheme = () => {
  const filepath = path.join(__dirname, `/calibrated-dark.json`)
  const theme = JSON.parse(fs.readFileSync(filepath))

  theme.colors = getThemeColors()

  fs.writeFileSync(filepath, JSON.stringify(theme, null, '\t'))
  console.log(`Updated ${filepath}`)
}

createTheme()