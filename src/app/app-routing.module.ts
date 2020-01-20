import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HerosComponent } from "./components/heros/heros.component";
import { HerodetailsComponent } from "./components/herodetails/herodetails.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "heros", component: HerosComponent },
  { path: "herodetails/:id", component: HerodetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
