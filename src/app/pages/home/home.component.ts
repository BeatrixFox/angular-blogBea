import { Component, OnInit } from '@angular/core';
import { DataItem } from 'src/app/data/dataClassIterface';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css']
})
export class HomeComponent implements OnInit {
  dataCard:DataItem[] = []

  constructor() { 
    this.dataCard = dataFake
  }

  ngOnInit(): void {
  }

}
