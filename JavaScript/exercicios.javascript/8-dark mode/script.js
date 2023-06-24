const chk = document.getElementById('chk');
const corpo = document.getElementById ('corpo')
chk.addEventListener ('change', () => {
    document.body.classList.toggle ('dark')
    
})
function darkMode() {
    var element = document.getElementById ('corpo');
    element.classList.toggle("dark");
    var form = document.getElementById ('search-form');
    form.classList.toggle("dark");
    var box = document.getElementsById ('box');
    box.classList.toggle('dark');
  }

  //$(function(){
    //$(window).on("scroll", function(){
      //  if ($)
    //})
  //})

 