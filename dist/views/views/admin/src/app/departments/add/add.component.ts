import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

declare const $: any;

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AddComponent implements OnInit {
    
    public config: DropzoneConfigInterface = {
        url: 'https://httpbin.org/post',
        maxFiles: 10,
        clickable: true,
        uploadMultiple: true,
        acceptedFiles: 'image/*',
        createImageThumbnails: true
    };

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
    }
}
