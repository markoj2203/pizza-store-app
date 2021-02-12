import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../menu.service';
import { IEmenu } from '../../model/IEmenu';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuData:IEmenu[] = [];
  name:any;

  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this._menuService.getMenuData()
    .subscribe(data => {
      this.menuData = data;

      const mappedEvents = this.menuData.map(item => {
        moment(item.date).format('DD/MM/YY HH:mm'); 
        item = { ...item, date: moment(item.date).format('DD/MM/YY HH:mm') };
        return item;
      });
     _.sortBy(mappedEvents);

     this.menuData = mappedEvents;

      return this.menuData;

    });
  }

  Search(){
    if(this.name == ""){
      this.ngOnInit();
    }else{
      this.menuData = this.menuData.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }
}
