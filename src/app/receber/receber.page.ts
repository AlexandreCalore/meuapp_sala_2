import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receber',
  templateUrl: './receber.page.html',
  styleUrls: ['./receber.page.scss'],
  standalone: false,
})
export class ReceberPage implements OnInit {

  cliente: string = '';
  vencimento: string = '';
  pagamento: string = '';
  valor: string = '';
  listaReceber: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  cadastrar() {
    this.listaReceber.unshift({
      cliente: this.cliente,
      vencimento: this.vencimento,
      pagamento: this.pagamento,
      valor: this.valor,
    });
    this.limparFormulario();
  }

  excluir(index: number) {
    this.listaReceber.splice(index, 1);
  }

  limparFormulario() {
    this.cliente = '';
    this.vencimento = '';
    this.pagamento = '';
    this.valor = '';
  }

}
