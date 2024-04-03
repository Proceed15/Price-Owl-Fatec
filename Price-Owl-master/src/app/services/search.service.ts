import { Injectable } from '@angular/core';
import { ApiMercadoLivreService } from '../services/api-mercado-livre.service';
import { Item } from '../models/itens';
import { ListagemPesquisaComponent } from '../listagem-pesquisa/listagem-pesquisa.component';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public inputValue: string = '';
  public itens: Item[] = [];


  constructor(public apiML: ApiMercadoLivreService) {

  }

  searchItens(searchTerm: string, selectFilter: string): void {
    if (searchTerm.trim() === '') {
      return;
    }

    this.apiML.getItens(searchTerm, selectFilter).subscribe(
      (result) => {
        this.itens = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  searchItemId(id: string){
    this.apiML.getItemId(id);

  }

  searchItensReset(): void {
    this.inputValue = '';

    this.apiML.getItens(this.inputValue, 'price_asc').subscribe(
      (result) => {
        this.itens = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
