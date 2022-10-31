import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from '../models/contact.model';
import { DialogResponse } from '../models/dialog-response.model';
import { NewContactComponent } from './new-contact/new-contact.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})
export class ContactListComponent implements OnInit {

  contactList: Array<Contact> = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.contactList.push({
      firstName: 'Maria',
      lastName: 'Pena',
      phone: 2032422,
      address: 'Kiev',
      description: 'First person'
    });
  }

  newContact() {
    this.dialog.open(NewContactComponent, {
      width: '40rem',
    })
    .afterClosed()
    .subscribe((res: DialogResponse) => {
      if (res && res.success && res.newContact) {
        this.contactList.push(res.newContact);
      }
    });
  }

  editContact(contact: Contact, index: number) {
    this.dialog.open(NewContactComponent, {
      data: contact,
      width: '40rem',
    })
    .afterClosed()
    .subscribe((res: DialogResponse) => {
      if (res && res.success && res.newContact) {
        this.removeContact(index);
        this.contactList.push(res.newContact);
      }
    });
  }

  removeContact(index: number) {
    this.contactList.splice(index, 1);
  }

}
