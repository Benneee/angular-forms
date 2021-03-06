import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  submitFeedback(feedback: NgForm) {
    console.log('form values: ', feedback.value);
  }
}
