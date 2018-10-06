import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare const $: any;
declare const CKEDITOR: any;

@Component({
    selector: 'app-compose',
    templateUrl: './compose.component.html',
    styleUrls: ['./compose.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ComposeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $(function () {
            CKEDITOR.replace('ckeditor');
            CKEDITOR.config.height = 300;          
        });
        $('.selectpicker').selectpicker();
    }

}
