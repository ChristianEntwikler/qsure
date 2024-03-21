import { Component } from '@angular/core';

@Component({
  selector: 'app-footerh',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  curryr: number = new Date().getFullYear();
}
