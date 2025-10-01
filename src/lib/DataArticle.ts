interface Article {
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  content: string; // ✅ Tambahkan properti content
}

export const articles: Article[] = [
  {
    category: "Berita",
    date: "09 Juni 2025",
    title:
      "Mengapa Memilih Agensi Manning MSC Cruises Kami yang Berbasis di Jakarta",
    description:
      "Jika Anda ingin memulai karir di laut dengan salah satu jalur pelayaran paling bergengsi di dunia, MSC Cruises, memilih agen manning yang tepat adalah langkah pertama—dan terpenting—Anda. Di agen manning MSC Cruises kami yang berbasis di Jakarta, kami berspesialisasi dalam menghubungkan pelaut Indonesia berbakat dengan peluang kapal pesiar global. Inilah mengapa ratusan pelamar mempercayai kami dengan perjalanan mereka:",
    image: "/images/article/msc.jpg",
    slug: "mengapa-memilih-agensi-manning-msc-cruises-kami-di-jakarta",
    content: `
            
                  <h5>1. Kami Adalah Mitra Perekrutan Resmi untuk MSC Cruises</h5>
                  <p>Sebagai agen resmi MSC Cruises di Jakarta, kami mengikuti standar internasional yang ketat dalam rekrutmen, pelatihan, dan penempatan. Itu berarti Anda dapat mempercayai prosesnya transparan, profesional, dan sepenuhnya sesuai dengan persyaratan industri.</p>
                
                  
                  <h5>2. Kantor Lokal, Akses Global</h5>
                  <p>Agensi kami berlokasi strategis di Jakarta, memberikan akses yang lebih mudah bagi calon anggota kru di seluruh Indonesia. Anda tidak perlu lagi melalui perantara yang tidak jelas atau kantor yang jauh. Anda dapat datang ke kantor kami di Jakarta dan berbicara langsung dengan para profesional yang memahami industri kapal pesiar luar dalam.</p>
                 
                  
                  <h5>3. Dukungan dari Awal hingga Akhir<h5>
                  <p>Mulai dari persiapan CV dan panduan wawancara hingga pemrosesan visa dan keberangkatan, kami menawarkan dukungan penuh selama aplikasi Anda. Kami tidak hanya merekrut — kami membimbing, memandu, dan mendampingi Anda sampai Anda aman di atas kapal.</p>
                  
                  <h5>4. Nol Biaya Tersembunyi</h5>
                  <p>Kami mempertahankan kebijakan “tanpa biaya tersembunyi” yang ketat. Transparansi adalah salah satu nilai terkuat kami. Kami dengan jelas mengkomunikasikan biaya apa pun yang terkait dengan pemeriksaan medis, sertifikasi, atau pemrosesan visa. Tidak ada biaya penempatan atau pemotongan yang tidak etis dari gaji Anda.</p>
                 
                  
                  <h5>5. Dibangun untuk Pekerja Migran Indonesia</h5>
                  <p>Kami percaya kru Indonesia memiliki apa yang diperlukan untuk bersinar di panggung dunia. Itulah mengapa pelatihan, orientasi, dan komunikasi kami disesuaikan untuk mendukung pelamar berbahasa Indonesia dan mempersiapkan mereka untuk lingkungan kapal pesiar yang berbahasa Inggris.</p>
                  
                  <h5>✨ Mulai Karir Kapal Pesiar Anda Hari Ini</h5>
                  <p>Jika Anda mencari “agensi MSC Cruises Jakarta”, Anda telah menemukan mitra yang tepat. Kami di sini untuk mewujudkan impian Anda bekerja di laut — dengan kejujuran, dukungan, dan profesionalisme.</p>
                  
                 
              `,
  },
  {
    category: "Tips",
    date: "22 Mar 2024",
    title: "Begini Tipsnya Supaya Bisa Sukses Kerja di Kapal Pesiar",
    description:
      "Bekerja di kapal pesiar merupakan cara terbaik untuk melihat dunia, mengumpulkan uang dan bertemu orang baru dari berbagai negara. Simak tips sukses bekerja di kapal pesiar!",
    image: "/images/crew/1.jpeg",
    slug: "tips-sukses-kerja-di-kapal-pesiar",
    content: `
  
        <h5>1. Putuskan terlebih dahulu apakah pekerjaan dan karir di kapal pesiar adalah pilihan yang tepat untuk Anda</h5>
        <p>Meskipun bisa menjadi cara yang bagus untuk melihat dunia, kerja di kapal pesiar tidaklah mudah. Oleh karenanya ada beberapa hal yang harus Anda pertimbangkan jika ingin kerja di kapal pesiar.</p>
        <ul>
            <li>Tentukan apakah Anda mudah terkena mabuk laut. Mabuk laut ringan memang bisa sewaktu-waktu terjadi, mengingat pekerjaan di kapal pesiar yang memakan waktu hingga berbulan-bulan. Namun perlu Anda ketahui, awak kapal pesiar umumnya tidur di bagian bawah kapal dengan ruangan sempit dan hanya ada beberapa jendela saja. Jika hal ini bisa menjadi masalah bagi Anda, apalagi Anda mudah terkena mabuk laut, maka kapal pesiar mungkin tidak akan menjadi lingkungan yang baik untuk Anda bekerja.</li>
            <li>Ingatlah bahwa di kapal pesiar, Anda akan bekerja hingga 7 hari dalam seminggu. Orang-orang yang bekerja di kapal pesiar memiliki jam kerja yang bervariasi setiap harinya. Anda mungkin akan mendapatkan 2 sampai 4 bulan liburan selama kontrak, tetapi Anda juga bisa diminta untuk bekerja hingga 14 jam per hari.</li>
            <li>Putuskan apakah Anda bisa bertahan bekerja selama berbulan-bulan tanpa atau dengan sedikit komunikasi dengan dunia luar (keluarga, teman atau orang terdekat). Pekerjaan di kapal pesiar sering diambil oleh anak muda yang masih lajang, ini karena awak kapal pesiar harus bekerja selama berbulan-bulan jauh dari rumah. Akses Internet tersedia di kapal, tapi biasanya Anda dikenai biaya tambahan untuk menggunakannya.</li>
        </ul>
        
        <h5>2. Pahami bagaimana kapal pesiar beroperasi</h5>
        <p>Anda perlu mempelajari secara umum bagaimana sebuah kapal pesiar beroperasi. Meskipun operasional kapal pesiar mirip dengan hotel, namun tentu terdapat banyak perbedaan antara kapal pesiar dengan hotel.</p>
        <ul>
            <li>Awak kapal pesiar dalam pekerjaannya akan sangat sering berinteraksi dengan penumpang, meskipun terkadang bukan disaat jam bekerja.</li>
            <li>Awak kapal biasanya diberikan 1 kamar tidur masing-masing, namun ada juga yang harus sekamar dengan karyawan lain, tergantung dengan jenis kapal pesiar serta tingkatan pekerjaan.</li>
            <li>Karyawan pada tingkatan jabatan paling rendah biasanya tinggal di bagian bawah dek kapal dan mendapat waktu kerja yang lebih banyak. Beberapa karyawan juga tidak diperbolehkan untuk meninggalkan kapal pesiar ketika berlabuh suatu negara atau di destinasi wisata.</li>
        </ul>
        
        <h5>3. Buat daftar lowongan kerja di kapal pesiar</h5>
        <p>Kunjungi beberapa website perusahaan kapal pesiar terbesar di dunia untuk melihat apakah ada lowongan pekerjaan di perusahaan tersebut. Biasanya perusahaan-perusahaan itu akan memasang pengumuman di website mereka jika ada lowongan pekerjaan.</p>
        <p>Ingatlah bahwa Anda akan bersaing dengan ratusan atau bahkan ribuan pelamar. Oleh karena itu buat sebanyak mungkin daftar lowongan kerja di kapal pesiar yang tersedia agar kesempatan Anda pun semakin bertambah.</p>
        
        <h5>4. Buat resume atau Curriculum Vitae (CV) untuk setiap lowongan kerja di kapal pesiar yang Anda targetkan</h5>
        <p>Di bawah ini merupakan pedoman umum resume untuk lamaran kerja kapal pesiar:</p>
        <ul>
            <li>Pastikan resume Anda dibuat dalam bentuk file Microsoft Word, Portable Document Format (PDF) atau Rich Text Format.</li>
            <li>Buat daftar pengalaman kerja Anda dimulai dari yang paling terakhir.</li>
            <li>Masukkan keterampilan (skill) di bawah setiap riwayat pekerjaan yang mengarah pada posisi yang Anda lamar di kapal pesiar.</li>
            <li>Buat daftar riwayat pendidikan dimulai dari pendidikan yang paling tinggi.</li>
            <li>Buat daftar bahasa yang Anda kuasai, termasuk tingkat penguasaan Anda terhadap bahasa tersebut, misalnya lancar (aktif) atau kurang atau (pasif).</li>
            <li>Buat bagian khusus di lamaran kerja Anda untuk menunjukkan keterampilan (skill) Anda yang berhubungan dengan posisi yang akan Anda lamar di kapal pesiar tersebut.</li>
            <li>Sertakan juga foto diri (jika diminta).</li>
            <li>Sertakan 2 sampai 3 referensi dari orang-orang yang berkompeten untuk menilai kemampuan Anda dalam bekerja.</li>
        </ul>
        
        <h5>5. Buat surat lamaran yang meyakinkan</h5>
        <p>Tulis lamaran Anda sebanyak 400 kata atau kurang, berikan format tebal (bold) untuk pengalaman kerja, keterampilan dan pendidikan Anda yang menunjukkan bahwa Anda cocok untuk posisi yang Anda lamar tersebut. Jika Anda melamar lebih dari satu posisi, buat beberapa surat lamaran dengan format yang berbeda-beda. Mungkin pada posisi pekerjaan tertentu Anda ingin menonjolkan kemampuan Anda dalam bidang tertentu pula.</p>
        
        <h5>6. Ajukan lamaran pekerjaan ke perusahaan kapal pesiar besar dan perusahaan kapal pesiar yang lebih kecil</h5>
        <p>Jika Anda belum diterima bekerja di perusahaan kapal pesiar yang besar dan hanya diterima di perusahaan kapal pesiar kecil, maka gunakan kesempatan tersebut untuk menambah pengalaman kerja Anda. Jika Anda memiliki banyak pengalaman kerja, maka akan lebih mudah untuk diterima di perusahaan kapal pesiar besar. Jika Anda memiliki pengalaman dalam bidang wisata minat khusus, jadikan hal itu sebagai nilai tambah untuk dimasukkan di resume Anda.</p>
        
        <h5>7. Hubungi penyedia jasa penyaluran tenaga kerja untuk kapal pesiar atau situs web khusus lowongan kerja kapal pesiar jika Anda kesulitan mencari pekerjaan di situs web perusahaan kapal pesiar</h5>
        <p>Jasa penyaluran tenaga kerja maupun situs web lowongan kerja biasanya akan memungut biaya untuk dapat menggunakan jasa mereka. Oleh karena itu, cek dulu keabsahan dan perizinan dari jasa maupun situs web tersebut agar Anda tidak tertipu.</p>
        <p>Nah, gimana, sudah siapkah Anda bekerja di atas air alias di kapal pesiar? Jika Anda memiliki pertanyaan silahkan hubungi kami.</p>
    `,
  },
  {
    category: "Pekerjaan",
    date: "22 Mar 2024",
    title: "Ini Pilihan Profesi Yang Bisa Anda Lakukan di Kapal Pesiar",
    description:
      "Bekerja di kapal pesiar merupakan salah satu impian sebagian orang. Selain mendapatkan gaji yang lumayan tinggi, mereka juga mendapatkan kesempatan untuk mengunjungi berbagai negara secara gratis dan mendapat kenalan baru.Berikut delapan profesi di kapal pesiar yang mungkin bisa Anda tekuni. Simak sampai habis, ya!",
    image: "/images/crew/2.jpeg",
    slug: "pilihan-profesi-di-kapal-pesiar",
    content: `
       <h5>1. Pelayan Bar</h5>
       <p>Pelayan bar atau bar waitress bekerja di bawah tanggung jawab Departemen food and beverage di kapal pesiar. Mereka bertugas melayani tamu bar, menyajikan minuman dan juga melapor ke pengawas bar. Anda bisa saja menerima tip bila tamu senang dan puas atas pelayanan yang ramah.</p>
       
       <h5>2. Pelayan Kabin</h5>
       <p>kapal pesiar. Selain bersih-bersih, pelayan kabin juga bisa menerima laundry dari pihak tamu. Pelayan kabin masuk dalam the housekeeping and accommodation department di sebuah kapal pesiar.
</p>
       <h5>3. Dokter
</h5>
       <p>Kalau Anda sebelumnya berprofesi sebagai dokter dan kebetulan ingin jalan-jalan, tidak ada salahnya bekerja sebagai dokter di kapal pesiar.

Anda akan bertugas memberikan pengobatan pada tamu dan awak kapal. Tentu saja Anda harus punya lisensi dan berpengalaman. 
</p>

       <h5>4. Manajer Restoran</h5>
       <p>Seorang manajer restoran juga masuk dalam departemen food and beverage juga. Tugasnya mengatur operasional restoran dan langsung bertanggung jawab pada general manager kapal pesiar. Untuk menjadi restaurant manager, Anda jelas harus punya pengalaman di bidang restoran sebelumnya. 
</p>

       <h5>5. Lifeguard</h5>
       <p>Anda akan bertugas menjaga keamanan kolam renang yang digunakan oleh para tamu termasuk juga menolong tamu bila ada kecelakaan di kolam renang. Pekerjaan ini tentu menyenangkan untuk Anda yang suka berenang. 
</p>

       <h5>6. Activity Coordinator</h5>
       <p>Kalau Anda suka mengatur dan menyusun rencana kegiatan bersenang-senang, mungkin Anda cocok untuk jabatan ini. Di sebuah kapal pesiar seorang activity coordinator bukan saja harus kreatif dan ramah, mereka juga harus mampu membuat tamu senang dengan ragam aktivitas yang diciptakannya.

Untuk bisa mengambil posisi ini Anda harus punya pendidikan spesifik dan berpengalaman minimal empat tahun.
</p>

       <h5>7. Akuntan</h5>
       <p>Yup, kapal pesiar ternyata membutuhkan akuntan yang mumpuni dalam mempersiapkan laporan keuangan. Mereka harus mampu membaca neraca kesimbangan, laporan laba rugi dan bertanggung jawab dalam menganalisis pendapatan, pengeluaran dan hal-hal lain yang berhubungan dengan keuangan.</p>
       
       <h5>8. Cruise Staff (Staf kapal pesiar)</h5>
       <p>Seorang Cruise Staff bertugas untuk menolong aktivitas penumpang, seperti membantu tamu mengurus bagasi dan menyediakan layanan untuk tamu. Keberadaan mereka sangatlah penting. Anda tidak perlu memiliki pengalaman khusus untuk menjadi staf kapal pesiar, lho.


</p>

<p>
Nah, jadi mana profesi yang Anda minati? Jika masih bingung atau galau memilih, Anda bisa menghubungi kami di …… Kami akan memberikan semua informasi yang Anda butuhkan untuk bisa bergabung bersama kami.</p>
      `,
  },
  {
    category: "Tips",
    date: "22 Mar 2024",
    title: "Mau Jadi Fotografer di Kapal Pesiar? Simak Caranya Disini!",
    description:
      "Departemen foto, biasanya di kapal pesiar bisa terdiri dari 3 sampai 15 orang fotografer (tergantung pada ukuran kapal) dan menawarkan pekerjaan sebagai berikut: photo manager, assistant photo manager, photographer, junior photographer dan videographer. ",
    image: "/images/article/3.png",
    slug: "mau-jadi-fotografer-di-kapal-pesiar-simak-caranya",
    content: `
          <h5>1. Mengambil gambar</h5>
       <p>Sangatlah sulit untuk mengerjakan semua aktivitas dan kegiatan yang terjadi di sebuah kapal pesiar yang bisa ditangkap oleh fotografer atau videografer. Ada dua jenis kerja harian khas untuk seorang fotografer di sebuah kapal pesiar, yaitu hari pelabuhan (ketika kapal berada di pelabuhan) dan hari laut (ketika kapal berada di lautan). 
Pada hari pelabuhan fotografer kapal pesiar akan mengambil foto di gangway ketika penumpang meninggalkan atau memasuki kapal atau darat juga fotografer Mungkin harus ikut berwisata untuk mengambil gambar dari penumpang dengan pemandangan bagus berlatar belakang - gletser, gunung berapi, landmark penting, dan sebagainya.
</p>
<p>
Ketika kapal berhenti di salah satu dari banyak "pulau pribadi", fotografer akan mengambil foto pantai. Di hari laut, fotografer akan mengambil foto sepenuhnya pada kapal tersebut. Berbagai foto akan mencakup fotografi profesional, fotografi candid atau sosial. Pada malam bertema khusus fotografer kapal pesiar akan memakai kostum yang berbeda dan berpose dengan para penumpang.</p>

<p>
Aspek lain dari pekerjaan fotografer kapal pesiar adalah mengambil foto pernikahan. Jumlah acara pernikahan yang berlangsung di atas kapal kapal pesiar semakin meningkat dan ini adalah kesempatan untuk berlatih fotografi pernikahan dan mendapatkan penghasilan tambahan untuk para fotografer kapal.
</p>
<h5>2. Pengolahan dan pencetakan gambar</h5>
<p>Kegiatan ini berlangsung di laboratorium foto kapal pesiar. Tidak semua anggota fotografi kapal pesiar, yang memenuhi syarat bisa melakukan tugas ini. Ada pelatihan khusus, walaupun biasanya pada akhir kontrak pertama sebagian besar fotografer menjadi terbiasa dengan pemrosesan dan pencetakan foto. Begitu juga dengan videographer kapal pesiar mengedit dan mentransfer ke disk rekaman video mereka.</p>
<h5>3. Menjual foto dan video</h5>
<p>
Kegiatan ini berlangsung di Galeri Foto dan Toko Photo Retail di kapal kapal pesiar. Fotografer mengambil peranan sebagai foto konsultan penjualan ritel, menjual foto, video, album, frame, folio, kamera dan aksesoris foto sehingga mendapatkan komisi individu pada semua penjualan. Toko Photo Retail di kapal kapal pesiar juga menawarkan pencetakan foto yang diambil oleh tamu dengan kamera pribadi mereka. Mengenai aspek kemampuan pekerjaan menjual adalah penting. Salesman yang lebih punya skil menjual yang bagus bisa mendapatkan komisi yang lebih banyak pada akhir perjalanan kapal pesiar.
</p>
      `,
  },
  {
    category: "Tips",
    date: "22 Mar 2024",
    title: "Pentingnya Keselamatan Diri Saat Berada di Luar Kapal",
    description:
      "Keselamatan diri adalah hal yang paling penting saat bekerja di kapal pesiar. Berikut beberapa tips yang bisa Anda lakukan untuk menjaga keselamatan diri Anda saat berada di luar kapal.",
    image: "/images/article/2.png",
    slug: "pentingnya-keselamatan-diri-saat-berada-di-luar-kapal",
    content: `
       <p>
       Apa sih yang paling disukai bagi crew member saat menjalani kontrak kerja kapal pesiar selain saat gajian? Yap, shore leave alias jalan-jalan keluar kapal pesiar saat  sedang tidak ada jadwal kerja. Bagi rekan-rekan seakan mendapatkan durian runtuh ketika menemui namanya tercantum dalam daftar CREW OFF hari itu. 
       </p>
       
       <p>
       Beruntung bagi yang mempunyai manager "bagus" bisa memberikan jadwal libur yang sudah ditetapkan di awal bulan. Jadwal libur dadakan pun tetap disyukuri asal bisa keluar kapal pesiar sekedar menghirup udara segar atau mengunjungi obyek wisata disekitar port.
       </p>
       
       <p>
       Semua perusahaan kapal pesiar punya regulasi ketat kepada crew-nya tentang peraturan/himbauan saat berada di luar kapal. Selain peraturan dasar untuk mematuhi hukum setempat, juga himbauan untuk tidak keluar kapal sendiri, tidak boleh merental kendaraan atap terbuka, tidak boleh melakukan extreme sport (bungee jumping, jetski, off road tour) jangan mudah percaya ajakan guide lokal, sopir taksi tanpa argo dan lain-lain. 
       </p>
       
       <p>
       Terkadang crew member merasa terlalu percaya diri keluar kapal sendiri (atau memang inginnya begitu), merasa mengetahui area bahkan bahasa penduduk setempat, atau terlalu bersemangat keluar kapal namun tidak ada rekan yang bisa menemani. 
       </p>
       
       <p>
       Tak jarang terjadi kejahatan yang menimpa, apalagi bukan di negara sendiri. Hl-hal seperti kecopetan, perampokan, bahkan penculikan bisa saja menghampiri para crew yang sedang berjalan-jalan. Makanya tidak diperbolehkan bepergian sendirian.
       </p>
       
       <p>
       Perusahaan kapal pesiar tidak semudah itu menanggung kerugian kita jika suatu saat kita tertimpa musibah ketika sedang berada di luar kapal. Dilakukan investigasi khusus apakah kita menyalahi aturan yang telah ditandatangani saat kita pertama kali sign on kapal pesiar. 
       </p>
       
       <p>
       Maka dari itu, hendaklah dipikir dulu jika akan keluar kapal bersama siapa. Bila belum pernah mengeksplor daerah tersebut tidak ada salahnya bertanya ke senior mengenai port yang dituju. Bisa juga googling mengenai port tersebut. Hindari terlalu show up seperti membawa kamera canggih, gadget mahal, berpakaian mewah dan terlalu terbuka atau perhiasan berlebihan saat berada di luar kapal area port yang sekiranya kurang aman. 
       </p>
       
       <p>
       Do's and dont's:
       </p>
       <ul>
           <li>Pakai pakaian yang tidak mencolok</li>
           <li>Jangan mengenakan perhiasan mahal</li>
           <li>Jangan terlihat membawa kamera atau handphone</li>
           <li>Berlaku biasa saja dan jangan bertindak terlalu mencolok</li>
           <li>Jangan sendirian, selalu ajak teman</li>
           <li>Bicara seperlunya, jangan terlalu terlihat sebagai orang asing/turis</li>
           <li>Bertanyalah dengan orang setempat yang terlihat baik jika tersesat</li>
           <li>Beri informasi pada crew kapal kemana Anda akan pergi</li>
           <li>Jangan menerima makanan atau minuman dari orang asing yang tidak Anda kenal</li>
           <li>Selalu berjalan di keramaian, jangan tempat sepi</li>
           <li>Jika menyewa kendaraan, sewa lah mobil dan jangan berkendara sendirian</li>
       </ul>
       
      `,
  },
  {
    category: "Tips",
    date: "22 Mar 2024",
    title: "Sifat dan Karakter yang Harus Dimiliki oleh Karyawan Kapal Pesiar",
    description:
      "Layaknya hotel, kapal pesiar merupakan salah satu unit bisnis yang 24 jam melakukan kegiatan operasional. Selain itu intensitas kerja yang cepat dan dinamis menuntut karyawannya untuk dapat menyesuaikan diri. Berikut ini merupakan sifat-sifat yang harus dimiliki oleh karyawan kapal pesiar yang mendukung kinerjanya.",
    image: "/images/article/1.png",
    slug: "sifat-dan-karakter-karyawan-kapal-pesiar",
    content: `
    <h5>1. Kejujuran</h5>
       <p>Kejujuran merupakan sifat mendasar yang wajib dimiliki karyawan perhotelan. Karena kejujuran itu merupakan awal dari sebuah kepercayaan dan kepercayaan akan gugur apabila karyawan yang dipercayai itu melakukan sebuah kebohongan. Di sisi lain, seorang karyawan yang jujur bisa menambah tamu hotel merasa aman dan nyaman.
</p>
       
       <h5>2. Kedisiplinan
</h5>
       <p>Kedisiplinan ini mencakupi kedisiplinan kerja sesuai prosedur, kedisiplinan dalam kehadiran, dan kedisiplinan dalam mematuhi tata tertib/house rule yang ditetapkan oleh kapal pesiar.


</p>
       <h5>3. Keterbukaan
</h5>
       <p>Keterbukaan ini adalah karyawan secara terbuka mau untuk menerima kritikan dan masukan, selain itu keterbukaan ini akan mempermudah manajer atau atasan di dalam mencari solusi atas permasalahan yang sedang dihadapi oleh karyawan.

</p><p>Sebagai contoh, apabila karyawan masih belum mampu mengerjakan sesuatu, maka sebaiknya karyawan secara terbuka bicara dengan manajer atau atasannya bahwa dia masih belum mampu sehingga atasan atau manajer pun akan mengajari karyawan tersebut sampai bisa. Hanya saja, agar seorang karyawan ini mau bersikap terbuka terhadap pimpinannya, seorang pimpinan juga harus memiliki rasa asih, asah, dan asuh sehingga si karyawan tersebut merasa tenang ketika dia terbuka terhadap pimpinannya.

</p>

       <h5>4. Manajer Restoran</h5>
       <p>Seorang manajer restoran juga masuk dalam departemen food and beverage juga. Tugasnya mengatur operasional restoran dan langsung bertanggung jawab pada general manager kapal pesiar. Untuk menjadi restaurant manager, Anda jelas harus punya pengalaman di bidang restoran sebelumnya. 
</p>

       <h5>5. Kemauan untuk belajar hal-hal yang baru</h5>
       <p>Sifat mau untuk belajar hal-hal yang baru ini akan menambah pengetahuan karyawan tersebut, selain itu berguna untuk mengurangi stress pada karyawan akibat pekerjaan yang terlalu monoton setiap hari. Dampak positifnya,karyawan menjadi serba bisa sehingga memudahkan manajer atau atasan dalam melakukan rolling jabatan atau pertukaran pekerjaan.

</p>

       <h5>6. Ramah, santun, sopan dan murah senyum</h5>
       <p>Berhubung kapal pesiar merupakan salah satu bentuk pelayanan publik, jadi wajib hukumnya karyawan memiliki sifat ramah, santun, sopan dan murah senyum. Bisa dibayangkan apabila seorang frontline kapal pesiar galak dan jutek? Pasti tamu akan berpikir ulang untuk menginap di kapal pesiar tersebut.

</p>

       <h5>7. Menekan ego sentris</h5>
       <p>Setiap karyawan pasti memiliki ego masing-masing, akan tetapi agar sejalan dengan tujuan perusahaan maka dibutuhkan kerja sama tim yang solid. Sehingga untuk mencapai sebuah kesepakatan atau keputusan haruslah menghilangkan ego masing-masing. Apabila ego yang berkembang maka tidak akan tercapai kerjasama yang solid. Begitu juga dengan sifat ke-AKUan juga harus dikurangi. Karena bekerja di kapal pesiar itu merupakan teamwork atau kerja sama tim dan bukan one man show.
</p>
       

       
      `,
  },
  {
    category: "Wawancara",
    date: "02 Okt 2025",
    title: "5 Pertanyaan Umum Saat Wawancara Kerja di Kapal Pesiar dan Cara Menjawabnya",
    description: "Persiapkan diri Anda untuk pertanyaan wawancara yang paling umum di industri kapal pesiar dan pelajari cara memberikan jawaban yang mengesankan.",
    image: "/images/crew/3.jpeg",
    slug: "pertanyaan-wawancara-kapal-pesiar",
    content: `
        <h5>1. 'Ceritakan tentang diri Anda'</h5>
        <p>Ini bukan permintaan untuk menceritakan riwayat hidup Anda. Pewawancara ingin tahu ringkasan singkat dan relevan tentang latar belakang profesional Anda. Fokus pada 2-3 pencapaian atau pengalaman kunci yang paling sesuai dengan posisi yang Anda lamar. Hubungkan semangat Anda untuk perhotelan atau perjalanan dengan peran tersebut.</p>
        
        <h5>2. 'Mengapa Anda ingin bekerja di kapal pesiar?'</h5>
        <p>Jawaban Anda harus menunjukkan pemahaman tentang gaya hidup di kapal. Hindari jawaban klise seperti 'Saya suka jalan-jalan'. Sebaliknya, bicarakan tentang keinginan untuk berkarir di lingkungan yang dinamis, bertemu orang-orang dari berbagai budaya, dan komitmen Anda terhadap layanan pelanggan yang luar biasa dalam lingkungan yang unik.</p>
        
        <h5>3. 'Bagaimana Anda menangani situasi sulit dengan tamu?'</h5>
        <p>Gunakan metode STAR (Situation, Task, Action, Result). Ceritakan situasi spesifik di mana Anda menghadapi tamu yang tidak puas. Jelaskan tugas Anda, tindakan yang Anda ambil untuk menyelesaikan masalah, dan hasil positifnya. Ini menunjukkan kemampuan pemecahan masalah dan ketenangan Anda di bawah tekanan.</p>
        
        <h5>4. 'Bagaimana Anda beradaptasi tinggal di ruang terbatas dengan orang lain?'</h5>
        <p>Kehidupan di kabin kru adalah bagian besar dari pekerjaan ini. Tunjukkan bahwa Anda adalah orang yang fleksibel, menghargai privasi orang lain, dan komunikator yang baik. Sebutkan pengalaman sebelumnya tinggal di asrama atau situasi serupa jika ada. Tekankan kemampuan Anda untuk menjadi rekan tim yang kooperatif dan pengertian.</p>
        
        <h5>5. 'Di mana Anda melihat diri Anda dalam 5 tahun?'</h5>
        <p>Perusahaan ingin melihat ambisi dan potensi pertumbuhan Anda di dalam perusahaan mereka. Kaitkan tujuan karir Anda dengan jalur karir yang tersedia di industri kapal pesiar. Tunjukkan bahwa Anda melihat ini sebagai karir jangka panjang, bukan hanya pekerjaan sementara untuk jalan-jalan.</p>
    `
  },
  {
    category: "Karir",
    date: "03 Okt 2025",
    title: "Membangun Karir Jangka Panjang di Industri Kapal Pesiar: Dari Staf Menjadi Manajer",
    description: "Bekerja di kapal pesiar bukan hanya pekerjaan sementara. Pelajari bagaimana Anda dapat membangun jalur karir yang sukses dan berkelanjutan di laut.",
    image: "/images/crew/4.jpeg",
    slug: "karir-jangka-panjang-kapal-pesiar",
    content: `
        <h5>Langkah Awal: Kuasai Peran Anda Saat Ini</h5>
        <p>Kunci untuk promosi adalah keunggulan. Jadilah yang terbaik di posisi Anda saat ini, apakah itu sebagai pelayan, asisten kabin, atau staf hiburan. Tunjukkan inisiatif, keandalan, dan etos kerja yang kuat. Atasan Anda akan memperhatikan.</p>
        
        <h5>Pelajari Keterampilan Baru</h5>
        <p>Manfaatkan pelatihan internal yang ditawarkan oleh perusahaan. Banyak jalur pelayaran memiliki program pengembangan kepemimpinan. Jangan ragu untuk mempelajari departemen lain. Seorang koki yang memahami operasi bar memiliki nilai lebih.</p>
        
        <h5>Bangun Jaringan Profesional</h5>
        <p>Kenali kru dari berbagai departemen. Hubungan baik tidak hanya membuat hidup di kapal lebih menyenangkan, tetapi juga membuka mata Anda terhadap peluang lain. Manajer sering kali lebih suka mempromosikan seseorang yang sudah mereka kenal dan percayai.</p>
        
        <h5>Tunjukkan Kemampuan Kepemimpinan</h5>
        <p>Bahkan tanpa jabatan formal, Anda bisa menunjukkan potensi kepemimpinan. Bimbing anggota tim baru, tawarkan diri untuk proyek-proyek khusus, dan berikan solusi konstruktif untuk masalah tim. Sikap proaktif ini sangat dihargai.</p>
        
        <h5>Komunikasikan Tujuan Anda</h5>
        <p>Bicaralah dengan atasan Anda tentang aspirasi karir Anda. Tanyakan apa yang diperlukan untuk mencapai posisi berikutnya. Ini menunjukkan ambisi Anda dan memungkinkan mereka untuk membimbing Anda. Sebagian besar manajer yang baik ingin melihat tim mereka berhasil.</p>
    `
  },
  {
    category: "Kehidupan Kru",
    date: "04 Okt 2025",
    title: "Kehidupan Sehari-hari Kru Kapal Pesiar: Antara Kerja Keras dan Petualangan",
    description: "Intip di balik layar kehidupan kru kapal pesiar. Ini bukan hanya tentang tujuan eksotis, tetapi juga tentang komunitas, disiplin, dan kerja tim.",
    image: "/images/crew/5.jpeg",
    slug: "kehidupan-kru-kapal-pesiar",
    content: `
        <h5>Pagi Hari: Persiapan untuk Hari yang Sibuk</h5>
        <p>Hari sering dimulai lebih awal, jauh sebelum tamu pertama bangun. Baik itu menyiapkan sarapan prasmanan, membersihkan dek, atau memeriksa sistem keselamatan, efisiensi adalah kuncinya. Ruang kru adalah pusat aktivitas, tempat semua orang berbagi cerita sambil minum kopi cepat.</p>
        
        <h5>Siang Hari: Puncak Pelayanan</h5>
        <p>Saat para tamu menikmati fasilitas kapal atau menjelajahi pelabuhan, para kru bekerja tanpa lelah. Ini adalah waktu untuk layanan makan siang, membersihkan kabin, menjalankan kegiatan, dan memastikan semuanya berjalan lancar. Fleksibilitas sangat penting karena tugas tak terduga bisa muncul kapan saja.</p>
        
        <h5>Waktu Istirahat: Mengisi Ulang Tenaga</h5>
        <p>Waktu istirahat sangat berharga. Kru mungkin menggunakannya untuk tidur siang, pergi ke gym khusus kru, atau sekadar bersantai di bar kru. Ini juga merupakan kesempatan untuk menjelajahi pelabuhan jika jadwal memungkinkan, memberikan petualangan singkat di tengah hari kerja yang panjang.</p>
        
        <h5>Malam Hari: Energi dan Hiburan</h5>
        <p>Malam hari membawa energi baru. Restoran dipenuhi tamu, pertunjukan teater dimulai, dan bar menjadi hidup. Bagi banyak kru, ini adalah waktu tersibuk. Setelah giliran kerja selesai, kru sering berkumpul untuk bersosialisasi, menciptakan ikatan komunitas yang erat yang menjadi ciri khas kehidupan di kapal.</p>
    `
  },
  {
    category: "Keuangan",
    date: "05 Okt 2025",
    title: "Manajemen Keuangan untuk Pelaut: Tips Mengelola Gaji Dollar Anda",
    description: "Menerima gaji dalam mata uang asing bisa menjadi keuntungan besar. Pelajari cara memaksimalkan penghasilan Anda dan merencanakan masa depan keuangan Anda.",
    image: "/images/cruise/1.jpg",
    slug: "manajemen-keuangan-pelaut",
    content: `
        <h5>Buat Anggaran yang Jelas</h5>
        <p>Meskipun biaya hidup di kapal rendah (akomodasi dan makanan disediakan), pengeluaran kecil bisa menumpuk. Lacak pengeluaran Anda di pelabuhan dan pembelian di toko kru. Tetapkan anggaran bulanan untuk pengeluaran tidak penting.</p>
        
        <h5>Manfaatkan Transfer Uang Cerdas</h5>
        <p>Jangan hanya mengandalkan metode transfer tradisional. Teliti layanan transfer uang online yang menawarkan nilai tukar lebih baik dan biaya lebih rendah. Mengirim uang ke rumah secara teratur dapat membantu keluarga Anda dan membangun tabungan.</p>
        
        <h5>Pikirkan Investasi Jangka Panjang</h5>
        <p>Gaji bebas pajak Anda adalah peluang emas. Pertimbangkan untuk menginvestasikan sebagian dari penghasilan Anda. Baik itu di reksa dana, properti di negara asal, atau pendidikan lebih lanjut, buat uang Anda bekerja untuk Anda.</p>
        
        <h5>Siapkan Dana Darurat</h5>
        <p>Kehidupan tidak dapat diprediksi. Sisihkan setidaknya 3-6 bulan biaya hidup dalam dana darurat. Ini akan memberi Anda jaring pengaman jika terjadi keadaan darurat keluarga atau jika Anda memutuskan untuk istirahat di antara kontrak.</p>
        
        <h5>Waspadai Perbedaan Mata Uang</h5>
        <p>Saat berbelanja di berbagai negara, pahami nilai tukar. Gunakan aplikasi konverter mata uang untuk memastikan Anda mendapatkan penawaran yang bagus dan tidak menghabiskan terlalu banyak uang secara tidak sengaja.</p>
    `
  },
  {
    category: "Sertifikasi",
    date: "06 Okt 2025",
    title: "Sertifikasi Wajib untuk Bekerja di Kapal Pesiar: Panduan Lengkap",
    description: "Sebelum Anda dapat berlayar, Anda memerlukan dokumen yang tepat. Panduan ini menguraikan sertifikasi penting yang dibutuhkan oleh sebagian besar jalur pelayaran.",
    image: "/images/training/1.jpg",
    slug: "sertifikasi-wajib-kapal-pesiar",
    content: `
        <h5>1. BST (Basic Safety Training)</h5>
        <p>Ini adalah yang paling mendasar dan wajib bagi semua pelaut. Pelatihan ini mencakup keselamatan pribadi dan tanggung jawab sosial, teknik bertahan hidup pribadi, pencegahan dan pemadaman kebakaran, serta pertolongan pertama dasar. Tanpa BST, Anda tidak bisa bekerja di laut.</p>
        
        <h5>2. CCM (Crowd and Crisis Management)</h5>
        <p>Sertifikat ini wajib bagi personel yang berinteraksi langsung dengan penumpang. Pelatihan ini mengajarkan cara mengelola kerumunan dalam situasi normal dan darurat, memastikan evakuasi yang aman dan teratur jika diperlukan.</p>
        
        <h5>3. Buku Pelaut (Seaman's Book)</h5>
        <p>Ini adalah paspor pelaut Anda, yang mencatat pengalaman laut Anda. Ini adalah dokumen identitas resmi yang diakui secara internasional dan diperlukan untuk bergabung dengan kapal mana pun.</p>
        
        <h5>4. Sertifikat Kesehatan (Medical Certificate)</h5>
        <p>Anda harus lulus pemeriksaan kesehatan yang ketat dari dokter yang disetujui oleh otoritas maritim. Ini memastikan Anda sehat secara fisik untuk bekerja di lingkungan laut yang menuntut.</p>
        
        <h5>5. Visa (jika diperlukan)</h5>
        <p>Tergantung pada kebangsaan Anda dan rute kapal, Anda mungkin memerlukan visa khusus, seperti visa C1/D AS untuk kapal yang berlayar di perairan AS. Agen perekrutan Anda akan memandu Anda melalui proses ini.</p>
    `
  },
  {
    category: "Kisah Sukses",
    date: "07 Okt 2025",
    title: "Kisah Sukses Alumni: Meraih Impian Keliling Dunia Bersama Kapal Pesiar",
    description: "Dari desa kecil di Indonesia hingga memimpin tim di Karibia. Baca kisah inspiratif dari salah satu alumni kami yang telah mengubah hidupnya melalui karir di kapal pesiar.",
    image: "/images/crew/8.jpeg",
    slug: "kisah-sukses-alumni-kapal-pesiar",
    content: `
        <p>Lima tahun yang lalu, Budi adalah seorang pemuda dengan mimpi besar tetapi peluang terbatas di kampung halamannya. Hari ini, dia adalah Asisten Manajer Restoran di salah satu kapal pesiar termewah di dunia, setelah mengunjungi lebih dari 50 negara.</p>
        
        <h5>Awal yang Sederhana</h5>
        <p>'Saya memulai sebagai asisten pelayan,' kenang Budi. 'Pekerjaan itu berat, dan saya sangat merindukan rumah. Tetapi saya fokus pada tujuan saya: belajar bahasa Inggris, memberikan layanan terbaik, dan menyerap semua yang saya bisa pelajari.'</p>
        
        <h5>Mendaki Tangga Karir</h5>
        <p>Etos kerja Budi tidak luput dari perhatian. Dalam setahun, ia dipromosikan menjadi pelayan. Dia terus belajar, mengambil kursus internal tentang anggur dan santapan lezat. Dua tahun kemudian, dia mendapatkan posisi sebagai kepala pelayan, memimpin sebuah tim kecil.</p>
        
        <h5>Pelajaran Terbesar</h5>
        <p>'Pelajaran terbesar yang saya dapatkan adalah bahwa keragaman adalah kekuatan,' katanya. 'Tim saya berasal dari 15 negara yang berbeda. Belajar berkomunikasi dan bekerja sama dengan orang-orang dari semua latar belakang adalah keterampilan paling berharga yang saya peroleh.'</p>
        
        <h5>Nasihat untuk Pemimpi Lain</h5>
        <p>'Jangan pernah menyerah,' desak Budi. 'Akan ada hari-hari yang sulit, tetapi imbalannya luar biasa. Anda tidak hanya mendapatkan gaji yang bagus, tetapi Anda tumbuh sebagai pribadi dengan cara yang tidak pernah Anda bayangkan. Dunia benar-benar menjadi kantor Anda.'</p>
    `
  }
];