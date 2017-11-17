import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SeedmodelContainerComponent } from './seedmodel-container/seedmodel-container.component';
import { SeedmodelFormComponent } from './seedmodel-form/seedmodel-form.component';
// #routing-module-import

const routes: Routes = [
  { path: '', component: AdminSidenavComponent, children: [
    { path: '', component: DashboardComponent },
    { path: 'seedmodel', component: SeedmodelContainerComponent },
// #routing-module-routes
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
