$(document).ready(function () {
  $("#operator").change(function () {
    var operator_id = $(this).val();
    $.ajax({
      type: "POST",
      url: "https://tajalapak.com/main/produk",
      data: "operator_id=" + operator_id,
      success: function (response) {
        $("#produk").html(response);
      },
    });
  });
});
