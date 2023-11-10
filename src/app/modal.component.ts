import { Component } from '@angular/core';
@Component({
    standalone: true,
    template: `<h1>Welcome {{title}}</h1>`
})
export class ModalComponent {
    title = 'popup-modal';

    constructor() { }
    ngOntInit() {

    }
}