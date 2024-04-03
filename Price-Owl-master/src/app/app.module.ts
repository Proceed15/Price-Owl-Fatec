import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApiMercadoLivreService } from './services/api-mercado-livre.service';
import { ListagemPesquisaComponent } from './listagem-pesquisa/listagem-pesquisa.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { HomeComponent } from './home/home.component';
import { DadosComponent } from './dados/dados.component';
import { MercadolivreService } from './services/mercadolivre.service';
import { AmazonService } from './services/amazon.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListagemPesquisaComponent,
    AboutUsComponent,
    HomeComponent,
    DadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, })
  ],
  providers: [ApiMercadoLivreService, MercadolivreService, AmazonService],
  bootstrap: [AppComponent],
})
export class AppModule { }
