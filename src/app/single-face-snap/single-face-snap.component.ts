import { Component, Input, OnInit } from '@angular/core';
import {
  CommonModule,
  NgClass,
  NgStyle,
  DatePipe,
  UpperCasePipe
} from '@angular/common';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  imports: [
    CommonModule,
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  hasSnapped: boolean = false;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(faceSnapId: number): void {
    if (!this.hasSnapped) {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId);
      this.hasSnapped = true;
    } else {
      this.faceSnap$ = this.faceSnapsService.unsnapFaceSnapById(faceSnapId);
      this.hasSnapped = false;
    }
  }
}
