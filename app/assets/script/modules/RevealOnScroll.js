import throttle from "lodash/throttle";
import debounce from "lodash/debounce";
class RevealOnScroll {
    constructor(els, revealPoint) {
        this.revealPoint = revealPoint;
        this.itemsToReveal = els;
        this.browserHight = window.innerHeight;
        this.hideImitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }
    events() {
        window.addEventListener("scroll", this.scrollThrottle);
        window.addEventListener("resize", debounce(() => {
            console.log("resize jasap jatrm");
            this.browserHight = window.innerHeight;
        }, 300))
    }
    calcCaller() {
        console.log("function jumistap tur");
        this.itemsToReveal.forEach(el => {
            if (el.isRevealed == false) {
                this.calculateIfScrolledTo(el);
            }
        });
    }

    calculateIfScrolledTo(el) {
        if (window.scrollY + this.browserHight > el.offsetTop) {
            console.log("Toosolol hiij baina");
            let scrollPercent = (el.getBoundingClientRect().y / this.browserHight) * 100
            if (scrollPercent < this.revealPoint) {
                el.classList.add("reveal-item--is-visible");
                el.isRevealed = true;
                if (el.isLastItem) {
                    window.removeEventListener('scroll', this.scrollThrottle)
                }
            }
        }
    }
    hideImitially() {
        this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item");
            el.isRevealed = false;
        });
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }
}
export default RevealOnScroll;