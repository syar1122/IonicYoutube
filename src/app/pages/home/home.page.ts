import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { YtService } from '../../Services/yt.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  channelId1 = 'UCEOLQpRM1LrR26S0RAnI8zw';
  channelId2 = 'UCaZEQtIQkmaWnj3dPeYw9xA';
  channelId3 = 'UCTH6OW7ZlH7LfKJtcWMOGAg';
  channel1: any;
  channel2: any;
  channel3: any;

  channels: any = [];



  constructor(private http: HttpClient, private ytService: YtService, private router: Router) {

  }



  ngOnInit(): void {

    this.ytService.getChannels(this.channelId1).subscribe(data => {
      console.log('channels', data);
      this.channel1 = data[0];
      this.channels.push(this.channel1);
    });
    this.ytService.getChannels(this.channelId2).subscribe(data => {
      console.log('channels', data);
      this.channel2 = data[0];
      this.channels.push(this.channel2);
    });
    this.ytService.getChannels(this.channelId3).subscribe(data => {
      console.log('channels', data);
      this.channel3 = data[0];

      this.channels.push(this.channel3);

    });

    console.log('raw', this.channels);




  }

  oncard(id: string) {
    console.log("clicked", id);
    this.router.navigateByUrl('/sections/' + id);
  }


}
