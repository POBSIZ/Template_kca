setContent = setInterval(function(){
    $('.content')
    .on("dragover", dragOver)
    .on("dragleave", dragOver)
    .on("drop", uploadFiles);
}, 1000);

function dragOver(e){
    e.stopPropagation();
    e.preventDefault();
    if (e.type == "dragover") {
        $(e.target).css({
            "background-color": "#F8FFF4",
            "outline-offset": "-20px"
        });
    } else {
        $(e.target).css({
            "background-color": "#F8FFF4",
            "outline-offset": "-10px"
        });
    }
}
  
function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
    
    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
        alert('하나만 올리십시오.');
        return;
    }
    if (files[0].type.match(/image.*/)) {
        $(e.target).css({
            "background-image": "url(" + window.URL.createObjectURL(files[0]) + ")",
            "outline": "none",
            "background-size": "100% 100%",
        });
        var text = document.querySelector('.input_img');
        text.parentNode.removeChild(text);
    }else{
        alert('이미지가 아닙니다.');
        return;
    }
}