import {Component, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import {ThingDataDto} from '../models/ThingDataDto';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-things',
  templateUrl: './user-things.component.html',
  styleUrls: ['./user-things.component.css']
})
export class UserThingsComponent implements OnInit {

  things: ThingDataDto[];

  constructor(private usersService: UsersService, private router: Router) {
  }

  ngOnInit(): void {
    this.usersService.getAllUserThings().subscribe(value => {
      this.things = value;
    });
  }

  navigateToDetails(name: string): void {
    this.router.navigate(['thingDetails/' + name]);
  }
}
