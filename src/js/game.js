function insertInLog(){
    let text = document.getElementById("command-input").value;
    let result = document.getElementById("gamelogger").innerText
    document.getElementById("gamelogger").innerText = result + "\n" + text;
    document.getElementById("command-input").value = ""
    document.getElementById("command-input").focus();
}