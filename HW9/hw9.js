//Exercise 1
/*
$(document).ready(function() {
  let hrefValue = $("a").attr("href");
  let hrefPattern = /^https:\/\//;
  hrefPattern.test(hrefValue)
    ? $("a").attr("target", "_blank")
    : console.log("Link doesn't have https protocol");
});
*/

//Exercise 2
/*
$(document).ready(function() {
  $(".head").css("background-color", "green");
  $(".inner").css("font-size", "35px");
});
*/

//Exercise 3
/*
$(document).ready(function() {
  $("h3")
    .before($("h3+div"))
    .next()
    .remove();
  $("div+div").remove();
});
*/

//Exercise 4
$(document).ready(function() {
  let value = 0;
  $("input[type=checkbox]").change(function() {
    value++;
    if (value > 3) {
      $("input[type=checkbox]").prop("checked", false);
      value = 0;
    }
    console.log(value);
  });
});
