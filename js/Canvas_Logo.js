
function Canvas_Logo()
{
  var Logo_Canvas =document.getElementById("Logo_Canvas");
      var ctx = Logo_Canvas.getContext('2d');
      var img = new Image;
      img.onload = function(){
        ctx.drawImage(img,0,0); // Or at whatever offset you like
      };
      img.src = strDataURI;
}
