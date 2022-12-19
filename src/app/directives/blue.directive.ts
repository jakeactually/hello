import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBlue]'
})
export class BlueDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.color = 'blue';
  }

}
