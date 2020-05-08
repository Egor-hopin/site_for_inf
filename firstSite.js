"use strict";
window.addEventListener("load" , loading);
function loading () {
  let preloader = document.querySelector(".load_page");
  setTimeout(function(){
    preloader.remove();
  }, 2000);
}
document.addEventListener("DOMContentLoaded", allJS);
function allJS () {
  let burger_button = document.querySelector(".burger_button");
  burger_button.addEventListener("click", toCross);
  function toCross () {
    let aside = document.querySelector("aside");
    aside.classList.toggle("aside_after");
    let lines_of_burger = document.querySelectorAll(".line_of_burger");
    for (let line_of_burger of lines_of_burger) {
      line_of_burger.classList.toggle("line_of_burger_after");
    }
  }
  let text_1 = document.querySelector(".text_of_header li:nth-child(1)");
  let line_1 = document.querySelector(".line_of_menu:nth-child(2)");
  let text_2 = document.querySelector(".text_of_header li:nth-child(3)");
  let line_2 = document.querySelector(".line_of_menu:nth-child(4)");
  let text_3 = document.querySelector(".text_of_header li:nth-child(5)");
  let line_3 = document.querySelector(".line_of_menu:nth-child(6)");
  let text_4 = document.querySelector(".text_of_header li:nth-child(7)");
  let line_4 = document.querySelector(".line_of_menu:nth-child(8)");
  let block_of_main = document.querySelector(".block_of_main");
  let block_of_contacts = document.querySelector(".block_of_contacts");
  let block_of_me = document.querySelector(".block_of_me");
  let block_of_inf = document.querySelector(".block_of_inf");
  text_1.addEventListener("click", toScale1);
  function toScale1 () {
    line_1.classList.toggle("line_1");
    block_of_main.classList.toggle("block_of_main_after");
    if( line_2.classList.contains("line_2") && block_of_contacts.classList.contains("block_of_contacts_after") ) {
      line_2.classList.remove("line_2");
      block_of_contacts.classList.remove("block_of_contacts_after");
    } else if ( line_3.classList.contains("line_3")  && block_of_me.classList.contains("block_of_me_after") ) {
      line_3.classList.remove("line_3");
      block_of_me.classList.remove("block_of_me_after");
    } else if( line_4.classList.contains("line_4") && block_of_inf.classList.contains("block_of_inf_after") ) {
      line_4.classList.remove("line_4");
      block_of_inf.classList.remove("block_of_inf_after");
    }
  }
  text_2.addEventListener("click", toScale2);
  function toScale2 () {
    line_2.classList.toggle("line_2");
    block_of_contacts.classList.toggle("block_of_contacts_after");
    if( line_1.classList.contains("line_1") && block_of_main.classList.contains("block_of_main_after") ) {
      line_1.classList.remove("line_1");
      block_of_main.classList.remove("block_of_main_after");
    } else if ( line_3.classList.contains("line_3") && block_of_me.classList.contains("block_of_me_after") ) {
      line_3.classList.remove("line_3");
      block_of_me.classList.remove("block_of_me_after");
    } else if( line_4.classList.contains("line_4") && block_of_inf.classList.contains("block_of_inf_after") ) {
      line_4.classList.remove("line_4");
      block_of_inf.classList.remove("block_of_inf_after");
    }
  }
  text_3.addEventListener("click", toScale3);
  function toScale3 () {
    line_3.classList.toggle("line_3");
    block_of_me.classList.toggle("block_of_me_after");
    if( line_1.classList.contains("line_1") && block_of_main.classList.contains("block_of_main_after") ) {
      line_1.classList.remove("line_1");
      block_of_main.classList.remove("block_of_main_after");
    } else if( line_2.classList.contains("line_2") && block_of_contacts.classList.contains("block_of_contacts_after") ) {
      line_2.classList.remove("line_2");
      block_of_contacts.classList.remove("block_of_contacts_after");
    } else if( line_4.classList.contains("line_4") && block_of_inf.classList.contains("block_of_inf_after") ) {
      line_4.classList.remove("line_4");
      block_of_inf.classList.remove("block_of_inf_after");
    }
  }
  text_4.addEventListener("click", toScale4);
  function toScale4 () {
    line_4.classList.toggle("line_4");
    block_of_inf.classList.toggle("block_of_inf_after");
    if(line_1.classList.contains("line_1") && block_of_main.classList.contains("block_of_main_after") ) {
      line_1.classList.remove("line_1");
      block_of_main.classList.remove("block_of_main_after");
    } else if ( line_2.classList.contains("line_2") && block_of_contacts.classList.contains("block_of_contacts_after") ) {
      line_2.classList.remove("line_2");
      block_of_contacts.classList.remove("block_of_contacts_after");
    } else if(line_3.classList.contains("line_3") && block_of_me.classList.contains("block_of_me_after") ) {
      line_3.classList.remove("line_3");
      block_of_me.classList.remove("block_of_me_after");
    }
  }
  
  //Код для шапки 
  
  let switch_style = document.querySelector(".switch_style");
  switch_style.addEventListener("click", changeStyle);
  function changeStyle () {
    let switcher = document.querySelector(".switcher");
    switcher.classList.toggle("switcher_before");
    let bar_of_switch = document.querySelector(".bar_of_switch");
    bar_of_switch.classList.toggle("bar_of_switch_before");
    let container = document.querySelector(".block_of_main .container");
    if(container.style.backgroundColor == "grey") {
      container.style.backgroundColor = "whitesmoke";
    } else {
      container.style.backgroundColor = "grey";
    }
    container.style.transition = "0.5s";
    }
  let switch_style_2 = document.querySelector(".switch_style_2");
  switch_style_2.addEventListener ("click", changeStyle2);
  function changeStyle2 () {
    let switcher_2 = document.querySelector(".switcher_2");
    switcher_2.classList.toggle("switcher_2_before");
    let bar_of_switch_2 = document.querySelector(".bar_of_switch_2");
    bar_of_switch_2.classList.toggle("bar_of_switch_2_before")
    let main = document.querySelector("main");
    if (main.style.width == "100%") {
      main.style.width = "80%";
    } else {
      main.style.width = "100%";
    }
    main.style.transition = "0.5s";
  }
  let remove_banner = document.querySelector(".remove_banner");
  let banner = document.querySelector(".banner");
  remove_banner.addEventListener("click", removeBanner);
  function removeBanner () {
    banner.remove();
  }
  
  //Функции для навигации
  
  function clock () {
  let time = document.querySelector(".time");
  let time_2 = document.querySelector(".time_2");
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
    if(day < 10 && month > 9) {
      time.innerHTML = `0${day}:${month + 1}:${year}`;
    } else if (month < 10 && day > 9) {
      time.innerHTML = `${day}:0${month + 1}:${year}`;
    } else if(month < 10 && day < 10) {
      time.innerHTML = `0${day}:0${month + 1}:${year}`;
    } else {
      time.innerHTML = `${day}:${month + 1}:${year}`;
    }
    
    if(seconds > 9 && minutes > 9 && hours < 10) {
      time_2.innerHTML = `0${hours}:${minutes}:${seconds}`;
    } else if (seconds > 9 && minutes < 10 && hours > 9) {
      time_2.innerHTML = `${hours}:0${minutes}:${seconds}`;
    } else if(seconds < 10 && minutes > 9 && hours > 9) {
      time_2.innerHTML = `${hours}:${minutes}:0${seconds}`;
    } else if (seconds < 10 && minutes < 10 && hours < 10) {
      time_2.innerHTML = `0${hours}:0${minutes}:0${seconds}`;
    } else if(seconds > 9 && minutes > 9 && hours > 9) {
      time_2.innerHTML = `${hours}:${minutes}:${seconds}`;
    }
  setTimeout(clock, 1000);
  }
  clock();
  
  //Функция для левого меню
}