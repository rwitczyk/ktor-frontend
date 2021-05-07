import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userId: string;

  constructor(private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId');
  }

  clearData(): void {
    sessionStorage.clear();
    this.ngOnInit();
    this.toastr.success('Wylogowano');
  }
}
