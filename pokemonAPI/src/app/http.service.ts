import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getPokemon();
    this.pokemonAbilities();
    this.overgrow();
    this.chlorophyll();
  }



getPokemon(){
  let pokemon = this._http.get("https://pokeapi.co/api/v2/pokemon/1/");
  pokemon.subscribe((data:any) => {
    console.log("Got our Pokemon!", data);
  })
};

pokemonAbilities(){
  let pokemon = this._http.get("https://pokeapi.co/api/v2/pokemon/1/");
  pokemon.subscribe((data:any) => {
    console.log(data)
    console.log(`${data.name}'s abilities are ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name}.`);
  })
};

overgrow(){
  let overgrow = this._http.get("https://pokeapi.co/api/v2/ability/65/");
  overgrow.subscribe((data:any) => {
    console.log(`${data.pokemon.length} Pokemon have the ${data.name} ability!`);
  })
};

chlorophyll(){
  let chlorophyll = this._http.get("https://pokeapi.co/api/v2/ability/34/");
  chlorophyll.subscribe((data:any) => {
    console.log(`${data.pokemon.length} Pokemon have the ${data.name} ability!`);
  })
};

}