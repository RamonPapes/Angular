import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dio-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  titulo = 'Sucesso!';
  descricao = 'Seu registro foi cadastrado com sucesso!';
  btnSucesso = 'OK';
  btnCancelar = 'Cancelar';
  corBtn = 'primary';
  possuirBtnFechar = 'false';
  constructor(public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if(this.data){
      this.titulo = this.data.titulo || this.titulo;
      this.descricao = this.data.descricao || this.descricao;
      this.btnSucesso = this.data.btnSucesso || this.btnSucesso;
      this.btnCancelar = this.data.btnCancelar || this.btnCancelar;
      this.corBtn = this.data.corBtn || this.corBtn;
      this.possuirBtnFechar = this.data.possuirBtnFechar || this.possuirBtnFechar;
    }
  }

}
