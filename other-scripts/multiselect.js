$(document).ready(function () {
  $("#multiple_select").multiselect({
    enableClickableOptGroups: true,
    enableCollapsibleOptGroups: true,
    enableFiltering: true,
    includeSelectAllOption: false,
    maxHeight: 300,
    enableCaseInsensitiveFiltering: true,
    buttonWidth: "99%",
    numberDisplayed: 6,
  });
  $("#multiple_select2").multiselect({
    enableClickableOptGroups: true,
    enableCollapsibleOptGroups: true,
    enableFiltering: true,
    includeSelectAllOption: false,
    maxHeight: 200,
    enableCaseInsensitiveFiltering: true,
  });
});
