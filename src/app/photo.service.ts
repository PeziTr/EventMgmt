import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()

export class GetPhotographerInfo{
    constructor(private service: HttpClient) {}
    options = new RequestOptions();
    photograhers;

    getInfo(param1,param2)
    {
            // let params:URLSearchParams = new URLSearchParams();
            // params.set('sk', param1);
            // params.set('l', param2);

            const params = new HttpParams()
            .set("sk",param1)
            .set('l',param2);

        // return this.service.get('http://localhost:28017/services/testservice', {search:params});
                return this.service.get('https://api.mlab.com/api/1//databases/firstdb/collections/collectionone?apiKey=j_hqv-sD6F7AJM3khwZuSz2ymyB4WGB-',{params});
    // .subscribe(
    //     value => {
    //         //console.log("Data is :" + JSON.stringify(value.json().rows));
    //         this.photograhers= value.json().rows;
    //         return this.photograhers;
    //     }
    //     );
    }
}