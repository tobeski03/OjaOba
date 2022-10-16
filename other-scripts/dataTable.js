$(function () {
  $("#example1").DataTable({
    bSortable: false,
    lengthChange: false,
    oLanguage: {
      sSearch: "Pencarian ",
    },
  });
  $("#example11").DataTable({
    bSortable: false,
    lengthChange: false,
    oLanguage: {
      sSearch: "Pencarian ",
    },
  });
  $("#example2").DataTable({
    paging: true,
    lengthChange: false,
    searching: false,
    ordering: true,
    info: true,
    autoWidth: false,
  });
  $("#example3").DataTable({
    paging: true,
    lengthChange: true,
    searching: true,
    info: true,
    autoWidth: false,
    pageLength: 10,
    order: [[4, "desc"]],
  });
});
