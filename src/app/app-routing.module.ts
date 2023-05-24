import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaysComponent } from './plays/plays.component';
import { DashbordComponent } from './dashbord/dashbord.component'
import { AddplayComponent } from './plays/AddPlay/addplay/addplay.component';

const routes: Routes = [
  { path: "plays", component: PlaysComponent },
  { path: "", redirectTo: "/plays", pathMatch: "full" },
  {path: "dashbord", component: DashbordComponent},
  {path: "addplay", component: AddplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
