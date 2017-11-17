import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientSidenavComponent } from './client-sidenav/client-sidenav.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: ClientSidenavComponent, children: [
    { path: '', component: HomeComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
