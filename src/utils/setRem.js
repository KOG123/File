onload = function () {
    setRem(750);
}
onresize = function () {
    setRem(750);
}

function setRem(uiPx) {
    const html = document.getElementsByTagName('html')[0],
        clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = clientWidth / uiPx * 200 + 'px';
}
/**
    onload = function(){
        setRem(750)
    }
    onresize = function(){
        setRem(750)
    }

    function setRem(uiPx){
        const html =document.getElementsByTagName("html")[0];
        const clientWidth = document.body.clientWidth || document.documentElement.clientWidth
        html.style.fontSize = clientWidth / uiPx * 200 + "px"
    }
 */