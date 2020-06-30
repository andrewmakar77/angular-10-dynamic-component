import { Component, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  private modal: ComponentRef<ModalComponent>;

  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  private closeModal(): void {
    this.vcr.clear();
  }

  private async setModalComponent() {
    try {
      const { ModalComponent } = await import('./modal/modal.component');
      this.modal = this.vcr.createComponent(this.cfr.resolveComponentFactory(ModalComponent));
      this.onCloseModal();
    } catch (error) {
      throw new Error(error)
    }
  }

  private onCloseModal(): void {
    this.modal.instance.close.subscribe(() => this.closeModal());
  }

  public async showModal() {
    this.closeModal();
    this.setModalComponent();
  }
}
