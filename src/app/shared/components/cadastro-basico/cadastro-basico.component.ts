import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-basico',
  templateUrl: './cadastro-basico.component.html',
  styleUrls: ['./cadastro-basico.component.scss']
})
export class CadastroBasicoComponent implements OnInit {

  @Input() edicao: any = {};/* dto */
  @Output() cadastrar = new EventEmitter();
  @Output() atualizar = new EventEmitter();
  
  listaSituacoes = [{id: 0, descricao: 'Inativo'},
                    {id: 1, descricao: 'Ativo'}/* FAZER ENUM */
                   ]; 
  
  listaProdutos = [{id: 0, descricao: 'Saúde'},
                    {id: 1, descricao: 'Social'},
                    {id: 2, descricao: 'Educação'},/* FAZER ENUM */
                   ]; 
  formEnviado: boolean = false
  formulario!: FormGroup; 
    
  
  constructor(private formBuilder: FormBuilder) { }


  get formControls(): { [key: string]: AbstractControl } {
    return this.formulario.controls;
  }

  ngOnInit(): void {
    console.log(this.edicao,'itemedicao')
    this.iniciarForm();
  }

  iniciarForm(){
    
    this.formulario = this.formBuilder.group(
      {
        id: [null,[]],
        nome: [
          '',
          [
            Validators.required,
            Validators.maxLength(20)
          ]
        ],
        situacao: [null,[Validators.required]],
        produto: [null,[Validators.required]]
      },
    );
    this.formulario.controls['situacao'].setValue(this.listaSituacoes[1].id);
    this.isEdicao();
  }

  isEdicao(){
    if(this.edicao?.nome){
      this.preencherForm()
      return true;
    }
    return false;
  }
  
  preencherForm(){
    console.log('ueueuee',this.edicao)
    this.formulario.setValue(this.edicao);
  }

  salvar(){
    this.formEnviado = true;

    if (this.formulario.valid) {
      this.formEnviado = false;
      this.edicao.nome ?
      this.atualizar.emit(this.formulario.value) :
      this.cadastrar.emit(this.formulario.value);

      return
    }
    
  }

}
