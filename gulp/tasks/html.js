const { src, dest, series, watch } = require("gulp");
const gulpif = require("gulp-if");
const plumber = require("gulp-plumber");
const { notify } = require("../utils");
const paths = require("../paths");
const isProduction = process.env.NODE_ENV === "production";

const buildHtml = () => {
  return src(`${paths.html.src}*.html`)
    .pipe(
      gulpif(
        !isProduction,
        plumber({
          errorHandler: err => {
            notify("HTML build error", err);
          }
        })
      )
    )
    .pipe(dest(paths.html.dest));
};

const watchHtml = reload => {
  watch([`${paths.html.src}*.html`], series(buildHtml, reload));
};

module.exports = {
  buildHtml,
  watchHtml
};
