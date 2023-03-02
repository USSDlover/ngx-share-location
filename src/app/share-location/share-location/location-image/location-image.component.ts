import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-location-image',
  templateUrl: './location-image.component.html',
  styleUrls: ['./location-image.component.scss']
})
export class LocationImageComponent {
  @Input() locationImage?: string;
  @Output() locationImageChange = new EventEmitter<string>();

  imagePreview = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIn2-2aN3Dhsv4KqmUo32Yi6oal0wy3JLDSuVBAcfqMGRz2ZwDe_YP5UMmkP1igMVx4-E&usqp=CAU';

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
