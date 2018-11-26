import st from "./styles.css";

console.log(st)


/**
 * @typedef {{top: string, bottom: string, left: string, right: string, front: string, back: string}} ImageSet
 */


export default class VZCube {
    /**
     * @param {HTMLElement} el 
     * @param {ImageSet} images 
     */
    constructor(el, images) {
        this.el = el;
        this.images = images;

        // add the basic template to the element
        el.innerHTML = containerTemplate;

        // store reference to pivot el
        this._pivot = this.el.querySelector('.vz-cube__pivot');
        if (!this._pivot) throw new Error(`Couldn't find pivot element.`);

        // create the face objects and add them to the pivot
        populateFaces(this._pivot, images);

        // animation control
        this.isAnimating = false;
        this.isDragging = false;
        this.isFrozen = false;

        // this._draggingMultiplier = 0.1

        // this.yaw = 0
        // this.pitch = 0
        // this.roll = 0

        // this._handleMouseDown = this._handleMouseDown.bind(this)
        // this._handleMouseMove = this._handleMouseMove.bind(this)
        // this._handleMouseUp = this._handleMouseUp.bind(this)
        // this._handleTouchStart = this._handleTouchStart.bind(this)
        // this._handleTouchMove = this._handleTouchMove.bind(this)
        // this._handleTouchEnd = this._handleTouchEnd.bind(this)
        // this._processAnimation = this._processAnimation.bind(this)
        // this._refresh = this._refresh.bind(this)
    }
}


const containerTemplate = `
    <div class="vz-cube">
        <div class="vz-cube__pivot">
        </div>
    </div>
`;


/**
 * Create the face elements and add them to the el.
 * 
 * @param {HTMLElement} el  The pivot element.
 * @param {ImageSet} images 
 */
function populateFaces(el, images) {
    el.innerHTML = Object.keys(images)
        .map(side => `<div data-face="${side}" class="vz-cube__face" style="background-image: url(${images[side]})" ></div>`)
        .join("\n");
}