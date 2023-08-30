import { Component, Input, OnInit } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { {xnombrecapx}Service } from "../servicios/{xnombrex}.service";
import { NotificacionService } from "src/app/core/services/notificacion.service";
import { ActivatedRoute, Router } from "@angular/router";
{xrelations_includex}

type NewType = NotificacionService;

@Component({
  selector: "app-listado-{xnombrex}",
  templateUrl: "./listado.component.html",
  styleUrls: ["./listado.component.scss"],
})
export class ListadoComponent implements OnInit {
  @Input() rel_prefix:any;
  @Input() rel_field:any;
  @Input() rel_id:any;

  modalRef?: BsModalRef;

  formato: any;
  dataEdit = null;
  titulo: any = "{xtitulox}";

  {xrelations_varx}

  constructor(
    public {xnombrecapx}Service: {xnombrecapx}Service,
    private modalService: BsModalService,
    private NotificacionService: NotificacionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.rel_prefix) this.{xnombrecapx}Service.setPrefix(this.rel_prefix);
    this.formato = {
      cabeceras: {xcabecerasx}
    };

    if (this.rel_prefix && this.rel_field) { this.formato.cabeceras[this.rel_field].visible = false;this.formato.cabeceras[this.rel_field].visibleCheck = false }
  }

  crear(data: any, template) {
    if (this.rel_prefix == null)
      this.router.navigate(['./nuevo', { }],{relativeTo: this.route});
    else{
      this.dataEdit = null;
      this.modalRef = this.modalService.show(template, {
        class: `modal-{xmodalsizex} modal-fullscreen-{xmodalfullscreensizex}-down modal-dialog-centered`,
      });
    }
  }

  editar(data: any, template) {    
    if (this.rel_prefix == null)
      this.router.navigate(['./'+data.id, { }],{relativeTo: this.route});
    else{
      this.dataEdit = data;
      this.modalRef = this.modalService.show(template, {
        class: `modal-{xmodalsizex} modal-fullscreen-{xmodalfullscreensizex}-down modal-dialog-centered`,
      });
    }
  }

  habilitar(data: any, component) {
    this.{xnombrecapx}Service.habilitar(data, data.id).subscribe(
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
    this.{xnombrecapx}Service.deshabilitar(data, data.id).subscribe(
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
        this.{xnombrecapx}Service.delete(data.id).subscribe(
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
