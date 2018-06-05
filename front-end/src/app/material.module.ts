import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatDialogModule ,MatIconModule} from '@angular/material';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatToolbarModule,MatInputModule, MatProgressSpinnerModule, MatCardModule, MatDialogModule, MatIconModule],
  exports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatToolbarModule,MatInputModule, MatProgressSpinnerModule, MatCardModule, MatDialogModule, MatIconModule],
})
export class MaterialModule {

 }
