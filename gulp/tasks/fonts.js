import fs from 'fs';
import fonter from 'gulp-fonter-fix';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => $.src(`${$.srcDir}/fonts/*.otf`)
  .pipe($.plumber($.notify.onError(err => $._notify(err, 'FONTS - OTF TO TTF'))))
  .pipe(fonter({
    formats: ['ttf']
  }))
  .pipe($.dest(`${$.srcDir}/fonts/`));

export const ttfToWoff = () => $.src(`${$.srcDir}/fonts/*.ttf`)
  .pipe($.plumber($.notify.onError(err => $._notify(err, 'FONTS - TTF TO WOFF'))))
  .pipe(fonter({
    formats: ['woff']
  }))
  .pipe($.dest($.fonts.build))
  .pipe($.src(`${$.srcDir}/fonts/*.ttf`))
  .pipe(ttf2woff2())
  .pipe($.dest($.fonts.build))
  .pipe($.src(`${$.srcDir}/fonts/*.{woff,woff2}`))
  .pipe($.dest($.fonts.build));

export const createFontsStyle = () => {
  const fontsFile = `${$.srcDir}/scss/_fonts.scss`;
  fs.readdir($.fonts.build, (err, fontsFiles) => {
    if (fontsFiles) {
      if (!fs.existsSync(fontsFile)) {
        fs.writeFile(fontsFile, '', cb);
        let newFileOnly;
        for (let i = 0; i < fontsFiles.length; i++) {
          let fontFileName = fontsFiles[i].split('.')[0];
          if (newFileOnly !== fontFileName) {
            let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
            let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
            switch (fontWeight.toLowerCase()) {
              case 'thin' :
                fontWeight = 100;
                break;
              case 'extralight' :
                fontWeight = 200;
                break;
              case 'light' :
                fontWeight = 300;
                break;
              case 'medium' :
                fontWeight = 500;
                break;
              case 'semibold' :
                fontWeight = 600;
                break;
              case 'bold' :
                fontWeight = 700;
                break;
              case 'extrabold' || 'heavy':
                fontWeight = 800;
                break;
              case 'black' :
                fontWeight = 900;
                break;
              default :
                fontWeight = 400;
            }
            fs.appendFile(fontsFile, `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
            newFileOnly = fontFileName;
          }
        }
      } else {
        console.log("Файл scss/_fonts.scss уже существует. Для обновления файла нужно его удалить!");
      }
    }
  });

  return $.src($.srcDir);

  function cb() {}
}
