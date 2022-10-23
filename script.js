const botao = document.querySelector("#back-to-top");

window.addEventListener("scroll", function (event) {
    if (window.scrollY == 0) {
        botao.classList.remove("visible");
    } else {
        botao.classList.add("visible");
    }

    var btn = document.querySelector("#back-to-top");
    btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
    AnimationTimeline
    });
});

function menuTop(old, des, atu){
    var easing = function (t) { return (--t)*t*t+1 };
    atu += 2; // move de 2 em 2 pixel. Aumentando o valor, irá aumentar a velocidade
    var ease = easing(atu/100);
    var del = des-old;
    del *= ease;
    del += old;
    document.querySelector('html').scrollTo(0, del);
    if(atu < 100){
      window.requestAnimationFrame(function (){
        menuTop(old, des, atu);
      });
    }
}