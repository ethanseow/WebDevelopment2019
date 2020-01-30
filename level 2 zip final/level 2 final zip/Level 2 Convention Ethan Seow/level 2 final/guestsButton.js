function initialize(){
    button1 = document.getElementById("button1");
    primaryGuest1 = document.getElementById("primaryGuest1Info");
    button2 = document.getElementById("button2");
    primaryGuest2 = document.getElementById("primaryGuest2Info");

    button1Toggle = false;
    button2Toggle = false;


    guestDisplay1 = "hidden";
    button1Text = "Show Info";
    guestDisplay2 = "hidden";
    button2Text = "Show Info";
    display();
}
function display(){
    primaryGuest1.style.visibility = guestDisplay1;
    button1.innerHTML = button1Text;

    primaryGuest2.style.visibility = guestDisplay2;
    button2.innerHTML = button2Text;
}
function showInfo(guestNumber){
    if(guestNumber == 1){
        button1Toggle = !button1Toggle;
        if(button1Toggle){
            guestDisplay1 = "visible";
            button1Text = "Hide Info";
        }else{
            guestDisplay1 = "hidden";
            button1Text = "Show Info";
        }
    }else if(guestNumber == 2){
        button2Toggle = !button2Toggle;
        if(button2Toggle){
            guestDisplay2 = "visible";
            button2Text = "Hide Info";
        }else{
            guestDisplay2 = "hidden";
            button2Text = "Show Info";
        }
    }
    display();
}
