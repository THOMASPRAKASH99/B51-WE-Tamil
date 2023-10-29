let div1 = document.createElement("div");
div1.setAttribute("class","container"); 

let div2 = document.createElement("div");
div2.setAttribute("class","container1");
div1.append(div2)
        
let label = document.createElement("label");
label.innerHTML = "Frist Name:";
label.setAttribute("for","fname");
div2.append(label)
    
let input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","input");
input.setAttribute("placeholder","Frist Name");
div2.append(input)

let label1 = document.createElement("label");
label1.innerHTML = "Last Name :";
label1.setAttribute("for","lname");
div2.append(label1)

let input1 = document.createElement("input");
input1.setAttribute("type","text");
input1.setAttribute("id","input1");
input1.setAttribute("placeholder","Last Name");
div2.append(input1)

let label2 = document.createElement("label");
label2.innerHTML = "Address :";
label2.setAttribute("for","Add");
div2.append(label2)

let input2 = document.createElement("input");
input2.setAttribute("type","text");
input2.setAttribute("id","input2");
input2.setAttribute("placeholder","address");
div2.append(input2)

let label3 = document.createElement("label");
label3.innerHTML = "Pincode :";
label3.setAttribute("for","pin");
div2.append(label3)

let input3 = document.createElement("input");
input3.setAttribute("type","text");
input3.setAttribute("id","input3");
input3.setAttribute("placeholder","pincode");
div2.append(input3)

let label4 = document.createElement("label");
label4.innerHTML = "Gender :    ";
label4.setAttribute("for","Gen");
div2.append(label4)

let select = document.createElement("select");
select.setAttribute("name","Gender");
div2.append(select)

let option = document.createElement("option");
option.innerHTML = "Male";
option.setAttribute("value","male");
select.append(option)

let option1 = document.createElement("option");
option1.innerHTML = "Female";
option1.setAttribute("value","female");
select.append(option1)

let food = document.createElement("label");
food.innerHTML = "Choice of food: ";
food.setAttribute("for","");
div2.append(food)

document.body.append(div1);
        
