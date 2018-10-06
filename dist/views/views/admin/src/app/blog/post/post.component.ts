import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

declare const $: any;
declare const CKEDITOR: any;

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {

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
        $(function () {
            CKEDITOR.replace('ckeditor');
            CKEDITOR.config.height = 300;          
        });
        $('.selectpicker').selectpicker();          
    }

}
