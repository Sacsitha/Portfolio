function greeting(){
    let userName = document.getElementById("name").value;
    document.getElementById("messageModalLabel").innerHTML = `Hi ${userName}!`;
    document.getElementById("replyMessage").innerHTML = `Thank you for reaching out. I will get back to you shortly!`;   
}