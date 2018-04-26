import { CanActivate } from "@angular/router/src/interfaces";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src/router_state";
import { Router } from "@angular/router/src/router";


export class AdminGuard implements CanActivate{

    constructor(private router:Router){}
    public canActivate(route :ActivatedRouteSnapshot,state:RouterStateSnapshot ){
        let status = true;
        if(status){
            return true;
        }else{
            this.router.navigate['Search']
        }
    }
}