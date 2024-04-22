function svgGenerator(data){

  let svg =`<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">`
  
  if(data.logoShape == 'circle'){
    svg +=`<${data.logoShape} cx="150" cy="100" r="80" fill="${data.shapeColor}" />`
  }else if(data.logoShape == 'rect'){
    svg +=`<${data.logoShape} width="150" height="150" x="70" y="30" fill="${data.shapeColor}" />`

  }else{
    svg += `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}" />`
  }

  let svgText = `<text x="150" y="125" font-size="52" text-anchor="middle" fill="${data.textColor}">${data.svgText}</text>
  </svg>`

  svg += svgText;

  return svg;
}




module.exports = svgGenerator;