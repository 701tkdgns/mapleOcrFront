function test(input){
    var file = input.files[0];

    var newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');
    

    newImage.src = URL.createObjectURL(file);
    newImage.style.width = "100%";
    newImage.style.height = "100%";
    newImage.style.objectFit = "contain";
    
    var container = document.getElementById('image-show');
    container.appendChild(newImage);
    container.style.visibility = "visible";
    file.textContent = null;

    var newImage = document.getElementById('image-show').lastElementChild;

    //이미지는 화면에 나타나고
    newImage.style.visibility = "visible";
  
    //이미지 업로드 버튼은 숨겨진다
    document.getElementById('image-upload').style.visibility = 'hidden';

}