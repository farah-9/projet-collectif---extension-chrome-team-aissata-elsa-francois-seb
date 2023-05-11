chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    // execute le script
    chrome.scripting.executeScript({
      files: ['content.js'],
      target: { tabId: tab.id }
    });
  };
});