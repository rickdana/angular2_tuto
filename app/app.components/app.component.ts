import {Component} from 'angular2/core';
import {MediaItemListComponent} from './media-item-list.component';

@Component({
    selector: 'media-tracker-app',
    directives: [MediaItemListComponent],
    templateUrl: 'app/app.component.templates/app.component.html',
    styleUrls: []
})
export class AppComponent {
}