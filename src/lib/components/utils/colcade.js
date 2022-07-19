/**
 * @brief ES6 port of desandro/colcade
 */

// Internal State
let GUID = 0;
let instances = {};

// Utils
function extend( a, b ) {
    for ( var prop in b ) {
    a[ prop ] = b[ prop ];
    }
    return a;
}

function makeArray( obj ) {
    // turn element or nodeList into an array
    var ary = [];
    if ( Array.isArray( obj ) ) {
    // use object if already an array
    ary = obj;
    } else if ( obj && typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0; i < obj.length; i++ ) {
        ary.push( obj[i] );
    }
    } else {
    // array of single index
    ary.push( obj );
    }
    return ary;
}

function querySelect( selector, elem ) {
    // get array of elements
    if(typeof document !== 'undefined') {
        elem = elem || document;
        var elems = elem.querySelectorAll( selector );
        return makeArray( elems );
    }
    return null;
}

function getQueryElement( elem ) {
    if(typeof document !== 'undefined') {
        if ( typeof elem == 'string' ) {
            elem = document.querySelector( elem );
        }
        return elem;
    }
    return null;
}

function docReady( onReady ) {
    if(typeof document !== 'undefined') {
        if ( document.readyState == 'complete' ) {
            onReady();
            return;
        }
        document.addEventListener( 'DOMContentLoaded', onReady );
    }
}

// Primary Class
class Colcade {

    constructor(element, options) {
        element = getQueryElement(element);

        // do not initialize twice on same element
        if (element && element.colcadeGUID) {
            var instance = instances[element.colcadeGUID];
            instance.option(options);
            return instance;
        }

        this.element = element;
        // options
        this.options = {};
        this.option( options );
        // kick things off
        this.create();
    }

    // Primary Methods
    option(options) {
        this.options = extend(this.options, options);
    }

    create() {
        // add guid for Colcade.data
        let guid = this.guid = ++GUID;
        this.element.colcadeGUID = guid;
        instances[ guid ] = this; // associate via id
        // update initial properties & layout
        this.reload();
        // events
        this._windowResizeHandler = this.onWindowResize.bind( this );
        this._loadHandler = this.onLoad.bind( this );
        window.addEventListener( 'resize', this._windowResizeHandler );
        this.element.addEventListener( 'load', this._loadHandler, true );
    }

    reload() {
        // update properties and do layout
        this.updateColumns();
        this.updateItems();
        this.layout();
    };

    // Selector Methods
    updateColumns() {
        this.columns = querySelect( this.options.columns, this.element );
    }

    updateItems() {
        this.items = querySelect( this.options.items, this.element );
    }

    getActiveColumns() {
        return this.columns.filter( function( column ) {
            var style = getComputedStyle( column );
            return style.display != 'none';
        });
    }

    // Layout Methods
    layout() {
        this.activeColumns = this.getActiveColumns();
        this._layout();
    }

    _layout() {
        // reset column heights
        this.columnHeights = this.activeColumns.map( function() {
            return 0;
        });
        // layout all items
        this.layoutItems( this.items );
    }

    layoutItems(items) {
        items.forEach( this.layoutItem, this );
    }

    layoutItem(item) {
        // layout item by appending to column
        var minHeight = Math.min.apply( Math, this.columnHeights );
        var index = this.columnHeights.indexOf( minHeight );
        this.activeColumns[ index ].appendChild( item );
        // at least 1px, if item hasn't loaded
        // Not exactly accurate, but it's cool
        this.columnHeights[ index ] += item.offsetHeight || 1;
    }

    // Layout Editing Methods
    append(elems) {
        var items = this.getQueryItems( elems );
        // add items to collection
        this.items = this.items.concat( items );
        // lay them out
        this.layoutItems( items );
    }

    prepend(elems) {
        var items = this.getQueryItems( elems );
        // add items to collection
        this.items = items.concat( this.items );
        // lay out everything
        this._layout();
    }

    getQueryItems(elems) {
        if(typeof document !== 'undefined') {
            elems = makeArray( elems );
            var fragment = document.createDocumentFragment();
            elems.forEach( function( elem ) {
                fragment.appendChild( elem );
            });
            return querySelect( this.options.items, fragment );
        }
        return null;
    }

    measureColumnHeight(elem) {
        var boundingRect = this.element.getBoundingClientRect();
        this.activeColumns.forEach( function( column, i ) {
          // if elem, measure only that column
          // if no elem, measure all columns
          if ( !elem || column.contains( elem ) ) {
                var lastChildRect = column.lastElementChild.getBoundingClientRect();
                // not an exact calculation as it includes top border, and excludes item bottom margin
                this.columnHeights[ i ] = lastChildRect.bottom - boundingRect.top;
          }
        }, this );
    }

    // Event Methods
    onWindowResize() {
        clearTimeout( this.resizeTimeout );
        this.resizeTimeout = setTimeout( function() {
            this.onDebouncedResize();
        }.bind( this ), 100 );
    }

    onDebouncedResize() {
        var activeColumns = this.getActiveColumns();
        // check if columns changed
        var isSameLength = activeColumns.length == this.activeColumns.length;
        var isSameColumns = true;
        this.activeColumns.forEach( function( column, i ) {
            isSameColumns = isSameColumns && column == activeColumns[i];
        });
        if ( isSameLength && isSameColumns ) {
            return;
        }
        // activeColumns changed
        this.activeColumns = activeColumns;
        this._layout();
    }

    onLoad(event) {
        this.measureColumnHeight( event.target );
    }

    // Destroy
    destroy() {
        // move items back to container
        this.items.forEach( function( item ) {
            this.element.appendChild( item );
        }, this );
        // remove events
        window.removeEventListener( 'resize', this._windowResizeHandler );
        this.element.removeEventListener( 'load', this._loadHandler, true );
        // remove data
        delete this.element.colcadeGUID;
        delete instances[ this.guid ];
    }
}

export default Colcade;
