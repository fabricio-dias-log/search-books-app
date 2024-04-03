import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/models/item.interface';
import { Livro } from 'src/app/models/livro.interface';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {

  listaLivros: Livro[] = [];
  campoBusca: string = '';
  subscription: Subscription;
  livro: Livro;

  constructor(private livroService: LivroService) { }

  buscarLivros() {
    this.subscription = this.livroService.buscarLivros(this.campoBusca).subscribe({
      next: (response) => {
       this.listaLivros = this.livrosResultadoParaLivros(response);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Requisição completa');
      }
    });

  }

  livrosResultadoParaLivros(items): Livro[] {
    const livros: Livro[] = [];

    items.forEach(item => {
      livros.push(this.livro = {
        title: item.volumeInfo?.title,
        authors: item.volumeInfo?.authors,
        publisher: item.volumeInfo?.publisher,
        publishedDate: item.volumeInfo?.publishedDate,
        previewLink: item.volumeInfo?.previewLink,
        description: item.volumeInfo?.description,
        thumbnail: item.volumeInfo?.imageLinks?.thumbnail
      });
    });

    return livros;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}



