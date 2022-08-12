let currentTime;
let projectname;
let projecttype;
let hourlyrate;
let duedate;
let potentialearnings;
let daysuntil;
let today = dayjs().format("MMM DD, YYYY");
let daysleft;
let deleteBtn;

let time = setInterval(() => {
  let currentTime = dayjs().format("hh:mm:ss a");
  $("#current").text(`${today} ${currentTime}`);
}, 1000);

let allColumns = document.querySelectorAll(".col");
allColumns.forEach((el) => {
  el.classList.add("border", "custombg");
});

$(document).ready(function () {
  $(".btn-custom-1").click(function () {
    $("#myModal").modal();
  });
});

$(".btn-save").click(() => {
  projectname = document.querySelector("#name").value;
  projecttype = document.querySelector("#type").value;
  hourlyrate = document.querySelector("#rate").value;
  duedate = document.querySelector("#date").value;
  daysleft = Math.floor(dayjs(duedate).diff(dayjs(), "day", true));
  potentialearnings = eval(hourlyrate * 8 * daysleft);

  $(".tableContainer .container").append(
    $("<div>")
      .addClass("row justify-content-between")
      .append(
        $("<div>")
          .text(projectname)
          .addClass(
            "col-2 border-1 px-3 d-flex justify-content-center align-items-center"
          ),
        $("<div>")
          .text(projecttype)
          .addClass(
            "col-2 border-1 px-3 d-flex justify-content-center align-items-center"
          ),
        $("<div>")
          .text(`$${hourlyrate}`)
          .addClass(
            "col-1 border-1 px-3 d-flex justify-content-center align-items-center"
          ),
        $("<div>")
          .text(dayjs(duedate).format("YY-DD-MM"))
          .addClass(
            "col-2 border-1 px-3 d-flex justify-content-center align-items-center"
          ),
        $("<div>")
          .text(`${daysleft}`)
          .addClass(
            "col-2 border-1 px-3 d-flex justify-content-center align-items-center"
          ),
        $("<div>")
          .text(`$${potentialearnings}`)
          .addClass(
            "col-2 border-1 px-3 d-flex justify-content-center align-items-center"
          ),
        $("<div>")
          .addClass(
            "col-1 border-1 px-3 d-flex justify-content-center align-items-center"
          )
          .append(
            $("<button>")
              .text("Delete")
              .addClass(
                "btn-1 d-flex justify-content-center align-items-center"
              )
              .click((e) => {
                $(e.target).parent().parent().remove();
              })
          )
      )
  );
});
