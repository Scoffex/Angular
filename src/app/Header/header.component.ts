import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-Header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    @Output() sectionSelected = new EventEmitter<string>();


    isRecipes(){
        this.sectionSelected.emit('recipes');
    }

    isShoppin(){
        this.sectionSelected.emit('shopping');
    }

}