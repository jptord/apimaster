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
    }
]