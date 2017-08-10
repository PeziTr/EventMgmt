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
  dropdownSettings = {};

  constructor(private _service : EventPlannerService) {
    this.dropdownList = [
                              {"id":1,"itemName":"India"},
                              {"id":2,"itemName":"Singapore"},
                              {"id":3,"itemName":"Australia"},
                              {"id":4,"itemName":"Canada"},
                              {"id":5,"itemName":"South Korea"},
                              {"id":6,"itemName":"Germany"},
                              {"id":7,"itemName":"France"},
                              {"id":8,"itemName":"Russia"},
                              {"id":9,"itemName":"Italy"},
                              {"id":10,"itemName":"Sweden"}
                          ];
    this.dropdownList2 = [
                              {"id":1,"itemName":"Ind"},
                              {"id":2,"itemName":"Sing"},
                              {"id":3,"itemName":"Aust"},
                              {"id":4,"itemName":"Cana"},
                              {"id":5,"itemName":"S. Korea"},
                              {"id":6,"itemName":"Ger"},
                              {"id":7,"itemName":"Fra"},
                              {"id":8,"itemName":"Rus"},
                              {"id":9,"itemName":"Ita"},
                              {"id":10,"itemName":"Swed"}
                          ];
    this.dropdownList3 = [
                              {"id":1,"itemName":"I"},
                              {"id":2,"itemName":"S"},
                              {"id":3,"itemName":"A"},
                              {"id":4,"itemName":"C"},
                              {"id":5,"itemName":"S"},
                              {"id":6,"itemName":"G"},
                              {"id":7,"itemName":"F"},
                              {"id":8,"itemName":"R"},
                              {"id":9,"itemName":"I"},
                              {"id":10,"itemName":"S"}
                          ];
    this.dropdownSettings = {
                                  singleSelection: true, 
                                  text:"Select Countries",
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
    var serProd           = this.serRegForm.get('serProviderCategory').value;
    var countSerProvider  = serProd.length;

    console.log("before", this.serRegForm);

    var checkingArr = [];

    serProd.forEach(element => {
        console.log("ele ", element);
        for (var val in element) {
          console.log("obj check", val, element[val]);
          var eleVal = element[val];

          eleVal.forEach(childEle =>{
            console.log("childEle", childEle.itemName);
          });

        }
      });


    // this.serRegForm.patchValue({
    //   serProviderCategory : [{catEvent:'thissss'}]
    // });

    console.log("after",this.serRegForm);
    // this._service.saveVendor(this.serRegForm.value);
  }

  onItemSelect(item, indexNo, typeOfField){
        // console.log(item, indexNo, typeOfField);
    }
}
