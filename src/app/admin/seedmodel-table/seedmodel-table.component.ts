import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Seedmodel } from '../shared/seedmodel-store/seedmodel.model';

@Component({
  selector: 'app-seedmodel-table',
  templateUrl: './seedmodel-table.component.html',
  styleUrls: ['./seedmodel-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SeedmodelTableComponent implements OnInit {
  columns = [
    { prop: 'name' }
  ];
  @Input() seedmodels: Seedmodel[];
  @Output() selSeedmodel: EventEmitter<Seedmodel>;
  constructor() {
    this.selSeedmodel = new EventEmitter<Seedmodel>();
  }

  ngOnInit() {
  }

  onSelect({ selected }) {
    this.selSeedmodel.emit(selected[0].$key);
  }

}
