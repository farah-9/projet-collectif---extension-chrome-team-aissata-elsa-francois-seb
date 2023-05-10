chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo.status == 'complete'){
      // execute le script
      chrome.scripting.executeScript({
          files: ['content2.js'],
          target: {tabId: tab.id}
        });
    };
});