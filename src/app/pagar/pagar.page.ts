import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
  standalone: false,
})
export class PagarPage implements OnInit {

  fornecedor: string = '';
  vencimento: string = '';
  pagamento: string = '';
  valor: string = '';
  listaPagar: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  cadastrar() {
    this.listaPagar.unshift({
      fornecedor: this.fornecedor,
      vencimento: this.vencimento,
      pagamento: this.pagamento,
      valor: this.valor,
    });
    this.limparFormulario();
  }

  excluir(index: number) {
    this.listaPagar.splice(index, 1);
  }

  limparFormulario() {
    this.fornecedor = '';
    this.vencimento = '';
    this.pagamento = '';
    this.valor = '';
  }

}
