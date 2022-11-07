function generateBarCode() {
    var name = $('#name').val();
    var upiid = $('#upiid').val();
    var amt = $('#amount').val();
    if (amt == '') {
      var url = 'upi://pay?cu=INR&pa=' + upiid + '&pn=' + name;
    }
    else {
      var url = 'upi://pay?cu=INR&pa=' + upiid + '&pn=' + name + '&am=' + amt;
    }

    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRious({
      element: qrcodeContainer,
      value: url,
      size: 200
    });

    document.getElementById("recname").innerHTML= name;
    document.getElementById("recupi").innerHTML= upiid;
    $(document).ready(function(){
           $('#myModal').modal('show')
        });
  }
