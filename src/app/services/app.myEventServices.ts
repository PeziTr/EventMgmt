import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()

export class EventPlannerService
{
    eventDetails : Object;

    myHeaders = new Headers({
        'Content-Type' : 'application/json',
        // 'Access-Control-Allow-Origin' : '*',
        'access-control-allow-origin' : "*",
        'Access-Control-Allow-Headers' : 'Content-Type, x-requested-with, Authorization, Access-Control-Allow-Origin'
    });

    myOptions = new RequestOptions({
        headers : this.myHeaders
    })

    headers = new Headers();
      

    constructor(private myRoute: Router, private _http : Http){

    }

    getMyUsers(){
        let usersUrl = "http://localhost:3000/customer/users/";
        return this._http.get(usersUrl);

    }

    planEvent(eventFormData){
        this.eventDetails = JSON.stringify(eventFormData);
        console.log(this.eventDetails);
        //this.myRoute.navigate(['/selectarea']);

        let usersUrl = "http://localhost:3000/customer/users/";

        this._http
        .post(usersUrl,
          this.eventDetails)
          .subscribe(data => {
                alert('ok');
          }, error => {
              console.log(JSON.stringify(error.json()));
          });

    }


    saveVendor(vendorFormData){
        let thisVendor = JSON.stringify(vendorFormData);
        console.log(thisVendor);
        //this.myRoute.navigate(['/selectarea']);

        let usersUrl = "http://localhost:3000/customer/vendors/";

        this._http
        .post(usersUrl,
          thisVendor)
          .subscribe(data => {
                alert('ok');
          }, error => {
              console.log(JSON.stringify(error.json()));
          });

    }

    checkEventDetailsValue(){
        console.log(this.eventDetails);
    }
}