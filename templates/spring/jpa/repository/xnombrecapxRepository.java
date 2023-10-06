package {xpackagenamex}.jpa.repository;

import {xpackagenamex}.jpa.core.BaseRepository;
import {xpackagenamex}.jpa.entity.{xnombrecapcamelx};
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface {xnombrecapcamelx}Repository extends BaseRepository<{xnombrecapcamelx}, UUID> {
    List<{xnombrecapcamelx}> findByDeleted(boolean deleted);

{xmethodsrepositoryx}

}