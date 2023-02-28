import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  
  nombres: string;
  
  ScrollNosotros(){
   // document.getElementById("nosotros")?.scrollIntoView();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  ngOnInit(): void {
    
  }

}
