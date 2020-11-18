location.href = "/magic.html";

function randomWord(randomFlag, min, max) {
    var str = "", range = min,
    // 字母，數字 
    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // 隨機產生 
    if (randomFlag) { 
        range = Math.round(Math.random() * (max - min)) + min; 
    } 
    for (var i = 0; i < range; i++) { 
        pos = Math.round(Math.random() * (arr.length - 1)); 
        str += arr[pos]; 
    }
    return str;
}

var flag = "CTF{Sad_owo_ao" + randomWord(false, 3) + "QOQ_da" + randomWord(false, 2) + "ZZ}";
document.getElementsById('flag').innerHTML = flag;