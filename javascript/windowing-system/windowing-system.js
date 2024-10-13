'use strict';

/** Window prototypal object with a resize method. */
export function Size(width = 80, height = 60) {
  [this.width, this.height] = [width, height];
}
Size.prototype.resize = function (width, height) {
  [this.width, this.height] = [width, height];
  return this;
};

/** Window Position prototypal object with move method. */
export function Position(x = 0, y = 0) {
  [this.x, this.y] = [x, y];
}

Position.prototype.move = function (newX, newY) {
  [this.x, this.y] = [newX, newY];
  return this;
};

/** Program Window class with resize and move methods. */
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    this.size.width =
      newSize.width >= 1
        ? Math.min(newSize.width, this.screenSize.width - this.position.x)
        : 1;
    this.size.height =
      newSize.height >= 1
        ? Math.min(newSize.height, this.screenSize.height - this.position.y)
        : 1;
    return this;
  }

  move(newPosition) {
    this.position.x =
      newPosition.x >= 0
        ? Math.min(newPosition.x, this.screenSize.width - this.size.width)
        : 0;
    this.position.y =
      newPosition.y >= 0
        ? Math.min(newPosition.y, this.screenSize.height - this.size.height)
        : 0;
    return this;
  }
}

export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);
  return programWindow.resize(newSize).move(newPosition);
}
