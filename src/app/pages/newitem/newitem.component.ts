import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from 'src/app/model/items';
import { ItemsService } from 'src/app/service/items.service';

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.css']
})


export class NewitemComponent implements OnInit {
  
  @ViewChild("name") newItemName: ElementRef<any> | undefined;

  title = 'salted-angular';
  items: Observable<any> = this.itemService.all;
  newItem: Items = new Items();
  page: number | any;
  message: string = "";
  // id: number;
  index: number = 1;
  fat: number = 0;
  sFat: number = 0;

    // newRow: any = {};

  constructor(
    private itemService: ItemsService,
  ){  }

  public messengerModalIsOpen : boolean = false;
  public errorModalIsOpen : boolean = false;

  public messengerModal(open : boolean) : void {
    this.messengerModalIsOpen = open;
    this.clearFields();
  }

  public errorModal(open : boolean) : void {
    this.errorModalIsOpen = open;
  }

  public btnMessengerClick(close: boolean) : void {
    this.messengerModalIsOpen = close;
    this.newItemName?.nativeElement.focus();
  }

  public btnErrorClick(close: boolean) : void {
    this.errorModalIsOpen = close;
  }
  
  
  onCreate(items:Items, fat: any, sFat: any, carbon: any, sugar: any): void {
    
    if(sFat > fat){

      this.message='A telített zsír mennyisége nem lehet több, mint a zsír!';
      this.errorModal(true);
      return;
    }

    if(sugar > carbon){

      this.message='A cukor mennyisége nem lehet több az összes szénhidrát mennyiségénél!';
      this.errorModal(true);
      return;
    }

    this.message = "Új elem hozzáadva!"

    this.itemService.create(items).then(
      // resp => this.openModal(true), // alert("Új elem hozzáadva"),
      resp => this.messengerModal(true), // alert("Új elem hozzáadva"),
      err => alert(err.error)
      );
  }
  
  clearFields() {
    this.newItem.name = '';
    this.newItem.energyKJ = 0;
    this.newItem.energyKcal = 0;
    this.newItem.fat = 0;
    this.newItem.sFat = 0;
    this.newItem.carbonHydrate = 0;
    this.newItem.sugar = 0;
    this.newItem.protein = 0;
    this.newItem.salt = 0;
  }

      
  ngOnInit(): void {
  }

}
