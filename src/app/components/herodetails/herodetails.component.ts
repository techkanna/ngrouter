import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { HeroserviceService } from "../../services/heroservice.service";
@Component({
  selector: "app-herodetails",
  templateUrl: "./herodetails.component.html",
  styleUrls: ["./herodetails.component.css"]
})
export class HerodetailsComponent implements OnInit {
  public id = +this.route.snapshot.params.id;
  private selectedHero: any = this.heroService.heros.filter(
    hero => hero.id === this.id
  );
  public heroName: string = this.selectedHero[0].name;
  constructor(
    private heroService: HeroserviceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    console.log(this.route);
  }

  onSubmit() {
    this.heroService.selectedHero.value.name = this.heroName;
  }
}
