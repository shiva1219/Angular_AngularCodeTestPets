import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = "Cats grouped by owner's gender";
  male: String[] = [];
  female: String[] = [];

  constructor(private service: DataService){}

  ngOnInit(){
    this.service.getOwners()
      .subscribe(
        response => {
          this.getPetsData(response,"Cat");
        },
        error => {
          alert("unexpected error");
          console.log(error);
        });
    
  }

  // The getPetsData function process the object based on petType arrgument and assigns data into given arrays.
  getPetsData(ownersObj, petType){
    let me = this;
    ownersObj.map(function (owner) {
      if(owner.pets !== null){
        owner.pets.map(function(pet){
            if(pet.type === petType){
              (owner.gender === "Male") ? me.male.push(pet.name) : me.female.push(pet.name);
            }
        });
      }
    });
    me.male.sort();
    me.female.sort();
  }
  
 
}
