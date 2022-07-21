function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;
    s=(p*r*t)/100;
    document.getElementById("r").innerHTML ="at an interest rate of "+r+"%";
    document.getElementById("p").innerHTML = "If you deposit "+p;
    document.getElementById("s").innerHTML ="You will receive an amount of "+ s;
    document.getElementById("y").innerHTML = "By The year 2025" ;
   
    }
