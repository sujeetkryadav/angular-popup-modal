import { NgModule } from '@angular/core';
import { AngularPopupModalService } from './angular-popup-modal.service';
import { CommonModule } from '@angular/common';
import { AngularPopupModalComponent } from './popup-modal-container.component';

@NgModule({
  declarations: [
    AngularPopupModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AngularPopupModalComponent
  ]
  ,
  providers: [AngularPopupModalService]
})
export class AngularPopupModalModule { }
