import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact.model';
import { DialogResponse } from 'src/app/models/dialog-response.model';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.sass']
})
export class NewContactComponent implements OnInit {

  form?: FormGroup;
  response: DialogResponse = { success: false };

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NewContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [ '', Validators.required ],
      lastName: [ '', Validators.required ],
      phone: [ '', Validators.required ],
      address: [ '', Validators.required ],
      description: [ '' ],
    });
    if (this.data) {
      const { firstName, lastName, phone, address, description } = this.data;
      this.form.setValue({
        firstName,
        lastName,
        phone,
        address,
        description,
      });
    }
  }

  create() {
    const response: DialogResponse = {
      success: true,
      newContact: this.form?.value,
    };
    this.dialogRef.close(response);
  }

  close() {
    this.dialogRef.close(this.response);
  }

}
