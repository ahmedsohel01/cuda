$(function () {
  // Filter Activation
  // init Isotope
  var $grid = $(".grid").isotope({
    // options
  });
  // filter items on button click
  $(".filter-nav").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
});
