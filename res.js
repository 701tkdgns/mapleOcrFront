// // function get_query(){
// //      var url = document.location.href;
// //     var qs = url.substring(url.indexOf('?') + 1).split('&'); 
// //     for(var i = 0, result = {}; 
// //         i < qs.length; i++){ qs[i] = qs[i].split('='); 
// //         result[qs[i][0]] = decodeURIComponent(qs[i][1]); 
// //     } 
// //     return result; 
// // }

// // var imgname = get_query();
// // // var resimg = document.createElement("img");
// // // resimg.setAttribute("src", imgname);
// // // resimg.setAttribute("src", imgname);
// // // resimg.setAttribute("width", 200);
// // // resimg.setAttribute("height", 150);


// // // function getParameterByName(name) { 
// // //     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); 
// // //     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), 
// // //     results = regex.exec(location.search); 
// // //     return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); 
// // // }

// // // var imgname = getParameterByName("userimg");
// // var resimg = document.createElement("resimg");
// // resimg.setAttribute("class", 'img');
// // resimg.src = URL.createObjectURL(imgname);
// // resimg.setAttribute("width", 200);
// // resimg.setAttribute("height", 150);

// // var container = document.getElementById('image-show');
// // container.appendChild(resimg);
// // var file = container.lastElementChild;
// // file.style.visibility = "visible";






// function loadFile(input) {
//     var file = input.files[0];

//     // var name = document.getElementById('fileName');
//     // name.textContent = file.name;

//     var newImage = document.createElement("img");
//     newImage.setAttribute("class", 'img');

//     newImage.src = URL.createObjectURL(file);   

//     newImage.style.width = "70%";
//     newImage.style.height = "70%";
//     // newImage.style.visibility = "hidden";   //버튼을 누르기 전까지는 이미지 숨기기
//     newImage.style.objectFit = "contain";

//     var container = document.getElementById('image-show');
//     container.appendChild(newImage);
// };


var submit = document.getElementById('submitButton');
submit.onclick = showImage;     //Submit 버튼 클릭시 이미지 보여주기

function showImage() {
    var newImage = document.getElementById('image-show').lastElementChild;
  
    //이미지는 화면에 나타나고
    newImage.style.visibility = "visible";
  
    //이미지 업로드 버튼은 숨겨진다
    document.getElementById('image-upload').style.visibility = 'hidden';

    document.getElementById('fileName').textContent = null;     //기존 파일 이름 지우기
}



function test(input){
    var file = input.files[0];

    var newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');

    console.log(file);

    newImage.src = URL.createObjectURL(file);
    newImage.style.width = "100%";
    newImage.style.height = "100%";
    newImage.style.objectFit = "contain";
    
    var container = document.getElementById('image-show');
    container.appendChild(newImage);
    container.style.visibility = "visible";

}