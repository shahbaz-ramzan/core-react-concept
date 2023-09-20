document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("Parent Div Capturing");
  },
  true
); // Enable event capturing by passing 'true'

document.getElementById("child").addEventListener("click", function () {
  console.log("Button Clicked");
});
