import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {

  listaLivros: [];
  campoBusca: string = '';
  subscription: Subscription;

  constructor(private livroService: LivroService) { }

  buscarLivros() {
    this.subscription = this.livroService.buscarLivros(this.campoBusca).subscribe({
      next: (response) => {
        this.listaLivros = response.items;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Requisição completa');
      }
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}



