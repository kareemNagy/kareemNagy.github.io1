export class Icon implements google.maps.Icon {
  scaledSize?: google.maps.Size;
  url!: string;

  constructor(scaledSize: google.maps.Size) {
    this.scaledSize = scaledSize;
  }
}

export class Size implements google.maps.Size {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  equals(other: google.maps.Size | null): boolean {
    if (this.height === other?.height && this.width === other?.width) {
      return true;
    }
    return false;
  }
  toString(): string {
    throw new Error("Method not implemented.");
  }
}
