import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    localStorage.clear();
    const password = new FormControl('', Validators.required)

    this.signupForm = this.fb.group(
        {
          userName: ['', [Validators.required]],
          password: password
        }
    );
  }
  onSubmit () {
    if (!this.signupForm.invalid) {
      const user = this.signupForm.get('userName').value;
      const pass = this.signupForm.get('password').value;
      if (user === 'admin' && pass === 'admin') {
        const sessionState = {
          isUserLoggedIn: true
        };
        console.log('BIEN')
        localStorage.setItem('currentUser', JSON.stringify(sessionState))
        this.router.navigate(['/home/lobby']);
      } 
      /* else if (user === 'inhaus' && pass === 'IH2020$') {
        const sessionState = {
          isUserLoggedIn: true
        };
        localStorage.setItem('currentUser', JSON.stringify(sessionState))
        this.router.navigate(['/']);
      } else if (user === 'tatiana' && pass === 'CB2020$') {
        const sessionState = {
          isUserLoggedIn: true
        };
        localStorage.setItem('currentUser', JSON.stringify(sessionState))
        this.router.navigate(['/']);
      } else if (user === 'ricardo' && pass === 'AV2020$') {
        const sessionState = {
          isUserLoggedIn: true
        };
        localStorage.setItem('currentUser', JSON.stringify(sessionState))
        this.router.navigate(['/']);
      }  */
      else {
        alert('Credenciales incorrectas');
      }
    }
  }

}
