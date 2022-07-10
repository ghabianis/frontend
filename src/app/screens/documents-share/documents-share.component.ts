import { Component, OnInit } from '@angular/core';
import {Doc} from "../../models/Doc";

@Component({
  selector: 'app-documents-share',
  templateUrl: './documents-share.component.html',
  styleUrls: ['./documents-share.component.css']
})
export class DocumentsShareComponent implements OnInit {
    role !: string;
    rows !: Doc[];
  constructor() { }

  ngOnInit(): void {
      this.role = 'doctor';
      this.rows = [
          {
              id: 1,
              type: 'pdf',
              fileUrl: 'assets/persons/person.js'
          },
          {
              id: 2,
              type: 'pdf',
              fileUrl: 'assets/persons/person.js'
          },
          {
              id: 3,
              type: 'pdf',
              fileUrl: 'assets/persons/person.js'
          },
          {
              id: 4,
              type: 'pdf',
              fileUrl: 'assets/persons/person.js'
          },
          {
              id: 5,
              type: 'pdf',
              fileUrl: 'assets/persons/person.js'
          },
          {
              id: 6,
              type: 'pdf',
              fileUrl: 'assets/persons/person.js'
          }
      ]
  }
}
