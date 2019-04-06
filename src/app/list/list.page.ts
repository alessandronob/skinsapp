import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  image:[];
  tipo: [];
  nome: [];
  param:any;
  id:any;
  skins: [];
  private qualidade_name:string ;
  private arrayCategory = ["Oculto", "Secreto", "Restrito", "Militar", "Nivel Militar"];
    
  
  constructor(private listServices: ListService, private loadingController: LoadingController){}



  ngOnInit() {
    this.consultaSkins();
  }

  async consultaSkins(index?){
    if (typeof index === 'undefined') index = 3;

    // Define o parametro a ser passado
    let param = (typeof this.qualidade_name === "undefined") ? `?qualidade=${this.arrayCategory[index]}` : `?qualidade=${this.qualidade_name}`;
    const loading = await this.loadingController.create({
      message: 'Carregando ...'
    });
 

  await loading.present();
  

  await this.listServices.getSkins(param).subscribe(
    data=>{
      this.skins = data;
      loading.dismiss();
      //console.log(this.tipo);
    }
  ).add();

  }


  

}

