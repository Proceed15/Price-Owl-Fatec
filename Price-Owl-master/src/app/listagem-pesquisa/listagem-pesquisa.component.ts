import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/itens';
import { FiltroService } from '../services/filtro.service';
import { SearchService } from '../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-pesquisa',
  templateUrl: './listagem-pesquisa.component.html',
  styleUrls: ['./listagem-pesquisa.component.css']
})
export class ListagemPesquisaComponent {
  @Input() itens: Item[] = [];
  public filtros: FiltroService;
  public search: SearchService;
  constructor(public filtro: FiltroService, public searchs:SearchService,private router: Router){
    this.filtros = filtro;
    this.search = searchs;
  }
  verDetalhesProduto(id: string): void {
    this.router.navigate(['/telaproduct', id]);
  }

  filtroAutomatico(filtro: string){
    this.search.searchItens(this.search.inputValue,filtro)
  }


  formatPrice(price: number): string {
    let formattedPrice = price.toFixed(2).replace('.', ',');
    if (formattedPrice.length > 6) {
      formattedPrice = 'R$ ' + formattedPrice.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    } else {
      formattedPrice = 'R$ ' + formattedPrice;
    }
    return formattedPrice;
  }

}

