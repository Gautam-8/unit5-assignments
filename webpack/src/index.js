import {add,mult} from "./calc.js";
import("./index.css");
import image from "./images/notebook.gif"

// console.log(add(12,12));
// console.log(mult(12,12));

const h1 = document.createElement("h1");
h1.innerText = "Notebook";
h1.classList.add("redcolor");

document.getElementById("root").appendChild(h1);

const img = document.createElement('img');
img.src = image;
img.classList.add("joker")
document.getElementById('joker').appendChild(img);

let box = document.getElementById("box");

let write = document.createElement("input");
write.setAttribute('id','write');
write.placeholder = "Write Here";

let title = document.createElement("input");
title.setAttribute('id','title');
title.placeholder = "Title";

let btn = document.createElement('button');
btn.setAttribute("id","save")
btn.innerText = "Save";

box.append(title,write,btn);

btn.addEventListener('click' , savee);

function savee(){


  let box1 = document.getElementById("box1");

    let titlee = document.getElementById('title');
    let written = document.getElementById("write");
   
    console.log(titlee.value);
    console.log(written.value);

    let savetitle = document.createElement('h2'); savetitle.setAttribute("class" , 'savetitle');
    savetitle.innerText= titlee.value;

    let savediv = document.createElement('p');  savediv.setAttribute("class","savediv")
      savediv.innerText = written.value;

      let div = document.createElement('div'); div.setAttribute('class' , "divv")
      div.append(savetitle , savediv) ;

    box1.append(div);
       
}

// import React from "react"
// import ReactDom  from "react-dom";

// ReactDom.render(
// //   React.createElement("h1" ,{className : "redcolor"}, 
// //   ["Hello react" ,
// //   React.createElement("i" , null , "React"),
// //  ]
// //  ),
// <h1 className="redcolor"><i>Legend</i> Hello react</h1>,

//   document.getElementById('root')
// )



