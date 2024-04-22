const {Circle, Triangle, Square} = require('./shapes');


describe('Circle', () =>{
  describe('setColor', ()=>{
    it('should take the color and fill it to the circle', () =>{
      const circle= new Circle();
      circle.setColor('blue');
      expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`)
    });
  });
});

describe('Triangle', () =>{
  describe('setColor', ()=>{
    it('should take the color and fill it to the circle', () =>{
      const triangle= new Triangle();
      triangle.setColor('blue');
      expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`)
    });
  });
});

describe('Square', () =>{
  describe('setColor', ()=>{
    it('should take the color and fill it to the circle', () =>{
      const square= new Square();
      square.setColor('blue');
      expect(square.render()).toEqual(`<rect width="150" height="150" x="70" y="30" fill="blue" />`)
    });
  });
});