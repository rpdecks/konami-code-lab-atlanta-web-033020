const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let i = 0;
  document.body.addEventListener("keydown", (event) => {
    let key = event.key;
    if (key === codes[i]) {
      console.log("correct")
      i++;
      if (i === codes.length) {
        alert("Hurray");
        index = 0;
      }
    } else {
      console.log("wrong")
      index = 0;
    }
  })
}