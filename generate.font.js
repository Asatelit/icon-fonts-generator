const fs = require('fs');
const webfontsGenerator = require('webfonts-generator');

fs.readdir('svg-icons', (err, items) => {
    if (err) console.info('can`t read res directory');
    const files = items.filter((i) => i.toLowerCase().endsWith('.svg')).map((i) => `svg-icons/${i}`);

    webfontsGenerator({
        fontName: 'as',
        templateOptions: {
            classPrefix: 'as-',
            baseSelector: '.as',
        },
        files: files,
        centerHorizontally: true,
        dest: 'dest',
        types: ['svg', 'eot', 'woff', 'woff2', 'ttf'],
        fileName: 'app.[fontname].[hash].[ext]',
        html: true,
        htmlTemplate: 'custom-html.hbs',
        cssTemplate: 'custom-css.hbs',
    }, (error) => {
        if (error) {
            console.error('Fail!', error);
        } else {
            console.info('Done');
        }
    });
});