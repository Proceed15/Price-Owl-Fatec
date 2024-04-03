import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  private urlBase = 'https://www.amazon.com.br/s?k=';

  constructor(private http: HttpClient) { }

  buscarProdutos(nomeProduto: string): Observable<string> {
    const url = this.urlBase + nomeProduto;
    return this.http.get(url, { responseType: 'text' });
  }
  extrairProdutos(response: string): any[] {
    const site = new DOMParser().parseFromString(response, 'text/html');
    const produtos = site.querySelectorAll('.s-card-container.s-overflow-hidden.aok-relative.puis-wide-grid-style');
  
    const produtosExtraidos: any[] = [];
  
    produtos.forEach((produto: Element) => {
      const titulo = produto.querySelector('.a-size-base-plus.a-color-base.a-text-normal');
      const tituloText = titulo instanceof HTMLElement ? titulo.textContent : '';
  
      const link = produto.querySelector('.a-link-normal.s-no-outline')?.getAttribute('href');
      const real = produto.querySelector('.a-offscreen')?.textContent;
  
      const fotoElement = produto.querySelector('.s-image');
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
