import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { EventPlannerService } from '../services/app.myEventServices';

@Component({
  selector: 'app-regserviceprovider',
  templateUrl: './regserviceprovider.component.html',
  styleUrls: ['./regserviceprovider.component.css']
})
export class RegserviceproviderComponent implements OnInit {

  serRegForm    : FormGroup;
  disableSubmit : boolean = true;
  catArray      : FormGroup;
  dropdownList = [];
  dropdownList2 = [];
  dropdownList3 = [];
  selectedItems = [];
  dropdownSpeciSettings = {};
  dropdownEventSettings = {};
  dropdownCatSettings = {};

  constructor(private _service : EventPlannerService) {
    this.dropdownList = [
                              {"id":1,"itemName":"Photographer"},
                              {"id":2,"itemName":"Caterer"},
                              {"id":3,"itemName":"Sound System"},
                              {"id":4,"itemName":"Transporter"},
                              {"id":5,"itemName":"Decorator"}
                          ];
    
    this.dropdownSpeciSettings = {
                                  singleSelection: false, 
                                  text:"Select Specialities",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                            };
    
    this.dropdownEventSettings = {
                                  singleSelection: false, 
                                  text:"Select Events",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                            };

    this.dropdownCatSettings = {
                                  singleSelection: true, 
                                  text:"Select Category",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                            };
  }

  ngOnInit() {
    var thisCatArr = new FormGroup({
      catType        : new FormControl(),
      catEvent       : new FormControl(),
      catSpeciality  : new FormControl()
    });

    this.serRegForm = new FormGroup({
        serProviderName     : new FormControl('', [Validators.required]),
        serProviderEmail    : new FormControl('', [Validators.required, Validators.email]),
        serProviderContact  : new FormControl('', [Validators.required]),
        serProviderCategory : new FormArray([thisCatArr])
    });
  }

  addThisCat(){
    var thisCatArr = new FormGroup({
      catType        : new FormControl(),
      catEvent       : new FormControl(),
      catSpeciality  : new FormControl()
    });

    (<FormArray>this.serRegForm.get('serProviderCategory')).push(thisCatArr);
  }

  checkSubmit(){

    console.log(this.serRegForm);

    var serProd           = this.serRegForm.get('serProviderCategory').value;
    var countSerProvider  = serProd.length;

    var checkingArr = [];

    serProd.forEach(element => {
        var newObj = {};

        for (var val in element) {

          console.log("checking here - ", val, element );

          var newChildObj = [];
          var eleVal = element[val];

          if(eleVal === null)
          {
            this.serRegForm.setErrors({categoryError : "Categories not selected Properly"});
            continue;
          }

          eleVal.forEach(childEle =>{
            newChildObj.push(childEle.itemName);
          });

          newObj[val] = newChildObj;
        }

        checkingArr.push(newObj);
      });

    this.serRegForm.patchValue({
      serProviderCategory : checkingArr
    });

    if (this.serRegForm.valid)
    {
      this._service.saveVendor(this.serRegForm.value);
      this.serRegForm.patchValue({
        serProviderCategory : serProd
      });
    }
    else
    {
      alert("Please fill the form correctly");
      this.serRegForm.patchValue({
        serProviderCategory : serProd
      });
    }
  }

  onItemSelect(item, indexNo, typeOfField){
        // console.log(item, indexNo, typeOfField);
    }
  
  onCatSelect(item, indexNo, typeOfField){
         console.log(item.itemName, indexNo, typeOfField);

    var specialityList = {
      Photographer : [
                  {"id":1,"itemName":"Under water photography"},
                  {"id":2,"itemName":"videography"},
                  {"id":3,"itemName":"children photography"},
                  {"id":4,"itemName":"couple photography"}
                ],
      Caterer : [
                  {"id":1,"itemName":"Indian"},
                  {"id":2,"itemName":"Italian"},
                  {"id":3,"itemName":"Chines"},
                  {"id":4,"itemName":"South Indian"},
                  {"id":5,"itemName":"Sweets"}
                ],
      "Sound System" : [
                  {"id":1,"itemName":"DJ"},
                  {"id":2,"itemName":"Bhajan"},
                  {"id":3,"itemName":"Bhojpuri"},
                  {"id":4,"itemName":"Bollywood"},
                  {"id":5,"itemName":"Rock Music"}
                ],
      Transporter : [
                  {"id":1,"itemName":"Bus"},
                  {"id":2,"itemName":"Cars"},
                  {"id":3,"itemName":"Aeroplane"},
                  {"id":4,"itemName":"Train"},
                  {"id":5,"itemName":"Trucks"}
                ],
      Decorator :[
                  {"id":1,"itemName":"Hall"},
                  {"id":2,"itemName":"Bunglow"},
                  {"id":3,"itemName":"Lawn"}
                ]

    }

    this.dropdownList2 = [
                            {"id":1,"itemName":"Weeding"},
                            {"id":2,"itemName":"Birthday"},
                            {"id":3,"itemName":"Launch Event"},
                            {"id":4,"itemName":"Conferences"},
                            {"id":5,"itemName":"Corporate Meetings"}
                        ];
    
    this.dropdownList3[indexNo] = specialityList[item.itemName];

    }

  onEventSelect(item, indexNo, typeOfField){
        // console.log(item, indexNo, typeOfField);
  }

}
