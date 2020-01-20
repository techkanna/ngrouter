import { Component, OnInit } from "@angular/core";
import { HeroserviceService } from "../../services/heroservice.service";
import { Hero } from "src/app/modals/Hero";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  private topHeros: Hero[] = [];
  constructor(private heroService: HeroserviceService) {}

  ngOnInit() {
    this.getTopHeros();
  }

  getTopHeros(): void {
    this.heroService
      .getHeros()
      .subscribe(heros => (this.topHeros = heros.slice(0, 4)));
  }
}
