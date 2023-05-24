import { Injectable } from '@angular/core';
import data from 'src/assets/data.json'
@Injectable({
  providedIn: 'root'
})
export class BoardService {

  boardsData = data
  boards = this.boardsData[0].boards
  constructor() { }

  
}
