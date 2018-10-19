import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Iforms } from '../../../services/forms.model';
  import { from } from 'rxjs';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  projectStatus = ['Stable', 'Critical', 'Finished'];
  defaultProjectStatus = 'Stable';
  projectStatusData = {
    projectName: '',
    emailId: '',
    projectStatusType: ''
  };
  submitted = false;

  projectForm = new FormGroup({
    'projectName': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'selectProjectStatus': new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
    console.log(this.projectForm);
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.projectForm);

   // this.loginForm.reset();
  }

}
