import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackGroundColor]',
  standalone: true,
})
export class BackGroundColorDirective implements OnInit {
  @Input('appBackGroundColor') temperature: number = 0;

  constructor(private _ElementRef: ElementRef) {}
  ngOnInit(): void {
    this.setBackGround();
  }
  private setBackGround() {
    if (this.temperature < 10) {
      this._ElementRef.nativeElement.style.backgroundColor = 'blue';
    } else if (this.temperature >= 10 && this.temperature <= 25) {
      this._ElementRef.nativeElement.style.backgroundColor = 'green';
    } else {
      this._ElementRef.nativeElement.style.backgroundColor = 'red';
    }
  }
}
