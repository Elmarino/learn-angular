import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  facesnaps!: FaceSnap[];
  mySnap!: FaceSnap;
  secondSnap!: FaceSnap;
  lastSnap!: FaceSnap;

  ngOnInit(): void {
    this.facesnaps = [
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
