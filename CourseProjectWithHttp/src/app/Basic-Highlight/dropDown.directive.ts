import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input} from "@angular/core";
@Directive({
    selector: '[dropDownDirective]'
})
export class DropDownDirective {
   //##########MIA SOLUZIONE
    /* className: string;
    open: boolean = false;
    
    constructor(private refElement: ElementRef, private renderer: Renderer2){
        this.className = this.refElement.nativeElement.className;
    }
   
       @HostListener('click') toggleOpen() {
        this.open ? this.refElement.nativeElement.className = this.className : this.refElement.nativeElement.className = this.className + ' open'; 
        this.open = !this.open
    }
 */

    @HostBinding('class.open') isOpen = false;

    @HostListener('click')toogleOpen(){
        this.isOpen = !this.isOpen;
    }
        
}