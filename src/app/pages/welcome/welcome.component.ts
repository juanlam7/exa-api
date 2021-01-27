import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PeopleService } from './../../services/people.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router,
              private peopleService: PeopleService,) {}

  ngOnInit(): void {
    /* this.peopleService.getAllPeople().subscribe((resp) => {
      console.log('Petición exitosa')
      console.log(resp)
    }) */
  }

  goLogin() {
    this.router.navigate(['/login']);
  }
}