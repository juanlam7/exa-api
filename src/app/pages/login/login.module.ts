import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { SharedMaterialModule } from '../../shared/shared-material.module';
import { LoginComponentRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    PerfectScrollbarModule,
    LoginComponentRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginComponentModule {}