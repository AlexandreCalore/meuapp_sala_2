import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: false,
})
export class CadastroPage implements OnInit {

  nome: string = '';
  tipo: string = '';
  endereco: string = '';
  mensagemErro: string = '';
  listaCadastros: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  cadastrar() {
    if (this.tipo.toUpperCase() ==='C' || this.tipo.toUpperCase() ==='F'){ 
    this.listaCadastros.unshift({
      nome: this.nome,
      tipo: this.tipo.toUpperCase(),
      endereco: this.endereco,
      mensagemErro: this.mensagemErro = '',       
    });
    this.limparFormulario();
  } else {
    this.mensagemErro = 'Tipo deve ser C ou F';
  }
  }

  excluir(index: number) {
    this.listaCadastros.splice(index, 1);
  }

  limparFormulario() {
    this.nome = '';
    this.tipo = '';
    this.endereco = '';
  }

}
