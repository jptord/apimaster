package {xpackagenamex}.rest.controller;

import {xpackagenamex}.command.{xnombrecapcamelx}CreateCmd;
import {xpackagenamex}.command.{xnombrecapcamelx}UpdateCmd;
import {xpackagenamex}.jpa.entity.{xnombrecapcamelx};
import {xpackagenamex}.jpa.service.{xnombrecapcamelx}Service;
import {xpackagenamex}.rest.controller.io.request.{xnombrecapcamelx}CreateRequest;
import {xpackagenamex}.rest.controller.io.response.{xnombrecapcamelx}Response;
import {xpackagenamex}.rest.controller.io.response.core.ListResponse;
import {xpackagenamex}.rest.controller.io.response.core.PageResponse;
import {xpackagenamex}.rest.controller.io.response.core.SingleResponse;
import {xpackagenamex}.rest.controller.mapper.{xnombrecapcamelx}Mapper;
import {xpackagenamex}.util.PageableUtil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@Tag(name = "{xnombrecapcamelx}", description = "Descripcion de {xtextpluralx}")
@RestController
@AllArgsConstructor
@RequestMapping(value = "/{xnombrecamelx}")
public class {xnombrecapcamelx}Controller {

        private final {xnombrecapcamelx}Mapper {xnombrecamelx}Mapper;
        private final {xnombrecapcamelx}Service {xnombrecamelx}Service;
        private final {xnombrecapcamelx}CreateCmd {xnombrecamelx}Cmd;
        private final {xnombrecapcamelx}UpdateCmd {xnombrecamelx}UpdateCmd;

        @Operation(summary = "Buscar {xtextpluralx}")
        @GetMapping
        public PageResponse<{xnombrecapcamelx}Response> findAll(
                @RequestParam(defaultValue = "1") Integer page,
                @RequestParam(defaultValue = "10") Integer size,
                @RequestParam(defaultValue = "id") String sortBy,
                @RequestParam(defaultValue = "false") boolean descending,
                @RequestParam(required = false) String kerword) {
                page = page<1? 1:page;
                Pageable pageable = PageableUtil.of(page-1, size, sortBy, descending);
                Page<{xnombrecapcamelx}> configuracionPage = {xnombrecamelx}Service.findAllByKeyword(kerword, pageable);
                return PageResponse.<{xnombrecapcamelx}Response>builder()
                        .content({xnombrecamelx}Mapper.toResponseList(configuracionPage.getContent()))
                        .pagination(PageResponse.Pagination.builder()
                                .pages(configuracionPage.getTotalPages())
                                .rowsNumber(configuracionPage.getTotalElements())
                                .perPage(size)
                                .build()
                        )
                        .build();
        }

        @Operation(summary = "Obtener {xtextx}")
        @GetMapping("{{xnombrecamelx}Id}")
        public SingleResponse<{xnombrecapcamelx}Response> getOne(@PathVariable("{xnombrecamelx}Id") UUID id) {
                {xnombrecapcamelx} {xnombrecamelx} = {xnombrecamelx}Service.findByIdThrow(id);
                return SingleResponse.<{xnombrecapcamelx}Response>builder().content(
                        {xnombrecamelx}Mapper.toResponse({xnombrecamelx})
                ).build();
        }

        @Operation(summary = "Crear {xtextx}")
        @PostMapping
        public SingleResponse<{xnombrecapcamelx}Response> create(@RequestBody {xnombrecapcamelx}CreateRequest request) {
                UUID variableConfiguracionID = {xnombrecamelx}Cmd.execute(
                        {xnombrecapcamelx}CreateCmd.Request.builder()
                                .fecha (request.getFecha())
                                .build()
                );
                {xnombrecapcamelx} {xnombrecamelx} = {xnombrecamelx}Service.findByIdThrow(variableConfiguracionID);
                return SingleResponse.<{xnombrecapcamelx}Response>builder()
                        .content({xnombrecamelx}Mapper.toResponse({xnombrecamelx}))
                        .build();
        }


        @Operation(summary = "Actualizar {xtextx}")
        @PutMapping("{{xnombrecamelx}Id}")
        public SingleResponse<{xnombrecapcamelx}Response>update(@PathVariable("{xnombrecamelx}Id") UUID {xnombrecamelx}Id, @RequestBody {xnombrecapcamelx}CreateRequest request){
                UUID id = {xnombrecamelx}UpdateCmd.execute(
                        {xnombrecapcamelx}UpdateCmd.Request.builder()
                                .fecha(request.getFecha())
                                .build()
                );

                {xnombrecapcamelx} {xnombrecamelx} = {xnombrecamelx}Service.findByIdThrow(id);
                return SingleResponse.<{xnombrecapcamelx}Response>builder().content( {xnombrecamelx}Mapper.toResponse({xnombrecamelx})).build();
        }

        @Operation(summary = "Habilita / Deshabilitar {xnombrecapcamelx}")
        @GetMapping("{{xnombrecamelx}Id}/habilita")
        public SingleResponse<{xnombrecapcamelx}Response> habilita(@PathVariable("{xnombrecamelx}Id") UUID {xnombrecamelx}Id) {
                {xnombrecapcamelx} {xnombrecamelx} = {xnombrecamelx}Service.findByIdThrow({xnombrecamelx}Id);
                {xnombrecamelx}.setDeleted(!{xnombrecamelx}.isDeleted());
                {xnombrecamelx} = {xnombrecamelx}Service.save({xnombrecamelx});
                return SingleResponse.<{xnombrecapcamelx}Response>builder().content(
                        {xnombrecamelx}Mapper.toResponse({xnombrecamelx})
                ).build();
        }

        @Operation(summary = "Eliminar {xtextx}")
        @DeleteMapping("{{xnombrecamelx}Id}")
        public SingleResponse<{xnombrecapcamelx}Response> delete(@PathVariable("{xnombrecamelx}Id") UUID {xnombrecamelx}Id) {
                {xnombrecapcamelx} {xnombrecamelx} = {xnombrecamelx}Service.findByIdThrow({xnombrecamelx}Id);
                {xnombrecamelx}Service.delete({xnombrecamelx});
                return SingleResponse.<{xnombrecapcamelx}Response>builder().content(
                        {xnombrecamelx}Mapper.toResponse({xnombrecamelx})
                ).build();
        }

        @Operation(summary = "Listar Habilita {xnombrecapcamelx}")
        @GetMapping("listarHabilitados")
        public ListResponse<{xnombrecapcamelx}Response> listaHabilitado(){
                
                return ListResponse.<{xnombrecapcamelx}Response>builder().content(
                        {xnombrecamelx}Mapper.toResponseList({xnombrecamelx}Service.getHabilitados())
                ).build();
        }

{xcontrollerrelx}

}