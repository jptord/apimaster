package {xpackagenamex}.command;

import {xpackagenamex}.command.core.AbstractTransactionalRequiredCommand;
import {xpackagenamex}.jpa.entity.{xnombrecapcamelx};
import {xpackagenamex}.jpa.service.{xnombrecapcamelx}Service;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.UUID;

@Service
@AllArgsConstructor
public class {xnombrecapcamelx}CreateCmd extends AbstractTransactionalRequiredCommand<{xnombrecapcamelx}CreateCmd.Request, UUID> {
    private final {xnombrecapcamelx}Service {xnombrecamelx}Service;

    @Override
    protected UUID run(Request request) {
        {xnombrecapcamelx} vc = new {xnombrecapcamelx}();
        
{xsetfieldscreatex}
		
        vc = {xnombrecamelx}Service.save(vc);
        return vc.getId();
    }

    @Getter
    @Builder
    public static class Request{
        
{xrequestcreatecmdx}

    }
}