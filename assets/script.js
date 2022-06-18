function showDiv(evt, NamaArtikel) {
    // Declare semua variabel
    var i, tabcontent, tablinks, display = document.getElementById(NamaArtikel);

    // Mendapatkan semua elemen dengan class="tabcontent" dan di sembunyikan
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Memdapatkan semua elemen dengan class="tablinks" dan menghapus class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show tab saat ini. Jika Nama Artikel = 'book-list' display flex, dan menambahkan class "active" pada button yang di klik
    if (NamaArtikel == 'book-list') {
      document.getElementById(NamaArtikel).style.display = "flex";
    } 
    else {
      document.getElementById(NamaArtikel).style.display = "block";
    }
  
    evt.currentTarget.className += " active";
}

    // Mendapatkan elemen dengan id="defaultOpen" dan di klik
    document.getElementById("defaultActive").click();


    //  modal start

    // mendapatkan notifier div
    var modal = document.getElementById("success");

    // mendapatkan notifier button
    var btn = document.getElementById("alertBtn");

    // mendapatkan elemen <span> penutup notifier
    var span = document.getElementsByClassName("close")[0];

    // menampilkan notifier jika di klik
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // jika klik <span> (x), menutup notifier
    span.onclick = function() {
        modal.style.display = "none";
    }
