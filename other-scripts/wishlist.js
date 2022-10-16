function save(id, _data2) {
  $.ajax({
    type: "POST",
    url: "https://tajalapak.com/produk/save",
    dataType: "JSON",
    data: { id: id },
    success: function (_data) {
      $(".produk-" + id)
        .hide()
        .load(" .produk-" + id)
        .fadeIn();
      $("#exampleModalCenter").modal("show");
      $(".wishlistcount").hide().load(" .wishlistcount").fadeIn();
    },
  });
  return false;
}
