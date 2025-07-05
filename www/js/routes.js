var routes = [
  { path: "/", componentUrl: "pages/home.html", name: "home" },
  { path: "/tentang/", url: "pages/about.html" },
  { path: "/film/", componentUrl: "pages/film.html" },
  { path: "/dfilm/", componentUrl: "pages/detailfilm.html" },
  { path: "/uang/", componentUrl: "pages/transaksi.html" },
  { path: "/uangt/", componentUrl: "pages/transaksi_tambah.html" },
  { path: "/uangu/", componentUrl: "pages/transaksi_update.html" },
  { path: "/atur/", componentUrl: "pages/setting.html" },
  { path: "/tugas", componentUrl: "pages/tugas.html" },
  { path: "/barcode", componentUrl: "pages/barcode.html" },
  { path: "/share", componentUrl: "pages/share.html" },
  { path: "(.*)", url: "pages/404.html" },
];
