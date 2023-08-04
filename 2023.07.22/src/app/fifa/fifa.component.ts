import { Component } from '@angular/core';

@Component({
  selector: 'app-fifa',
  templateUrl: './fifa.component.html',
  styleUrls: ['./fifa.component.css']
})
export class FifaComponent {
csapatAdat:string[] = [
"Anglia;4;0;1662", 
"Argentína;10;0;1614", 
"Belgium;1;0;1752", 
"Brazília;3;-1;1719", 
"Chile;17;-3;1576", 
"Dánia;14;-1;1584", 
"Franciaország;2;1;1725", 
"Hollandia;13;3;1586", 
"Horvátország;8;-1;1625", 
"Kolumbia;9;-1;1622", 
"Mexikó;12;0;1603", 
"Németország;16;-1;1580", 
"Olaszország;15;1;1583", 
"Peru;19;0;1551", 
"Portugália;5;1;1643", 
"Spanyolország;7;2;1631", 
"Svájc;11;0;1604", 
"Svédország;18;0;1560", 
"Szenegál;20;0;1546", 
"Uruguay;6;-1;1639"
];

objektumFeltolto(feltoltendoElem:string[]):fifaElem[]{
  let beolvasottAdatok:fifaElem[]=[];
  for(let i:number=0;i<feltoltendoElem.length;i++){
    let daraboltSor=feltoltendoElem[i].split(";");
    let objektum={
      orszag:daraboltSor[0],
      helyezes:Number(daraboltSor[1]),
      valtozas:Number(daraboltSor[2]),
      pont:Number(daraboltSor[3]),
    }
    beolvasottAdatok.push(objektum)
  }
  return beolvasottAdatok;
}

megjelenitendoAdatok=this.objektumFeltolto(this.csapatAdat);

}

export interface fifaElem{
  orszag:string;
  helyezes:number;
  valtozas:number;
  pont:number
}
