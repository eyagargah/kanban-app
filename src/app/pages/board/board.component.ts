import { Component } from '@angular/core';
import { EditBoardModalComponent } from '../edit-board-modal/edit-board-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  constructor(private dialog: MatDialog) {}
  fileNameDialogRef: MatDialogRef<EditBoardModalComponent> | undefined;
  addNewColumn(){
    this.fileNameDialogRef = this.dialog.open(EditBoardModalComponent);
  }
}
