var read_mode = function(){
    var cont = document.getElementById("favline");
    var btn = document.getElementById("lftbtn");
    
    if (cont.getAttribute("class") == "close"){
        btn.innerText = "Read Less";
        cont.setAttribute("class","open");
    
    } else {
        btn.innerText = "Read More";
        cont.setAttribute("class","close");
    };
};


var scroll_left = function(){
    var scroll_me = document.getElementsByClassName("happy_custo");
    scroll_me[0].scrollLeft-=540;
    
};

var scroll_right = function(){
    var scroll_me = document.getElementsByClassName("happy_custo");
    scroll_me[0].scrollLeft+=540;
    
};