import { Component, OnInit } from '@angular/core';
// import { MenuService } from '../../menu.service';
// import { IEmenu } from '../../model/IEmenu';
// import * as _ from 'lodash';
// import * as moment from 'moment';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss']
})
export class MenuFormComponent implements OnInit {
  log(x:any){console.log(x)}
  constructor() { }

  ngOnInit(): void {
    //this.getData();
  }
/*
  menuData:IEmenu[] = [];

  

  getData(){
    this._menuService.getMenuData()
    .subscribe(data => {
      this.menuData = data.sort((a: any, b: any) => {
        return +new Date(b.date) - +new Date(a.date);
    });
      const mappedEvents = this.menuData.map(item => {
        moment(item.date).format('DD/MM/YY HH:mm'); 
        item = { ...item, date: moment(item.date).format('DD/MM/YY HH:mm') };
        return item;
      });

      this.menuData = mappedEvents;

      return this.menuData;

    });
  }


addRow(formData:any){
  console.log(formData.form.value);
  //return this.menuData = [{name:"aaa",price:2,size:25,date:"05/02/21 14:50"}, ...this.menuData];
}
*/
}
