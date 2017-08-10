import { Component, OnInit } from '@angular/core';
import { EventPlannerService } from '../services/app.myEventServices';

@Component({
  selector: 'app-areaselector',
  templateUrl: './areaselector.component.html',
  styleUrls: ['./areaselector.component.css']
})
export class AreaselectorComponent implements OnInit {

  constructor(private eventPlannerService : EventPlannerService) { }

  ngOnInit() {
  }

  checkEventDetailsValue(){
    this.eventPlannerService.checkEventDetailsValue();
  }


}
