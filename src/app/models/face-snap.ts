export class FaceSnap {
  location?: string;

  constructor(
    public title: string,
    public description: string,
    public createdAt: Date,
    public imgUrl: string,
    public snaps: number,
    location?: string
  ) {}

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }

  setLocation(location: string): void {
    this.location = location;
  }
}
