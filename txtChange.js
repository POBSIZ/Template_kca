var txtArea = `
<textarea placeholder="input anything" class="txtChum"></textarea>
<div class="txtBtn">DONE</div>

`

var piiText = $('.basic.pii.text_wrap');
var piiTitle = $('.basic.pii.text.title');
var piiInfo = $('.basic.pii.text.info');
var piiIsitTxt =  $('.basic.pii.text_wrap.txtChum');

$(document).ready(function(){
    piiInfo.on('click', function(){
        if(piiIsitTxt.length == 0){
            piiInfo.empty();
            piiText.append(txtArea);
            // piiIsitInfo.length = 1;
        }
    });
});
$(document).on('click', '.txtBtn', function(){
    if($('textarea').val() == 0){
        piiInfo.append("NULL");    
    }
    var txtVal = $('textarea').val().replace(/(?:\r\n|\r|\n)/g, '<br />');
    piiInfo.append(txtVal);
    $('textarea').remove();
    $('.txtBtn').remove();
});
