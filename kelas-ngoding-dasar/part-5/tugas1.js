// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
// ada sebuah permainan, jika seseorang masuk dalam game tersebut dengan nama kosong maka ada pesan peringan berupa "nama wajib diisi"
// dan jika seseorang masuk dalam game tersebut dengan peran kosong maka ada pesan peringan berupa "pilih peranmu untuk memulai game"
// jika nama tidak kosong, pemain dapat memilih peran
// terdapat 3 peran yaitu Ksatria, Tabib, dan Penyihir
// terdapat 4 response terdapah 4 pilihan peran

let nama = "andi",
    peran = "Ksatria";

//code disini gunakan console.log untuk outputnya

if (nama == null) {
    console.log("nama wajib diisi");
} else if (peran == "Ksatria") {
    console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu`);
} else if (peran == "Tabib") {
    console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
} else if (peran == "Penyihir") {
    console.log(
        `halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu`
    );
} else {
    console.log(
        "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
    );
}
