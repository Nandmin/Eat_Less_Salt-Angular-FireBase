import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from 'src/app/model/items';
import { ItemsService } from 'src/app/service/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ItemsComponent implements OnInit {

  title = 'salted-angular';
  items: Observable<any> = this.itemService.all;
  newItem: Items = new Items();
  page: number | any;
  message: string = "";
  // id: number;
  index: number = 1;
  
  

  constructor(
    private itemService: ItemsService,
  ){  }

  // public updateModalIsOpen : boolean = false;
  public confirmModalIsOpen : boolean = false;
  public deleteModalIsOpen : boolean = false;
  public messengerModalIsOpen : boolean = false;

  public messengerModal(open : boolean) : void {
    this.messengerModalIsOpen = open;
  }

  // public openModal(open : boolean) : void {
  //   this.updateModalIsOpen = open;
  // }

  public deleteModal(open : boolean) : void {
    this.deleteModalIsOpen = open;
    console.log('items: ', this.items);
  }
  
  public confirmModal(open : boolean) : void {
    this.confirmModalIsOpen = open;
  }
  
  // public btnOKClick(close: boolean) : void {
  //   this.updateModalIsOpen = close;
  // }

  public btnMessengerClick(close: boolean) : void {
    this.messengerModalIsOpen = close;
  }
  
  public btnConfDelOKClick(close: boolean) : void {
    // this.confirmModalIsOpen = close;
    this.deleteModalIsOpen = close;
    this.confirmModalIsOpen = close;
  }

  public btnDelOKClick(close: boolean) : void {
    this.deleteModalIsOpen = close;
  }

  onCreate(items:Items): void {
    this.message = "Új elem hozzáadva!"

    this.itemService.create(items).then(
      // resp => this.openModal(true), // alert("Új elem hozzáadva"),
      resp => this.messengerModal(true), // alert("Új elem hozzáadva"),
      err => alert(err.error)
      );
  }
  
  onUpdate(items:Items): void {
    this.message = "Az adatfrissítés sikerült!";
    
    this.itemService.update(items).then(
      // resp => this.openModal(true), //alert("Elem módosítva"), //this.btnOKClick(false), // 
      resp => this.messengerModal(true), //alert("Elem módosítva"), //this.btnOKClick(false), // 
      err => alert(err.error)
      );
  }
  confirm(items: Items):void {

    this.confirmModal(true);
      if(this.confirmModalIsOpen == true){
        console.log('conf: ', this.confirmModalIsOpen);

      }
      // this.onDelete(items);
    

  }
  onDelete(items:Items): void {
    // if(!confirm('Biztos vagy benne?')){
    //   return
    // }
    if (!this.confirmModal){
      return
    }
    console.log('del items: ', items);
    console.log('del: ', this.deleteModalIsOpen)
    
    this.itemService.delete(items).then(
      resp => alert("Elem törölve"),
      // resp => this.deleteModal(true), //alert("Elem törölve"),
      //resp => this.confirmModal(true), //alert("Elem törölve"),
      err => alert(err.error)
      );
  }

  // constructor() { }

  ngOnInit(): void {
  }

}
