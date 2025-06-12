import { Directive, HostListener, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[customUppercase]',
  standalone: true
})
export class UppercaseDirective {
  constructor(private el: ElementRef, private control: NgControl) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const transformedValue = input.value.toUpperCase();

    if (this.control.control) {
      this.control.control.setValue(transformedValue, { emitEvent: false });
    }
  }
}
