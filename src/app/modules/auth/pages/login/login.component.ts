import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../../models/requests/login.request';
import { AuthService } from '../../services/auth.service';
import { StorageService } from 'src/app/modules/shared/services/storage.service';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/modules/main/models/responses/user.response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup;

  constructor(private auth: AuthService, private storage: StorageService, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  login() {
    let loginRequest: LoginRequest = {
      email: this.form.value.email,
      password: this.form.value.password
      //publicIP
    }

    this.auth.getIp().subscribe({
      next: (data) => {
        //loginRequest.publicIP = data['ip'];
        this.auth.login(loginRequest).subscribe({
          next: (data) => {
            console.log(data);
            this.storage.setDataLogin(data);
          },
          error: (err) => {
            console.warn(err);
          },
          complete: () => {
            this.router.navigate(['/main/panel']);
            console.info('Completado');
          }
        });
      },
      error: (err) => {
        console.warn(err);
      }
    });
  }

  createForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      //password: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}$/)])
      password: new FormControl('', [Validators.required])
    });
  }
}
