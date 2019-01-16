import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   //création de l'array MesPosts 

     MesPosts = [
    {
      title: 'Mon premier post',
      content: 'Durant l\'Antiquité grecque\, les mathématiques se composaient de 4 sciences ou quadrivium \: l\'arithmétique\, la géométrie mais aussi la musique et l\'astronomie. Ce regroupement s\'expliquait par le fait que chaque discipline permettait selon eux d\'appréhender l\'harmonie du monde.',
     
    },
    {
      title: 'Mon deuxième post',
      content: 'Sur les quatre anciens présidents de la République de Corée du Sud encore en vie aujourd\'hui, tous sont allés en prison. Ils furent tous condamnés, à la fin de leurs mandats, pour des affaires de corruption.',
    
    },
    {
      title: 'Encore un post',
      content: 'Le Soleil n\'est pas fixe, il tourne autour du centre de notre galaxie à une vitesse d\'environ 250 km/sec entrainant le système solaire avec lui. Il lui faudrait environ 226 millions d\'années pour faire une rotation complète, ce qui signifie qu\'il a dû en faire une vingtaine dans sa vie.',
  
    }
  ];

  }
      

    
