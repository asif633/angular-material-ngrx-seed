import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Seedparent } from '../shared/seedparent-store/seedparent.model';

@Component({
  selector: 'app-seedparent-table',
  templateUrl: './seedparent-table.component.html',
  styleUrls: ['./seedparent-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SeedparentTableComponent implements OnInit {
  columns = [
    { prop: 'name' }
  ];
  @Input() seedparents: Seedparent[];
  @Output() selSeedparent: EventEmitter<Seedparent>;
  constructor() {
    this.selSeedparent = new EventEmitter<Seedparent>();
  }

  ngOnInit() {
  }

  onSelect({ selected }) {
    this.selSeedparent.emit(selected[0]);
  }

}
