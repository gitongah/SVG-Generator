const {Circle, Triangle, Square} = require('./shapes')

const circle = new Circle();
const triangle = new Triangle();
const square = new Square();

function svgGenerator(data){

  let svg =`<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">`
  
  if(data.logoShape == 'circle'){
    circle.setColor(data.shapeColor);
    svg += circle.render();

  }else if(data.logoShape == 'square'){
    square.setColor(data.shapeColor);
    svg += square.render();

  }else{
    triangle.setColor(data.shapeColor);
    svg += triangle.render();
  }
  
  let svgText = `<text x="150" y="125" font-size="52" text-anchor="middle" fill="${data.textColor}">${data.svgText}</text>
  </svg>`

  svg += svgText;

  return svg;
}
module.exports = svgGenerator;