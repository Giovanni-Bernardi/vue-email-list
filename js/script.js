function emailList() {
  for (var i = 0; i < 10; i++) {
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/mail",
      method: "GET",
      success: function (data) {
        const res = data.response;
        const elem = $("ol");
        elem.append("<li>" + res + "</li>");
      },
      error: function () {
        console.log("error");
      },
    });
  }
}


function init() {
  emailList();
}

$(document).ready(init);
