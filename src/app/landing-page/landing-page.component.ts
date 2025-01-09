import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  userEmail!: string;
  ngOnInit(): void {
    this.userEmail = 'oaoaoaoa';
  }

  onSubmitForm = (form: NgForm) => {
    console.log(form);
    console.log(form.value);
  };
}
