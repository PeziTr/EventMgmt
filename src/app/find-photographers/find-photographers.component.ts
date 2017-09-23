import { Component, OnInit } from '@angular/core';
import { GetPhotographerInfo } from '../photo.service';
import { FormArray, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
//import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-find-photographers',
  templateUrl: './find-photographers.component.html',
  styleUrls: ['./find-photographers.component.css'],
  providers:[GetPhotographerInfo]
})
export class FindPhotographersComponent implements OnInit {

  constructor(private photographers:GetPhotographerInfo) { }
  photographerList;
  photographersdata;
  addInputs:FormGroup;
  dropdownList = [];
  dropdownSettings = {};
  lastkey;
  finished = false 

  ngOnInit() {
    this.addInputs = new FormGroup({
      'searchevents':new FormControl(null),
      'searchlocations':new FormControl(null)
    })

        this.dropdownList = [
                              {"id":1,"itemName":"Wedding"},
                              {"id":2,"itemName":"Birthday"},
                              {"id":3,"itemName":"Corporate Event"}                        ];

        this.dropdownSettings = { 
                                  singleSelection: true, 
                                  text:"Search by events",
                                  enableSearchFilter: true,
                                  classes:"",
                                  //limitSelection:1
                                  //badgeShowLimit:2
                                };

    //this.photographersdata = this.photographers.getInfo();
    //console.log(this.photographerList);
        this.photographers.getInfo(1,0).subscribe(
        value => {
            //console.log("Data is :" + JSON.stringify(value.json().rows));
            //this.photographerList= value.json().rows;
            this.photographerList= value;
            
        }
        );
  }

  onSearch(){
    //console.log(this.addInputs.value);

  }

  onScrollDown()
  {
    let scrollHeight = window.document.body.scrollTop;
    console.log(window.document.body.scrollTop);
    if (scrollHeight > 200)
    {
      console.log("fire");
        this.photographers.getInfo(16,0).subscribe(
        value => {
            //console.log("Data is :" + JSON.stringify(value.json().rows));
            //this.photographerList= value.json().rows;
            this.photographerList= value;
        }
        );
    }
        
  }

  onReset(){
    this.addInputs.patchValue({
      'searchevents':"",
      'searchlocations':""
    })
  }

  onScroll()
  {
    if (this.finished) return
    console.log("Scrolled");
        this.photographers.getInfo(8,8).subscribe(
        value => {
            //console.log("Data is :" + JSON.stringify(value.json().rows));

            this.lastkey = 'Arun Hitendra';

            //this.photographerList= this.photographerList.concat(value.json().rows);
            //console.log(value);
            this.photographerList= this.photographerList.concat(value);
            if (this.lastkey === this.photographerList.slice(-1)[0].serProviderName)
            {
              this.finished=true;
            }
        }
        );
  }
}
