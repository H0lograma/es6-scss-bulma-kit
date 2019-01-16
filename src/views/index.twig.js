const template = require( './index.twig' );
// const image = {
//   src: require('./image/bulma-logo.png'),
//   alt: 'bulma'
// };

const html = template({index: true, title: 'Hola planeta!'});

module.exports = html;