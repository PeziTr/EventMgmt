import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventPlannerService } from '../services/app.myEventServices';


@Component({
  selector: 'app-eventdetailsform',
  templateUrl: './eventdetailsform.component.html',
  styleUrls: ['./eventdetailsform.component.css']
})
export class EventdetailsformComponent implements OnInit {

  @ViewChild('myFirstAngularModal') firstModal;
  myServData = [];

  myFirstForm : FormGroup;
  checkingData = this.eventPlannerService.eventDetails;

  mainEventTypes = [
      {name: 'Marriage Event', shortName: 'marry'},
      {name: 'Birthday Event', shortName: 'birth'},
      {name: 'Lauch Event', shortName: 'lauch'}
  ]; 

  constructor(private eventPlannerService : EventPlannerService) { 
       
      this.myFirstForm = new FormGroup({
            eventType : new FormControl(this.mainEventTypes[0].shortName, Validators.required),
            eventDate : new FormControl('',  Validators.required),
            userEmail : new FormControl('',  Validators.required),
            userContact : new FormControl('',  Validators.required)
        });
   }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // console.log(this.firstModal);
    this.firstModal.show();
  }

  firstFormSubmit(){
    if(this.myFirstForm.valid)
    {
      this.firstModal.hide();
      this.eventPlannerService.planEvent(this.myFirstForm.value);
    }
  }

  checkEventDetailsValue(){

    var mynewNar = this.eventPlannerService.getMyUsers();
    mynewNar.subscribe(value => {
            let valJson = value.json().rows;
            this.myServData = valJson;
            console.log(this.myServData);
        });
  }

}
