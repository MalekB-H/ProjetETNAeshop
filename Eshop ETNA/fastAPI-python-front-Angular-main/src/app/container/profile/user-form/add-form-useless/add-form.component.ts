import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Adresse } from 'src/app/model/adresse';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {
  addr: Adresse = {id: 0, postaleCode: '', country: '', city: '', road: ''}

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  Add() {
    this.userService.AddAdresse(this.addr).subscribe(() => {
      this.router.navigate(['/profile'])
    })
  }

}
