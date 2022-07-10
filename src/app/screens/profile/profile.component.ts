import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    roleUser !: string;
    isDashboard !: boolean;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe((params) => {
          this.isDashboard = params['id'] !== null;
      })
  }
}
