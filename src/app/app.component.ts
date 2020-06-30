import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  public async showModal() {
    this.vcr.clear();
    const { ModalComponent } = await import('./modal/modal.component');
    const modalInstance = this.vcr.createComponent(this.cfr.resolveComponentFactory(ModalComponent));
    modalInstance.instance.vcr = this.vcr;
  }
}
