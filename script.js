const array = []
const input = document.querySelector(".maincontainerfooter .containerfooter input")
const button = document.querySelector("footer .maincontainerfooter .containerfooter button");

button.addEventListener("click", () => {
    // console.log("Tombol diklik!");
    if (input.value == "") {
        console.log('ketik sesuatu')
        return
    }
    const peringatan = document.querySelector('.midcontainer .peringatan')
    peringatan.innerText = 'kegiatan kamu';
    if (peringatan.innerText !== 'kamu belum memiliki kegiatan apapun') {
        const np = document.createElement('p');
        np.classList.add('kegiatan')
        np.innerText = input.value; // Simpan teks input ke elemen <p>

        const midc = document.querySelector('.midcontainer');
        midc.appendChild(np);

        array.push(input.value); // Simpan teks ke array
        input.innerText = ''
    }

    input.value = "";
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Mencegah perilaku default (misalnya, form submit jika ada)
        button.click(); // Menjalankan event klik pada tombol
    }
});
