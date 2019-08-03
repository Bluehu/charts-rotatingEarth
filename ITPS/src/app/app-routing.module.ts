import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartComponent } from "./chart/chart.component";


const routes: Routes =[
	{
		path: "",
		redirectTo: "charts",
		pathMatch: "full"
	},
	{
		path: "charts",
		component: ChartComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
