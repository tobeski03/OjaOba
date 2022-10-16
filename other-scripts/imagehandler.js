$(document).ready(function () {
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
        $("#Back-to-top").fadeIn();
      } else {
        $("#Back-to-top").fadeOut();
      }
    });
    $("#Back-to-top").click(function () {
      $("body,html")
        .animate({ scrollTop: 0 }, 300)
        .animate({ scrollTop: 40 }, 200)
        .animate({ scrollTop: 0 }, 130)
        .animate({ scrollTop: 15 }, 100)
        .animate({ scrollTop: 0 }, 70);
    });
  });
  $("#editor1").summernote({
    height: "300px",
    callbacks: {
      onImageUpload: function (image) {
        uploadImage(image[0]);
      },
      onMediaDelete: function (target) {
        deleteImage(target[0].src);
      },
    },
  });
  function uploadImage(image) {
    var data = new FormData();
    data.append("image", image);
    $.ajax({
      url: "https://tajalapak.com/members/upload_image",
      cache: false,
      contentType: false,
      processData: false,
      data: data,
      type: "POST",
      success: function (url) {
        $("#editor1").summernote("insertImage", url);
      },
      error: function (data) {
        console.log(data);
      },
    });
  }
  function deleteImage(src) {
    $.ajax({
      data: { src: src },
      type: "POST",
      url: "https://tajalapak.com/members/delete_image",
      cache: false,
      success: function (response) {
        console.log(response);
      },
    });
  }
});
