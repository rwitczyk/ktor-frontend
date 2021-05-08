import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-thing-details',
  templateUrl: './thing-details.component.html',
  styleUrls: ['./thing-details.component.css']
})
export class ThingDetailsComponent implements OnInit {

  name: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
  }

}
