import { Component, OnInit, ViewEncapsulation, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Seedmodel } from '../shared/seedmodel-store/seedmodel.model';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/state';
import { LoadSingleSeedmodel } from '../shared/seedmodel-store/seedmodel.actions';

@Component({
  selector: 'app-seedmodel-form',
  templateUrl: './seedmodel-form.component.html',
  styleUrls: ['./seedmodel-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeedModelFormComponent implements OnInit, OnChanges {
  @Input() seedmodel: Seedmodel;
  @Input() addNew: boolean;
  @Output() add: EventEmitter<Seedmodel>;
  @Output() update: EventEmitter<Seedmodel>;
  @Output() delete: EventEmitter<Seedmodel>;
  constructor() {
    this.add = new EventEmitter<Seedmodel>();
    this.update = new EventEmitter<Seedmodel>();
    this.delete = new EventEmitter<Seedmodel>();
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.addNew === true) {
      this.seedmodel = { id: UUID.UUID(), name: '' };
    }
  }

  addSeedmodel() {
    this.add.emit(this.seedmodel);
    this.seedmodel = null;
  }

  updateSeedmodel() {
    this.update.emit(this.seedmodel);
    this.seedmodel = null;
  }

  deleteSeedmodel() {
    this.delete.emit(this.seedmodel);
    this.seedmodel = null;
  }
}
