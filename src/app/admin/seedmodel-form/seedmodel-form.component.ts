import { Component, OnInit, ViewEncapsulation, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Seedmodel } from '../shared/seedmodel-store/seedmodel.model';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/state';
import { LoadSingleSeedmodel } from '../shared/seedmodel-store/seedmodel.actions';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-seedmodel-form',
  templateUrl: './seedmodel-form.component.html',
  styleUrls: ['./seedmodel-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeedmodelFormComponent implements OnInit, OnChanges {
  @Input() seedmodel: Seedmodel;
  @Input() addNew: boolean;
  @Output() add: EventEmitter<Seedmodel>;
  @Output() update: EventEmitter<Seedmodel>;
  @Output() delete: EventEmitter<Seedmodel>;
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
      this.seedmodel.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    const index = this.seedmodel.fruits.indexOf(fruit);

    if (index >= 0) {
      this.seedmodel.fruits.splice(index, 1);
    }
  }
  constructor() {
    this.add = new EventEmitter<Seedmodel>();
    this.update = new EventEmitter<Seedmodel>();
    this.delete = new EventEmitter<Seedmodel>();
  }

  ngOnInit() {
    this.filteredOptions = this.options;
  }

  ngOnChanges() {
    if (this.addNew === true) {
      this.seedmodel = { id: UUID.UUID(), name: '', fruits: [] };
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
