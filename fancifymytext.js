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
    let userInput = document.getElementById("textArea").value;
    userInput = userInput.toUpperCase();

    let sentence = userInput.split(".");

    for(let index = 0; index < sentence.length; index++)
    {
        if(sentence[index].trim() == "")
            continue;
        
        let tokens = sentence[index].trim().split(" ");
        tokens[tokens.length - 1] += "-MOO";
        sentence[index] = tokens.join(" ");
    }

    document.getElementById("textArea").value = sentence.join(".");
}