import { Injectable } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { IEmenu } from '../menu/model/IEmenu';
import * as _ from 'lodash';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  menuData:IEmenu[] = [];

  constructor(private _menuService: MenuService) { }

  private search: any;

  public setSearch(value: string) {
      this.search = value;
  }

  getData(){
    this._menuService.getMenuData()
    .subscribe(data => {
      this.menuData = data.sort((a: any, b: any) => {
        return +new Date(b.date) - +new Date(a.date);
    });
      const mappedEvents = this.menuData.map((item, i) => {
        moment(item.date).format('DD/MM/YY HH:mm'); 
        item = {...item, date: moment(item.date).format('DD/MM/YY HH:mm') };
        return item;
      });
      
      this.menuData = mappedEvents;

      return this.menuData;

    });
  }
  
  Search(){  
      this.menuData = this.menuData.filter(res => {
        return res.name.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
      });
      return this.menuData;
  }
}
