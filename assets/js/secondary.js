/*------------------ For career --------------------*/

var careerPage = document.getElementById("career-page");
var careerPageFooter = document.getElementById("career-page-footer");
var careerContent = document.getElementById("career-content");
var careerClose = document.getElementsByClassName("career-content-close")[0];

// For displaying career page when clicked in navbar
careerPage.onclick = function() {
  careerContent.style.display = "block";
}

// For displaying career page when clicked in footer
careerPageFooter.onclick = function() {
  careerContent.style.display = "block";
}

// For closing career page
careerClose.onclick = function() {
  careerContent.style.display = "none";
}

/*------------------ end career -------------------*/


/*------------------ For form --------------------*/
// Rest form after 500 milli second after sumbit
function resetForm(){
  setTimeout(()=>{
    document.getElementById("myform").reset()
  },500);
}
/*------------------ end form -------------------*/