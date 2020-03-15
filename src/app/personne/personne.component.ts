import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../services/personne.service';
import { Personne } from './personne';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  personne: Personne;

  constructor(private personneService: PersonneService) { }

  ngOnInit(): void {
    this.getPersonne();
  }

  getPersonne(){
    this.personneService.getFirstPersonne().subscribe(
      data => {
        this.personne = data;
      }
    )
  }

}
