/**
 * Created by cngouffo020116 on 26/07/2016.
 */
import {Component,Input,Output,EventEmitter} from 'angular2/core'

@Component({
    selector:'media-item',
    templateUrl:'/app/app.component.templates/media-item.html',
    styleUrls:['/app/styles/mediaItem.css']
})
export class MediaItemComponent{
    @Input('mediaItemToWatch') mediaItem;
    @Output('deleted')delete = new EventEmitter();
    constructor(){

    }

    onDelete(){
        this.delete.emit(this.mediaItem);
    }

    startWatch(){

    }
}