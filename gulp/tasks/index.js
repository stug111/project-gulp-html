const { cleanBuild } = require("./clean-build");
const { copyAssets, watchAssets } = require("./copy-assets");
const { svgSprite, watchSvgIcons } = require("./svg-sprite");
const { buildSass, watchSass } = require("./sass");
const { buildJs, watchJs } = require("./js");
const { buildHtml, watchHtml } = require("./html");

module.exports = {
  cleanBuild,
  copyAssets,
  watchAssets,
  svgSprite,
  watchSvgIcons,
  buildSass,
  watchSass,
  buildJs,
  watchJs,
  buildHtml,
  watchHtml
};
