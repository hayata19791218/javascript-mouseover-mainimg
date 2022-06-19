const thumbs = document.querySelectorAll('.thumb');

thumbs.forEach(function(img,index){

  const mainImg = document.getElementById('bigimg');

  img.onmouseover = function(){
    mainImg.src = this.dataset.image;
  }

  img.onmouseleave = function(){
    mainImg.src = "images/img1.jpeg"
  }
});