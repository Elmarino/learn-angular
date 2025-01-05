import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Stella',
      'Description de fou de ma dulcinée',
      new Date(),
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      100,
      'dans la chambre'
    ),
    new FaceSnap(
      'Allert',
      'Description de fou de ma dulcinée',
      new Date(),
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      200
    ),
    new FaceSnap(
      'Allert',
      'Description de fou de ma dulcinée',
      new Date(),
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      10
    ),
    new FaceSnap(
      'Allert',
      'Description de fou de ma dulcinée',
      new Date(),
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      10
    ).withLocation('dans le fuuuuuur'),
    new FaceSnap(
      'Allert',
      'Description de fou de ma dulcinée',
      new Date(),
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      10
    ),
    new FaceSnap(
      'Poupou',
      'Description de fou de ma dulcinée',
      new Date(),
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      10,
      'dans ton fiac'
    )
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  snapFaceSnapById(faceSnapId: string): void {
    const foundFaceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    foundFaceSnap.addSnap();
  }

  unsnapFaceSnapById(faceSnapId: string): void {
    const foundFaceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    foundFaceSnap.removeSnap();
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap;
  }
}
