const { task, series, parallel } = require("gulp");
const {
  cleanBuild,
  watchSvgIcons,
  watchAssets,
  copyAssets,
  svgSprite,
  watchSass,
  buildSass,
  watchJs,
  buildJs,
  buildHtml,
  watchHtml
} = require("./tasks");
const server = require("browser-sync");
const paths = require("./paths");

const main = series(
  cleanBuild,
  parallel(copyAssets, svgSprite, buildSass, buildJs, buildHtml)
);

const serve = done => {
  server.init({
    server: paths.global.dest,
    port: 3000,
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  done();
};

const reload = done => {
  server.reload();
  done();
};

const watch = () => {
  watchSass(reload);
  watchJs(reload);
  watchAssets(reload);
  watchSvgIcons(reload);
  watchHtml(reload);
};

task("start", series(main, serve, watch));

task("build", series(main));
