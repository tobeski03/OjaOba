$(".formatNumber").on("keyup", function () {
  var n = parseInt($(this).val().replace(/\D/g, ""), 10);
  $(this).val(n.toLocaleString());
});
$(document).ready(function () {
  $("#state").change(function () {
    var state_id = $(this).val();
    $.ajax({
      type: "POST",
      url: "https://tajalapak.com/auth/city",
      data: "stat_id=" + state_id,
      success: function (response) {
        $("#city").html(response);
      },
    });
  });
});
$(document).ready(function () {
  $("#state_reseller").change(function () {
    var state_id = $(this).val();
    $.ajax({
      type: "POST",
      url: "https://tajalapak.com/auth/city",
      data: "stat_id=" + state_id,
      success: function (response) {
        $("#city_reseller").html(response);
      },
    });
  });
});
function toDuit(number) {
  var number = number.toString(),
    duit = number.split(".")[0],
    duit = duit
      .split("")
      .reverse()
      .join("")
      .replace(/(\d{3}(?!$))/g, "$1,")
      .split("")
      .reverse()
      .join("");
  return "Rp " + duit;
}
