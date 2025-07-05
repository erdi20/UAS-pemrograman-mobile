// Dom7
var $ = Dom7;

// Demo
const html = document.documentElement;
if (document.location.href.includes("safe-areas")) {
  if (html) {
    html.style.setProperty("--f7-safe-area-top", "44px");
    html.style.setProperty("--f7-safe-area-bottom", "34px");
  }
}
html.style.setProperty("--f7-navbar-height", "85px");
html.style.setProperty("--f7-tabbar-link-active-icon-bg-color", "transparent");
html.style.setProperty("--f7-fab-size", "80px");
if (document.location.href.includes("example-preview")) {
  $(".view-main").attr("data-browser-history", "true");
  $(".view-main").attr("data-browser-history-root", "/kitchen-sink/core/");
  $(".view-main").attr("data-preload-previous-page", "false");
  $(".view-main").attr("data-ios-swipe-back", "false");
  document.documentElement.classList.add("example-preview");
}

// Theme
var theme = "auto";
if (document.location.search.indexOf("theme=") >= 0) {
  theme = document.location.search.split("theme=")[1].split("&")[0];
}
if (document.location.search.indexOf("mode=") >= 0) {
  const mode = document.location.search.split("mode=")[1].split("&")[0];
  if (mode === "dark") document.documentElement.classList.add("dark");
}

// Init App
var app = new Framework7({
  el: "#app",
  theme,
  // store.js,
  store: store,
  // routes.js,
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: "pltd4o7ibb9rc653x14",
  },
  navbar: {
    mdCenterTitle: true,
    hideOnPageScroll: true,
    showOnPageScrollTop: true,
    showOnPageScrollEnd: false,
  },
});

// let terjemahanhari = [
//   "Minggu",
//   "Senin",
//   "Selasa",
//   "Rabu",
//   "Kamis",
//   "Jumat",
//   "Sabtu",
// ];
// let terjemahanbulan = [
//   "",
//   "Januari",
//   "Februari",
//   "Maret",
//   "April",
//   "Mei",
//   "Juni",
//   "Juli",
//   "Agustus",
//   "September",
//   "Oktober",
//   "November",
//   "Desember",
// ];

function sekarang() {
  let saatini = new Date();
  let hr = terjemahanhari[saatini.getDay()];
  let tgl = saatini.getDate() <= 9 ? `0${saatini.getDate()}` : saatini.getDate();
  let bl = terjemahanbulan[saatini.getMonth() + 1];
  let th = saatini.getFullYear();
  let jm = saatini.getHours() <= 9 ? `0${saatini.getHours()}` : saatini.getHours();
  let mn = saatini.getMinutes() <= 9 ? `0${saatini.getMinutes()}` : saatini.getMinutes();
  let dt = saatini.getSeconds() <= 9 ? `0${saatini.getSeconds()}` : saatini.getSeconds();
  return `${hr}, ${tgl} ${bl} ${th}<br>${jm}:${mn}:${dt}`;
}

let terjemahanhari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
let terjemahanbulan = ["", "Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

function terjemah_tgl_jam(x) {
  var tahun = x.substring(0, 4);
  var buln = x.substring(5, 7);
  var tgl = x.substring(8, 10);
  var jam = x.substring(11, 13);
  var menit = x.substring(14, 16);
  var detik = x.substring(17, 19);
  return tgl + " " + terjemahanbulan[parseInt(buln)] + " " + tahun + " " + jam + ":" + menit + ":" + detik;
}

function format_ribuan(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// --barcode

document.addEventListener("deviceready", () => {
  let isScanning = false;

  window.scanBarcode = () => {
    if (isScanning) return app.dialog.alert("Pemindaian sedang berlangsung. Harap tunggu.", "Info");
    isScanning = true;
    cordova.plugins.barcodeScanner.scan(
      (result) => {
        isScanning = false;
        if (!result.cancelled && result.text) {
          const isLink = result.text.startsWith("https://") || result.text.startsWith("http://");
          isLink ? window.open(result.text, "_system") : app.dialog.alert("Bukan link valid.", "Error");
        }
      },
      (error) => {
        isScanning = false;
        console.error("Pemindaian gagal:", error);
        app.dialog.alert(`Pemindaian gagal: ${error}`, "Error");
      },
      { formats: "QR_CODE", prompt: "Arahkan kamera ke QR Code" }
    );
  };
});

// praktek13 -----------
function handleBackupButtonClick() {
  const backupSection = document.getElementById("backupSection");
  if (backupSection) {
    backupSection.style.display = "block";
  }
}


// UAS --------------
function enableBluetooth() {
  ble.enable(
    function () {
      alert("Bluetooth berhasil diaktifkan");
    },
    function (reason) {
      alert("Bluetooth gagal diaktifkan: " + reason);
    }
  );
}
function openBluetoothSettings() {
  if (ble.showBluetoothSettings) {
    ble.showBluetoothSettings(
      function () {
        console.log("Pengaturan Bluetooth terbuka");
      },
      function (err) {
        alert("Gagal membuka pengaturan Bluetooth: " + err);
      }
    );
  } else {
    alert("Fungsi ini hanya tersedia di Android");
  }
}
