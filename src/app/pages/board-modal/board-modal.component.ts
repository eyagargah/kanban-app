import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-board-modal',
  templateUrl: './board-modal.component.html',
  styleUrls: ['./board-modal.component.scss']
})
export class BoardModalComponent {
  boardForm= this.fb.group({
    name:'',
    columns:[
      
    ]

  })
  constructor(private fb: FormBuilder){}
}
