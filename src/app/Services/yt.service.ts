import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, take } from 'rxjs/operators';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

import { Youtube } from '../Youtub.Model';


@Injectable({
  providedIn: 'root'
})
export class YtService {
  apiKey = 'AIzaSyDg1Nse18KT7nWkJkmi9vojrMm0HNvCsW8';
  items: any[] = [];
  constructor(private http: HttpClient) { }

  getChannelSections(channel) {
    return this.http.get<Youtube>('https://www.googleapis.com/youtube/v3/channelSections?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,contentDetails,localizations&maxResults=50')
      .pipe(map(res => {
        return res
      }));
  }

  getListVideos(listId) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&channelId=' + listId + '&part=snippet,id')
    // .pipe(map(res => {
    //   console.table(res);
    // }));

  }

  getChannels(id) {
    let url: string = 'https://www.googleapis.com/youtube/v3/channels?part=snippet%2CbrandingSettings%2Cstatistics&id=' + id + '&key=' + this.apiKey;
    return this.http.get<Youtube>(url)
      .pipe(map(res => {
        return res.items;
      }));
  }
}
