var coverImage = document.querySelector("#cover");
coverImage.onclick = function() {
    alert("제품구매사이트로 이동");
}

coverImage.onmouseover = function() {
    coverImage.style.border = "5px black solid";
}

coverImage.onmouseout = function() {
    coverImage.style.border = "";
}        
