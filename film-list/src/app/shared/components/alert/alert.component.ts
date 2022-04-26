import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Alerta } from '../../models/alerta';
// import { Alerta } from 'src/app/shared/models/alerta'

@Component({
  selector: 'dio-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  alerta = {
    titulo: 'Sucesso!',
    descricao: 'Seu registro foi cadastrado com sucesso!',
    btnSucesso: 'OK',
    btnCancelar: 'Cancelar',
    corbtnSucesso: 'accent',
    corbtnCancelar: 'warn',
    possuirBtnFechar: false,
  } as Alerta;
  
  constructor(public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alerta) { }

  ngOnInit() {
    if(this.data){
      this.alerta.titulo = this.data.titulo || this.alerta.titulo;
      this.alerta.descricao = this.data.descricao || this.alerta.descricao;
      this.alerta.btnSucesso = this.data.btnSucesso || this.alerta.btnSucesso;
      this.alerta.btnCancelar = this.data.btnCancelar || this.alerta.btnCancelar;
      this.alerta.corbtnSucesso = this.data.corbtnSucesso || this.alerta.corbtnSucesso;
      this.alerta.corbtnCancelar = this.data.corbtnCancelar || this.alerta.corbtnCancelar;
      this.alerta.possuirBtnFechar = this.data.possuirBtnFechar || this.alerta.possuirBtnFechar;
    }
  }
}
