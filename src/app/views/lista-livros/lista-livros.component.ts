import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, EMPTY, filter, map, of, switchMap, tap, throwError } from 'rxjs';
import { Item } from 'src/app/models/item.interface';
import { LivroVolumeInfo } from 'src/app/models/livro-volume-info';
import { Livro } from 'src/app/models/livro.interface';
import { LivrosResultado } from 'src/app/models/livrosResultado.interface';
import { VolumeInfo } from 'src/app/models/volumeInfo.interface';
import { LivroService } from 'src/app/services/livro.service';

const PAUSA = 300;
@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  campoBusca = new FormControl();
  mensagemErro = '';
  livrosResultado: LivrosResultado;
  listaLivros: LivroVolumeInfo[];

  constructor(private livroService: LivroService) { }

  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSA),
    filter(valorDigitado => valorDigitado.length >= 3),
    switchMap((valorDigitado)=> this.livroService.buscarLivros(valorDigitado)),
    map(response => this.livrosResultado = response),
    map(response => response.items ?? []),
    map(items => this.listaLivros =  this.livrosResultadoParaLivros(items)),
    catchError(() => {
      this.mensagemErro = 'Erro ao buscar livros, recarregue a aplicação e tente novamente.';
      return EMPTY;
    })
  );

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map(item => new LivroVolumeInfo(item));
  }
}



