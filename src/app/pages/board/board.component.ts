import { Component, Input } from '@angular/core';
import { EditBoardModalComponent } from '../edit-board-modal/edit-board-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
 colors=["#49C4E5","#8471F2","#67E2AE","#d6d45a","#e09660","#e0635e","#de5fc7","#5d64de"]

  constructor(private dialog: MatDialog , public boardService : BoardService) {
    
  }
  fileNameDialogRef: MatDialogRef<EditBoardModalComponent> | undefined;
  
  addNewColumn(){
    this.fileNameDialogRef = this.dialog.open(EditBoardModalComponent);
  }
}
