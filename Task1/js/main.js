var input1 = document.getElementById("inputtag1");
var input2 = document.getElementById("inputtag2");
var input3 = document.getElementById("inputtag3");
var btn1 = document.getElementById("buttonTag");
var btn2=document.getElementById("clearTag")
var tb = document.getElementById("tbody");
var counter = 1;
btn1.addEventListener("click", function () {
    if(input1.value=="" || input2.value=="" || input3.value=="")
    {
        alert("Yazi ucun Bosluqlari bos ola bilmez");
        return;
    }
    var tr = document.createElement("tr");
    var th0 = document.createElement("th");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    th0.innerText = counter++;
    th1.innerText = input1.value;
    th2.innerText = input2.value;
    th3.innerText = input3.value;
    tr.appendChild(th0);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tb.appendChild(tr);
    input1.value = "";
    input2.value = "";
    input3.value = "";
    
})