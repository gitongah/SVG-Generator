// have a parent class shape

//have 3 class children circle, triangle, square
class Shapes{
  constructor(color, name){
    this.color = color;
    this.name = name;
  }
}

class Circle extends Shapes{
  constructor(radius){
    super(color, name);
    this.radius = radius;
  }
}