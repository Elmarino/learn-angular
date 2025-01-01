export class FaceSnap {
  constructor(
    public title: string,
    public description: string,
    public createdAt: Date,
    public imgUrl: string,
    public snaps: number
  ) {}

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }
}
