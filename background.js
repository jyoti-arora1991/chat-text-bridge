chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed and storage initialized.');
    chrome.storage.local.set({selectedText: ''});
    console.log('Extension installed and storage initialized.');
});


chrome.action.onClicked.addListener((tab) => {
   console.log("Listener called")
   chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: captureText
   }, () => {
        // Set the popup after executing the script
        chrome.action.setPopup({tabId: tab.id, popup: 'popup.html'}, () => {
            console.log("Popup set.");
        });
   });
});


function captureText() {
    const selectedText = window.getSelection().toString();
    console.log('Captured text:', selectedText); // Debug selected text
    chrome.storage.local.set({selectedText: selectedText});
}



chrome.storage.onChanged.addListener(changes => {
  if (changes.selectedText) {
    const selectedText = changes.selectedText.newValue;
    }
});
