import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { YtService } from '../Services/yt.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelSectionResolverService implements Resolve<any>{

  constructor(private ytServices: YtService) { }


  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {

    let id = route.paramMap.get('id');
    return this.ytServices.getChannelSections(id);


  }


}
