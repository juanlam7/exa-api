import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IndexComponentRoutingModule } from './index-routing.module';

import { IndexComponent } from './index.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IndexComponentRoutingModule
  ],
  declarations: [IndexComponent]
})
export class IndexComponentModule {}
