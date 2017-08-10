import { Component, Input } from '@angular/core';

@Component({
    selector:'pin-layout',
    templateUrl:'./pin-layout.component.html',
    styleUrls:['./pin-layout.component.css']
})

export class ListViewLayout{
    @Input() vendorObj;

    constructor() { }
    dropdownList = [];

    ngOnInit()
    {

    }
}