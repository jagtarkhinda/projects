/*******NAVIGATION JS*******/
function showMenu(){
    var menumain = document.getElementById("nav");
    var hamburger = document.getElementsByClassName("menu")[0];
    if(menumain.className === "mainnav")
    {
        hamburger.sty
        //changing classname from mainnav to mainnavsmall
        menumain.className += "small";
    }
    else{
        menumain.className = "mainnav"
    }
}
/*******END NAVIGATION JS*******/