import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SummaryBlockComponent } from "./summary-block/summary-block.component";
import { DescriptionBlockComponent } from "./description-block/description-block.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, SummaryBlockComponent, DescriptionBlockComponent]
})
export class AppComponent {
  title = 'protfolio';
}
