import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() showArray: any[] = [];
  @Input() upGradeArray: any[] = [];
  @Output() editArray: EventEmitter<any> = new EventEmitter<any>();
  @Output() editItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() downGrade: EventEmitter<any> = new EventEmitter<any>();

  //not done
  editClick(e: any) {
    let editItem = this.showArray.splice(e, 1);
    this.editItem.emit(editItem[0]);
  }

  //ok
  deleteClick(e: any) {
    this.showArray.splice(e, 1);
  }

  //not done
  upgradeClick(e: any, i: any) {
    let upgardedItem = this.showArray.splice(i, 1);
    this.upGradeArray.push(upgardedItem[0]);
    console.log(this.upGradeArray);
    this.editArray.emit(this.showArray);
  }
}
