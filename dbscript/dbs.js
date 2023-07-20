[
    {
        "db": "fish",
        "groups": [
            {
                "name": "sharks",
                "data": {
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "color": "string",
                        "weight": "string"
                    },
                    "select": {
                        "id": "number",
                        "name": "string",
                        "color": "string",
                        "weight": "string"
                    },
                    "insert": {
                        "name": "string",
                        "color": "string",
                        "weight": "string"
                    },
                    "paginado": {
                        "page": "number",
                        "size": "number",
                        "sortBy": "string",
                        "descending": "string"
                    }
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "salmones",
                "data": {
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "color": "string",
                        "weight": "string"
                    },
                    "select": {
                        "id": "number",
                        "name": "string",
                        "color": "string",
                        "weight": "string"
                    },
                    "insert": {
                        "name": "string",
                        "color": "string",
                        "weight": "string"
                    }
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "truchas",
                "data": {
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "color": "string",
                        "weight": "string"
                    },
                    "select": {
                        "id": "number",
                        "name": "string",
                        "color": "string",
                        "weight": "string"
                    },
                    "insert": {
                        "name": "string",
                        "color": "string",
                        "weight": "string"
                    }
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            }
        ]
    },
    {
        "db": "contabilidad",
        "groups": [
            {
                "name": "clientes",
                "data": {
                    "create": {
                        "id": "number|pk",
                        "nombre_razon_social": "string",
                        "valor_documento": "string",
                        "estado": "string",
                        "codigo_cliente": "string",
                        "tipo_documento_id": "number",
                        "tipo_documentos": "[tipo_documentos|id|tipo_documento_id]"
                    },
                    "select": {
                        "id": "number|pk",
                        "nombre_razon_social": "string",
                        "valor_documento": "string",
                        "estado": "string",
                        "codigo_cliente": "string",
                        "tipo_documento_id": "number",
                        "tipo_documentos": "[tipo_documentos|id|tipo_documento_id]"
                    },
                    "insert": {
                        "nombre_razon_social": "string",
                        "valor_documento": "string",
                        "estado": "string",
                        "codigo_cliente": "string",
                        "tipo_documento_id": "number",
                        "tipo_documentos": "[tipo_documentos|id|tipo_documento_id]"
                    }
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "tipo_documentos",
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "sigla": "string",
                        "descripcion": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "sigla": "string",
                        "descripcion": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "sigla": "string",
                        "descripcion": "string"
                    }
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "variables_configuracion",
                "alias": "variables",
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "tipo": "string",
                        "descripcion": "string",
                        "valor": "string",
                        "estado": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "tipo": "string",
                        "descripcion": "string",
                        "valor": "string",
                        "estado": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "tipo": "string",
                        "descripcion": "string",
                        "valor": "string",
                        "estado": "string"
                    }
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "tipo_compras",
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "estado": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "estado": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "estado": "string"
                    }
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "centro_costos",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "grupos",
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "estado": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "estado": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "estado": "string"
                    }
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "cuentas",
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "estado": "string",
                        "grupo_id": "number",
                        "grupos": "[grupos|id|grupo_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "estado": "string",
                        "grupo_id": "number",
                        "grupos": "[grupos|id|grupo_id]"
                    },
                    "insert": {
                        "nombre": "string",
                        "estado": "string",
                        "grupo_id": "number",
                        "grupos": "[grupos|id|grupo_id]"
                    }
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            }
        ]
    },
    {
        "db": "tesoreria",
        "groups": [
            {
                "name": "tipodato",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "variablesconfiguracion",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "cuotastiempo",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "interestiempo",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "interestipo",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "pagoforma",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "pagotipo",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "cobroforma",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "cobrotipo",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "acreedor",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "deudor",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "documentocontactotipo",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "contactogrupo",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "contacto",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "creditoestado",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "credito",
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
                        "pagoforma_id": "number",
                        "pagoforma": "[pagoforma|id|pagoforma_id]",
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
                        "cuotastiempo": "[cuotastiempo,id,cuotastiempo_id]",
                        "interes": "float",
                        "interestiempo_id": "number",
                        "interestiempo": "[interestiempo|id|interestiempo_id]",
                        "interestipo_id": "number",
                        "interestipo": "[interestipo|id|interestipo_id]",
                        "tieneiva": "boolean",
                        "redondear": "boolean",
                        "pagoforma_id": "number",
                        "pagoforma": "[pagoforma|id|pagoforma_id]",
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
                        "cuotastiempo": "[cuotastiempo,id,cuotastiempo_id]",
                        "interes": "float",
                        "interestiempo_id": "number",
                        "interestiempo": "[interestiempo|id|interestiempo_id]",
                        "interestipo_id": "number",
                        "interestipo": "[interestipo|id|interestipo_id]",
                        "tieneiva": "boolean",
                        "redondear": "boolean",
                        "pagoforma_id": "number",
                        "pagoforma": "[pagoforma|id|pagoforma_id]",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "creditosestados",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "pagoestado",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "pagosestados",
                "data": {
                    "select": {
                        "id": "number|pk",
                        "pago_id": "number",
                        "pagos": "[pago|id|pagos_id]",
                        "pagoestado_id": "number",
                        "pagoestado": "[pagoestado|id|pagoestado_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "pago_id": "number",
                        "pagos": "[pago|id|pagos_id]",
                        "pagoestado_id": "number",
                        "pagoestado": "[pagoestado|id|pagoestado_id]"
                    },
                    "insert": {
                        "pago_id": "number",
                        "pagos": "[pago|id|pagos_id]",
                        "pagoestado_id": "number",
                        "pagoestado": "[pagoestado|id|pagoestado_id]"
                    }
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "creditopagosestados",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "creditopagos",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "pagos",
                "data": {
                    "select": {
                        "id": "number|pk",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "pagoforma_id": "number",
                        "pagoforma": "[pagoforma|id|pagoforma_id]",
                        "pagofecha": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "pagoforma_id": "number",
                        "pagoforma": "[pagoforma|id|pagoforma_id]",
                        "pagofecha": "date"
                    },
                    "insert": {
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "pagoforma_id": "number",
                        "pagoforma": "[pagoforma|id|pagoforma_id]",
                        "pagofecha": "date"
                    }
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "cobros",
                "data": {
                    "select": {
                        "id": "number|pk",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "cobroforma_id": "number",
                        "cobroforma": "[pagoforma|id|cobroforma_id]",
                        "cobrofecha": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "cobroforma_id": "number",
                        "cobroforma": "[pagoforma|id|cobroforma_id]",
                        "cobrofecha": "date"
                    },
                    "insert": {
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "cobroforma_id": "number",
                        "cobroforma": "[pagoforma|id|cobroforma_id]",
                        "cobrofecha": "date"
                    }
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "documentotipo",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "documentos",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "cuentatipo",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "cuentas",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "acreedorcuentas",
                "data": {
                    "select": {
                        "id": "number|pk",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor_id|id|acreedor_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor_id|id|acreedor_id]"
                    },
                    "insert": {
                        "acreedor_id": "number",
                        "acreedor": "[acreedor_id|id|acreedor_id]"
                    }
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "deudorcuentas",
                "data": {
                    "select": {
                        "id": "number|pk",
                        "deudor_id": "number",
                        "deudor": "[deudor_id|id|deudor_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "deudor_id": "number",
                        "deudor": "[deudor_id|id|deudor_id]"
                    },
                    "insert": {
                        "deudor_id": "number",
                        "deudor": "[deudor_id|id|deudor_id]"
                    }
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "fondostipo",
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
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "fondos",
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "fondostipo_id": "number",
                        "fondostipo": "[fondostipo|id|fondostipo_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "fondostipo_id": "number",
                        "fondostipo": "[fondostipo|id|fondostipo_id]"
                    },
                    "insert": {
                        "nombre": "string",
                        "fondostipo_id": "number",
                        "fondostipo": "[fondostipo|id|fondostipo_id]"
                    }
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "fondoscuentas",
                "data": {
                    "select": {
                        "id": "number|pk",
                        "cuentas_id": "number",
                        "cuentas": "[cuentas|id|cuentas_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "cuentas_id": "number",
                        "cuentas": "[cuentas|id|cuentas_id]"
                    },
                    "insert": {
                        "cuentas_id": "number",
                        "cuentas": "[cuentas|id|cuentas_id]"
                    }
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "impuestos",
                "data": {
                    "select": {
                        "id": "number|pk",
                        "porcentaje": "float",
                        "nombre": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "porcentaje": "float",
                        "nombre": "string"
                    },
                    "insert": {
                        "porcentaje": "float",
                        "nombre": "string"
                    }
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            },
            {
                "name": "bancos",
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "cuenta": "number",
                        "descripcion": "string",
                        "estado": "string",
                        "cuentatipo_id": "number",
                        "cuentatipo": "[cuentatipo|id|cuentatipo_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "cuenta": "number",
                        "descripcion": "string",
                        "estado": "string",
                        "cuentatipo_id": "number",
                        "cuentatipo": "[cuentatipo|id|cuentatipo_id]"
                    },
                    "insert": {
                        "nombre": "string",
                        "cuenta": "number",
                        "descripcion": "string",
                        "estado": "string",
                        "cuentatipo_id": "number",
                        "cuentatipo": "[cuentatipo|id|cuentatipo_id]"
                    }
                },
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
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
                ]
            }
        ]
    }
]