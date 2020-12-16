window.onload = function(){
let humburgerButton = document.getElementById('hamburger-button'); //Кнопка гамбургер
let sidePannel = document.getElementById('side-pannel'); //Боковая панель
let sidePanelCloseButton = document.getElementById('exit-button'); //Кнопка для закрытия боковой панели
function  showSideBar()
{
	sidePannel.style.left = '0px';
	humburgerButton.style.visibility = 'hidden';
	
}
humburgerButton.addEventListener("click",showSideBar);
function closeSideBar()
{
	sidePannel.style.left = '-400px';
	humburgerButton.style.visibility = 'visible';
}
sidePanelCloseButton.addEventListener("click",closeSideBar);
}
let l = 0;