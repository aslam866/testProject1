import { Component, OnInit } from '@angular/core';
import { PersonService } from "../person.service";
import { IPerson } from "../person";
import { Router } from "@angular/router";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
  providers: [PersonService],
})

export class PersonDetailsComponent implements OnInit {
  public personDetails: IPerson[];
  constructor(private _personService: PersonService,private router: Router) { }


  ngOnInit() {
    this.getAllPersons();
  }

  private getAllPersons(): void {
    this._personService
      .GetAll()
      .subscribe((data: IPerson[]) => this.personDetails = data,
      error => console.log(error),
      () => console.log('Get all persons complete'));
  }
  private editPersonDetails(person:IPerson){
      this.router.navigate(["/person"]);
      localStorage.setItem("personData",JSON.stringify(person));
  }
  private deletePersonDetails(id: number, index: number): void {
    this._personService.Delete(id).subscribe(() => {
          this.personDetails.splice(index, 1)
    },
      error => console.log(error),
      () => console.log("deleted"));
  }

}
