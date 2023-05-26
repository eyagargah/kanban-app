import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-board-modal',
  templateUrl: './board-modal.component.html',
  styleUrls: ['./board-modal.component.scss'],
})
export class BoardModalComponent {
  boards :any
  public boardForm: FormGroup;
  ngOnInit(){
    this.boards = JSON.parse(localStorage['boards']);
    console.log(this.boards.boards)
  }
  constructor(private _fb: FormBuilder, private boardService:BoardService) {
    this.boardForm = this._fb.group({
      name: ['', Validators.required],
      columns: this._fb.array([this.addColumnGroup()])
    });
  }
  //Append Fields Set
  private addColumnGroup(): FormGroup {
    return this._fb.group({
      column:''
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
    this.boards.boards.push(this.boardForm.value)
    console.log(this.boards.boards)
    this.boardService.setBoards(this.boards)
    
  }
}
