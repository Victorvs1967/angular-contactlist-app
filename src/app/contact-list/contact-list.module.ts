import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';



@NgModule({
  declarations: [
    ContactListComponent,
    NewContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactListModule { }
