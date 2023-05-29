import { Component, Input } from '@angular/core';
import { Task } from 'src/app/boards.interface';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input() color:string = "#49C4E5";
  @Input() columnName:string = "TODO";
  @Input() taskNumber:number = 0;
  @Input() tasks:Array<Task>= [];
  @Input() columnIndex:number = 0;
}
