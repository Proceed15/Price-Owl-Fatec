import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercadolivreService {
  private urlBase = 'https://lista.mercadolivre.com.br/';

  constructor(private http: HttpClient) { }

  buscarProdutos(nomeProduto: string): Observable<string> {
    const url = this.urlBase + nomeProduto;
    return this.http.get(url, { responseType: 'text' });
  }
  extrairProdutos(response: string): any[] {
    const site = new DOMParser().parseFromString(response, 'text/html');
    const produtos = site.querySelectorAll('.andes-card.andes-card--flat.andes-card--default.ui-search-result.shops__cardStyles.ui-search-result--core.andes-card--padding-default');
  
    const produtosExtraidos: any[] = [];
  
    produtos.forEach((produto: Element) => {
      const titulo = produto.querySelector('.ui-search-item__title');
      const tituloText = titulo instanceof HTMLElement ? titulo.textContent : '';
  
      const link = produto.querySelector('.ui-search-link')?.getAttribute('href');
      const real = produto.querySelector('.price-tag-fraction')?.textContent;
      
      const fotoElement = produto.querySelector('.ui-search-result__content--image img');
      const foto = fotoElement?.getAttribute('src');
  
      const produtoObj = {
        titulo: tituloText ? tituloText.trim() : '',
        foto: foto ? foto.trim() : '',
        link: link ? link : '',
        preco: real ? real.trim() : ''
      };
  
      produtosExtraidos.push(produtoObj);
    });
  
    return produtosExtraidos;
  }
  
}