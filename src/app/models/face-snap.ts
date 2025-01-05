export class FaceSnap {
  location?: string;
  id: string;

  constructor(
    public title: string,
    public description: string,
    public createdAt: Date,
    public imgUrl: string,
    public snaps: number,
    location?: string
  ) {
    this.id = crypto.randomUUID().substring(0, 8);
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
