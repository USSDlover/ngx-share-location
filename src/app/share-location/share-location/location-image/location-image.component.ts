import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-location-image',
  templateUrl: './location-image.component.html',
  styleUrls: ['./location-image.component.scss']
})
export class LocationImageComponent implements OnInit {
  @Input() locationImage?: string;
  @Output() locationImageChange = new EventEmitter<string>();

  imagePreview?: string;

  ngOnInit(): void {
    if (this.locationImage)
      this.imagePreview = this.locationImage;
    else
      this.imagePreview = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';
  }

  onSelectFile(event: Event): void {
    let file: File | null = (event.target as HTMLInputElement).files!.item(0);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;

        this.locationImage = this.imagePreview;
        this.locationImageChange.emit(this.locationImage);
      }
      reader.readAsDataURL(file);
    }
  }
}
