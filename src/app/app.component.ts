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
    // this.modalRef.onCancel.subscribe((m: any) => {
    //   console.log("Cancel", m)
    // })
    this.modalRef.onOk.subscribe((m: any) => {
      console.log("Ok", m)
      this.ams.close(true);
    })
  }
}
