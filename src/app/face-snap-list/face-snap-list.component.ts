import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'Stella',
        'Description de fou de ma dulcinée',
        new Date(),
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        100,
        'dans ton uc'
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
      ),
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
  }
}
