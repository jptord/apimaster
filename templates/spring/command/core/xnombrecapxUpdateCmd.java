package {xpackagenamex}.command;

import {xpackagenamex}.command.core.AbstractTransactionalRequiredCommand;
import {xpackagenamex}.jpa.entity.Caja;
import {xpackagenamex}.jpa.entity.{xnombrecapcamelx};
import {xpackagenamex}.jpa.service.CajaService;
import {xpackagenamex}.jpa.service.{xnombrecapcamelx}Service;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.UUID;

@Service
@AllArgsConstructor
public class {xnombrecapcamelx}UpdateCmd extends AbstractTransactionalRequiredCommand<{xnombrecapcamelx}UpdateCmd.Request, UUID> {
    private final {xnombrecamelx}Service {xnombrecapcamelx}Service;

    @Override
    protected UUID run({xnombrecapcamelx}UpdateCmd.Request request) {
        {xnombrecapcamelx} vc= {xnombrecamelx}Service.findByIdThrow(request.getId());

{xsetfieldsupdatex}

        vc = {xnombrecamelx}Service.save(vc);
        return vc.getId();
    }

    @Builder
    @Getter
    public static class Request {

{xrequestupdatecmdx}

    }
}