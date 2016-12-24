const path = require('path');

const PATHS = {
    web: path.join(__dirname, 'web'),
    desktop: path.join(__dirname, 'web/desktop'),
    mobile: path.join(__dirname, 'web/mobile'),
    build: path.join(__dirname, 'public/javascripts')
};

module.exports = {
    // Entry accepts a path or an object of entries.
    // We'll be using the latter form given it's
    // convenient with more complex configurations.
    //
    // Entries have to resolve to files! It relies on Node.js
    // convention by default so if a directory contains *index.js*,
    // it will resolve to that.
    entry: {
        desktop: PATHS.web + '/desktop',
        mobile: PATHS.web + '/mobile'
    },
    resolve: {
        extensions: ['', '.js'],
        root: PATHS.web
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    }
};