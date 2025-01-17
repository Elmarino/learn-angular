import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { filter, map, Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap';
import { AsyncPipe, DatePipe, NgIf, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  imports: [ReactiveFormsModule, NgIf, AsyncPipe, UpperCasePipe, DatePipe],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent implements OnInit {
  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  urlRegex!: RegExp;

  constructor(
    private formBuilder: FormBuilder,
    private faceSnapsService: FaceSnapsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.urlRegex =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group(
      {
        title: [null, [Validators.required]],
        description: [null, [Validators.required]],
        imageUrl: [
          null,
          [Validators.required, Validators.pattern(this.urlRegex)]
        ],
        location: [null]
      },
      {
        updateOn: 'blur'
      }
    );

    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map((formValue) => ({
        ...formValue,
        createdDate: new Date(),
        id: crypto.randomUUID().substring(0, 8),
        snaps: 0
      }))
    );
  }

  onSubmitForm(): void {
    //console.log(this.snapForm);

    console.log(this.snapForm.value);
    const newFaceSnap = this.faceSnapsService.createFaceSnap(
      this.snapForm.value
    );
    console.log(newFaceSnap);
    /* if (newFaceSnap) {
      this.router.navigateByUrl('facesnaps');
    } */

    console.log('new', newFaceSnap);
  }
}
