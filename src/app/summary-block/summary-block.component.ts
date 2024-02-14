import { Component } from '@angular/core';
import { SocialLinksComponent } from "../social-links/social-links.component";

@Component({
    selector: 'app-summary-block',
    standalone: true,
    templateUrl: './summary-block.component.html',
    styleUrl: './summary-block.component.css',
    imports: [SocialLinksComponent]
})
export class SummaryBlockComponent {

}
