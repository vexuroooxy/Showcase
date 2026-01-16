// ================================
// NAVBAR ACTIVE (SEMUA HALAMAN)
// ================================
const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage || 
        (currentPage === "" && link.getAttribute("href") === "index.html")) {
        link.classList.add("active");
    }
});


// ================================
// ANIMASI SAAT SCROLL
// ================================
const animatedItems = document.querySelectorAll(".team-card, li");

function animateOnScroll() {
    animatedItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight - 100) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", animateOnScroll);
animateOnScroll(); // jalan saat halaman dibuka


// ================================
// CONTACT BUTTON (HANYA JALAN DI CONTACT)
// ================================
function kirimPesan() {
    alert("Pesan berhasil dikirim. Terima kasih!");
}
