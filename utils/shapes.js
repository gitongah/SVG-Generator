// parent class shape
class Shapes{
  constructor(color){
    this.color = '';
  }
    setColor(color){
      this.color = (color);
    }
  }
  //have 3  children circle, triangle, square
class Circle extends Shapes{
  render(){
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
  }
}

class Square extends Shapes{
  render(){
    return `<rect width="150" height="150" x="70" y="30" fill="${this.color}" />`
  }
}
class Triangle extends Shapes{
  render(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
  }
}

module.exports = {Circle,Square,Triangle};