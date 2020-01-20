import { Injectable } from "@angular/core";
import { Hero } from "../modals/Hero";

@Injectable({
  providedIn: "root"
})
export class HeroserviceService {
  public selectedHero: any = { value: { id: 14, name: "sethupathi" } };
  public heros: Hero[] = [
    { id: 11, name: "ajith" },
    { id: 12, name: "surya" },
    { id: 13, name: "sk" },
    { id: 14, name: "sethupathi" },
    { id: 15, name: "Hero five" },
    { id: 16, name: "Hero six" },
    { id: 17, name: "Hero seven" },
    { id: 18, name: "Hero eight" },
    { id: 19, name: "Hero nine" },
    { id: 20, name: "Hero Ten" }
  ];
  constructor() {}
}
