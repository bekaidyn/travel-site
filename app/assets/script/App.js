import "../styles/styles.css"
import "lazysizes";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

let stickyHeader = new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonials"), 50);
let mobileMenu = new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */ "./modules/Modal")
                .then(x => {
                    modal = new x.default();
                    setTimeout(() => modal.openModal(), 20);
                })
                .catch(() => console.log("Файлыг дуудахад алдаа гарлаа"));
        } else {
            modal.openModal();
        }
    });
});

if (module.hot) {
    module.hot.accept();
}
