import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  feedback: FormGroup;
  constructor() {}

  ngOnInit() {
    this.feedback = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      comment: new FormControl('', Validators.required)
    });
  }

  submitFeedback() {
    console.log('form values: ', this.feedback.value);
  }
}
