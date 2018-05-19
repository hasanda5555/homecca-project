import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatDialogModule ,MatIconModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule,MatInputModule, MatProgressSpinnerModule, MatCardModule, MatDialogModule, MatIconModule],
  exports: [MatButtonModule, MatToolbarModule,MatInputModule, MatProgressSpinnerModule, MatCardModule, MatDialogModule, MatIconModule],
})
export class MaterialModule {

 }