
document.addEventListener("DOMContentLoaded", function () {
    const projectItems = document.querySelectorAll(
        "#projectList .project-item"
    );

    const toggleBtn = document.getElementById("projectToggleBtn");
    const toggleWrapper = document.getElementById(
        "projectToggleWrapper"
    );

    const maxProjects = 6;
    let showAll = false;

    // Sembunyikan proyek setelah enam proyek pertama
    function updateProjects() {
        projectItems.forEach((project, index) => {
            if (showAll || index < maxProjects) {
                project.classList.remove("d-none");
            } else {
                project.classList.add("d-none");
            }
        });

        // Sembunyikan tombol jika jumlah proyek maksimal enam
        if (projectItems.length <= maxProjects) {
            toggleWrapper.classList.add("d-none");
            return;
        }

        toggleWrapper.classList.remove("d-none");

        toggleBtn.innerHTML = showAll
            ? 'Tampilkan Lebih Sedikit <i class="bi bi-chevron-up ms-2"></i>'
            : 'Semua Projek <i class="bi bi-chevron-down ms-2"></i>';

        toggleBtn.setAttribute("aria-expanded", showAll);
    }

    // Klik tombol untuk menampilkan atau menyembunyikan proyek
    toggleBtn.addEventListener("click", function () {
        showAll = !showAll;
        updateProjects();

        // Gulir kembali ke bagian proyek saat menutup daftar
        if (!showAll) {
            document.getElementById("proyek").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });

    updateProjects();
});
