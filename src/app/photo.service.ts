import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()

export class GetPhotographerInfo{
    constructor(private service: Http) {}
    options = new RequestOptions();
    photograhers;

    getInfo(param1,param2)
    {
            let params:URLSearchParams = new URLSearchParams();
            params.set('limit', param1);
            params.set('skip', param2);


        return this.service.get('http://localhost:28017/services/testservice', {search:params});
    // .subscribe(
    //     value => {
    //         //console.log("Data is :" + JSON.stringify(value.json().rows));
    //         this.photograhers= value.json().rows;
    //         return this.photograhers;
    //     }
    //     );
    }
}