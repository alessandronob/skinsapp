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

  constructor(private mDBServices: ListService, private loadingController: LoadingController){}

  ngOnInit() {
    this.consultaVGA();
  }

  async consultaVGA(){
  const loading = await this.loadingController.create({
    message: 'Carregando ...'
  });
 

  await loading.present();
  

  await this.mDBServices.getVGA().subscribe(
    data=>{
      this.skins = data;
      loading.dismiss();
      //console.log(this.tipo);
    }
  ).add();

  }


  

}

