import { Component,  EventEmitter,  Input,  Output,  ViewChild,  OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotificacionService } from "src/app/core/services/notificacion.service";
import { CuentasService } from "src/app/core/services/cuentas.service";
import { GruposService } from 'src/app/core/services/Grupos.service';
@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
})
export class FormularioComponent implements OnInit {
  formGroup: FormGroup;
  submitted = false;
  @Output() alGuardar = new EventEmitter<any>();
  @Output() alActualizar = new EventEmitter<any>();

  @Input() dataEdit: any;

  grupos:any = [];
  estados: any = [
    { value: "habilitado", name: "Habilitado" },
    { value: "deshabilitado", name: "Deshabilitado" },
  ];

  constructor(
    private FormBuilder: FormBuilder,
    private notificacionService: NotificacionService,
    private CuentasService: CuentasService,
    private GruposService: GruposService
  ) {}

  get form() {
    return this.formGroup.controls;
  }

  alCambiar(control){
    console.log("control",control);
  }

  ngOnInit(): void {    
    this.GruposService.getAll().subscribe((res:any) => { this.grupos = res.content; });
    this.formGroup = this.FormBuilder.group({id:["",[Validators.required] ],nombre:["",[Validators.required] ],estado:["",[Validators.required] ],grupo_id:["",[Validators.required] ]});
    if (this.dataEdit != null) {
      this.formGroup.setValue({id:this.dataEdit.id,nombre:this.dataEdit.nombre,estado:this.dataEdit.estado,grupo_id:this.dataEdit.grupo_id});
    }
  }

  guardar() {
    this.submitted = true;    
    if (this.formGroup.valid) {
      this.submitted = false;
      let sendData = this.formGroup.value;
      if (this.dataEdit == null) {
        this.CuentasService.register(sendData).subscribe(
          (res: any) => {
            this.notificacionService.successStandar();
            this.alGuardar.emit(res);
          },
          (err: any) => {
            this.notificacionService.alertError(err);
          }
        );
      } else {
        this.CuentasService.update(sendData, this.dataEdit.id).subscribe(
          (res: any) => {
            this.notificacionService.successStandar();
            this.alActualizar.emit(res);
          },
          (err: any) => {
            this.notificacionService.alertError(err);
          }
        );
      }
    }
  }
}
