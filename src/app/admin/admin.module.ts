import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { SeedmodelTableComponent } from './seedmodel-table/seedmodel-table.component';
import { SeedmodelFormComponent } from './seedmodel-form/seedmodel-form.component';
import { SeedmodelContainerComponent } from './seedmodel-container/seedmodel-container.component';
import { AdminMaterialModule } from './shared/admin-material.module';
import { StoreModule } from '@ngrx/store';
import { seedmodelReducer } from './shared/seedmodel-store/seedmodel.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SeedmodelEffectsService } from './shared/seedmodel-store/seedmodel.effects';
import { SeedmodelService } from './shared/seedmodel-store/seedmodel.service';
import { SeedparentContainerComponent } from './seedparent-container/seedparent-container.component';
import { SeedparentTableComponent } from './seedparent-table/seedparent-table.component';
import { SeedparentFormComponent } from './seedparent-form/seedparent-form.component';
import { SeedchildContainerComponent } from './seedchild-container/seedchild-container.component';
import { SeedchildTableComponent } from './seedchild-table/seedchild-table.component';
import { SeedchildFormComponent } from './seedchild-form/seedchild-form.component';
// #module-import-components
import { SeedparentService } from './shared/seedparent-store/seedparent.service';
import { SeedparentEffectsService } from './shared/seedparent-store/seedparent.effects';
import { SeedchildService } from './shared/seedchild-store/seedchild.service';
import { SeedchildEffectsService } from './shared/seedchild-store/seedchild.effects';
// #module-import-services
import { seedparentReducer } from './shared/seedparent-store/seedparent.reducer';
import { seedchildReducer } from './shared/seedchild-store/seedchild.reducer';
// #module-import-reducers
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    AdminMaterialModule,
    StoreModule.forFeature('seedmodelState', seedmodelReducer),
StoreModule.forFeature('seedparentState', seedparentReducer),
StoreModule.forFeature('seedchildState', seedchildReducer),
// #module-imports-state
    EffectsModule.forFeature([
      SeedmodelEffectsService,
SeedparentEffectsService,
SeedchildEffectsService,
// #module-imports-effects
    ]),
    FlexLayoutModule,
    NgxDatatableModule
  ],
  declarations: [
    DashboardComponent,
    AdminSidenavComponent,
    SeedmodelTableComponent,
    SeedmodelFormComponent,
    SeedmodelContainerComponent,
SeedparentContainerComponent,
SeedparentTableComponent,
SeedparentFormComponent,
SeedchildContainerComponent,
SeedchildTableComponent,
SeedchildFormComponent,
// #module-declarations-component
  ],
  providers: [
    SeedmodelService,
SeedparentService,
SeedchildService,
// #module-providers-service
  ]
})
export class AdminModule { }
