import {Component, OnInit} from '@angular/core';
import PerfectScrollbar from "perfect-scrollbar";

declare const $: any;

@Component({
    selector: 'app-sidebar', templateUrl: './sidebar.component.html', styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    ps: any;
    role !: string;

    constructor() {
    }

    isMobileMenu() {
        return $(window).width() <= 991;

    };

    ngOnInit(): void {
        const role = localStorage.getItem('role');
        console.log(role);
        if(role != null)
        {
            this.role = role;
        }
        console.log(this.role);
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            this.ps = new PerfectScrollbar(elemSidebar);
        }
    }

    isMac(): boolean {
        return navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0;
    }
}

