import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SeedModelContainerComponent } from './seedmodel-container/seedmodel-container.component';
import { SeedModelFormComponent } from './seedmodel-form/seedmodel-form.component';

const routes: Routes = [
  { path: '', component: AdminSidenavComponent, children: [
    { path: '', component: DashboardComponent },
    { path: 'seedmodel', component: SeedModelContainerComponent, children: [
      { path: ':id', component: SeedModelFormComponent }
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
