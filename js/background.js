async function getTab() {
  let queryOptions = { active: true, currentWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);
  return tabs[0];
}

chrome.tabs.onUpdated.addListener(() => {
  console.log("TAB UPDATED");
  getTab().then((tab) => {
    console.log(tab.id);
    portFromCS.postMessage("do");
  });
});

let portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage("hi there content script!");
}

chrome.runtime.onConnect.addListener(connected);
