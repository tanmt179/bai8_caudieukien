let year = parseInt(prompt("enter a year"));
if (year%4==0){
    if(year%100!=0){
        alert("nam nhuan")
    }else if(year%100==0){
        if(year%400!=0){
            alert("khon phai nam nhuan")
        }else
            alert("nam nhuan")
    }
}