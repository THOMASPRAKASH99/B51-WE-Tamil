let div1 = document.createElement("div");
div1.innerHTML="";
div1.setAttribute("class","container");

let div2 = document.createElement("div");
div2.innerHTML="";
div1.append(div2)
div2.setAttribute("class","row")

let div3 = document.createElement("div");
div3.innerHTML="";
div2.append(div3);
document.body.append(div1);
div3.setAttribute("class","col");


        