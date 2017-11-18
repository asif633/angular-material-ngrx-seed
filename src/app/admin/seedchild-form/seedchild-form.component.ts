import { Component, OnInit, ViewEncapsulation, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Seedchild } from '../shared/seedchild-store/seedchild.model';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/state';
import { LoadSingleSeedchild } from '../shared/seedchild-store/seedchild.actions';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { Seedparent } from '../shared/seedparent-store/seedparent.model';
// #parent-model-import
@Component({
  selector: 'app-seedchild-form',
  templateUrl: './seedchild-form.component.html',
  styleUrls: ['./seedchild-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeedchildFormComponent implements OnInit, OnChanges {
  @Input() seedchild: Seedchild;
  @Input() seedparents: Seedparent[];
// #parent-input
  @Input() addNew: boolean;
  @Output() add: EventEmitter<Seedchild>;
  @Output() update: EventEmitter<Seedchild>;
  @Output() delete: EventEmitter<Seedchild>;
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
      this.seedchild.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    const index = this.seedchild.fruits.indexOf(fruit);

    if (index >= 0) {
      this.seedchild.fruits.splice(index, 1);
    }
  }
  constructor() {
    this.add = new EventEmitter<Seedchild>();
    this.update = new EventEmitter<Seedchild>();
    this.delete = new EventEmitter<Seedchild>();
  }

  ngOnInit() {
    this.filteredOptions = this.options;
  }

  ngOnChanges() {
    if (this.addNew === true) {
      this.seedchild = { id: UUID.UUID(), name: '', fruits: [] };
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

  addSeedchild() {
    this.add.emit(this.seedchild);
    this.seedchild = null;
  }

  updateSeedchild() {
    this.update.emit(this.seedchild);
    this.seedchild = null;
  }

  deleteSeedchild() {
    this.delete.emit(this.seedchild);
    this.seedchild = null;
  }
}
