import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  itoogle : boolean = false
  toggleMenu(){
    console.log('clicked')
    this.itoogle = !this.itoogle
  }
}
