import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()

export class GetPhotographerInfo{
    constructor(private service: Http) {}
    options = new RequestOptions();
    photograhers;

    getInfo()
    {
        return this.service.get('http://localhost:28017/services/testservice', this.options);
    // .subscribe(
    //     value => {
    //         //console.log("Data is :" + JSON.stringify(value.json().rows));
    //         this.photograhers= value.json().rows;
    //         return this.photograhers;
    //     }
    //     );
    }
}