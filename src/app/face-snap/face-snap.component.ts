import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  snapped: boolean = false;

  onSnap(): void {
    if (!this.snapped) {
      this.faceSnap.addSnap();
      this.snapped = true;
    } else {
      this.faceSnap.removeSnap();
      this.snapped = false;
    }
  }
}
