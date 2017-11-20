import { Component, OnInit, ViewEncapsulation, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Seedparent } from '../shared/seedparent-store/seedparent.model';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/state';
import { LoadSingleSeedparent } from '../shared/seedparent-store/seedparent.actions';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { Seedchild } from '../shared/seedchild-store/seedchild.model';
// #child-model-import
@Component({
  selector: 'app-seedparent-form',
  templateUrl: './seedparent-form.component.html',
  styleUrls: ['./seedparent-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeedparentFormComponent implements OnInit, OnChanges {
  @Input() seedparent: Seedparent;
  @Input() seedchilds: Seedchild[];
// #child-input
  @Input() addNew: boolean;
  @Output() add: EventEmitter<Seedparent>;
  @Output() update: EventEmitter<Seedparent>;
  @Output() delete: EventEmitter<Seedparent>;
  options = [
    'One',
    'Two',
    'Three'
  ];
  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  filteredOptions: string[];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  addChip(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our person
    if ((value || '').trim()) {
      this.seedparent.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    const index = this.seedparent.fruits.indexOf(fruit);

    if (index >= 0) {
      this.seedparent.fruits.splice(index, 1);
    }
  }
  constructor() {
    this.add = new EventEmitter<Seedparent>();
    this.update = new EventEmitter<Seedparent>();
    this.delete = new EventEmitter<Seedparent>();
  }

// Lifecycle init method
  ngOnInit() {
    this.filteredOptions = this.options;
  }

// Lifecycle method for watching new add request
  ngOnChanges() {
    if (this.addNew === true) {
      this.seedparent = { id: UUID.UUID(), name: '', fruits: [], seedchilds: [] };
    }
  }

  onChange(val: string) {
    if (val === undefined || val === '') {
      this.filteredOptions = this.options;
    }else {
      this.filteredOptions = this.options.filter(option =>
        option.toLowerCase().indexOf(val.toLowerCase()) === 0);
    }
  }

// Emits add request with object
  addSeedparent() {
    this.add.emit(this.seedparent);
    this.seedparent = null;
  }

// Emits update request with object
  updateSeedparent() {
    this.update.emit(this.seedparent);
    this.seedparent = null;
  }

// Emits delete request with object
  deleteSeedparent() {
    this.delete.emit(this.seedparent);
    this.seedparent = null;
  }
}
