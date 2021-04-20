import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePreviewComponent } from './movie-preview/movie-preview.component';
import { RouterModule } from '@angular/router';
import { CastComponent } from './cast/cast.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [MoviePreviewComponent, CastComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  exports: [MoviePreviewComponent, CastComponent]
})
export class SharedComponentsModule { }
