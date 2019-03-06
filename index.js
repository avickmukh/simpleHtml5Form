function validateValaToz(val) 
{
    var re = /^[a-zA-Z]*$/;
    return re.test(val);
}

function validatePhoneNumber(val) 
{
    var re = /^\d{8}$/;
    return re.test(val);
}

function validatePlz(val) 
{
    var re = /^\d{5}$/;
    return re.test(val);
}

function validate(){
    var vorname = $('#vorname').val();
    var nachname = $('#Nachname').val();
    var strae = $('#strae').val();
    var ort = $('#ort').val();
    var tel = $('#tel').val();
    var plz = $('#plz').val();
    var status = true;
    $('#vorname').css({'background-color':'#47d147', 'border': '2px solid green'});
    $('#Nachname').css({'background-color':'#47d147', 'border': '2px solid green'});
    $('#strae').css({'background-color':'#47d147', 'border': '2px solid green'});
    $('#ort').css({'background-color':'#47d147', 'border': '2px solid green'});
    $('#plz').css({'background-color':'#47d147', 'border': '2px solid green'});
    $('#tel').css({'background-color':'#47d147', 'border': '2px solid green'});
    if ($.trim(vorname).length<3 || !validateValaToz($.trim(vorname))) {
        $('#vorname').css({'background-color':'#FF6666', 'border': '2px solid red'});
        status=false;
    }
    if ($.trim(nachname).length<3 || !validateValaToz($.trim(nachname))) {
        $('#Nachname').css({'background-color':'#FF6666', 'border': '2px solid red'});
        status=false;
    }
    if ($.trim(strae).length<3 || !validateValaToz($.trim(strae))) {
        $('#strae').css({'background-color':'#FF6666', 'border': '2px solid red'});
        status=false;
    }
    if ($.trim(ort).length<3 || !validateValaToz($.trim(ort))) {
        $('#ort').css({'background-color':'#FF6666', 'border': '2px solid red'});
        status=false;
    }

    if (!validatePhoneNumber($.trim(tel))) {
        $('#tel').css({'background-color':'#FF6666', 'border': '2px solid red'});
        status=false;
    }
    if (!validatePlz($.trim(plz))) {
        $('#plz').css({'background-color':'#FF6666', 'border': '2px solid red'});
        status=false;
    }
    return status;
}

$('#testForm').submit(validate);