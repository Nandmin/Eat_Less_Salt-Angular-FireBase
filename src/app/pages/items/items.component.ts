import { Component, NgModule , Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from 'src/app/model/items';
import { ItemsService } from 'src/app/service/items.service';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
  itemFilter: any = '';
  // id: number;
  index: number = 1;
  fat: number = 0;
  sFat: number = 0;


    phraseString: string ="";
    phraseKey: string = "not set";
    newRow: any = {};
  
  constructor(
    private itemService: ItemsService,
  ){  }

  // public updateModalIsOpen : boolean = false;
  public confirmModalIsOpen : boolean = false;
  public deleteModalIsOpen : boolean = false;
  public messengerModalIsOpen : boolean = false;
  public errorModalIsOpen : boolean = false;

  public messengerModal(open : boolean) : void {
    this.messengerModalIsOpen = open;
  }

  public errorModal(open : boolean) : void {
    this.errorModalIsOpen = open;
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

  public btnErrorClick(close: boolean) : void {
    this.errorModalIsOpen = close;
  }
  
  public btnConfDelOKClick(close: boolean) : void {
    // this.confirmModalIsOpen = close;
    this.deleteModalIsOpen = close;
    this.confirmModalIsOpen = close;
  }

  public btnDelOKClick(close: boolean) : void {
    this.deleteModalIsOpen = close;
  }

  onCreate(items:Items, fat: any, sFat: any, carbon: any, sugar: any): void {
    
    if(sFat > fat){

      this.message='A tel??tett zs??r mennyis??ge nem lehet t??bb, mint a zs??r!';
      this.errorModal(true);
      return;
    }

    if(sugar > carbon){

      this.message='A cukor mennyis??ge nem lehet t??bb az ??sszes sz??nhidr??t mennyis??g??n??l!';
      this.errorModal(true);
      return;
    }

    this.message = "??j elem hozz??adva!"

    this.itemService.create(items).then(
      // resp => this.openModal(true), // alert("??j elem hozz??adva"),
      resp => this.messengerModal(true), // alert("??j elem hozz??adva"),
      err => alert(err.error)
      );
  }
  
  onUpdate(items:Items): void {
    this.message = "Az adatfriss??t??s siker??lt!";
    
    this.itemService.update(items).then(
      // resp => this.openModal(true), //alert("Elem m??dos??tva"), //this.btnOKClick(false), // 
      resp => this.messengerModal(true), //alert("Elem m??dos??tva"), //this.btnOKClick(false), // 
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
      resp => alert("Elem t??r??lve"),
      // resp => this.deleteModal(true), //alert("Elem t??r??lve"),
      //resp => this.confirmModal(true), //alert("Elem t??r??lve"),
      err => alert(err.error)
      );
  }


  ngOnInit(): void {
  }

}
