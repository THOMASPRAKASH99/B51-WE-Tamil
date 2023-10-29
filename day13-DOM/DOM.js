        let tag = document.createElement("mark");
        tag.innerHTML = "my name is thomas prakash";
        document.body.append(tag);

        let div = document.createElement("div");
        div.innerHTML = "";
        
        let span = document.createElement("span");
        span.innerHTML = "";
        div.append(span)
       
        let mark = document.createElement("div");
        mark.innerHTML = "india is my contry";
        span.append(mark)
        mark.style.color="blue";
        mark.style.fontSize="30px "  
        document.body.append(div);

       
        let div1 = document.createElement("div");
        div1.innerHTML = "";

        let div2 = document.createElement("div");
        div2.innerHTML = "";
        div1.append(div2)

        let div3 = document.createElement("div");
        div3.innerHTML = "";
        div2.append(div3)
        document.body.append(div1)


        let ancher = document.createElement("a");
        ancher.setAttribute("href","https://www.zenclass.in/class",);
        ancher.innerHTML = "zen class";
        document.body.append(ancher);


        let heading = document.createElement("h3");
        heading.innerHTML = "Thomas Prakash";
        document.body.append(heading)

        let heading1 = document.createElement("h3");
        heading1.innerText = "Thomas Prakash";
        document.body.append(heading1)

        let tag1 = document.createElement("a");
        tag1.setAttribute("href","https://www.google.com/");
        tag1.innerHTML = "Google.com";
        document.body.append(tag1)

        let tom = document.createElement("div");
        tom.setAttribute("class","container");
        

        let tom1 = document.createElement("div");
        tom1.setAttribute("class","row");
        tom.append(tom1)

        let tom2 = document.createElement("div");
        tom2.setAttribute("class","col");
        tom1.append(tom2)
        document.body.append(tom)