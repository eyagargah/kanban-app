import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-board-modal',
  templateUrl: './board-modal.component.html',
  styleUrls: ['./board-modal.component.scss'],
})
export class BoardModalComponent {
  public boardForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.boardForm = this._fb.group({
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
  }
}
