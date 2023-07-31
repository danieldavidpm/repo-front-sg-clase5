import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserResponse } from '../../models/responses/user.response';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRequest } from '../../models/requests/user.request';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  
  users: UserResponse[];
  form: FormGroup;
  isShowForm: boolean = false;
  isSuccess: boolean = false;

  constructor(private userService: UsersService){}
  
  ngOnInit(): void {
    this.getUsers();
    this.createForm();
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completado');
      }
    })
  }

  save() {
    let user: UserRequest = {
      name: this.form.value.name,
      email: this.form.value.email,
      age: this.form.value.age,
      password: btoa(this.form.value.password)
    }

    if (!this.form.value.userId) {
      this.userService.addUser(user).subscribe({
        next: (data) => {},
        error: (err) => {
          console.warn(err);
        },
        complete: () => {
          this.finishSave();
        }
      });
    }else
    {
      this.userService.updateUser(this.form.value.userId, user).subscribe({
        next: (data) => {},
        error: (err) => {
          console.warn(err);
        },
        complete: () => {
          this.finishSave();
        }
      });
    }
  }

  finishSave() {
    this.isSuccess = true;
          this.isShowForm = false;
          this.getUsers();
          this.form.reset();
          setTimeout(() => {
            this.isSuccess = false;
          }, 3500);
  }

  edit(id: number) {
    this.isShowForm = true;
    this.userService.getUser(id).subscribe({
      next: (data) => {
        this.form.patchValue({
          name: data.name,
          email: data.email,
          age: data.age,
          userId: data.id
        });
      },
      error: (err) => {
        console.warn(err);
      },
      complete: () => {
        this.isShowForm = true;
      }
    })
  }

  delete(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: (data) => {},
      error: (err) => {
        console.warn(err);
      },
      complete: () => {
        this.getUsers();
      }
    })
  }

  showAdd() {
    this.isShowForm = true;
  }

  hideAdd() {
    this.isShowForm = false;
    this.form.reset();
  }

  createForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      age: new FormControl<number>(null, [Validators.min(0), Validators.max(150), Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}$/)]),
      userId: new FormControl<number>(null)
    });
  }
}
