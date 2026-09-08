function biggerButtonOnClick()
{
    document.getElementById("textArea").style.fontSize = "24pt";
}

function radioButton()
{
    let isCheckFancyShmancy = document.getElementById("fancyShmancy").checked
    const textArea = document.getElementById("textArea")
    if(isCheckFancyShmancy)
    { 
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } 
    else
    {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }     
}

function mooButton()
{
    let userInput = document.getElementById("textArea").value
    console.log(userInput)
}