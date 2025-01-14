export class FaceSnap {
  location?: string;
  id: number;

  constructor(
    public title: string,
    public description: string,
    public createdAt: Date,
    public imageUrl: string,
    public snaps: number,
    location?: string
  ) {
    this.id = parseInt(crypto.randomUUID().substring(0, 8), 16);
    this.location = location;
  }

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }

  setLocation(location: string): void {
    this.location = location;
  }

  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }
}
