import { Component } from '@angular/core';
import { BoardService } from './services/board.service';
import data from 'src/assets/data.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kanban-app';
  constructor( private boardService: BoardService){
    
  }
  ngOnInit(){
    if(localStorage.getItem('boards') === null)
    {
      this.boardService.setBoards(data)
    }
    this.boardService.getBoards()
    this.boardService.setCurrentBoard(this.boardService.boards.boards[0])
  }
}
