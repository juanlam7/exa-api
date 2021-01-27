import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LobbyRoutingModule } from './lobby-routing.module';

import { LobbyComponent } from './lobby.component';
import { SharedMaterialModule } from '../../shared/shared-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedMaterialModule,
    LobbyRoutingModule
  ],
  declarations: [LobbyComponent]
})
export class LobbyComponentModule { }
