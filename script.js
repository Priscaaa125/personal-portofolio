document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });

    // 2. Anonymous Chat Logic
    const btnSend = document.getElementById('btnSend');
    const chatInput = document.getElementById('chatInput');
    const msgBox = document.getElementById('msgBox');
    const msgText = document.getElementById('msgText');

    if (btnSend) {
        btnSend.addEventListener('click', () => {
            const message = chatInput.value.trim();
            if (message !== "") {
                msgBox.style.display = "block";
                msgText.innerText = `"${message}"`;
                chatInput.value = "";
                alert("Anonymous message sent!");
                // Auto-scroll to message
                msgBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                alert("Please write something first.");
            }
        });
    }

    // 3. Terminal Overlay Logic
    const termBtn = document.getElementById('termBtn');
    const overlay = document.getElementById('hackedOverlay');
    const dateNow = document.getElementById('dateNow');
    const closeTermBtn = document.getElementById('closeTermBtn');

    if (termBtn) {
        termBtn.addEventListener('click', () => {
            overlay.classList.add('active');
            dateNow.innerText = "Timestamp: " + new Date().toLocaleString();
            document.body.style.overflow = 'hidden'; // Stop scrolling when open
        });
    }

    if (closeTermBtn) {
        closeTermBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto'; // Resume scrolling
        });
    }
});
// Tambahkan di dalam document.addEventListener('DOMContentLoaded', () => { ... })

const themeBtn = document.getElementById('themeBtn');
const currentTheme = localStorage.getItem('theme');

// Cek tema yang tersimpan di memori browser
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>'; // Ubah ikon ke matahari
    }
}

// Fungsi ganti tema saat tombol diklik
themeBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});