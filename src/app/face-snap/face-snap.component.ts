import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  imports: [CommonModule, NgStyle, NgClass],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  hasSnapped: boolean = false;

  onSnap(): void {
    if (!this.hasSnapped) {
      this.faceSnap.addSnap();
      this.hasSnapped = true;
    } else {
      this.faceSnap.removeSnap();
      this.hasSnapped = false;
    }
  }
}
