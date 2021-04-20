import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { SharedPipesModule } from 'src/app/pipes/shared-pipes.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    SharedPipesModule,
    SharedComponentsModule
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {}
