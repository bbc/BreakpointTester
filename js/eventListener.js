function sendUpdateIconMessage() {
    var breakpoint = (window.innerWidth > 1008) ? 'G4'
        : (window.innerWidth > 600)  ? 'G3'
        : (window.innerWidth > 400)  ? 'G2'
        : 'G1';
    var iconPath = 'img/' + breakpoint + '/logo38.png';
    chrome.runtime.sendMessage({ "newIconPath" : iconPath })
}

sendUpdateIconMessage();

window.addEventListener('resize', function() {
    sendUpdateIconMessage();
}, true);