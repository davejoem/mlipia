import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare const $: any;

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class InvoiceComponent implements OnInit {

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
