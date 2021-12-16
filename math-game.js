console.log("code js")

function send(){
    console.log("function send")
    number1 = document.getElementById("num_1_input").value;
    number2 = document.getElementById("num_2_input").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num_1_input").value = "";
    document.getElementById("num_2_input").value = "";
}