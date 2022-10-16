(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
function nospaces(t) {
  if (t.value.match(/\s/g)) {
    alert("Maaf, Tidak Boleh Menggunakan Spasi,..");
    t.value = t.value.replace(/\s/g, "");
  }
}
$(".formatNumber").on("keyup", function () {
  var n = parseInt($(this).val().replace(/\D/g, ""), 10);
  $(this).val(n.toLocaleString());
});
