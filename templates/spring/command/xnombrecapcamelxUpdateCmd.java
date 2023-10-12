package {xpackagenamex}.command;

import {xpackagenamex}.command.core.AbstractTransactionalRequiredCommand;
import {xpackagenamex}.jpa.entity.{xnombrecapcamelx};
import {xpackagenamex}.jpa.service.{xnombrecapcamelx}Service;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.UUID;
import java.util.*;

@Service
@AllArgsConstructor
public class {xnombrecapcamelx}UpdateCmd extends AbstractTransactionalRequiredCommand<{xnombrecapcamelx}UpdateCmd.Request, UUID> {
    private final {xnombrecapcamelx}Service {xnombrecamelx}Service;

    @Override
    protected UUID run(Request request) {
        {xnombrecapcamelx} vc= {xnombrecamelx}Service.findByIdThrow(request.get{xnombrecapcamelx}Id());

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