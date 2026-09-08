function biggerButtonOnClick()
{
    document.getElementById("textArea").style.fontSize = "24pt"
}

function radioButton()
{
    let isCheckFancyShmancy = document.getElementById("fancyShmancy").checked
    if(isCheckFancyShmancy)
        document.getElementById("textArea").style.fontWeight = "bold"
    else
        document.getElementById("textArea").style.fontWeight = "normal"
}