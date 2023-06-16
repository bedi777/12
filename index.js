 var languagesArray = [
    ["javascript"],
    ["python"],
    ["java"],
    ["C#"]
 ]

 for (var i = 0; i < languagesArray.length; i++){
    var currentLanguage = languagesArray[i][0];

    if(currentLanguage ==="javascript"){
        console.log("javascript foung")
    }else{
        console.log("looking for" + currentLanguage)
    }
 }