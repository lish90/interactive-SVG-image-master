// import index from 'jest';
const getSVG = require('../index.js');

test('load the svg', () => {
    let result = getSVG();
    expect(result).toBeInstanceOf(SVGSVGElement);
});


// test('does something', () => {
//     expect(true).toBe(true);
//   });


module.exports = getSVG;