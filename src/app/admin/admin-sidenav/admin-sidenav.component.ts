import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminSidenavComponent implements OnInit {

  navItems: any;
  constructor() { }
  ngOnInit() {
    this.navItems = [
      { name: 'Manage Seedmodel', route: 'seedmodel' },
{ name: 'Manage Seedparent', route: 'seedparent' },
{ name: 'Manage Seedchild', route: 'seedchild' },
// #sidenav-entry
    ];
  }
}
