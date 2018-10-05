
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
    }
}
