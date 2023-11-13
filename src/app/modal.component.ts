import { Component } from '@angular/core';
@Component({
    standalone: false,
    template: `<div>

             ....
    </div>`

})
export class ModalComponent {
    title = 'popup-modal';
    name: string = "";
    constructor() { }
    ngOntInit() {

    }
}