// Typing Effect
const text = "Computer Science Student — passionate about data, cybersecurity, and building technology that matters.";
let index = 0;

function type() {
    if (index < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 40);
    }
}
type();

// Scroll Reveal
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add("active");
        }
    });
});

// Cursor Glow
document.addEventListener("mousemove", e => {
    const glow = document.querySelector(".cursor-glow");
    glow.style.left = e.clientX - 100 + "px";
    glow.style.top = e.clientY - 100 + "px";
});