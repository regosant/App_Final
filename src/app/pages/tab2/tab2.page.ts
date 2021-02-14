import { Component, OnInit } from '@angular/core';
import { VillanosService, Villano } from "../../services/villanos.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  villanos: Villano[] = [];

  constructor(private _heroesService: VillanosService,
          private _router: Router) {
        console.log("Constructor Villanos");
}
  ngOnInit() {
    this.villanos = this._heroesService.getVillanos();
    console.log(this.villanos);
  }

}