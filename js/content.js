/**************************** WITH SET INTERVAL ********** */

// let prev = document.URL;

// window.onload = () => {
//   setInterval(() => {
//     if (document.URL != prev) {
//       const banner = document.querySelector(".at_e");
//       banner.innerHTML = "";
//       document.body.classList.remove("bg-blue-1");
//       document.body.style.background =
//         "linear-gradient(90deg, #354e69, #000000)";
//       prev = document.URL;
//     }
//   }, 1500);
// };

/*************************** REMOVE BUTTON *********** */

window.onload = () => {
  let overlay = document.createElement("div");
  overlay.setAttribute("class", "remove-button");
  overlay.innerHTML = `<div class="button-text"><p>REMOVE</p></div>`;

  const style = document.createElement("style");
  style.textContent = `
  .remove-button {
    posision: fixed; 
    left: 0;
    height:0;
    width: 100%;
    top: 0;
  }
  .button-text {
    posision: relative;
    top: 0;
    left: 0;
    width: 95vw;
    height: 100vh;
  }
  .button-text p {
    position: absolute;
    background: #ad1aa1;
    top: 5vh;
    left: 85vw;
    padding: 5px;
    font-size: 0.6em;
    font-weight: 600;
    z-index: 10000;
    cursor: pointer;
    box-sizing: border-box;
    border: 1px double #fff;
    border-radius: 5px;
    color: #add2f1;
    transition: all .2s ease;
  }
  .button-text p:hover {
    background: #cf00cf;
    color: #fbee40;
  }
  .button-text p:active {
    font-size: 0.55em;
    background: #fff;
    color: #ad1aa1;
    border: 1px solid #ad1aa1;
  }
  `;

  const html = document.querySelector("html");
  html.prepend(overlay);
  html.prepend(style);

  const removeButton = document.querySelector(".button-text p");

  removeButton.addEventListener("click", () => {
    const banner = document.querySelector(".at_e");
    banner.innerHTML = "";
    document.body.classList.remove("bg-blue-1");
    document.body.style.background = "linear-gradient(90deg, #354e69, #000000)";
  });
};

/******************** Simple reload********* */

window.onload = () => {
  const banner = document.querySelector(".at_e");
  banner.innerHTML = "";
  document.body.classList.remove("bg-blue-1");
  document.body.style.background = "linear-gradient(90deg, #354e69, #000000)";
};
