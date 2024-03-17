const css = "body { background: linear-gradient(90deg, #354e69, #000000); }";

const grabBtn = document.getElementById("grabBtn");
grabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true }, function (tabs) {
    let tab = tabs[0];
    if (tab) {
      execScript(tab);
      changeBackground(tab);
    } else {
      alert("There are no active tabs");
    }
  });
  window.close();
});

function execScript(tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    func: removeBanner,
  });
}

function removeBanner() {
  const banner = document.querySelector(".at_e");
  document.body.className = "";
  banner.innerHTML = "";
}

function changeBackground(tab) {
  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    css: css,
  });
}
