import { Component, OnInit } from "@angular/core";
import { HeroserviceService } from "../../services/heroservice.service";
import { Hero } from "../../modals/Hero";
@Component({
  selector: "app-heros",
  templateUrl: "./heros.component.html",
  styleUrls: ["./heros.component.css"]
})
export class HerosComponent implements OnInit {
  private heros: Hero[] = this.heroService.heros;
  private selectedHero: any = this.heroService.selectedHero;
  constructor(private heroService: HeroserviceService) {}

  ngOnInit() {}

  setMyHero(hero: Hero) {
    this.heroService.selectedHero.value = hero;
  }
}
