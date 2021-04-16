import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnHover]'
})
export class OnHoverDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) { } /*renderer: Renderer2 ezzel tudok az elemekhez classokat csatolni es felvenni*/

  @HostListener('mouseenter') onMouseEnter(): void {
    this.renderer.addClass(this.el.nativeElement, 'mat-elevation-z6'); /*z6os arnyekot teszi ra az elementre*/
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.renderer.removeClass(this.el.nativeElement, 'mat-elevation-z6');
  }
}
