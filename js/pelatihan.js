document.addEventListener("DOMContentLoaded", function () {
    const trainingItems = document.querySelectorAll(
        "#trainingList .training-item"
    );

    const toggleBtn = document.getElementById("trainingToggleBtn");
    const toggleWrapper = document.getElementById(
        "trainingToggleWrapper"
    );

    const maxTrainings = 3;
    let showAll = false;

    function updateTrainings() {
        trainingItems.forEach((item, index) => {
            if (showAll || index < maxTrainings) {
                item.classList.remove("d-none");
            } else {
                item.classList.add("d-none");
            }
        });

        // Sembunyikan tombol jika pelatihan berjumlah 3 atau kurang
        if (trainingItems.length <= maxTrainings) {
            toggleWrapper.classList.add("d-none");
            return;
        }

        toggleWrapper.classList.remove("d-none");

        toggleBtn.innerHTML = showAll
            ? 'Tampilkan Lebih Sedikit <i class="bi bi-chevron-up ms-2"></i>'
            : 'Semua Pelatihan <i class="bi bi-chevron-down ms-2"></i>';

        toggleBtn.setAttribute("aria-expanded", showAll);
    }

    toggleBtn.addEventListener("click", function () {
        showAll = !showAll;
        updateTrainings();

        // Kembali ke bagian pelatihan saat daftar ditutup
        if (!showAll) {
            document.getElementById("pengalaman").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });

    updateTrainings();
});
