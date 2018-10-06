import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare const $: any;

@Component({
    selector: 'app-all',
    templateUrl: './all.component.html',
    styleUrls: ['./all.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AllComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $('.js-basic-example').DataTable();
        
        $('.js-exportable').DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        });
    }
}
