export interface Shape {
  area(): number;
}

export interface ResizableShape extends Shape {
  setWidth(width: number): void;
  setHeight(height: number): void;
}

export class Rectangle implements ResizableShape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

export class Square implements ResizableShape {
  private side: number;

  constructor(side: number) {
    this.side = side;
  }

  setWidth(width: number): void {
    this.side = width;
  }

  setHeight(height: number): void {
    this.side = height;
  }

  area(): number {
    return this.side * this.side;
  }
}

export function resizeRectangle(shape: ResizableShape): void {
  shape.setWidth(5);
  shape.setHeight(10);
  console.log(`Area obtenida: ${shape.area()}`);
}

resizeRectangle(new Rectangle(1, 1));
resizeRectangle(new Square(1));
