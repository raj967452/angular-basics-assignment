import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iforms } from '../../../services/forms.model';
  import { from } from 'rxjs';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('formData') loginForm = NgForm;
  subScription = ['Basic', 'Advance', 'Pro'];
  defaultSubScription = 'Advance';
  subscriptionData = {
    emailId: '',
    password: '',
    subscriptiontype: ''
  };
  submitted = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm);

   // this.loginForm.reset();
  }

}
