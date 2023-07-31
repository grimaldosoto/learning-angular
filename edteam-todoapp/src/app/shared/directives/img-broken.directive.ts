import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {

  @HostListener('error') handleError(){
    const element = this.elHost.nativeElement;
    element.src =
      'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';

    console.log('algo sucedió', this.elHost.nativeElement);
  }

  constructor(private elHost:ElementRef) { }

}
