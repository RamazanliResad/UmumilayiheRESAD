
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
   
    var ad = document.querySelector('.sorgu-input[name="ad"]').value;
    var soyad = document.querySelector('.sorgu-input[name="soyad"]').value;
    var ataAdi = document.querySelector('.sorgu-input[name="ata_adi"]').value;
    var email = document.querySelector('.sorgu-input[name="email"]').value;
    var mobil = document.querySelector('.sorgu-input[name="mobil"]').value;
    var müraciətNövü = document.querySelector('.sorgu-novu select').value;
    var məzmun = document.querySelector('.sorgu-mezmunu select').value;
    var müraciətMetni = document.querySelector('.sorgu-metn').value;

  
    if (ad === '' || soyad === '' || ataAdi === '' || email === '' || mobil === '' || müraciətNövü === '' || məzmun === '' || müraciətMetni === '') {
        alert('Xahiş olunur formu tam doldurun!');
        return;
    }

    
    if (!/^\d+$/.test(mobil)) {
        alert('Xahiş olunur düzgün mobile nömrə yazasınız!');
        return;
    }


    if (!isValidEmail(email)) {
        alert('Xahiş olunur düzgün e-poçt ünavanınızı yazasınız!');
        return;
    }

    console.log('Soyad:', soyad);
    console.log('Ata Adı:', ataAdi);
    console.log('E-mail:', email);
    console.log('Mobil nömrə:', mobil);
    console.log('Müraciət Növü:', müraciətNövü);
    console.log('Müraciətin məzmunu:', məzmun);
    console.log('Müraciət Metni:', müraciətMetni);

   
    document.querySelector('form').reset();
});


function isValidEmail(email) {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}
