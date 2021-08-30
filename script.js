function compute()
{
    var principal = document.getElementById("principal").value;
    
    if (principal == "" || principal <0) {
        alert("Enter a positive number!");
        return false;
    }
    
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    interest = principal * years * rate /100;
    year = new Date().getFullYear()+parseInt(years);

    document.getElementById("hidden_table").style.visibility="visible";
    
    document.getElementById("principal_var").innerText=`${principal}`;
    //the ${} allows you to parse a variable in a string
    //use ` and NOT " or ' 
    document.getElementById("rate_var").innerText=`${rate}%`;
    document.getElementById("interest_var").innerText=`${interest}`;
    document.getElementById("year_var").innerText=`${year}`;
}


function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    //assigns the value from the range object for the interest rate
    //to the variable rateval
    document.getElementById("rate_val").innerText=`${rateval}%`;
    //sets the text of the span rate_val
    //to the variable rateval
}
        