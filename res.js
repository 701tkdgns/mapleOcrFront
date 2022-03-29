function test(input){
    // 이미지 파일 불러오기
    var file = input.files[0];

    // 이미지 변수 선언 및 초기화
    var newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');
    
    // 이미지 속성 지정 : file, 가로, 세로 등
    newImage.src = URL.createObjectURL(file);
    newImage.style.width = "100%";
    newImage.style.height = "100%";
    newImage.style.objectFit = "contain";




    // 이미지 처리 작업

    var pyshell = require("python-shell")
    var fs = require("fs");
    const { PythonShell } = require("python-shell");

    // var data = fs.readFileSync("./image_07.jpg")
    var data = fs.readFileSync(newImage)
    var base64 = data.toString("base64");

    //파이썬.py파일과, 실행시킬 python 프로그램의 경로를 문자열로 입력
    // ocr 파일명으로 변경하기!!
    pyshell = new PythonShell('scripts.py');

    //base64로 인코딩한 문자열을 전송
    pyshell.send(base64);

    pyshell.on("message", rebase64 => {
        var err = null;
   
        //base64 문자열을  Buffer(bytes)타입으로 디코딩
        result = Buffer.from(rebase64,"base64");
        console.log(result);
        fs.writeFileSync("result.jpg", result);
    });

    pyshell.end(err => {
    if (err) {
        console.log(err);
    }
    });

    //
    



    
    // 이미지 보이는 곳(div : image-show)에 이미지 파일 추가
    var container = document.getElementById('image-show');
    container.appendChild(newImage);
    container.style.visibility = "visible";

    // 파일 이름은 보이지 않게 설정
    file.textContent = null;

    var newImage = document.getElementById('image-show').lastElementChild;

    //이미지는 화면에 나타나고
    newImage.style.visibility = "visible";
  
    //이미지 업로드 버튼은 숨겨진다
    document.getElementById('image-upload').style.visibility = 'hidden';

}