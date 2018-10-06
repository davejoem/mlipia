import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
    selector: 'app-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $('.sparkbar').sparkline('html', { type: 'bar' });

        $('.sparkline').each(function() {
            var $this = $(this);
            $this.sparkline('html', $this.data());
        });

        $('.chat-widget').slimscroll({
            height: '300px',
            color: 'rgba(0,0,0,0.4)',
            size: '2px',
            alwaysVisible: false,
            borderRadius: '3px',
            railBorderRadius: '2px'
        });
    }

}
