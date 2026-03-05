import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appConfirmClick]',
})
export class ConfirmClickDirective {
  @Input('appConfirmClick') message: string = 'Confirmer ?';
  @Output() confirmed = new EventEmitter<void>();

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    event.stopPropagation(); 
    const ok = window.confirm(this.message);
    if (ok) this.confirmed.emit();
  }
}