// menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const navIconList = document.querySelector('.nav-icon-list');

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
});

