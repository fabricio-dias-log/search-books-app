import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/models/item.interface';
import { LivroVolumeInfo } from 'src/app/models/livro-volume-info';
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

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map(item => new LivroVolumeInfo(item));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}



