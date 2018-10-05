import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare const $: any;
declare const window: any;

@Component({
    selector: 'app-sortablenestable',
    templateUrl: './sortablenestable.component.html',
    styleUrls: ['./sortablenestable.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SortablenestableComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $(function () {
            $('.dd').nestable();
        
            $('.dd').on('change', function () {
                var $this = $(this);
                var serializedData = window.JSON.stringify($($this).nestable('serialize'));
        
                $this.parents('div.body').find('textarea').val(serializedData);
            });
        });
    }
}
