import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare const $: any;

@Component({
    selector: 'app-page500',
    templateUrl: './page500.component.html',
    styleUrls: ['./page500.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class Page500Component implements OnInit {

    year = (new Date()).getFullYear();
    
    constructor() { }

    ngOnInit() {
        $('body').addClass('authentication sidebar-collapse');
            $(".navbar-toggler").on('click',function() {
            $("html").toggleClass("nav-open");
        });

        $('.form-control').on("focus", function() {
            $(this).parent('.input-group').addClass("input-group-focus");

        }).on("blur", function() {
            $(this).parent(".input-group").removeClass("input-group-focus");
        });
    }
}
