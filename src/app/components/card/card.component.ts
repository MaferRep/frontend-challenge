import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  counterValue = 1;
  randomImageUrl!: string;
  randomItemName!: string;

  imageUrls: string[] = [
    'https://chicks-products.s3.amazonaws.com/07af7314-7aa2-490e-9385-0c801958cd38',
    'https://chicks-products.s3.amazonaws.com/15137564-769e-4d4f-9e22-5e614a9af443',
    'https://chicks-products.s3.amazonaws.com/21e879c6-92f4-446b-a027-ab701ab1486f'
  ];

  itemNames: string[] = [
    'Petal Patch',
    'Holo-Heart',
    'Club Sofa'
  ];

  ngOnInit() {
    this.randomizeItem();
  }

  randomizeItem() {
    const randomIndex = Math.floor(Math.random() * this.imageUrls.length);
    this.randomImageUrl = this.imageUrls[randomIndex];
    this.randomItemName = this.itemNames[randomIndex];
  }

  increment() {
    this.counterValue++;
  }

  decrement() {
    if (this.counterValue > 0) {
      this.counterValue--;
    }
  }

  isIncrementDisabled(): boolean {
    return false; 
  }

  isDecrementDisabled(): boolean {
    return this.counterValue <= 0;
  }
  
}

