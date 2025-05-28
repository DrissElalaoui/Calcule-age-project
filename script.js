document.getElementById('btn').addEventListener("click",function(){
    var years = document.getElementById('in1').value;
    var mounth = document.getElementById('in2').value;
    var day = document.getElementById('in3').value;
    const annee = new Date().getFullYear();
    const jour = new Date().getDate();
    const mois = new Date().getMonth() + 1;
    if(years != "" && mounth != "" && day != ""){
         if( mounth > mois) {
            document.getElementById('h1').innerHTML = ( annee - 1) - years;
            if(day <= jour){
                document.getElementById('h2').innerHTML = 12 - mounth + mois;
                document.getElementById('h3').innerHTML =  jour - day;
            }else {
                document.getElementById('h2').innerHTML =  12 - (mounth - mois) -1;
                document.getElementById('h3').innerHTML = 30 - (day - jour);
            }
        }
        else {
            document.getElementById('h1').innerHTML = annee - years;
            if(day <= jour) {
                document.getElementById('h2').innerHTML =  mois - mounth;
                document.getElementById('h3').innerHTML =  jour - day;
            }else {
                document.getElementById('h2').innerHTML =  mois - mounth - 1;
                document.getElementById('h3').innerHTML =  30 - (day - jour);
            }
        }
       
    } else {
        alert("Tout les champs obligatoire")
            document.getElementById('h1').innerHTML = "--";
            document.getElementById('h2').innerHTML = "--";
            document.getElementById('h3').innerHTML = "--";
    } 
    

})