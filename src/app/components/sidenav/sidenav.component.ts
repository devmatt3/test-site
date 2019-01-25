import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  sections: String[] = ["about", "partners", "contact"];
  radioSelected: String = "about";
  testClass: String = 'aboutSection';

  constructor() { }

  ngOnInit() {
  }

  sectionChange(section){
    switch(section){
      case 'about':
      this.testClass = "aboutSection";
      break;
      case 'partners':
      this.testClass = "partnersSection";
      break;
      case 'contact':
      this.testClass = "contactSection";
      break;
    }
  }

}
