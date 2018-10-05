import { Component, OnInit, Renderer2 } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

declare const $: any;
declare const jquery: any;
declare const screenfull: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    previousUrl: string;

    constructor(private renderer: Renderer2, private router: Router) {
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationStart) {
                    if (this.previousUrl) {
                        this.renderer.removeClass(document.body, this.previousUrl);
                    }
                    const currentUrl = event.url.split('/');
                    const currentUrlSlug = currentUrl[currentUrl.length - 1];
                    if (currentUrlSlug) {
                        this.renderer.addClass(document.body, currentUrlSlug);
                    }
                    this.previousUrl = currentUrlSlug;
                }
            });

    }

    ngOnInit() {
        $('.boxs-close').on('click', function () {
            var element = $(this);
            var cards = element.parents('.card');
            cards.addClass('closed').fadeOut();
        });

        $('.theme-light-dark .t-light').on('click', function () {
            $('body').removeClass('menu_dark');
        });

        $('.theme-light-dark .t-dark').on('click', function () {
            $('body').addClass('menu_dark');
        });

        $('.m_img_btn').on('click', function () {
            $('body').toggleClass('menu_img');
        });

        $('.sparkline').each(function () {
            var $this = $(this);
            $this.sparkline('html', $this.data());
        });
    }
}
