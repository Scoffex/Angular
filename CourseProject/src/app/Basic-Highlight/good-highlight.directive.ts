import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input} from "@angular/core";
@Directive({
    selector: '[goodDirective]'
})
export class GoodDirective {
    defaultColor: string = "transparent"; 
    @Input() colorSettingOfUser: string;
   
    constructor(private refElement: ElementRef, private renderer: Renderer2){

    }
   //############## FIRST METHOD

   /*  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
        this.renderer.setStyle(this.refElement.nativeElement, 'background-color', 'green');
        this.renderer.setStyle(this.refElement.nativeElement, 'color', 'white');
    }

    @HostListener('mouseleave') onMouseLeave(eventData: Event) {
        this.renderer.setStyle(this.refElement.nativeElement, 'background-color', 'transparent')
        this.renderer.setStyle(this.refElement.nativeElement, 'color', 'black');
    }
     */

       //############## SECOND METHOD

       @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

       @HostListener('mouseenter') onMouseEnter(eventData: Event) {
        this.backgroundColor = this.colorSettingOfUser
    }

     @HostListener('mouseleave') onMouseLeave(eventData: Event) {
        this.backgroundColor = this.defaultColor
        }

}