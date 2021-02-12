import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  classCheck:any;

  constructor() { }

  ngOnInit(): void {
    this.classCheck = true;
  }

  toggleClass(event:any){  
    var elems = document.querySelectorAll(".nav-link.active");
    //removing activ class from all elements
    [].forEach.call(elems, function(el:any) {
        el.classList.remove("active");
    });
    return this.classCheck == true ? event.target.className = 'nav-link active' : '';
  }

}
