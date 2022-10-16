$(function () {
  $(document).on("click", ".quick_view", function (e) {
    e.preventDefault();
    $("#myModalDetail").modal("show");
    $.post(
      "https://tajalapak.com/produk/quick_view",
      { id: $(this).attr("data-id") },
      function (html) {
        $(".content-body").html(html);
      }
    );
  });
});
