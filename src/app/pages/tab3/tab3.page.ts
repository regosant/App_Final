import { Component } from '@angular/core';
import { LocalheroeService } from "../../services/heroe.service";
import { LocalvillanoService } from "../../services/villano.service";
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  sliderOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  }

  constructor(public localheroeService: LocalheroeService, 
    public localvillanoService: LocalvillanoService
    ) { }
}