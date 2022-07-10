import {Component, OnInit} from '@angular/core';
import {Doc} from "../../models/Doc";

@Component({
    selector: 'app-documents',
    templateUrl: './documents.component.html',
    styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
    role !: string;
    rows !: Doc[];

    constructor() {
    }

    ngOnInit(): void {
        this.rows = [
            {
                type: 'pdf',
                fileUrl: 'assets/files/image.png',
                id: 1,
                patient: {
                    firstname: 'omar',
                    lastname: 'triki',
                    email: 'omartriki712@gmail.com',
                    telephone: '24127616',
                    avatarUrl: ''
                },
                doctor:
                    {
                        firstname: 'omar',
                        lastname: 'triki',
                        email: 'omartriki712@gmail.com',
                        telephone: '24127616',
                        avatarUrl: ''
                    }
            },
            {
                type: 'pdf',
                fileUrl: 'assets/files/image.png',
                id: 1,
                patient: {
                    firstname: 'omar',
                    lastname: 'triki',
                    email: 'omartriki712@gmail.com',
                    telephone: '24127616',
                    avatarUrl: ''
                },
                doctor:
                    {
                        firstname: 'omar',
                        lastname: 'triki',
                        email: 'omartriki712@gmail.com',
                        telephone: '24127616',
                        avatarUrl: ''
                    }
            }
        ]
    }

    delete(id: number | undefined, i: number) {
        console.log(id)
    }
}
