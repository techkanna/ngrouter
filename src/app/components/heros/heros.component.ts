import { Component, OnInit } from "@angular/core";
import { HeroserviceService } from "../../services/heroservice.service";
import { Hero } from "../../modals/Hero";
@Component({
  selector: "app-heros",
  templateUrl: "./heros.component.html",
  styleUrls: ["./heros.component.css"]
})
export class HerosComponent implements OnInit {
  private heros: Hero[];
  // private selectedHero: any = this.heroService.selectedHero;
  constructor(private heroService: HeroserviceService) {}

  ngOnInit() {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros().subscribe(heros => (this.heros = heros));
  }
}
