import { Component, OnInit } from "@angular/core";
import { HeroserviceService } from "../../services/heroservice.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  private topHeros: any = this.heroService.heros.filter(hero => hero.id < 15);
  constructor(private heroService: HeroserviceService) {}

  ngOnInit() {}
}
