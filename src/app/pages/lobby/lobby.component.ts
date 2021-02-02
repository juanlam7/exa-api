import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PeopleService } from './../../services/people.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  public items: any[] = [];

  constructor(private router: Router,
              private peopleService: PeopleService,) {}

  ngOnInit(): void {
    console.log(this.items.length)
    this.peopleService.getAllPeople().subscribe((resp) => {
      console.log('Petición exitosa!')
      console.log(resp)
        this.items = resp.results;
    })
  }

}
