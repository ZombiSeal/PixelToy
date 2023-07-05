document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form");
    const input = document.querySelectorAll(".input__text");
    input.forEach(el => {
        el.value = "";
    })
    
    // inputEffect.value = "";

    form.addEventListener("focusout", function(e) {
      if (e.target.value !== "") {
        e.target.classList.add("has-content");
      } else {
        e.target.classList.remove("has-content");
      }
    });
  });