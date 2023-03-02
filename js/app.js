
const sidebarNav = document.querySelector('.sidebar-nav');

const sections = document.querySelectorAll("section[id]");

const goToTop = document.querySelector('.go-to-top');

const aboutImage = document.querySelector('.about-image');

const frame = document.querySelector('.frame');

window.addEventListener('load', () => {
    const preloadIcon = document.querySelector(".preloader-icon");
    const preload = document.querySelector(".preloader");
    setTimeout(() => {
        preloadIcon.classList.add("fade-out-slow");
    }, 1000)
    setTimeout(() => {
        preload.classList.add("fade-out-fast");
    }, 1500);
    setTimeout(() => {
        preload.style.display = "none";
    }, 2000);
});

setTimeout(() => {
    typeWriter();
}, 2200);

function typeWriter() {
    if ($(".text-slider").length == 1) {

        var typed_strings =
            $(".text-slider-items").text();

        var typed = new Typed(".text-slider", {
            strings: typed_strings.split(", "),
            typeSpeed: 40,
            loop: true,
            backDelay: 1500,
            backSpeed: 40,
        });
    }

}


window.addEventListener("scroll", navHighlighter);


document.addEventListener("mousemove", parallax);

function parallax(event) {
    const position1 = 1;
    const position2 = 1;

    const x = (window.innerWidth - event.pageX * position1) / 110;
    const y = (window.innerHeight - event.pageY * position1) / 110;

    const a = (window.innerWidth - event.pageX * position2) / 90;
    const b = (window.innerHeight - event.pageY * position2) / 90;

    aboutImage.style.transform = `translateX(${x}px) translateY(${y}px)`;
    frame.style.transform = `translateX(${a}px) translateY(${b}px)`;
}

/* goToTop.style.display = 'none';
 */

function navHighlighter() {

    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".sidebar-nav a[href*=" + sectionId + "]").classList.add("active");
        } else {

            document.querySelector(".sidebar-nav a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}








