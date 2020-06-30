import { Component, ComponentRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  public vcr: ViewContainerRef;

  public close() {
    this.vcr.clear();
  }
}