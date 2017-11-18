import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SeedmodelContainerComponent } from './seedmodel-container/seedmodel-container.component';
import { SeedmodelFormComponent } from './seedmodel-form/seedmodel-form.component';
import { SeedparentContainerComponent } from './seedparent-container/seedparent-container.component';
import { SeedchildContainerComponent } from './seedchild-container/seedchild-container.component';
// #routing-module-import

const routes: Routes = [
  { path: '', component: AdminSidenavComponent, children: [
    { path: '', component: DashboardComponent },
    { path: 'seedmodel', component: SeedmodelContainerComponent },
{ path: 'seedparent', component: SeedparentContainerComponent },
{ path: 'seedchild', component: SeedchildContainerComponent },
// #routing-module-routes
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
