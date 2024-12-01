import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-board-modal',
  templateUrl: './delete-board-modal.component.html',
  styleUrls: ['./delete-board-modal.component.scss'],
})
export class DeleteBoardModalComponent {
  constructor(private dialog: MatDialog) {}
  deleteBoard() {}

  CancelAction() {
   this.dialog.closeAll();
  }
}
