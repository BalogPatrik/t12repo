function DiakInfo(nev:string,csoport:number,tipus:boolean){
    if(tipus==true){
        return ""+nev+" [Team"+csoport+"]"+" - Junior Frontend";
    }
    else{
        return ""+nev+" [Team"+csoport+"]"+" - Webprogramozó";
    }
}

console.log(DiakInfo("Minta Márton", 8, true));

function SzovegesErtekeles(jegy:number){
    var szovegesErtekeles:[string,string];
    if(jegy==5){
        szovegesErtekeles=["Példás","Példás"];
        return szovegesErtekeles;
    }
    else if(jegy==4){
        szovegesErtekeles=["Jó","Jó"];
        return szovegesErtekeles;
    }
    else if(jegy==3){
        szovegesErtekeles=["Változó","Változó"];
        return szovegesErtekeles;

    }
    else if(jegy==2){
        szovegesErtekeles=["Hanyag","Rossz"];
        return szovegesErtekeles;
    } 
}

console.log(SzovegesErtekeles(2));
console.log(SzovegesErtekeles(4));

function HarommalOszthatokSzama(vizsgaltTomb:number[]):number{
    var harommalOszthatokSzama:number=0;
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i]%3==0){
            harommalOszthatokSzama++;
        }
    }
    return harommalOszthatokSzama;
}

var tomb=[10, 23,12, 24, 31, 33, 42, 20]
console.log(HarommalOszthatokSzama(tomb));

function Nyeroszamok(mennyiseg:number,alsoHatar:number,felsoHatar:number):number[]{
    var lottoSzamok:number[]=[];
	for(var i:number=0;i<mennyiseg;i++){
    	var generaltSzam:number=Math.round(Math.random()*(felsoHatar-alsoHatar)+alsoHatar);
        var szerepelE=false;
        for(let j=0;j<lottoSzamok.length;j++){
        	if(generaltSzam==lottoSzamok[j])
            {
            	szerepelE=true;
            }
        }
        if(szerepelE==false)
        {
        	lottoSzamok.push(generaltSzam);
        }
        else{
        	i--;
        }
    }
    return lottoSzamok;
}

console.log(Nyeroszamok(5,1,90));
