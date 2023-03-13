import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AjudaInterativaService } from 'src/app/shared/services/ajuda-interativa/ajudaInterativa.service';
import { FuncionalidadeService } from 'src/app/shared/services/funcionalidade/funcionalidade.service';
import { ProgramaService } from 'src/app/shared/services/programa/programa.service';
import { VersaoService } from 'src/app/shared/services/versao/versao.service';

@Component({
  selector: 'app-ajuda-interativa',
  templateUrl: './ajuda-interativa.component.html',
  styleUrls: ['./ajuda-interativa.component.scss']
})
export class AjudaInterativaComponent implements OnInit {

  listaSituacoes = [{id: 0, descricao: 'Inativo'},
                    {id: 1, descricao: 'Ativo'}/* FAZER ENUM */
                   ]; 
  listaProdutos = [{id: 0, descricao: 'Saúde'},
                    {id: 1, descricao: 'Social'},
                    {id: 2, descricao: 'Educação'},/* FAZER ENUM */
                   ];  

  selected = {produto: false, programa: false, funcionalidade: false, versao: false, situacao: false}                   

  listaFuncionalidades: any = [];
  listaVersoes: any = [];
  listaProgramas: any = [];
  listaAjudaInterativa: any = [];
  
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private funcionalidadeService: FuncionalidadeService,
              private versaoService: VersaoService,
              private ajudaInterativaService: AjudaInterativaService,
              private programaService: ProgramaService) { }

  ngOnInit(): void {
    this.getListaVersoes();
    this.iniciarForm();
    this.getListaAjudaInterativa();
  }

  iniciarForm(){
    this.formulario = this.formBuilder.group(
      {
        id:[null,[]],
        produto: [
          '',
          [
            Validators.required,
            Validators.maxLength(20)
          ]
        ],
        programa: [null,[Validators.required]],
        funcionalidade: [null,[Validators.required]],
        versao: [null,[Validators.required]],
        situacao: [null,[Validators.required]],
        textoEditor: ['', [Validators.required]],
      },
    );
  }

  /* FAZER FILTRO PELO PRODUTO SELECIONADO, FAZER DISABLED, MOSTRAR SO ATIVOS ETC */


  
  getListaVersoes(){
    this.versaoService.getAll().then((res: any) => {
      this.listaVersoes = res.filter((obj: any) => obj.situacao.descricao === 'Ativo');
    }).catch((error: any) => {console.log(error)});
  }

  
  getListaProgramas(produto: any){
    this.programaService.getAll().then((res: any) => {
      this.listaProgramas = res.filter((obj: any) => obj.situacao.descricao === 'Ativo' && obj.produto.descricao === produto.descricao );
    }).catch((error: any) => {console.log(error)});
  }
  
  getListaFuncionalidades(produto: any){
    this.funcionalidadeService.getAll().then((res: any) => {
      this.listaFuncionalidades = res.filter((obj: any) => obj.situacao.descricao === 'Ativo' && obj.produto.descricao === produto.descricao);


    }).catch((error: any) => {console.log(error)});
  }

  getListaAjudaInterativa(){
      this.ajudaInterativaService.getAll().then((res: any) => {
        this.listaAjudaInterativa = res;
      }).catch((error: any) => {console.log(error)});
  }

  produtoSelecionado(dado:any){
    dado.value ? 
    this.selected.produto = true :
    this.selected.produto = false ;
    this.getListaProgramas(dado.value);
    this.getListaFuncionalidades(dado.value);
  }

  verificarExistente(novoItem: any){
    console.log(novoItem)
    return this.listaAjudaInterativa.some((v:any) =>
      v.produto.id === novoItem.produto.id &&
      v.programa.id === novoItem.programa.id &&
      v.funcionalidade.id === novoItem.funcionalidade.id &&
      v.versao.id === novoItem.versao.id &&
      v.situacao === novoItem.situacao
      );
  }

  salvar(){

    if(!this.verificarExistente(this.formulario.value)){
      this.ajudaInterativaService.salvar(this.formulario.value).then(() => {
        this.getListaAjudaInterativa()
        this.formulario.reset()
      }).catch((error: any) => {console.log(error)});
      return
    }
    alert("Ja existe item cadastrado!")

  }


}
