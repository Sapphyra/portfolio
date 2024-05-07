//get document references
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var modalImgLink = "";

//get all images inside portfolio grid
var images = document.querySelectorAll("#portImages");

console.log(images.length)

for (let i = 0; i < images.length; i++)
{
  images[i].onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  modalImgLink = this.dataset.haslink;
  //captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on the image, link to something else
modalImg.onclick = function() {
  console.log("link triggered");
  window.location.href = modalImgLink;
}

// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
  modal.style.display = "none";
} 