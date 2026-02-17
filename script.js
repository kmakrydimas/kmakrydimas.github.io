// 1. Scroll Effect: Hero Title to Navbar
window.addEventListener('scroll', () => {
    const navLogo = document.getElementById('nav-logo');
    const heroTitle = document.getElementById('hero-title');
    const navbar = document.getElementById('navbar');
    
    const trigger = heroTitle.offsetTop + heroTitle.offsetHeight;

    if (window.scrollY > trigger) {
        navLogo.classList.add('visible');
        navbar.style.background = 'rgba(0,0,0,0.95)';
    } else {
        navLogo.classList.remove('visible');
        navbar.style.background = 'rgba(0,0,0,0.8)';
    }
});

// 2. Modals Logic
function openModal(type) {
    const modal = document.getElementById('modal');
    const text = document.getElementById('modal-text');
    
    let content = "";
    switch(type) {
        case 'single': content = "<h2>Μονόκλινο</h2><p>Ιδανικό για έναν επισκέπτη. Διαθέτει WiFi, AC και TV.</p>"; break;
        case 'double': content = "<h2>Δίκλινο</h2><p>Ευρύχωρο δωμάτιο για δύο άτομα.</p>"; break;
        case 'policy': content = "<h2>Πολιτική Ξενοδοχείου</h2><p>Εδώ αναγράφονται οι κανονισμοί...</p>"; break;
        case 'covid': content = "<h2>Covid-19</h2><p>Τηρούμε όλα τα πρωτόκολλα υγιεινής.</p>"; break;
        default: content = "<h2>Πληροφορίες</h2><p>Λεπτομέρειες σύντομα.</p>";
    }
    
    text.innerHTML = content;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('active');
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}