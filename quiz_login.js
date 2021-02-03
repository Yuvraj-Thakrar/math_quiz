function adduser(){
    u1=document.getElementById("user1").value;
    u2=document.getElementById("user2").value;

    localStorage.setItem("user1",u1);
    localStorage.setItem("user2",u2);

    window.location="quiz_game.html";
}