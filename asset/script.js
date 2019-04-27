document.body.classList.add('js-loading');
window.addEventListener("load", showPage, false);
function showPage() {
  document.body.classList.remove('js-loading');
}
var menu = document.getElementById("menu");
var menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", function(e){
	menuIcon.classList.toggle("bar-swap");
	menu.classList.toggle("hide");
});