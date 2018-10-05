import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
    selector: 'app-inbox',
    templateUrl: './inbox.component.html',
    styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $(function() {
            menuToggle();   
        });

        function menuToggle() {
            // Collapse or Expand Menu
            $('.menu-toggle').on('click', function(e) {
                const $this = $(this);
                const $content = $this.next();
                
                if ($($this.parents('ul')[0]).hasClass('list')) {
                    const $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');
                    $.each($('.menu-toggle.toggled').not($not).next(), function(i, val) {
                        if ($(val).is(':visible')) {
                            $(val).prev().toggleClass('toggled');
                            $(val).slideUp();
                        }
                    });
                }
                
                $this.toggleClass('toggled');
                $content.slideToggle(320);
            });
        }

        $('.ls-toggle-btn').on('click', function() {
            $('body').toggleClass('ls-toggle-menu');
        });
    }

}
