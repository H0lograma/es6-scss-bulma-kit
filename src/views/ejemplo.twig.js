const template = require( './ejemplo.twig' );
const html = template({ejemplo: true, title: 'Ejemplo planeta!'});

module.exports = html;