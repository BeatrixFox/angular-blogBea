import { Component, OnInit } from '@angular/core';
import {dataFake} from '../../data/dataFake'
import {DataItem} from '../../data/dataClassIterface'


@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})

export class DataInputComponent implements OnInit {

  photoCover:string = "" 
  contentTitle:string = ""
  contentDescription:string = ""
  id:string = "4"
  idNumber:number = 4

  constructor() { }

  ngOnInit(): void {
  }

  addValuesInDataFake(){
    this.id = this.idNumber.toString()
    let newItem:DataItem = { 
      id: this.id, 
      photoCover: this.photoCover , 
      title: this.contentTitle , 
      description: this.contentDescription}
    
    dataFake.push(newItem)
    this.idNumber += 1
    alert("Item adcionado a lista")
  }
}
