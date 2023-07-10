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
                        "tipo_documento_id": "number"
                    },
                    "select": {
                        "id": "number|pk",
                        "nombre_razon_social": "string",
                        "valor_documento": "string",
                        "estado": "string",
                        "codigo_cliente": "string",
                        "tipo_documento_id": "number"
                    },
                    "insert": {
                        "nombre_razon_social": "string",
                        "valor_documento": "string",
                        "estado": "string",
                        "codigo_cliente": "string",
                        "tipo_documento_id": "number"
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
            }
        ]
    }
]