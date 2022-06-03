const text = [  
  `Exambro mod hidayah inayah tak terkira keraton sejagat masjid Al-Cyber barokah guyub rukun opor ayam sila ke 3 persatuan berkehendak tetapi tak sama santosa berbudi luhur gemah ripah loh jinawi pakai saweria untuk E-infaq no crack 100% real bhai.`,  
  `dekompresi berjongkok winrar fusion ZArchiver dimulai dari serat ambatukam saripati kayu Al-basiah dan tetap sah mendapat anugerah adil dan makmur tidak dijual pegawai wibu type C 6000 mAh cukup sulit tadi pagi menyalakan obivilion penyalangkal satir mamank resing.`,  
  `Tobanga eweskehyese icikiwir muwekheyedes uwogh uwoghhh Hakureimu 100% rill Jul Naojul Kharaj swarav Kajool Icikiwir predesh xioling Busta seggssose brutal seggo nai phai Li Whet khet Huang Xu Pinoy Banga ang sala ko icikiwir ales dmitri from Belarus.`,  
  `medovski sungkem sama lord dulu 100% ril bhai barokah hidayah serta Inayah tak terkira ketupat rendang sila ke 2 keadilan. Drop Tsar Bomba Mumbai Jelebi pasti ngana neotech sentosa Keraton Cyber No Heck full security by apk defender pro. `,  
  `Fortinaiti idun Sefek ambatukam Nvidia bin Slamet, Yi Long Ma download Lamborghini Gallardo no crack official Alok gamer wangy wangy Snoop Dog bardesh khajit unfollow Bangla to be pailut este amigós Descargar phot Chai tan Chong Beware attack of Gundam Gulag.`,  
  `Mein ahrer gain ekle eyeduku yudama sari pati kayu mahoni barangsiapa memakan yang sedang dan kemari tidaklah orang kompeni menyanyikan sedang berjongkok . Jual Pegawai type C 4000mAh tulngat miyasono nagari karebet ya Simalakama dinihari tadi pukul wibuh setres menyangkal Psatir all of that because Maman resing to oblivion Npcr.`,  
 ];  
 const form = document.querySelector(".lorem-form");
 const amount = document.getElementById("amount");
 const result = document.querySelector(".lorem-text");
 form.addEventListener("submit", function (e) {
  // A click on a form submit button – initiates its submission to the server.  
  e.preventDefault();
  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);
  if (isNaN(value) || value < 0 || value > 9) {
   result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
   let tempText = text.slice(0, value);
   tempText = tempText
    .map(function (item) {
     return `<p class="result">${item}</p>`;
    })
    .join("");
   result.innerHTML = tempText;
  }
 });
