let x = $("nav").offset();
$(window).scroll(function(){
    
    if($(window).scrollTop() >= x.top){
        $('nav').addClass('fixed-top')
        $('nav').removeClass('translate-middle-y')
    }else{
        $('nav').removeClass('fixed-top')
        $('nav').addClass('translate-middle-y')
    }
});


 $(document).ready(function(){
    myLoading();
})


export function myLoading(){
    $('#loading').fadeIn(100).fadeOut(1000,function(){
        $('body').css('overflow','visible');
    })
}




import {Games} from "./games.js";
import Detailes from "./detailes.js"
let myData= new Games();
myData.fetchGames();

$("#SHOOTER").click(function(){
    myLoading();
    $("nav ul a").removeClass('LinkFocus1');
    $(this).addClass('LinkFocus1');
    console.log("hello");
    let shooter = new Games('shooter');
    shooter.fetchGames();
})
$("#MMORPG").click(function(){
    myLoading();
    $("nav ul a").removeClass('LinkFocus1');
    $(this).addClass('LinkFocus1');
    console.log("hello");
    let MMORPG = new Games('mmorpg');
    MMORPG.fetchGames();
})

$("#SAILING").click(function(){
    myLoading();
    $("nav ul a").removeClass('LinkFocus1');
    $(this).addClass('LinkFocus1');
    console.log("hello");
    let SAILING = new Games('sailing');
    SAILING.fetchGames();
})

$("#PERMADEATH").click(function(){
    myLoading();
    $("nav ul a").removeClass('LinkFocus1');
    $(this).addClass('LinkFocus1');
    console.log("hello");
    let PERMADEATH = new Games('permadeath');
    PERMADEATH.fetchGames();
})

$("#SUPERHERO").click(function(){
    myLoading();
    $("nav ul a").removeClass('LinkFocus1');
    $(this).addClass('LinkFocus1');
    console.log("hello");
    let SUPERHERO = new Games('superhero');
    SUPERHERO.fetchGames();
})

$("#PIXEL").click(function(){
    myLoading();
    $("nav ul a").removeClass('LinkFocus1');
    $(this).addClass('LinkFocus1');
    console.log("hello");
    let PIXEL = new Games('pixel');
    PIXEL.fetchGames();
})








