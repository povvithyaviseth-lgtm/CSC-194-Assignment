function biggerButtonOnClick()
{
    document.getElementById("textArea").style.fontSize = "24pt";
}

function radioButton()
{
    let isCheckFancyShmancy = document.getElementById("fancyShmancy").checked
    if(isCheckFancyShmancy)
    {
        const textArea = document.getElementById("textArea")
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } 
    else
    {
        const textArea = document.getElementById("textArea")
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }     
}