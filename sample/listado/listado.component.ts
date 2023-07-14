import { Component, OnInit } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { CuentasService } from "src/app/core/services/cuentas.service";
import { NotificacionService } from "src/app/core/services/notificacion.service";
import { GruposService } from 'src/app/core/services/Grupos.service';

type NewType = NotificacionService;

@Component({
  selector: "app-listado",
  templateUrl: "./listado.component.html",
  styleUrls: ["./listado.component.scss"],
})
export class ListadoComponent implements OnInit {
  modalRef?: BsModalRef;

  formato: any;
  dataEdit = null;
  titulo: any = "Listado de Cuentas";

  grupos:any = [];

  constructor(
    public CuentasService: CuentasService,
    private modalService: BsModalService,
    private NotificacionService: NotificacionService
  ) {}

  ngOnInit(): void {
    this.formato = {
      cabeceras: {"id":{"visible":true,"buscable":true,"sortable":true,"filtrable":true,"texto":"id","filtrotipo":"number"},"nombre":{"visible":true,"buscable":true,"sortable":true,"filtrable":true,"texto":"nombre","filtrotipo":"text"},"estado":{"visible":true,"buscable":true,"sortable":true,"filtrable":true,"texto":"estado","filtrotipo":"text"},"grupo_id":{"visible":true,"buscable":true,"sortable":true,"filtrable":true,"texto":"grupo_id","filtrotipo":"number","mascara":{"campo":"id","nombre":"id"}}}
    };
  }

  crear(data: any, template) {
    this.dataEdit = null;
    this.modalRef = this.modalService.show(template, {
      class: `modal-md modal-dialog-centered`,
    });
  }
  editar(data: any, template) {
    this.dataEdit = data;
    this.modalRef = this.modalService.show(template, {
      class: `modal-md modal-dialog-centered`,
    });
  }
  habilitar(data: any, component) {
    this.CuentasService.habilitar(data, data.id).subscribe(
      (data) => {
        component.obtenerDatos();
        this.NotificacionService.successStandar(
          "Registro habilitado exitosamente."
        );
      },
      (error) => {
        this.NotificacionService.alertError(error);
      }
    );
  }
  deshabilitar(data: any, component) {
    this.CuentasService.deshabilitar(data, data.id).subscribe(
      (data) => {
        component.obtenerDatos();
        this.NotificacionService.successStandar(
          "Registro deshabilitado exitosamente."
        );
      },
      (error) => {
        this.NotificacionService.alertError(error);
      }
    );
  }

  eliminar(data: any, component) {
    this.NotificacionService.alertaEliminacion(data.nombre, (response: any) => {
      if (response) {
        this.CuentasService.delete(data.id).subscribe(
          (data) => {
            component.obtenerDatos();
            this.NotificacionService.successStandar(
              "Registro eliminado exitosamente."
            );
          },
          (error) => {
            this.NotificacionService.alertError(error);
          }
        );
      }
    });
  }
}
