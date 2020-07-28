import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotoModule } from './photos/photo.module';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    FilterByDescription,
    LoadButtonComponent,
    PhotoListComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    PhotoModule
  ]
})
export class PhotoListModule { }
