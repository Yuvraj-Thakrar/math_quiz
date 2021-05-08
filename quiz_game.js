function send(){
    n1=document.getElementById("n1").value;
    n2= document.getElementById("n2").value;
    actual_answer=parseInt(n1) * parseInt(n2);

    q_no="<h4>"+n1+"*"+n2+"</h4>";
    input="<br> Answer: <input type='text' id='check_box'>"
    check_btn="<br> <br> <button class'btn btn-primary' onclick='check()'>Check</button>"
    row=q_no+input+check_btn;

    document.getElementById("output").innerHTML=row;

    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
}
q_turn="player1";
ans_turn="player2";
player1_score=0;
player2_score=0;
player2_name=document.getElementById("user2").value;
player1_name=document.getElementById("user1").value;

function check(){
    get_ans=document.getElementById("check_box").value;

    if (get_ans==actual_answer) {
        if (ans_turn=="player1") {
            update_score_p1=player1_score+1;
            document.getElementById("score1").innerHTML=update_score_p1;
        }
        if (ans_turn=="player2") {
            update_score_p2=player2_score+1;
            document.getElementById("score2").innerHTML=update_score_p2;
        }
        if (q_turn=="player1") {
            q_turn="player2";
            document.getElementById("q").innerHTML="Question Turn:"+player2_name;
        }
        else{
            q_turn="player1";
            document.getElementById("ans").innerHTML="Answer Turn:"+player1_name;
        }
    }}