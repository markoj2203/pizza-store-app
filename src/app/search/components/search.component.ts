import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../menu/menu.service';
import { SearchService } from '../search.service';
import { IEmenu } from '../../menu//model/IEmenu';
import * as _ from 'lodash';
import * as moment from 'moment';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  menuData:IEmenu[] = [];
  name:any;
  
  constructor(private _service:SearchService, private _menuService: MenuService) { }


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

      this.menuData = mappedEvents;

      return this.menuData;

    });
  }

  sendSearchToService(name:any){
    this._service.setSearch(name);
}

  Search(){
    return this._service.Search();
  }

  
}
