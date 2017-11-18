import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Seedchild } from '../shared/seedchild-store/seedchild.model';

@Component({
  selector: 'app-seedchild-table',
  templateUrl: './seedchild-table.component.html',
  styleUrls: ['./seedchild-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SeedchildTableComponent implements OnInit {
  columns = [
    { prop: 'name' }
  ];
  @Input() seedchilds: Seedchild[];
  @Output() selSeedchild: EventEmitter<Seedchild>;
  constructor() {
    this.selSeedchild = new EventEmitter<Seedchild>();
  }

  ngOnInit() {
  }

  onSelect({ selected }) {
    this.selSeedchild.emit(selected[0]);
  }

}
