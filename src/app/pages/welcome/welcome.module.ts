import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { WelcomeComponentRoutingModule } from './welcome-routing.module';
import { SharedMaterialModule } from '../../shared/shared-material.module';

import { WelcomeComponent } from './welcome.component';

import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    FormsModule,
    SharedMaterialModule,
    PerfectScrollbarModule,
    WelcomeComponentRoutingModule
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeComponentModule {}
