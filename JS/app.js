function download(source) {
    const fileName = source.split('/').pop();
    var el = document.createElement("a");
    el.setAttribute("href", source);
    el.setAttribute("download", fileName);
    document.body.appendChild(el);
    el.click();
    el.remove();
}

function toDataURL(url, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onload = function() {
        var fileReader = new FileReader();
        fileReader.onloadend = function() {
            callback(fileReader.result);
        }
        fileReader.readAsDataURL(httpRequest.response);
    };
    httpRequest.open('GET', url);
    httpRequest.responseType = 'blob';
    httpRequest.send();
}
toDataURL(
    'http://placehold.it/512x512',
    function(dataUrl) {
        document.write('<a href="' + dataUrl + '" download>Save as</a><img src="' + dataUrl + '"></a>');
    }
)