package {xpackagenamex}.rest.controller.mapper;

import {xpackagenamex}.jpa.entity.{xnombrecapcamelx};
import {xpackagenamex}.rest.controller.io.response.{xnombrecapcamelx}Response;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface {xnombrecapcamelx}ListMapper {
    
    {xnombrecapcamelx}ListResponse toResponse({xnombrecapcamelx} {xnombrecamelx});

    List<{xnombrecapcamelx}ListResponse> toResponseList(List<{xnombrecapcamelx}> {xnombrecamelpluralx});
}

