var bar=document.querySelector('.nav-bar-icon');
var header=document.querySelector('header');
var mobile=document.querySelector('.mobile-device-active');
var bar1=document.querySelector('.mobile-device-active>ul');
var mainheader=document.querySelector('.header-full-width')
var newOverlay = document.querySelector('.newOverlay');
var navBarOpen = document.querySelector('.nav-bar-icon');
var navBarClose = document.querySelector('.nav-bar-close');

bar.addEventListener('click',function(){
    mobile.classList.add('show');
    bar1.classList.add('active');
    newOverlay.style.display='block';
    navBarOpen.style.display='none';
    navBarClose.style.display='block';
});
newOverlay.addEventListener('click',function(){
    bar1.classList.remove('active');
    setTimeout(function(){
    mobile.classList.remove('show');
    },400);
    newOverlay.style.display='none';
    navBarOpen.style.display='block';
    navBarClose.style.display='none';
});
window.addEventListener('scroll',function(){
if(window.scrollY>=47){
    mainheader.classList.add('show-header');
    header.classList.add('header-overlay');
}else{
    mainheader.classList.remove('show-header');
    header.classList.remove('header-overlay');
}
})
$('.slider').slick();