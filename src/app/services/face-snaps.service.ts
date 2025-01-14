import { map, Observable, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [];

  constructor(private http: HttpClient) {}

  getFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    //return [...this.faceSnaps];
  }
  snapFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map((faceSnap) => {
        faceSnap.snaps++;
        return faceSnap;
      }),
      switchMap((updatedFaceSnap) =>
        this.http.put<FaceSnap>(
          `http://localhost:3000/facesnaps/${faceSnapId}`,
          updatedFaceSnap
        )
      )
    );
  }

  unsnapFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map((faceSnap) => {
        faceSnap.snaps--;
        return faceSnap;
      }),
      switchMap((updatedFaceSnap) =>
        this.http.put<FaceSnap>(
          `http://localhost:3000/facesnaps/${faceSnapId}`,
          updatedFaceSnap
        )
      )
    );
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(
      `http://localhost:3000/facesnaps/${faceSnapId}`
    );
  }

  addFaceSnap(faceSnap: FaceSnap): Observable<FaceSnap> {
    return this.getFaceSnaps().pipe(
      map((facesnaps) => [...facesnaps].sort((a, b) => a.id - b.id)),
      map((sortedFacesnaps) => sortedFacesnaps[sortedFacesnaps.length - 1]),
      map((previousFacesnap) => ({
        ...faceSnap,
        snaps: 0,
        id: previousFacesnap.id + 1
      })),
      switchMap((newFacesnap) =>
        this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFacesnap)
      )
    );
  }

  createFaceSnap(fields: {
    title: string;
    description: string;
    createdAt: Date;
    imageUrl: string;
    snaps: number;
    location?: string;
  }): Observable<FaceSnap> {
    const faceSnap = new FaceSnap(
      fields.title,
      fields.description,
      fields.createdAt,
      fields.imageUrl,
      0,
      fields.location
    );
    return this.addFaceSnap(faceSnap);
  }
}
