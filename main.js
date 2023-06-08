
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


const firebaseConfig = {
    apiKey: "AIzaSyCya4t7CwZ6XX8sA2DHKlOEwkIAx18JZm8",
    authDomain: "e-library-database-8272f.firebaseapp.com",
    databaseURL: "https://e-library-database-8272f-default-rtdb.firebaseio.com",
    projectId: "e-library-database-8272f",
    storageBucket: "e-library-database-8272f.appspot.com",
    messagingSenderId: "305786620819",
    appId: "1:305786620819:web:58764c688001d3feb1f666"
  };

  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref("contactForm");

  document.getElementById("contactForm").addEventListener("submit", submitForm);


  function submitForm(e) {
    e.preventDefault();
  
    var help = getElementVal("q-type");
    var device = getElementVal("d-type");
    var publisher = getElementVal("c-type");
    var inputA = getElementVal("e-input");
    var inputW = getElementVal("w-input");
    var txt = getElementVal("txt-area");
  
    saveMessages(help, device, publisher, inputA, inputW, txt);
  
   
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }


  const saveMessages = (help, device, publisher, inputA, inputW, txt) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      help: help,
      device: device,
      publisher: publisher,
      inputA: inputA,
      inputW: inputW,
      txt: txt,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };