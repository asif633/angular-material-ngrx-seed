import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-client-sidenav',
  templateUrl: './client-sidenav.component.html',
  styleUrls: ['./client-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientSidenavComponent implements OnInit {

  navItems: any;
  constructor() { }
  ngOnInit() {
    this.navItems = [
      { name: 'Admin', route: 'admin' },
    ];
  }

}
