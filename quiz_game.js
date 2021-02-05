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