import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[subrayado]'
})
export class SubrayadoDirective implements OnInit {

  pepe: any;
  constructor(elem: ElementRef) {
    elem.nativeElement.style.textDecoration = 'underline';
    this.pepe = elem
    console.log("constructor subrayado")

  }

  ngOnInit() {
    this.pepe.nativeElement.innerText = this.pepe.nativeElement.innerText.toUpperCase();
    // this.pepe.nativeElement.innerText = "pepe";
  }
}
