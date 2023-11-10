import { Component } from '@angular/core';
@Component({
    standalone: false,
    template: `<div>

        <input type="text" name="name" [(ngModel)]="name">
        {{name}}
    </div>`

})
export class ModalComponent {
    title = 'popup-modal';
    name: string = "";
    constructor() { }
    ngOntInit() {

    }
}