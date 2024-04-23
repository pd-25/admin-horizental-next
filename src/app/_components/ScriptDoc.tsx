import Script from "next/script";

export default function ScriptDoc() {
  return (
    <>
      <Script src="../assets/vendors/js/vendor.bundle.base.js"></Script>
      <Script src="../assets/vendors/chart.js/chart.umd.js"></Script>
      <Script src="../assets/vendors/progressbar.js/progressbar.min.js"></Script>
      <Script src="../assets/vendors/jvectormap/jquery-jvectormap.min.js"></Script>
      <Script src="../assets/vendors/jvectormap/jquery-jvectormap-world-mill-en.js"></Script>
      <Script src="../assets/vendors/owl-carousel-2/owl.carousel.min.js"></Script>
      <Script
        src="../assets/js/jquery.cookie.js"
        type="text/javaScript"
      ></Script>
      <Script src="../assets/js/off-canvas.js"></Script>
      <Script src="../assets/js/hoverable-collapse.js"></Script>
      <Script src="../assets/js/misc.js"></Script>
      <Script src="../assets/js/settings.js"></Script>
      <Script src="../assets/js/todolist.js"></Script>
      <Script src="../assets/js/proBanner.js"></Script>
      <Script src="../assets/js/dashboard.js"></Script>
    </>
  );
}
