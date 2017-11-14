import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { SeedModelTableComponent } from './seed-model-table/seed-model-table.component';
import { SeedModelFormComponent } from './seed-model-form/seed-model-form.component';
import { SeedModelContainerComponent } from './seed-model-container/seed-model-container.component';
import { AdminMaterialModule } from './shared/admin-material.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    AdminMaterialModule
  ],
  declarations: [DashboardComponent, AdminSidenavComponent, SeedModelTableComponent, SeedModelFormComponent, SeedModelContainerComponent]
})
export class AdminModule { }
