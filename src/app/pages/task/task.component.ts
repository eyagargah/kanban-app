import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ViewtaskModalComponent } from '../viewtask-modal/viewtask-modal.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  showViewTaskModalDialogRef: MatDialogRef<ViewtaskModalComponent> | undefined;

  @Input() taskIndex: any
  @Input() taskTitle: any
  constructor(private dialog:MatDialog){}
  showTask(e:any){
    console.log(e.target)
    this.showViewTaskModalDialogRef = this.dialog.open(ViewtaskModalComponent);
  }
}
