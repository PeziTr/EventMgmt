import { Component, OnInit } from '@angular/core';
import { GetPhotographerInfo } from '../photo.service';
import { FormArray, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';


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
        this.photographers.getInfo().subscribe(
        value => {
            //console.log("Data is :" + JSON.stringify(value.json().rows));
            this.photographerList= value.json().rows;
        }
        );
  }

  onSearch(){
    //console.log(this.addInputs.value);

  }

  onReset(){
    this.addInputs.patchValue({
      'searchevents':"",
      'searchlocations':""
    })
  }
}
