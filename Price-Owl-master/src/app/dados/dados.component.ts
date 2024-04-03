import { Component } from '@angular/core';
import { MercadolivreService } from '../services/mercadolivre.service';
import { AmazonService } from '../services/amazon.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent {
  produtoNome = '';
  produtos: any[] = [];


  constructor(private mercadoLivreService: MercadolivreService, private amazon: AmazonService) {}

  // buscarProdutos() {
  //   this.mercadoLivreService.buscarProdutos(this.produtoNome)
  //     .subscribe((response: any) => {
  //       this.produtos = this.mercadoLivreService.extrairProdutos(response);

  //       console.log(response)
  //     });
  // }


  buscarProdutos() {
    this.amazon.buscarProdutos(this.produtoNome)
      .subscribe((response: any) => {
        this.produtos = this.amazon.extrairProdutos(response);

        console.log(response)
      });
  }

}
