import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from "./person/person.component";
import { PersonDetailsComponent } from "./person-details/person-details.component";


const routes: Routes = [
  {
    path: '',redirectTo:"/person",pathMatch:"full"
  },
  {
    path: 'personDetails',component:PersonDetailsComponent
  },
  {
    path: 'person',component:PersonComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
