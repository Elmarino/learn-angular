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
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  imports: [CommonModule, NgStyle, NgClass, UpperCasePipe, DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  hasSnapped: boolean = false;
  constructor(
    private faceSnapsService: FaceSnapsService,
    private router: Router
  ) {}

  onSnap(): void {
    if (!this.hasSnapped) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.hasSnapped = true;
    } else {
      this.faceSnapsService.unsnapFaceSnapById(this.faceSnap.id);
      this.hasSnapped = false;
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
