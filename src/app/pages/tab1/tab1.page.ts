import {Component, OnInit} from '@angular/core';
import {DataService} from "../../components/shared/servcies/data.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{


  constructor(public data: DataService) {}

  ngOnInit(): void {

  }

}
