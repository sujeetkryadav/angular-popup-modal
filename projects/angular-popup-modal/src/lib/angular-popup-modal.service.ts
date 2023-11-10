import { ApplicationRef, EnvironmentInjector, Injectable, createComponent } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularPopupModalComponent } from './popup-modal-container.component';
export class Modal {
  title?: string = "";
  width?: string = "500px";
  cancelBtnLabel?: string = "Cancel";
  okBtnLabel?: string = "zsave";
}
@Injectable({
  providedIn: 'root'
})
export class AngularPopupModalService {

  constructor(private appReff: ApplicationRef, private inject: EnvironmentInjector) { }

  onClose: any = new Subject<any>();
  onOpen: any = new Subject<any>();
  onOk: any = new Subject<any>();
  isclose: any = new Subject<boolean>();

  instance: any;
  data: any;
  /**
   * This method will load modal componen into dom
   * @param component 
   * @returns 
   */
  loadModal(component: any, data: Modal): any {
    const containerRef = createComponent(AngularPopupModalComponent, { environmentInjector: this.inject });
    document.body.appendChild(containerRef.location.nativeElement);
    this.appReff.attachView(containerRef.hostView);
    this.data = data;
    setTimeout(() => {
      const componentRef = createComponent(component, { environmentInjector: this.inject, hostElement: document.getElementById('angular-popup-modal')! })
      this.instance = componentRef.instance;
      this.appReff.attachView(componentRef.hostView);
    }, 0);

    return { onClose: this.onClose, onOpen: this.onOpen, onOk: this.onOk };
  }
  /**
   * This method will return reference of modal component
   * @returns 
   */
  getInstanace() {
    return this.instance;
  }

  close(close: boolean) {
    this.onClose = new Subject<any>();
    this.onOk = new Subject<any>();
    this.isclose.next(close);
  }
}
