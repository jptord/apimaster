package {xpackagenamex}.jpa.service;

import {xpackagenamex}.jpa.core.BaseRepository;
import {xpackagenamex}.jpa.core.BaseServiceImpl;
import {xpackagenamex}.jpa.entity.{xnombrecapcamelx};
import {xpackagenamex}.jpa.repository.{xnombrecapcamelx}Repository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.*;

@AllArgsConstructor
@Service
public class {xnombrecapcamelx}Service extends BaseServiceImpl<{xnombrecapcamelx}, UUID> {

    private final {xnombrecapcamelx}Repository repository;
    @Override
    protected BaseRepository<{xnombrecapcamelx}, UUID> repository() {
        return repository;
    }

    public Page<{xnombrecapcamelx}> findAllByKeyword(String keyword, Pageable pageable) {
        String recurso = keyword == null ? null : "%"+keyword.toLowerCase()+"%";
        return repository.findAll((Specification<{xnombrecapcamelx}>) (root, query, cb) -> cb.or(
{xresourceservicex}
            ),pageable);
    }

    public List<{xnombrecapcamelx}> getHabilitados(){
        return repository.findByDeleted(false);
    }

{xmethodsservicex}

{xmethodsallservicex}

}