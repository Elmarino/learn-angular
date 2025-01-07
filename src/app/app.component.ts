import { Component, OnInit } from '@angular/core';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { filter, interval, map, Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  interval$!: Observable<string>;

  ngOnInit(): void {
    this.interval$ = interval(2000).pipe(
      filter((value) => value % 3 === 0),
      map((value) => {
        if (value % 2 === 0) {
          return `JE suis ${value} et est paire`;
        } else {
          return `JE suis ${value} et est impaire`;
        }
      }),
      tap((text) => this.logger(text))
    );
  }

  logger = (text: string) => {
    console.log('Log', text);
  };
}
