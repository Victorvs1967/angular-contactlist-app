import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';

const MATERIAL_UI_COMPONENTS = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatListModule,
];

@NgModule({
  imports: [ CommonModule, ...MATERIAL_UI_COMPONENTS ],
  exports: [...MATERIAL_UI_COMPONENTS ]
})
export class MaterialUiModule { }
