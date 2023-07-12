import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  OnInit,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotificacionService } from "src/app/core/services/notificacion.service";
import { {xnombrecapx}Service } from "src/app/core/services/{xnombrex}.service";
import { TipodocumentoService } from "src/app/core/services/tipodocumento.service";

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

  tipo_documentos: any = [];
  estados: any = [
    { value: "habilitado", name: "Habilitado" },
    { value: "deshabilitado", name: "Deshabilitado" },
  ];

  constructor(
    private FormBuilder: FormBuilder,
    private notificacionService: NotificacionService,
    private {xnombrecapx}Service: {xnombrecapx}Service,
    private TipodocumentoService: TipodocumentoService
  ) {}

  get form() {
    return this.formGroup.controls;
  }

  alCambiar(control){
    console.log("control",control);
  }

  ngOnInit(): void {    
    this.formGroup = this.FormBuilder.group({xformbuilderx});
    if (this.dataEdit != null) {
      this.formGroup.setValue({xformeditx});
    }
  }

  guardar() {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.submitted = false;
      let sendData = this.formGroup.value;
      if (this.dataEdit == null) {
        this.{xnombrecapx}Service.register(sendData).subscribe(
          (res: any) => {
            this.notificacionService.successStandar();
            this.alGuardar.emit(res);
          },
          (err: any) => {
            this.notificacionService.alertError(err);
          }
        );
      } else {
        this.{xnombrecapx}Service.update(sendData, this.dataEdit.id).subscribe(
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
