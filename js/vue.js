$(document).on("click", "a", function (event) {
  let target = $(this).attr("href");
  console.log(target);
  if (
    target == "#jumbotron" ||
    target == "#sectiom_info" ||
    target == "#sectiom_mv"
  ) {
    event.preventDefault(); //不執行預設動作
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      500
    );
  }
});

let app = new Vue({
  el: "#app",
  data: {
    ms: "test",
  },
});
