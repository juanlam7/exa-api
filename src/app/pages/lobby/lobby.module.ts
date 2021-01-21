import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LobbyRoutingModule } from './lobby-routing.module';

import { LobbyComponent } from './lobby.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LobbyRoutingModule
  ],
  declarations: [LobbyComponent]
})
export class LobbyComponentModule { }
