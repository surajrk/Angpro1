import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angpro1';
  addCheckbox: FormGroup;
  createCheckBox: FormGroup;
  a;
  s = [
  ];
  style1;
  

  constructor(
    private fb: FormBuilder
  ) {

    this.addCheckbox = this.fb.group({
      AddText: ['', [Validators.required]],
    });
    this.createCheckBox = this.fb.group({
      check: null,
    });
  }
  get fc() {
    return this.addCheckbox.controls;
  }
  storeValue() {
    // this.a = this.addCheckbox.value;
    // console.log(this.a);
    // this.createCheckBox.setValue(this.a);
    console.log(this.fc.AddText.value);
    this.s.push({ checked: false , text: (this.fc.AddText.value) });
  }
  deletetext(i) {

    this.s.splice(i, 1);
    console.log("deleted",i);
  }
  toggle(value) {
    this.style1 = value;
  }

}

