import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ContactListComponent,
    children: [
      { path: 'newContact', component: NewContactComponent },
    ],
  },
];

@NgModule({
  declarations: [
    ContactListComponent,
    NewContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialUiModule,
  ],
  exports: [
    ContactListComponent,
  ],
})
export class ContactListModule { }
