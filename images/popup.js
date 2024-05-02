document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get(['selectedText'], function(result) {
        if (chrome.runtime.lastError) {
            console.error('Failed to retrieve text:', chrome.runtime.lastError.message);
            return;
        }
        document.getElementById('text').textContent = result.selectedText || 'No text selected.';
    });
});