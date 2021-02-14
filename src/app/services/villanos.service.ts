import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VillanosService {
  
  private villanos: Villano[] =[
    {
        nombre: "Manta Negra",
        bio: "Manta Negra es villano de Aquaman. Cuando era niño, David era un gran apasionado del mar e idolatraba a Aquaman. Pero fue secuestrado y obligado a trabajar forzado en un buque lleno de criminales. Desde el barco vio a Aquaman nadando con delfines, pero no se dio cuenta de que el niño estaba secuestrado... desde entonces, David se obsesionó con la idea de vengarse de Aquaman, por no haberle salvado",
        img: "assets/img/manta-negra.png",
        aparicion: "1967 (Septiembre)",
        casa:"DC"
      },
      {
        nombre: "Joker",
        bio: "Considerado el mejor villano de cómics, el Joker es el villano perfecto. Tiene muchos orígenes diferentes, y en la actualidad, en DC Rebirth, existen hasta tres Jokers diferentes. Antes de ser un villano, era un patético comediante que tuvo que recurrir a realizar actos delictivos para poder pagar algunas deudas. Se tuvo que poner la máscara roja de Red Hood, pero tuvo la mala suerte de encontrarse cara a cara con Batman, cayendo en residuos tóxicos que le dejaron la cara destrozada... ",
        img: "assets/img/joker.png",
        aparicion: "1940 (Abril)",
        casa:"DC"
      },
      {
        nombre: "Dr.Doom",
        bio: "posiblemente el mayor villano de Marvel Comics. El archienemigo de los 4 Fantásticos ha sido un dolor de cabeza para prácticamente cualquier héroe o grupo de héroes alguna vez a lo largo de los últimos 70 años, uno de los villanos más letales de Marvel.",
        img: "assets/img/doom.png",
        aparicion: "1962 (Julio)",
        casa: "Marvel"
      },
      {
        nombre: "Kingpin",
        bio: "Wilson Fisk comenzó su vida como un niño pobre en la ciudad de Nueva York, acosado por sus compañeros debido a su obesidad. Fisk comenzó a entrenar a sí mismo en el combate físico, usando su recién descubierta fuerza para intimidar a los agresores a unirse a su banda. Finalmente, fue descubierto por el señor del crimen, Don Rigoletto. Fisk se convirtió en el guardaespaldas y mano derecha de Don Rigoletto. Finalmente, Fisk mató a Don Rigoletto y tomó el control de su imperio criminal, convirtiéndose en una de las figuras más poderosas del inframundo de Nueva York.",
        img: "assets/img/kingpin.png",
        aparicion: "1967 (Julio)",
        casa:"Marvel"
      },
      {
        nombre: "Sinestro",
        bio: "Antes de convertirse en un supervillano, creador de los Sinestro Corps, Sinestro era el mejor Green Lantern. Pero cuando Hal Jordan descubrió que en realidad era un dictador en su planeta, Korugar, se fue expulsado del cuerpo de Green Lanterns. Es un megalómano, obsesionado con el orden, el miedo y el control.",
        img: "assets/img/sinestro.png",
        aparicion: "1961 (Agosto)",
        casa: "DC"
      },
      {
        nombre: "Venom",
        bio: "El personaje es un extraterrestre sensible simbionte con una forma amorfa, semi-líquido, que sobrevive mediante la unión con un huésped, por lo general humano. Esta forma de vida dual recibe poderes mejorados y generalmente se refiere a sí misma como «Venom».",
        img: "assets/img/venom.png",
        aparicion: "1984 (Mayo)",
        casa: "Marvel"
      },
      {
        nombre: "Magneto",
        bio: "Es un villano/aliado recurrente de la Patrulla-X, un mutante capaz de controlar los campos magnéticos, pudiendo manipular el metal con su mente. Suele entrar en conflicto con los héroes de Marvel debido su ideología supremacista, que propugna suplantar a la especie humana en favor de la población mutante.",
        img: "assets/img/magneto.png",
        aparicion: "1963 (Septiembre)",
        casa: "Marvel"
      }
];
  constructor() {
    console.log("Servicio listo para usar!!!");
  }

  getVillanos():Villano[] {
    return this.villanos;
  }
}
export interface Villano{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?:number;
}