import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { SeedModelTableComponent } from './seedmodel-table/seedmodel-table.component';
import { SeedModelFormComponent } from './seedmodel-form/seedmodel-form.component';
import { SeedModelContainerComponent } from './seedmodel-container/seedmodel-container.component';
import { AdminMaterialModule } from './shared/admin-material.module';
import { StoreModule } from '@ngrx/store';
import { seedmodelReducer } from './shared/seedmodel-store/seedmodel.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SeedmodelEffectsService } from './shared/seedmodel-store/seedmodel.effects';
import { SeedmodelService } from './shared/seedmodel-store/seedmodel.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    AdminMaterialModule,
    StoreModule.forFeature('seedmodelState', seedmodelReducer),
    EffectsModule.forFeature([
      SeedmodelEffectsService,
    ]),
    FlexLayoutModule,
    NgxDatatableModule
  ],
  declarations: [
    DashboardComponent,
    AdminSidenavComponent,
    SeedModelTableComponent,
    SeedModelFormComponent,
    SeedModelContainerComponent,
  ],
  providers: [
    SeedmodelService,
  ]
})
export class AdminModule { }
