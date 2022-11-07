function downloadQR() {
    var canvas = document.getElementById("qrcode");
    var image = canvas.toDataURL();
    var aDownloadLink = document.createElement('a');
    aDownloadLink.download = 'Payment Code.png';
    aDownloadLink.href = image;
    aDownloadLink.click();
    }