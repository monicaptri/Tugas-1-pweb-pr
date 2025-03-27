const loadMore = document.querySelector(".load-more-btn");
let jumlahitem = 3;

loadMore.addEventListener("click", () => {
    let boxes = document.querySelectorAll(".testi-box .box"); // Ambil semua box
    for (let i = jumlahitem; i < jumlahitem + 3; i++) {
        if (boxes[i]) { // Pastikan elemen ada sebelum mengubah display
            boxes[i].style.display = "inline-block";
        }
    }

    jumlahitem += 3;

    // Sembunyikan tombol jika semua box sudah ditampilkan
    if (jumlahitem >= boxes.length) {
        loadMore.style.display = "none";
    }
});
