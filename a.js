const audio = document.getElementById("linkmp3");
let fungsiAwal = 0;

document.getElementById("kadoIn").onclick = function () {
  if (fungsiAwal === 0) {
    audio.play();
    fungsiAwal = 1;
    kadoIn.style = "transition:all .8s ease;transform:scale(10);opacity:0";
    wallpaper.style = "transform: scale(1.5)";
    ket.style = "display:none";
    setTimeout(askName, 600);
  }
};

async function askName() {
  const { value: nama } = await Swal.fire({
    title: "I know you’ve got two names... but I saved you as something even more special 🤭",
    input: "text",
    confirmButtonText: "Continue",
    inputPlaceholder: "Enter your name",
    allowOutsideClick: false,
  });

  if (nama && nama.trim().length < 20) {
    window.nama = nama.trim();
    vketikhalo = `Happy Birthday, ${nama}! 🎉`;
    mulainama();
  } else {
    await Swal.fire({
      icon: "warning",
      title: "Hmm...",
      text: "Please enter a name under 20 characters 😊",
    });
    askName();
  }
}

function mulainama() {
  bodyblur.style = "opacity:0";
  wallpaper.style = "transform: scale(1)";
  setTimeout(showGreeting, 500);
}

function showGreeting() {
  new TypeIt("#halo", {
    strings: [vketikhalo],
    startDelay: 50,
    speed: 40,
    waitUntilVisible: true,
    afterComplete: () => {
      document.getElementById("halo").innerHTML = vketikhalo;
      setTimeout(showMessage, 1500);
    },
  }).go();
}

function showMessage() {
    const messagePara = document.getElementById("customMessage");
    messagePara.style.display = "block";
    messagePara.innerHTML = `
      Snehal, this is your special day! 🌸<br>
      May your year ahead be full of joy, memories, and endless smiles.<br>
      You are loved more than you know. 💖
        U know Snehal Your are the best part of life.
Tujza sarkhi mulgi mala kadich betnar yevde samjun ghaynari like jeva me astho naa tujza mala tension nasta mala mahite tu ashil always kiti ky zala tari. And I promise no matter what happens I be their for u kayam.
I still Remember 14th April madhe mala tu khup avadli hoti asa ny ki azun pn yevdch avadti me sangu ny shkat words i still love u the same Felling azun pn hai fakt tet Tujza kadun gayli asel pn majza kade hai ti ny janar kiti ky zala tari.Tula vatta asel ki ky bolthoye me je hai tech bolthoye tujza Majza khara prem ahes ani always rahnar tya madhe family tension career yet pn tu pn tevdi imp hai yaa 3 year madhe khup ky zala tya mule appla tho bond nigun ghayla pn hitun pudhe ny honar karan majza life atta Khup vegli hai as compared to 1st year khup responsibility and tension pn tya madhe tu pn ahes no matter what happens. Me tula atta pudhe kadi hurt ny karnar you are the best part of life.
Me kayam asel tujza sobt tula support karyalay tu pudhe jaa Changli job manjze saglay tension Tujze nigun jayil sobt face karu problem asa nako me ekti hai me Teva bolo hotho atta boltho I'm their for u. And please photo takat jaa aree tula ny mahite tujze photo khup chan astat tyana Bgun ek vegli smile yete majza face var. Khup khup Chan astat tujze photo pn it's your choice takaycha ki ny thodishi misunderstanding mule tet zala and I'm sorry for that.Tula Always happy thevaycha me try karel tula tension Yeun ny denar kadich majza kadun Yevda hoyil me karel Snehal. I hope tula raag ny ala ani nakki sang He gift kasa vatala. Once again Happy Birthday Snehal.....🖤🌸
    `;
  
    // ✅ Wait 25 seconds then go straight to next SweetAlert
    setTimeout(() => {
      Swal.fire({
        title: "Ready for the next surprise?",
        icon: "question",
        confirmButtonText: "Let's go! 🎁",
        allowOutsideClick: false,
      }).then((next) => {
        if (next.isConfirmed) {
          window.location.href = "index2.html";
        }
      });
    }, 25000); // ⏳ 25 seconds
  }
  

function showManualContinueButton() {
  let manualNext = document.getElementById("manualNextButton");

  if (!manualNext) {
    manualNext = document.createElement("button");
    manualNext.id = "manualNextButton";
    manualNext.textContent = "If you've read it now, click here to continue!";
    manualNext.style.cssText = `
      margin-top: 30px;
      padding: 12px 24px;
      font-size: 16px;
      background-color: #ff2f92;
      color: white;
      border: none;
      border-radius: 20px;
      cursor: pointer;
    `;
    document.getElementById("Content").appendChild(manualNext);
  }

  // 🔁 FIXED: Add tiny delay before triggering SweetAlert (ensures visibility)
  manualNext.onclick = () => {
    setTimeout(() => {
      goToNextSurprise();
    }, 150); // Ensures everything is rendered before the alert pops up
  };
}

function goToNextSurprise() {
  Swal.fire({
    title: "Ready for the next surprise?",
    icon: "question",
    confirmButtonText: "Let's go! 🎁",
    allowOutsideClick: false,
  }).then((next) => {
    if (next.isConfirmed) {
      window.location.href = "index2.html";
    }
  });
}

