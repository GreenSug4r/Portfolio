var pageNames = ["back","home","boringpage","projects","about","contact"];
var namespace = "my";
var styleElem = document.head.appendChild(document.createElement("style"));

var pages = pageNames.map(function(pageName) {
    return {
        name: pageName,
        nav: pageNameSelector(pageName, "nav"),
        div: pageNameSelector(pageName, "div")
    };
});

var showText = function (target, message, index, interval) {
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
  }

pages.forEach(function(page) {
    if(page.name === "back" ){
        page.nav.click(function(){
            showHome();
            //$('body::after').css("height","100%");
            styleElem.innerHTML = "body:after {height: auto;}";
            $(window).scrollTop(0);

        })

    }
    else{
        page.nav.click(function() {
            showPage(pages,page);
            styleElem.innerHTML = "body:after {height: 150%;}";
              $(window).scrollTop(0);
              let myMediaQuery = window.matchMedia('(max-width: 600px)')
              if (myMediaQuery.matches) {
                styleElem.innerHTML = "body:after {height: 200%;}";
              }
        });
    }

});

$(function () {
    setTimeout(()=>{
    showText("#doctype.r", "<!DOCTYPE HTML>", 0, 50);
    showText("#doctype.g", "<!DOCTYPE HTML>", 0, 50);
    showText("#doctype.b", "<!DOCTYPE HTML>", 0, 50);
    },800);

    /* INIZIO LINEA 2 */

    setTimeout(()=>{
        showText("#testa.r", "<head>", 0, 50);
        showText("#testa.g", "<head>", 0, 50);
        showText("#testa.b", "<head>", 0, 50);
    },1700);

    /* INIZIO LINEA 3 */
    setTimeout(()=>{
        showText("#titolo.r", "<title>Portfolio</title>", 0, 50);
        showText("#titolo.g", "<title>Portfolio</title>", 0, 50);
        showText("#titolo.b", "<title>Portfolio</title>", 0, 50);
    },2200);

    /* INIZIO LINEA 4 */

    setTimeout(()=>{
        showText("#testa-2.r", "</head>", 0, 50);
        showText("#testa-2.g", "</head>", 0, 50);
        showText("#testa-2.b", "</head>", 0, 50);
    },3500);

    /* INIZIO LINEA 5 */

    setTimeout(()=>{
        showText("#corpo.r", "<body>", 0, 50);
        showText("#corpo.g", "<body>", 0, 50);
        showText("#corpo.b", "<body>", 0, 50);
    },4000);

    /* INIZIO LINEA 6 */

    setTimeout(()=>{
        showText("#intro.r", "<div class=’intro’>", 0, 50);
        showText("#intro.g", "<div class=’intro’>", 0, 50);
        showText("#intro.b", "<div class=’intro’>", 0, 50);
    },4500);

    /* INIZIO LINEA 7 */
    setTimeout(()=>{
        showText("#descrizione.r", "<h1>Web Developer</h1>", 0, 50);
        showText("#descrizione.g", "<h1>Web Developer</h1>", 0, 50);
        showText("#descrizione.b", "<h1>Web Developer</h1>", 0, 50);
    },5700);

    /* INIZIO LINEA 8 */

    setTimeout(()=>{
        showText("#nome.r", "<p>Avanzino Gabriele</p>", 0, 50);
        showText("#nome.g", "<p>Avanzino Gabriele</p>", 0, 50);
        showText("#nome.b", "<p>Avanzino Gabriele</p>", 0, 50);
    },7000);

    /* INIZIO LINEA 9 */
    setTimeout(()=>{
        showText("#divisore.r", "</div>", 0, 50);
        showText("#divisore.g", "</div>", 0, 50);
        showText("#divisore.b", "</div>", 0, 50);
    },8300);

    /* INIZIO LINEA 10 */

    setTimeout(()=>{
        showText("#corpo-2.r", "</body>", 0, 50);
        showText("#corpo-2.g", "</body>", 0, 50);
        showText("#corpo-2.b", "</body>", 0, 50);
    },8700);

    /* INIZIO LINEA 11 */

    setTimeout(()=>{
        showText("#cursore.r", "█", 0, 50);
        showText("#cursore.g", "█", 0, 50);
        showText("#cursore.b", "█", 0, 50);
    },9000);

  });



function pageNameSelector(pageName, type) {
    return $(["#" + namespace, pageName, type].join("-"));
}

function showHome(){
    pages.forEach((page) => {
        if(page.name != "home")
            page.div.hide();
        else
            page.div.show();
    });
    $('body').css("background-color","#323133");
    $('.back').css("display","none");
    $('.icon').css("display","block");
    $('.boringpage').css({"color":"#edffe9","background-color":"transparent"});
    $('.about').css({"color":"#edffe9","background-color":"transparent"});
    $('.projects').css({"color":"#edffe9","background-color":"transparent"});
    $('.contact').css({"color":"#edffe9","background-color":"transparent"});


}

function showPage(pages,pageToShow) {
    pages.forEach(function(page) {
        if(page.name != pageToShow.name && page.name != "home"){
           page.div.hide();
           $(`.${page.name}`).css({"color":"#edffe9","background-color":"transparent"});
        }
        else{
            page.div.slideDown(4000);
            $(`.${page.name}`).css("background-color","#edffe9");
            $(`.${page.name}`).css("color","#323133");
        }

    });
    $('.back').css("display","block");
    $('.icon').css("display","none");
    $('#my-home-div').css("display","none");
}
