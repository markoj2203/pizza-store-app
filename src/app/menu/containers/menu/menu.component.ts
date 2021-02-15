import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../menu.service';
import { IEmenu } from '../../model/IEmenu';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators} from '@angular/forms';
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
  price:any;
  closeResult = '';
  tableDataOject:any;
  btnSwitch:string = 'Add';
  rowNum:number = 0;
  tableForm:any;
  
  log(x:any){console.log(x)}

  constructor(private modalService: NgbModal, private _menuService: MenuService) { }

  ngOnInit(): void {
    this.getData();
    this.objectEmtyStructure();
    this.tableForm = new FormGroup({
      name: new FormControl(this.name, [
        Validators.required,
        Validators.minLength(4),
      ])
    });
  }
  

  objectEmtyStructure(){
    this.tableDataOject = {
      name:'',
      slug:'',
      size:'Select pizza size',
      price:''
    }
  }
//get async data from service - MenuService 
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
    });
  }
  //helper function for open modal
  openModalForm(content:any){
    this.btnSwitch = 'Add';
      this.objectEmtyStructure();
      this.open(content);
  }
//open modal and pass some content
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
//modal dismiss reason
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
//add new row in the table
addRow(formData:any){
  if(formData.form.status === "VALID"){
    this.newRowData = {...formData.form.value, date:moment().format('DD/MM/YY HH:mm')}
    this.menuData = [this.newRowData, ...this.menuData];
    this.modalService.dismissAll();  
  }
  return this.menuData;
}
//edit row from the table
  editRow(content:any, i:number){
    this.rowNum = i;
    this.tableDataOject = this.menuData[i];
    this.btnSwitch = 'Update';
    this.open(content);
  }
  //Update data in table
  updateRow(formData:any){
    if(formData.form.status === "VALID"){
      this.newRowData = {...formData.form.value, date:moment().format('DD/MM/YY HH:mm')}
      for (let index = 0; index < this.menuData.length; index++) {
        if(index === this.rowNum){
          this.menuData[index] = this.newRowData;
        };  
      }
      this.menuData.sort((a: any, b: any) => {
        return +new Date(b.date) - +new Date(a.date);
    });
      this.modalService.dismissAll();  
    }
  }
  //Delete row data from table
  deleteRow(elementId:number){
    this.menuDataWithIDs = [];
    this.menuDataWithIDs = this.menuData.map((item,i) => {
      return {id:i, ...item };
    });
    for (var i = 0; i < this.menuDataWithIDs.length; i++) {
      var obj = this.menuDataWithIDs[i];
      if (obj.id === elementId) {
        this.menuDataWithIDs.splice(i, 1);
      }
    }    
    return this.menuData =  this.menuDataWithIDs;
  }
  //Geting search result for typing value
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