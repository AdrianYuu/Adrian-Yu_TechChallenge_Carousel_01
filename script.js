let idx = 0;

function func(n){
    let slides = document.getElementsByClassName("box");
    idx += n;

    if(idx < 0) idx = 0;
    if(idx > slides.length - 1) idx = slides.length - 1;

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[idx].style.display = "flex";
}