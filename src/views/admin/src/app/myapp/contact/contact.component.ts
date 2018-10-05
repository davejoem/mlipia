import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $(document).ready(function() {
            $('.table').footable({
                "paging": {
                    "enabled": true
                },
                "sorting": {
                    "enabled": true
                }
            });
        });
    }
}
