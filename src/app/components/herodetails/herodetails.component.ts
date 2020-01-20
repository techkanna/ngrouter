import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { HeroserviceService } from "../../services/heroservice.service";
import { Hero } from "src/app/modals/Hero";
@Component({
  selector: "app-herodetails",
  templateUrl: "./herodetails.component.html",
  styleUrls: ["./herodetails.component.css"]
})
export class HerodetailsComponent implements OnInit {
  private hero: Hero;

  constructor(
    private heroService: HeroserviceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.params.id;
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }
}
