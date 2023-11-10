import { Component, ElementRef } from '@angular/core';
import { AngularPopupModalService } from './angular-popup-modal.service';
@Component({
  standalone: false,
  templateUrl: './popup-modal-container.component.html',
  styleUrls: ['./popup-modal-container.component.scss']
})
export class AngularPopupModalComponent {
  constructor(private ams: AngularPopupModalService, private host: ElementRef) {
    this.ams.isclose.subscribe((close: boolean) => {
      if (close)
        this.host.nativeElement.remove();
    })
  }
  data: any;
  width: string = "500px";
  instance: any;
  ngOnInit() {
    this.data = this.ams.data;
  }
  onClose(e: any) {
    this.instance = this.ams.getInstanace();
    this.ams.onClose.next(this);
  }
  onCancel(e: any) {
    this.instance = this.ams.getInstanace();
    this.ams.onClose.next(this);
  }
  onOk(e: any) {
    this.instance = this.ams.getInstanace();
    this.ams.onOk.next(this);
  }
}
