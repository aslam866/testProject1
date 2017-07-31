import { Component, OnInit } from '@angular/core';

import { IPerson } from "../person";
import { PersonService } from "../person.service";
import { NgForm } from "@angular/forms/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [PersonService]
})

export class PersonComponent implements OnInit {
  person: IPerson = {
    name: "",
    age: 0,
    gender: "",
    mobileNumber: 0,
  }
  constructor(private _personService: PersonService,private router:Router) {

  }
  ngOnInit() {
    let personData=JSON.parse(localStorage.getItem("personData"));
    if(personData){
       this.person =personData;
      console.log(this.person);
    
    }
    else{
       this.person={
        name:"",
        age:null,
        gender:"",
        mobileNumber:null
      }
    }
    
  }

  submitData(f: NgForm) {
    if (f.value._id) {
      this._personService.Update(f.value).subscribe((response) => {
        console.log(response)
        this.router.navigate(["/personDetails"]);
        localStorage.clear();
      },
        error => console.log(error),
        () => console.log("person details inserted"));

    }
    else {
      this._personService.Add(f.value).subscribe((response) => {
        console.log(response)
        f.reset();
      },
        error => console.log(error),
        () => console.log("person details inserted"));
    }

  }
  

}








