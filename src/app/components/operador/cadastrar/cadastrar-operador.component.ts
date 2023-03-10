import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OperadorService } from 'src/app/shared/services/operador/operador.service';

@Component({
  selector: 'app-cadastrar-operador',
  templateUrl: './cadastrar-operador.component.html',
  styleUrls: ['./cadastrar-operador.component.scss']
})
export class CadastrarOperadorComponent implements OnInit {

  
  @Input() edicao: any = {};/* dto */
  @Output() fecharDialog = new EventEmitter();

  listaSituacoes = [{id: 0, descricao: 'Inativo'},
                    {id: 1, descricao: 'Ativo'}/* FAZER ENUM */
                   ]; 
  listaProdutos = [{id: 0, descricao: 'Saúde'},
                    {id: 1, descricao: 'Social'},
                    {id: 2, descricao: 'Educação'},/* FAZER ENUM */
                   ];     
  produtosSelecionados:any = []; /* dto */
                   
  formulario!: FormGroup;
  formEnviado: boolean = false  
  
  constructor(private formBuilder: FormBuilder,
              private operadorService: OperadorService) { }

  get formControls(): { [key: string]: AbstractControl } {
    return this.formulario.controls;
  }

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm(){
    this.formulario = this.formBuilder.group(
      {
        id:[null,[]],
        nome: [
          '',
          [
            Validators.required,
            Validators.maxLength(20)
          ]
        ],
        situacao: [null,[Validators.required]],
        nomeAcesso: [null,[Validators.required]],
        senha: [null,[Validators.required]],
        produtos: [[]],
      },
    );
    
    this.formulario.controls['situacao'].setValue(this.listaSituacoes[1].id);
 
    this.isEdicao();
  }

  isEdicao(){
    console.log('edicao', this.edicao)
    if(this.edicao?.nome){
      this.preencherForm()
      return true;
    }
    return false;
  }
  
  preencherForm(){
    this.produtosSelecionados = this.edicao.produtos
    this.formulario.setValue(this.edicao);
  }

  salvar(){
    this.formEnviado = true;

    if (this.formulario.invalid) {
      return;
    }
    if(this.edicao.nome ) {
      this.operadorService.atualizar(this.formulario.value).then(() => {
        this.fecharModal();
      }).catch((error: any) => {console.log(error)});
      return
    }
    this.operadorService.salvar(this.formulario.value).then(() => {
      this.fecharModal();
    }).catch((error: any) => {console.log(error)});
    
    
  }

  fecharModal(){
    this.fecharDialog.emit();
    this.formEnviado = false;
    this.formulario.reset();
  }
  teste(a:any){
    console.log(a)
  }
}
