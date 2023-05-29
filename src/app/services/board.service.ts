import { Injectable } from '@angular/core';
import { Board, Boards, Task } from 'src/app/boards.interface';
@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor() {}
  boards!: Boards;
  currentBoard!: Board;
  currentTask: Task = {
    title: 'string',
    description: 'string',
    status: 'string',
    subtasks: [],
  };

  indexes = {
    boardIndex: 0,
    columnIndex: 0,
    taskIndex: 0,
    subtaskIndex: 0,
    dropColumnIndex: 0,
    dropTaskIndex: 0,
  };

  getBoards() {
    this.boards = JSON.parse(localStorage['boards']);
  }

  getColumn(index:number){
    return this.boards.boards[index].columns;
  }
  setBoard(board:Board){
    this.boards.boards.push(board)
  }

  setBoards(boards: Boards) {
    localStorage.setItem('boards', JSON.stringify(boards));
  }

  setCurrentBoard(board: Board) {
    this.currentBoard = board;
  }
  setCurrentTask(task: Task) {
    this.currentTask = task;
  }
}
