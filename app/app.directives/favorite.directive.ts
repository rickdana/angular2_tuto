/**
 * Created by cngouffo020116 on 26/07/2016.
 */
import {Directive, HostBinding} from 'angular2/core'

@Directive({
    selector:'[mwFavorite]'
})
export class FavoriteDirective{
    @HostBinding('class.is-favorite') isFavorite = true;
}