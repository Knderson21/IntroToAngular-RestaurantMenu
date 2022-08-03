import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getByCategory(Cat: string):MenuItem[]{
    let result:MenuItem[] = [];

    this.fullmenu.forEach((m:MenuItem) => {
      if(m.Category == Cat){
        result.push(m)
      }
    });
    return result;
  };
  
  title = 'Myapp';
  fullmenu:MenuItem[] = [
    {
      ItemName: "California Roll",
      Category: "Regular Rolls",
      Price: 6.25
    },
    {
      ItemName: "Salmon Roll",
      Category: "Regular Rolls",
      Price: 6.50
    },
    {
      ItemName: "Tuna Roll",
      Category: "Regular Rolls",
      Price: 6.50
    },
    {
      ItemName: "Avacado Roll",
      Category: "Vegetable Rolls",
      Price: 5.25
    },
    {
      ItemName: "Cucumber Roll",
      Category: "Vegetable Rolls",
      Price: 5.00
    },
    {
      ItemName: "Mushroom Roll",
      Category: "Vegetable Rolls",
      Price: 5.25
    },
    {
      ItemName: "Yum Yum Roll",
      Category: "Tempura Rolls",
      Price: 13.25
    },
    {
      ItemName: "Shrimp Tempura Roll",
      Category: "Tempura Rolls",
      Price: 9.25
    },
    {
      ItemName: "Crunchy California Roll",
      Category: "Tempura Rolls",
      Price: 8.50
    },
    {
      ItemName: "Rainbow Roll",
      Category: "Special Rolls",
      Price: 13.50
    },
    {
      ItemName: "Sunday Morning Roll",
      Category: "Special Rolls",
      Price: 13.25
    },
    {
      ItemName: "Spider Roll",
      Category: "Special Rolls",
      Price: 12.75
    },
  ]
}
