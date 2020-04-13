const getSVG = require('../index');

test('load the svg', () => {
    let result = getSVG();
    //expect(result).toBeTruthy();
    expect(result).toBeInstanceOf(SVGSVGElement);
});

test('response to click events',() =>{
    let svgOneState = getSVG().getElementById('Code_AK');
    svgOneState.onClick = jest.fn();
    let result =svgOneState.getElementsByTagName('title')[0].innerHTML;
    expect(result).toBe('Alaska clicked')
});