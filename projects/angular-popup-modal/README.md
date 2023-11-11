# AgularPopupModal



## Angular Version Support

It work for Angular version > 15.

## Installation

Run `npm i angular-popup-modal` to add package to your project. 

## Examples

Step 1:
Include `import { AngularPopupModalService } from 'angular-popup-modal'` to your popup source component.

Step 2:
Create a component (ModalComponent) for modal which you will be passing as modal.

Step 3:
Inject `AngularPopupModalService` to you source component.

```
import { Component } from '@angular/core';
import { AngularPopupModalService } from 'angular-popup-modal';
import { ModalComponent } from './modal.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'popup-modal';
  modalRef: any;
  constructor(private ams: AngularPopupModalService) { }
  open() {
    this.modalRef = this.ams.loadModal(ModalComponent, { title: "Modal", width: "800px", cancelBtnLabel: "close", okBtnLabel: "ok" });
    this.modalRef.onClose.subscribe((m: any) => {
      console.log("Close", m);
      this.ams.close(true);
    });
  
    this.modalRef.onOk.subscribe((m: any) => {
      console.log("Ok", m)
      this.ams.close(true);
    })
  }
}
```
You can pass data for modal like title, width and buttons text
## Closing Modal

To close popup-modal you need to call `close()` method from service `AngularPopupModalService` with boolean value

## How to get data after every action

After loading modal, You can subscribe to the modalRef method `onClose`, `onOk` and you will be able to get updated data
