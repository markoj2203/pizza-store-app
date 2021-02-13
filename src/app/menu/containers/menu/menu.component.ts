import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../menu.service';
import { IEmenu } from '../../model/IEmenu';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuData:IEmenu[] = [];
  menuDataWithIDs:any;
  newRowData:any;
  name:any;
  closeResult = '';
  
  constructor(private modalService: NgbModal, private _menuService: MenuService) { }

  ngOnInit(): void {
    this.getData();
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
    if(this.name == ""){
      this.ngOnInit();
    }else{
      this.menuData = this.menuData.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

addRow(formData:any){
  
  if(formData.form.status === "VALID"){
    this.newRowData = {...formData.form.value, date:moment().format('DD/MM/YY HH:mm')}
    this.menuData = [this.newRowData, ...this.menuData];
    this.modalService.dismissAll();  
  }
  return this.menuData;
}
  editRow(content:any){
    console.log(content);
    this.open(content);
  }

  deleteRow(event:any){
    let elementId: any = event.currentTarget.closest('tr').dataset.index; 
    this.menuDataWithIDs = [];
    this.menuDataWithIDs = this.menuData.map((item,i) => {
      return {id:i, ...item };
    });
    for (var i = 0; i < this.menuDataWithIDs.length; i++) {
      var obj = this.menuDataWithIDs[i];
      if (obj.id.toString() === elementId) {
        this.menuDataWithIDs.splice(i, 1);
      }
    }

    return this.menuData =  this.menuDataWithIDs;
  }

  menuDataWithIndex(array:[]){
    array.length;
  }

}