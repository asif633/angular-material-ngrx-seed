import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { ClientSidenavComponent } from './client-sidenav/client-sidenav.component';
import { ClientMaterialModule } from './shared/client-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ClientMaterialModule
  ],
  declarations: [HomeComponent, ClientSidenavComponent]
})
export class ClientModule { }
