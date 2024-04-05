import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs';
import { Item } from 'src/app/models/item.interface';
import { LivroVolumeInfo } from 'src/app/models/livro-volume-info';
import { Livro } from 'src/app/models/livro.interface';
import { LivroService } from 'src/app/services/livro.service';

const PAUSA = 300;
@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  campoBusca = new FormControl();

  constructor(private livroService: LivroService) { }

  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSA),
    filter(valorDigitado => valorDigitado.length > 3),
    switchMap((valorDigitado)=> this.livroService.buscarLivros(valorDigitado)),
    map((items: Item[]) => this.livrosResultadoParaLivros(items))
  );

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map(item => new LivroVolumeInfo(item));
  }
}



