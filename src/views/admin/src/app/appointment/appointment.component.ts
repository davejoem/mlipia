import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare const $: any;
declare const moment: any;

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppointmentComponent implements OnInit {

  constructor() { }

    ngOnInit() {
        $('.boxs-close').on('click', function(){
            var element = $(this);
            var cards = element.parents('.card');
            cards.addClass('closed').fadeOut();
        });

        $('.form-control').on('focus', function() {
            $(this).parent('.input-group').addClass('input-group-focus');
        }).on('blur', function() {
            $(this).parent('.input-group').removeClass('input-group-focus');
        });

        
        $('.datetimepicker').bootstrapMaterialDatePicker({
            format: 'dddd DD MMMM YYYY - HH:mm',
            clearButton: true,
            weekStart: 1
        });  
    }
}
