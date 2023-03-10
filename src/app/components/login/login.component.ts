import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OperadorService } from 'src/app/shared/services/operador/operador.service';
import { UsuarioService } from 'src/app/shared/services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;
  listaOperadores: any = [];

  constructor(private operadorService: OperadorService,
              private formBuilder: FormBuilder,
              private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.getListaOperadores()
  }

  iniciarForm(){
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  
 async getListaOperadores() {
    await this.operadorService.getAll().then((res) => {
      this.listaOperadores =  res;
    }).catch((error: any) => {console.log(error)});
  }

  logar(){
    if(this.formulario.invalid) return;
    let usuario = this.formulario.value;
    this.usuarioService.logar(usuario, this.listaOperadores).subscribe((response) => {
        if(!response.sucesso){
          alert('Falha na autenticação ' + ' Usuário ou senha incorretos.')
        }
    })
  }

}
