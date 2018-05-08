import { Injectable } from "@angular/core";
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from "app/app.config";


@Injectable()
export class RegisterService
{

    constructor(private _http:Http){}
    registerUser(registerUser:any){
        const body = JSON.stringify(registerUser);               
        const header = new Headers();
        header.append("Content-Type","application/json");
        return this._http.post(AppSettings.API_REGISTER_ENDPOINT+"Account",
                 body,
                 { headers: header })
                 .map(
                     (data: Response) => data.json() 
                );
        
    }
}