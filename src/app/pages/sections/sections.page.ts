import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { YtService } from 'src/app/Services/yt.service';
import { HomePage } from '../home/home.page';
import { element } from 'protractor';
import { FilterByPipe } from 'ngx-pipes';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.page.html',
  styleUrls: ['./sections.page.scss'],
})
export class SectionsPage implements OnInit {
  sectionsch1: any[];
  sectionsch2: any[] = [];
  sectionsAll: any[] = [];
  users: any[];
  sectionsAllb: boolean;

  constructor(public route: ActivatedRoute, public router: Router, private yt: YtService, private ngxPipe: FilterByPipe) {



  }

  ngOnInit() {
    if (this.route.snapshot.data['sections']) {

    }


    this.yt.getChannelSections('UCEOLQpRM1LrR26S0RAnI8zw').subscribe(res => {
      for (let element of res["items"]) {
        this.sectionsAll.push(element);
      }
    });

    this.yt.getChannelSections('UCaZEQtIQkmaWnj3dPeYw9xA').subscribe(res => {
      for (let element of res["items"]) {
        this.sectionsAll.push(element);
      }

    });

    console.log(this.sectionsAll);



  }

  onClick() {
    if (this.sectionsAll) {

      console.log(this.ngxPipe.transform(this.sectionsAll, ["id"], 'UCaZEQtIQkmaWnj3dPeYw9xA.UR1y8kP-vh0'))
      this.sectionsAllb = true;
    }
  }


}
