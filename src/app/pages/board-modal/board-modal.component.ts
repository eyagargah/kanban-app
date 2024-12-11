import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BoardService } from 'src/app/services/board.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-board-modal',
  templateUrl: './board-modal.component.html',
  styleUrls: ['./board-modal.component.scss'],
})
export class BoardModalComponent {
  boards :any
  boardModal: any
  public boardForm: FormGroup;
  ngOnInit(){
    this.boards = JSON.parse(localStorage['boards']);
    console.log(this.boards.boards)
    this.boardModal= document.querySelector('.newBoard')

  }
  constructor(private _fb: FormBuilder, private boardService:BoardService , private dialog : MatDialog) {
    this.boardForm = this._fb.group({
      name: ['', Validators.required],
      tasks: this._fb.array([this.addTaskGroup()])
    });
  }
  //Append Fields Set
  private addColumnGroup(): FormGroup {
    return this._fb.group({
      column:['',Validators.required]
    });
  }

  private addTaskGroup(): FormGroup {
    return this._fb.group({
      Task:['',Validators.required]
    });
  }
  //Add Fields
  addColumn(): void {
    this.columnArray.push(this.addColumnGroup());
  }
 
  //Remove Fields
  removeColumn(index: number): void {
    this.columnArray.removeAt(index);
  }
  //Fields Array
  get columnArray(): FormArray {
    return <FormArray>this.boardForm.get('columns');
  }
  onSubmit(): void {
    console.log('submitted form' + JSON.stringify(this.boardForm?.value));
    console.log(this.columnArray)
    this.boards.boards.push(this.boardForm.value)
    console.log(this.boards.boards)
    this.boardService.setBoards(this.boards)
    this.dialog.closeAll()
  }
}
