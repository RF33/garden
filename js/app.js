function myFunction() {
    
        alert("Search doesn't work");
        
        }
  
function imagefun() {

        var Image_Id = document.getElementById('getImage');
        if (Image_Id.src.match("./pic/pic7.jpg")) {
             Image_Id.src = "./pic/pic8.jpg" ;
        }
        else {
            Image_Id.src = "./pic/pic7.jpg";
        }
    }   