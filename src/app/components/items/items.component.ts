import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
 items: Item[];
 editState:boolean=false;
 itemToEdit :Item;
 itemToShowDetails: Item;
 itemToHideDetails:Item;
 showState:boolean =false;
 hideState : boolean=true;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items =>{
      //console.log(items);
      this.items = items;
    });
  }
  deleteItem(event,item:Item){
    this.itemService.deleteItem(item);
  }
  editItem(event,item:Item){
    this.editState = true;
    this.itemToEdit = item;

  }
showDetails(event,item:Item){
  this.showState = true;
  this.hideState=false;
  this.itemToShowDetails = item;
  this.editState=false;
  this.itemToEdit=null;
}
hideDetails(event,item:Item){
  this.showState=false;
  this.hideState=true;
  this.itemToShowDetails =null;
  this.editState=false;
  this.itemToEdit=null;
}

  updateItem(item :Item){
   this.itemService.updateItem(item);
   this.showState=false;
   this.clearState();
  }
  clearState(){
    this.editState=false;
    this.itemToEdit=null;
  }
}
