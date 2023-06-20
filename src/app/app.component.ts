import { Component, ElementRef, Renderer2, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.hideDivElements();
    console.log(this.activeItem);
  }
  activeItem: number = 1; // Assuming the initial active item is 1


  hideDivElements() {
    const divElements = this.elementRef.nativeElement.querySelectorAll('.hide');
    divElements.forEach((divElement: HTMLElement) => {
      this.renderer.addClass(divElement, 'hidden');
      this.renderer.removeClass(divElement, 'hidden');
    });
  }
}
