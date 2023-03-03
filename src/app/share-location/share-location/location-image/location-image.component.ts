import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-location-image',
  templateUrl: './location-image.component.html',
  styleUrls: ['./location-image.component.scss']
})
export class LocationImageComponent {
  @Input() locationImage?: string;
  @Output() locationImageChange = new EventEmitter<string>();

  imagePreview = 'https://www.shutterstock.com/image-vector/simple-image-generator-placeholder-service-260nw-2224999997.jpg';

  onSelectFile(event: Event): void {
    let file: File | null = (event.target as HTMLInputElement).files!.item(0);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      }
      reader.readAsDataURL(file);
    }
  }
}
