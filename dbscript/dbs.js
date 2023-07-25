[
    {
        "db": "tesoreria",
        "groups": [
            {
                "name": "tipodato",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "descripcion",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string"
                    }
                }
            },
            {
                "name": "variablesconfiguracion",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "descripcion",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "tipodato_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "tipodato",
                        "value": "[tipodato|id|tipodato_id]",
                        "rel": null
                    },
                    {
                        "name": "valores",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "tipodato_id": "number",
                        "tipodato": "[tipodato|id|tipodato_id]",
                        "valores": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "tipodato_id": "number",
                        "tipodato": "[tipodato|id|tipodato_id]",
                        "valores": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string",
                        "tipodato_id": "number",
                        "tipodato": "[tipodato|id|tipodato_id]",
                        "valores": "string"
                    }
                }
            },
            {
                "name": "monedas",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "sigla",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "sigla": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "sigla": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "sigla": "string"
                    }
                }
            },
            {
                "name": "cuotastiempo",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "descripcion",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "dias",
                        "value": "number",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "dias": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "dias": "number"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string",
                        "dias": "number"
                    }
                }
            },
            {
                "name": "interestiempo",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "descripcion",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "dias",
                        "value": "number",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "dias": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "dias": "number"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string",
                        "dias": "number"
                    }
                }
            },
            {
                "name": "interestipo",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "descripcion",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string"
                    }
                }
            },
            {
                "name": "pagomedio",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "descripcion",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string"
                    }
                }
            },
            {
                "name": "pagotipo",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "descripcion",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string"
                    }
                }
            },
            {
                "name": "acreedor",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "contacto_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "contacto",
                        "value": "[contacto|id|contacto_id]",
                        "rel": null
                    },
                    {
                        "name": "estado",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "contacto_id": "number",
                        "contacto": "[contacto|id|contacto_id]",
                        "estado": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "contacto_id": "number",
                        "contacto": "[contacto|id|contacto_id]",
                        "estado": "string"
                    },
                    "insert": {
                        "contacto_id": "number",
                        "contacto": "[contacto|id|contacto_id]",
                        "estado": "string"
                    }
                }
            },
            {
                "name": "deudor",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "contacto_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "contacto",
                        "value": "[contacto|id|contacto_id]",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "contacto_id": "number",
                        "contacto": "[contacto|id|contacto_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "contacto_id": "number",
                        "contacto": "[contacto|id|contacto_id]"
                    },
                    "insert": {
                        "contacto_id": "number",
                        "contacto": "[contacto|id|contacto_id]"
                    }
                }
            },
            {
                "name": "documentocontactotipo",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "sigla",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "sigla": "string",
                        "nombre": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "sigla": "string",
                        "nombre": "string"
                    },
                    "insert": {
                        "sigla": "string",
                        "nombre": "string"
                    }
                }
            },
            {
                "name": "contactogrupo",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "descripcion",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string"
                    }
                }
            },
            {
                "name": "contacto",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "nitci",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "documentocontactotipo_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "documentocontactotipo",
                        "value": "[documentocontactotipo|id|documentocontactotipo_id]",
                        "rel": null
                    },
                    {
                        "name": "telefono",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "correo",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "direccion",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "contactogrupo_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "contactogrupo",
                        "value": "[contactogrupo|id|contactogrupo_id]",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "nitci": "string",
                        "documentocontactotipo_id": "number",
                        "documentocontactotipo": "[documentocontactotipo|id|documentocontactotipo_id]",
                        "telefono": "number",
                        "correo": "string",
                        "direccion": "string",
                        "contactogrupo_id": "number",
                        "contactogrupo": "[contactogrupo|id|contactogrupo_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "nitci": "string",
                        "documentocontactotipo_id": "number",
                        "documentocontactotipo": "[documentocontactotipo|id|documentocontactotipo_id]",
                        "telefono": "number",
                        "correo": "string",
                        "direccion": "string",
                        "contactogrupo_id": "number",
                        "contactogrupo": "[contactogrupo|id|contactogrupo_id]"
                    },
                    "insert": {
                        "nombre": "string",
                        "nitci": "string",
                        "documentocontactotipo_id": "number",
                        "documentocontactotipo": "[documentocontactotipo|id|documentocontactotipo_id]",
                        "telefono": "number",
                        "correo": "string",
                        "direccion": "string",
                        "contactogrupo_id": "number",
                        "contactogrupo": "[contactogrupo|id|contactogrupo_id]"
                    }
                }
            },
            {
                "name": "creditoestado",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string"
                    },
                    "insert": {
                        "nombre": "string"
                    }
                }
            },
            {
                "name": "credito",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "capital",
                        "value": "float",
                        "rel": null
                    },
                    {
                        "name": "cuotas",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "cuotastiempo_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "cuotastiempo",
                        "value": "[cuotastiempo|id|cuotastiempo_id]",
                        "rel": null
                    },
                    {
                        "name": "interes",
                        "value": "float",
                        "rel": null
                    },
                    {
                        "name": "interestiempo_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "interestiempo",
                        "value": "[interestiempo|id|interestiempo_id]",
                        "rel": null
                    },
                    {
                        "name": "interestipo_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "interestipo",
                        "value": "[interestipo|id|interestipo_id]",
                        "rel": null
                    },
                    {
                        "name": "tieneiva",
                        "value": "boolean",
                        "rel": null
                    },
                    {
                        "name": "redondear",
                        "value": "boolean",
                        "rel": null
                    },
                    {
                        "name": "pagomedio_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "pagomedio",
                        "value": "[pagomedio|id|pagomedio_id]",
                        "rel": null
                    },
                    {
                        "name": "pagotipo_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "pagotipo",
                        "value": "[pagotipo|id|pagotipo_id]",
                        "rel": null
                    },
                    {
                        "name": "montoaprobado",
                        "value": "float",
                        "rel": null
                    },
                    {
                        "name": "montodesembolsado",
                        "value": "float",
                        "rel": null
                    },
                    {
                        "name": "plazo",
                        "value": "date",
                        "rel": null
                    },
                    {
                        "name": "dias",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "acreedor_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "acreedor",
                        "value": "[acreedor|id|acreedor_id]",
                        "rel": null
                    },
                    {
                        "name": "deudor_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "deudor",
                        "value": "[deudor|id|deudor_id]",
                        "rel": null
                    },
                    {
                        "name": "creditofecha",
                        "value": "date",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "capital": "float",
                        "cuotas": "number",
                        "cuotastiempo_id": "number",
                        "cuotastiempo": "[cuotastiempo|id|cuotastiempo_id]",
                        "interes": "float",
                        "interestiempo_id": "number",
                        "interestiempo": "[interestiempo|id|interestiempo_id]",
                        "interestipo_id": "number",
                        "interestipo": "[interestipo|id|interestipo_id]",
                        "tieneiva": "boolean",
                        "redondear": "boolean",
                        "pagomedio_id": "number",
                        "pagomedio": "[pagomedio|id|pagomedio_id]",
                        "pagotipo_id": "number",
                        "pagotipo": "[pagotipo|id|pagotipo_id]",
                        "montoaprobado": "float",
                        "montodesembolsado": "float",
                        "plazo": "date",
                        "dias": "number",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "creditofecha": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "capital": "float",
                        "cuotas": "number",
                        "cuotastiempo_id": "number",
                        "cuotastiempo": "[cuotastiempo|id|cuotastiempo_id]",
                        "interes": "float",
                        "interestiempo_id": "number",
                        "interestiempo": "[interestiempo|id|interestiempo_id]",
                        "interestipo_id": "number",
                        "interestipo": "[interestipo|id|interestipo_id]",
                        "tieneiva": "boolean",
                        "redondear": "boolean",
                        "pagomedio_id": "number",
                        "pagomedio": "[pagomedio|id|pagomedio_id]",
                        "pagotipo_id": "number",
                        "pagotipo": "[pagotipo|id|pagotipo_id]",
                        "montoaprobado": "float",
                        "montodesembolsado": "float",
                        "plazo": "date",
                        "dias": "number",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "creditofecha": "date"
                    },
                    "insert": {
                        "capital": "float",
                        "cuotas": "number",
                        "cuotastiempo_id": "number",
                        "cuotastiempo": "[cuotastiempo|id|cuotastiempo_id]",
                        "interes": "float",
                        "interestiempo_id": "number",
                        "interestiempo": "[interestiempo|id|interestiempo_id]",
                        "interestipo_id": "number",
                        "interestipo": "[interestipo|id|interestipo_id]",
                        "tieneiva": "boolean",
                        "redondear": "boolean",
                        "pagomedio_id": "number",
                        "pagomedio": "[pagomedio|id|pagomedio_id]",
                        "pagotipo_id": "number",
                        "pagotipo": "[pagotipo|id|pagotipo_id]",
                        "montoaprobado": "float",
                        "montodesembolsado": "float",
                        "plazo": "date",
                        "dias": "number",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "creditofecha": "date"
                    }
                }
            },
            {
                "name": "creditosestados",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "fecha",
                        "value": "date",
                        "rel": null
                    },
                    {
                        "name": "credito_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "credito",
                        "value": "[credito|id|credito_id]",
                        "rel": null
                    },
                    {
                        "name": "creditoestado_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "creditoestado",
                        "value": "[creditoestado|id|creditoestado_id]",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "fecha": "date",
                        "credito_id": "number",
                        "credito": "[credito|id|credito_id]",
                        "creditoestado_id": "number",
                        "creditoestado": "[creditoestado|id|creditoestado_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "fecha": "date",
                        "credito_id": "number",
                        "credito": "[credito|id|credito_id]",
                        "creditoestado_id": "number",
                        "creditoestado": "[creditoestado|id|creditoestado_id]"
                    },
                    "insert": {
                        "fecha": "date",
                        "credito_id": "number",
                        "credito": "[credito|id|credito_id]",
                        "creditoestado_id": "number",
                        "creditoestado": "[creditoestado|id|creditoestado_id]"
                    }
                }
            },
            {
                "name": "pagoestado",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string"
                    },
                    "insert": {
                        "nombre": "string"
                    }
                }
            },
            {
                "name": "pagosestados",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "pagos_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "pagos",
                        "value": "[pagos|id|pagos_id]",
                        "rel": null
                    },
                    {
                        "name": "pagoestado_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "pagoestado",
                        "value": "[pagoestado|id|pagoestado_id]",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "pagos_id": "number",
                        "pagos": "[pagos|id|pagos_id]",
                        "pagoestado_id": "number",
                        "pagoestado": "[pagoestado|id|pagoestado_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "pagos_id": "number",
                        "pagos": "[pagos|id|pagos_id]",
                        "pagoestado_id": "number",
                        "pagoestado": "[pagoestado|id|pagoestado_id]"
                    },
                    "insert": {
                        "pagos_id": "number",
                        "pagos": "[pagos|id|pagos_id]",
                        "pagoestado_id": "number",
                        "pagoestado": "[pagoestado|id|pagoestado_id]"
                    }
                }
            },
            {
                "name": "creditopagosestados",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "creditopagos_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "pagoestado_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "pagoestado",
                        "value": "[pagoestado|id|pagoestado_id]",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "creditopagos_id": "number",
                        "pagoestado_id": "number",
                        "pagoestado": "[pagoestado|id|pagoestado_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "creditopagos_id": "number",
                        "pagoestado_id": "number",
                        "pagoestado": "[pagoestado|id|pagoestado_id]"
                    },
                    "insert": {
                        "creditopagos_id": "number",
                        "pagoestado_id": "number",
                        "pagoestado": "[pagoestado|id|pagoestado_id]"
                    }
                }
            },
            {
                "name": "creditopagos",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "credito_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "credito",
                        "value": "[credito|id|credito_id]",
                        "rel": null
                    },
                    {
                        "name": "nrocuota",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "pago",
                        "value": "float",
                        "rel": null
                    },
                    {
                        "name": "interes",
                        "value": "float",
                        "rel": null
                    },
                    {
                        "name": "capital",
                        "value": "float",
                        "rel": null
                    },
                    {
                        "name": "saldo",
                        "value": "float",
                        "rel": null
                    },
                    {
                        "name": "mora",
                        "value": "float",
                        "rel": null
                    },
                    {
                        "name": "descuento",
                        "value": "float",
                        "rel": null
                    },
                    {
                        "name": "recargo",
                        "value": "float",
                        "rel": null
                    },
                    {
                        "name": "pagofecha",
                        "value": "date",
                        "rel": null
                    },
                    {
                        "name": "plazo",
                        "value": "date",
                        "rel": null
                    },
                    {
                        "name": "pago_id",
                        "value": "number",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "credito_id": "number",
                        "credito": "[credito|id|credito_id]",
                        "nrocuota": "number",
                        "pago": "float",
                        "interes": "float",
                        "capital": "float",
                        "saldo": "float",
                        "mora": "float",
                        "descuento": "float",
                        "recargo": "float",
                        "pagofecha": "date",
                        "plazo": "date",
                        "pago_id": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "credito_id": "number",
                        "credito": "[credito|id|credito_id]",
                        "nrocuota": "number",
                        "pago": "float",
                        "interes": "float",
                        "capital": "float",
                        "saldo": "float",
                        "mora": "float",
                        "descuento": "float",
                        "recargo": "float",
                        "pagofecha": "date",
                        "plazo": "date",
                        "pago_id": "number"
                    },
                    "insert": {
                        "credito_id": "number",
                        "credito": "[credito|id|credito_id]",
                        "nrocuota": "number",
                        "pago": "float",
                        "interes": "float",
                        "capital": "float",
                        "saldo": "float",
                        "mora": "float",
                        "descuento": "float",
                        "recargo": "float",
                        "pagofecha": "date",
                        "plazo": "date",
                        "pago_id": "number"
                    }
                }
            },
            {
                "name": "pagos",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "acreedor_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "acreedor",
                        "value": "[acreedor|id|acreedor_id]",
                        "rel": null
                    },
                    {
                        "name": "monto",
                        "value": "float",
                        "rel": null
                    },
                    {
                        "name": "deudor_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "deudor",
                        "value": "[deudor|id|deudor_id]",
                        "rel": null
                    },
                    {
                        "name": "pagomedio_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "pagomedio",
                        "value": "[pagomedio|id|pagomedio_id]",
                        "rel": null
                    },
                    {
                        "name": "pagofecha",
                        "value": "date",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "monto": "float",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "pagomedio_id": "number",
                        "pagomedio": "[pagomedio|id|pagomedio_id]",
                        "pagofecha": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "monto": "float",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "pagomedio_id": "number",
                        "pagomedio": "[pagomedio|id|pagomedio_id]",
                        "pagofecha": "date"
                    },
                    "insert": {
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "monto": "float",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "pagomedio_id": "number",
                        "pagomedio": "[pagomedio|id|pagomedio_id]",
                        "pagofecha": "date"
                    }
                }
            },
            {
                "name": "cobros",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "acreedor_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "acreedor",
                        "value": "[acreedor|id|acreedor_id]",
                        "rel": null
                    },
                    {
                        "name": "monto",
                        "value": "float",
                        "rel": null
                    },
                    {
                        "name": "deudor_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "deudor",
                        "value": "[deudor|id|deudor_id]",
                        "rel": null
                    },
                    {
                        "name": "cobromedio_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "cobromedio",
                        "value": "[cobromedio|id|cobromedio_id]",
                        "rel": null
                    },
                    {
                        "name": "cobrofecha",
                        "value": "date",
                        "rel": null
                    },
                    {
                        "name": "cobrostipo_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "cobrostipo",
                        "value": "[cobrotipo|id|cobrostipo_id]",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "monto": "float",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "cobromedio_id": "number",
                        "cobromedio": "[cobromedio|id|cobromedio_id]",
                        "cobrofecha": "date",
                        "cobrostipo_id": "number",
                        "cobrostipo": "[cobrotipo|id|cobrostipo_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "monto": "float",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "cobromedio_id": "number",
                        "cobromedio": "[cobromedio|id|cobromedio_id]",
                        "cobrofecha": "date",
                        "cobrostipo_id": "number",
                        "cobrostipo": "[cobrotipo|id|cobrostipo_id]"
                    },
                    "insert": {
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "monto": "float",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "cobromedio_id": "number",
                        "cobromedio": "[cobromedio|id|cobromedio_id]",
                        "cobrofecha": "date",
                        "cobrostipo_id": "number",
                        "cobrostipo": "[cobrotipo|id|cobrostipo_id]"
                    }
                }
            },
            {
                "name": "cobromedio",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "descripcion",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "estado",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "estado": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "estado": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string",
                        "estado": "string"
                    }
                }
            },
            {
                "name": "cobrotipo",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "descripcion",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string"
                    }
                }
            },
            {
                "name": "documentotipo",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "descripcion",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string"
                    }
                }
            },
            {
                "name": "documentos",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "identificacion",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "documentotipo_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "documentotipo",
                        "value": "[documentotipo|id|documentotipo_id]",
                        "rel": null
                    },
                    {
                        "name": "descripcion",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "observacions",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "url",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "identificacion": "string",
                        "documentotipo_id": "number",
                        "documentotipo": "[documentotipo|id|documentotipo_id]",
                        "descripcion": "string",
                        "observacions": "string",
                        "url": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "identificacion": "string",
                        "documentotipo_id": "number",
                        "documentotipo": "[documentotipo|id|documentotipo_id]",
                        "descripcion": "string",
                        "observacions": "string",
                        "url": "string"
                    },
                    "insert": {
                        "identificacion": "string",
                        "documentotipo_id": "number",
                        "documentotipo": "[documentotipo|id|documentotipo_id]",
                        "descripcion": "string",
                        "observacions": "string",
                        "url": "string"
                    }
                }
            },
            {
                "name": "cuentatipo",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "descripcion",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string"
                    }
                }
            },
            {
                "name": "cuentas",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "cuentatipo_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "cuentatipo",
                        "value": "[cuentatipo|id|cuentatipo_id]",
                        "rel": null
                    },
                    {
                        "name": "codigo",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "cuentatipo_id": "number",
                        "cuentatipo": "[cuentatipo|id|cuentatipo_id]",
                        "codigo": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "cuentatipo_id": "number",
                        "cuentatipo": "[cuentatipo|id|cuentatipo_id]",
                        "codigo": "string"
                    },
                    "insert": {
                        "cuentatipo_id": "number",
                        "cuentatipo": "[cuentatipo|id|cuentatipo_id]",
                        "codigo": "string"
                    }
                }
            },
            {
                "name": "acreedorcuentas",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "acreedor_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "acreedor",
                        "value": "[acreedor|id|acreedor_id]",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]"
                    },
                    "insert": {
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]"
                    }
                }
            },
            {
                "name": "deudorcuentas",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "deudor_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "deudor",
                        "value": "[deudor|id|deudor_id]",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]"
                    },
                    "insert": {
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]"
                    }
                }
            },
            {
                "name": "fondostipo",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string"
                    },
                    "insert": {
                        "nombre": "string"
                    }
                }
            },
            {
                "name": "usuarios",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "cargo",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "uid",
                        "value": "number",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "cargo": "string",
                        "uid": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "cargo": "string",
                        "uid": "number"
                    },
                    "insert": {
                        "nombre": "string",
                        "cargo": "string",
                        "uid": "number"
                    }
                }
            },
            {
                "name": "fondos",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "direccion",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "ubicacion",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "fondostipo_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "fondostipo",
                        "value": "[fondostipo|id|fondostipo_id]",
                        "rel": null
                    },
                    {
                        "name": "solicitud_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "responsables",
                        "value": "[[fondosresponsables|fondo_id|id]]",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "direccion": "string",
                        "ubicacion": "string",
                        "fondostipo_id": "number",
                        "fondostipo": "[fondostipo|id|fondostipo_id]",
                        "solicitud_id": "number",
                        "responsables": "[[fondosresponsables|fondo_id|id]]"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "direccion": "string",
                        "ubicacion": "string",
                        "fondostipo_id": "number",
                        "fondostipo": "[fondostipo|id|fondostipo_id]",
                        "solicitud_id": "number",
                        "responsables": "[[fondosresponsables|fondo_id|id]]"
                    },
                    "insert": {
                        "nombre": "string",
                        "direccion": "string",
                        "ubicacion": "string",
                        "fondostipo_id": "number",
                        "fondostipo": "[fondostipo|id|fondostipo_id]",
                        "solicitud_id": "number",
                        "responsables": "[[fondosresponsables|fondo_id|id]]"
                    }
                }
            },
            {
                "name": "fondosresponsables",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "responsable_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "responsables",
                        "value": "[usuarios|id|responsable_id]",
                        "rel": null
                    },
                    {
                        "name": "fondo_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "fondo",
                        "value": "[fondos|id|fondo_id]",
                        "rel": null
                    },
                    {
                        "name": "estado",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "responsable_id": "number",
                        "responsables": "[usuarios|id|responsable_id]",
                        "fondo_id": "number",
                        "fondo": "[fondos|id|fondo_id]",
                        "estado": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "responsable_id": "number",
                        "responsables": "[usuarios|id|responsable_id]",
                        "fondo_id": "number",
                        "fondo": "[fondos|id|fondo_id]",
                        "estado": "string"
                    },
                    "insert": {
                        "responsable_id": "number",
                        "responsables": "[usuarios|id|responsable_id]",
                        "fondo_id": "number",
                        "fondo": "[fondos|id|fondo_id]",
                        "estado": "string"
                    }
                }
            },
            {
                "name": "fondoshorarios",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "fondo_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "fondo",
                        "value": "[fondos|id|fondo_id]",
                        "rel": null
                    },
                    {
                        "name": "horario_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "horario",
                        "value": "[horarios|id|horario_id]",
                        "rel": null
                    },
                    {
                        "name": "estado",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "fondo_id": "number",
                        "fondo": "[fondos|id|fondo_id]",
                        "horario_id": "number",
                        "horario": "[horarios|id|horario_id]",
                        "estado": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "fondo_id": "number",
                        "fondo": "[fondos|id|fondo_id]",
                        "horario_id": "number",
                        "horario": "[horarios|id|horario_id]",
                        "estado": "string"
                    },
                    "insert": {
                        "fondo_id": "number",
                        "fondo": "[fondos|id|fondo_id]",
                        "horario_id": "number",
                        "horario": "[horarios|id|horario_id]",
                        "estado": "string"
                    }
                }
            },
            {
                "name": "fondoscobromedio",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "fondo",
                        "value": "[fondos|id|fondo_id]",
                        "rel": null
                    },
                    {
                        "name": "cobromedio_id",
                        "value": "number",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "fondo": "[fondos|id|fondo_id]",
                        "cobromedio_id": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "fondo": "[fondos|id|fondo_id]",
                        "cobromedio_id": "number"
                    },
                    "insert": {
                        "fondo": "[fondos|id|fondo_id]",
                        "cobromedio_id": "number"
                    }
                }
            },
            {
                "name": "horarios",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string"
                    },
                    "insert": {
                        "nombre": "string"
                    }
                }
            },
            {
                "name": "horariodia",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "horario_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "horario",
                        "value": "[horarios|id|horario_id]",
                        "rel": null
                    },
                    {
                        "name": "dia",
                        "value": "integer",
                        "rel": null
                    },
                    {
                        "name": "apertura",
                        "value": "time",
                        "rel": null
                    },
                    {
                        "name": "cierre",
                        "value": "time",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "horario_id": "number",
                        "horario": "[horarios|id|horario_id]",
                        "dia": "integer",
                        "apertura": "time",
                        "cierre": "time"
                    },
                    "create": {
                        "id": "number|pk",
                        "horario_id": "number",
                        "horario": "[horarios|id|horario_id]",
                        "dia": "integer",
                        "apertura": "time",
                        "cierre": "time"
                    },
                    "insert": {
                        "horario_id": "number",
                        "horario": "[horarios|id|horario_id]",
                        "dia": "integer",
                        "apertura": "time",
                        "cierre": "time"
                    }
                }
            },
            {
                "name": "fondosusuarios",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "fondo_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "fondo",
                        "value": "[fondos|id|fondo_id]",
                        "rel": null
                    },
                    {
                        "name": "usuario_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "usuario",
                        "value": "[usuarios|id|usuario_id]",
                        "rel": null
                    },
                    {
                        "name": "estado",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "fondo_id": "number",
                        "fondo": "[fondos|id|fondo_id]",
                        "usuario_id": "number",
                        "usuario": "[usuarios|id|usuario_id]",
                        "estado": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "fondo_id": "number",
                        "fondo": "[fondos|id|fondo_id]",
                        "usuario_id": "number",
                        "usuario": "[usuarios|id|usuario_id]",
                        "estado": "string"
                    },
                    "insert": {
                        "fondo_id": "number",
                        "fondo": "[fondos|id|fondo_id]",
                        "usuario_id": "number",
                        "usuario": "[usuarios|id|usuario_id]",
                        "estado": "string"
                    }
                }
            },
            {
                "name": "solicitudtipo",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "descripcion",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "montofijo",
                        "value": "boolean",
                        "rel": null
                    },
                    {
                        "name": "moneda_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "moneda",
                        "value": "[monedas|id|moneda_id]",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "montofijo": "boolean",
                        "moneda_id": "number",
                        "moneda": "[monedas|id|moneda_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "montofijo": "boolean",
                        "moneda_id": "number",
                        "moneda": "[monedas|id|moneda_id]"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string",
                        "montofijo": "boolean",
                        "moneda_id": "number",
                        "moneda": "[monedas|id|moneda_id]"
                    }
                }
            },
            {
                "name": "solicitudes",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "fecha",
                        "value": "date",
                        "rel": null
                    },
                    {
                        "name": "solicitante",
                        "value": "[contacto|id|solicitante_id]",
                        "rel": null
                    },
                    {
                        "name": "aprobacion",
                        "value": "boolean",
                        "rel": null
                    },
                    {
                        "name": "estado",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "solicitud_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "solicitudtipo",
                        "value": "[solicitudtipo|id|solicitud_id]",
                        "rel": null
                    },
                    {
                        "name": "centrodecostos_id",
                        "value": "number",
                        "rel": null
                    },
                    {
                        "name": "centrodecostos",
                        "value": "[centrodecostos|id|centrodecostos_id]",
                        "rel": null
                    },
                    {
                        "name": "solicitante_id",
                        "value": "number",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "fecha": "date",
                        "solicitante": "[contacto|id|solicitante_id]",
                        "aprobacion": "boolean",
                        "estado": "string",
                        "solicitud_id": "number",
                        "solicitudtipo": "[solicitudtipo|id|solicitud_id]",
                        "centrodecostos_id": "number",
                        "centrodecostos": "[centrodecostos|id|centrodecostos_id]",
                        "solicitante_id": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "fecha": "date",
                        "solicitante": "[contacto|id|solicitante_id]",
                        "aprobacion": "boolean",
                        "estado": "string",
                        "solicitud_id": "number",
                        "solicitudtipo": "[solicitudtipo|id|solicitud_id]",
                        "centrodecostos_id": "number",
                        "centrodecostos": "[centrodecostos|id|centrodecostos_id]",
                        "solicitante_id": "number"
                    },
                    "insert": {
                        "fecha": "date",
                        "solicitante": "[contacto|id|solicitante_id]",
                        "aprobacion": "boolean",
                        "estado": "string",
                        "solicitud_id": "number",
                        "solicitudtipo": "[solicitudtipo|id|solicitud_id]",
                        "centrodecostos_id": "number",
                        "centrodecostos": "[centrodecostos|id|centrodecostos_id]",
                        "solicitante_id": "number"
                    }
                }
            },
            {
                "name": "centrodecostos",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk",
                        "rel": null
                    },
                    {
                        "name": "nombre",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "descripción",
                        "value": "string",
                        "rel": null
                    },
                    {
                        "name": "estado",
                        "value": "string",
                        "rel": null
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripción": "string",
                        "estado": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripción": "string",
                        "estado": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripción": "string",
                        "estado": "string"
                    }
                }
            }
        ]
    }
]