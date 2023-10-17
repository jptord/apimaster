package {xpackagenamex}.rest.controller;

import {xpackagenamex}.command.*;
import {xpackagenamex}.jpa.entity.*;
import {xpackagenamex}.jpa.service.*;
import {xpackagenamex}.jpa.repository.*;
import {xpackagenamex}.rest.controller.io.request.*;
import {xpackagenamex}.rest.controller.io.response.*;
import {xpackagenamex}.rest.controller.io.response.core.PageResponse;
import {xpackagenamex}.rest.controller.io.response.core.*;
import {xpackagenamex}.rest.controller.mapper.*;
import {xpackagenamex}.util.PageableUtil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.annotation.*;
import java.util.UUID;
import java.util.*;


@Tag(name = "{xnombrecapcamelx}", description = "Descripcion de {xtextpluralx}")
@RestController
@AllArgsConstructor
@RequestMapping(value = "/{xnombrecamelx}")
public class {xnombrecapcamelx}Controller {

        private final {xnombrecapcamelx}ListMapper {xnombrecamelx}ListMapper;
        private final {xnombrecapcamelx}Service {xnombrecamelx}Service;
        private final {xnombrecapcamelx}CreateCmd {xnombrecamelx}Cmd;
        private final {xnombrecapcamelx}UpdateCmd {xnombrecamelx}UpdateCmd;
        private final {xnombrecapcamelx}Repository {xnombrecamelx}Repository;

        @Operation(summary = "Buscar {xtextpluralx}")
        @GetMapping
        public PageResponse<{xnombrecapcamelx}ListResponse> findAll(
                @RequestParam(defaultValue = "1") Integer page,
                @RequestParam(defaultValue = "10") Integer size,
                @RequestParam(defaultValue = "id") String sortBy,
                @RequestParam(defaultValue = "false") boolean descending,
                @RequestParam(required = false) String keyword) {
                page = page<1? 1:page;
                Pageable pageable = PageableUtil.of(page-1, size, sortBy, descending);
                Page<{xnombrecapcamelx}> configuracionPage = {xnombrecamelx}Service.findAllByKeyword(keyword, pageable);
                return PageResponse.<{xnombrecapcamelx}ListResponse>builder()
                        .content({xnombrecamelx}ListMapper.toResponseList(configuracionPage.getContent()))
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
        public SingleResponse<{xnombrecapcamelx}ListResponse> getOne(@PathVariable("{xnombrecamelx}Id") UUID id) {
                {xnombrecapcamelx} {xnombrecamelx} = {xnombrecamelx}Service.findByIdThrow(id);
                return SingleResponse.<{xnombrecapcamelx}ListResponse>builder().content(
                        {xnombrecamelx}ListMapper.toResponse({xnombrecamelx})
                ).build();
        }

        @Operation(summary = "Crear {xtextx}")
        @PostMapping
        public SingleResponse<{xnombrecapcamelx}ListResponse> create(@RequestBody {xnombrecapcamelx}CreateRequest request) {
                UUID variableConfiguracionID = {xnombrecamelx}Cmd.execute(
                        {xnombrecapcamelx}CreateCmd.Request.builder()
{xcontrolllercreatefieldsx}
                                .build()
                );
                {xnombrecapcamelx} {xnombrecamelx} = {xnombrecamelx}Service.findByIdThrow(variableConfiguracionID);
                return SingleResponse.<{xnombrecapcamelx}ListResponse>builder()
                        .content({xnombrecamelx}ListMapper.toResponse({xnombrecamelx}))
                        .build();
        }


        @Operation(summary = "Actualizar {xtextx}")
        @PutMapping("{{xnombrecamelx}Id}")
        public SingleResponse<{xnombrecapcamelx}ListResponse>update(@PathVariable("{xnombrecamelx}Id") UUID {xnombrecamelx}Id, @RequestBody {xnombrecapcamelx}CreateRequest request){
                UUID id = {xnombrecamelx}UpdateCmd.execute(
                        {xnombrecapcamelx}UpdateCmd.Request.builder()
                                .{xnombrecamelx}Id({xnombrecamelx}Id)
{xcontrolllerupdatefieldsx}
                                .build()
                );

                {xnombrecapcamelx} {xnombrecamelx} = {xnombrecamelx}Service.findByIdThrow(id);
                return SingleResponse.<{xnombrecapcamelx}ListResponse>builder().content( {xnombrecamelx}ListMapper.toResponse({xnombrecamelx})).build();
        }

        @Operation(summary = "Habilita / Deshabilitar {xnombrecapcamelx}")
        @GetMapping("{{xnombrecamelx}Id}/habilita")
        public SingleResponse<{xnombrecapcamelx}ListResponse> habilita(@PathVariable("{xnombrecamelx}Id") UUID {xnombrecamelx}Id) {
                {xnombrecapcamelx} {xnombrecamelx} = {xnombrecamelx}Service.findByIdThrow({xnombrecamelx}Id);
                {xnombrecamelx}.setDeleted(!{xnombrecamelx}.isDeleted());
                {xnombrecamelx} = {xnombrecamelx}Service.save({xnombrecamelx});
                return SingleResponse.<{xnombrecapcamelx}ListResponse>builder().content(
                        {xnombrecamelx}ListMapper.toResponse({xnombrecamelx})
                ).build();
        }

        @Operation(summary = "Eliminar {xtextx}")
        @DeleteMapping("{{xnombrecamelx}Id}")
        public SingleResponse<{xnombrecapcamelx}ListResponse> delete(@PathVariable("{xnombrecamelx}Id") UUID {xnombrecamelx}Id) {
                {xnombrecapcamelx} {xnombrecamelx} = {xnombrecamelx}Service.findByIdThrow({xnombrecamelx}Id);
                {xnombrecamelx}Service.delete({xnombrecamelx});
                return SingleResponse.<{xnombrecapcamelx}ListResponse>builder().content(
                        {xnombrecamelx}ListMapper.toResponse({xnombrecamelx})
                ).build();
        }

        @Operation(summary = "Listar Habilita {xnombrecapcamelx}")
        @GetMapping("listarHabilitados")
        public ListResponse<{xnombrecapcamelx}ListResponse> listaHabilitado(){
                
                return ListResponse.<{xnombrecapcamelx}ListResponse>builder().content(
                        {xnombrecamelx}ListMapper.toResponseList({xnombrecamelx}Service.getHabilitados())
                ).build();
        }

{xcontrollerrelx}

{xcontrollerapicustomx}


}