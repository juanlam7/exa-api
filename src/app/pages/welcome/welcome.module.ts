import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WelcomeComponentRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    FormsModule,
    WelcomeComponentRoutingModule
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeComponentModule {}
