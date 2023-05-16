function scrollToAbout() {
  var element = document.getElementById("about");
  element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
