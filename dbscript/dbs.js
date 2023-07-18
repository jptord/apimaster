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
                "name": "tipoentidad",
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
                "name": "entidades",
                "data": {
                    "select": {
                        "id": "number|pk",
                        "tipoentidad_id": "number",
                        "tipoentidad": "[tipoentidad|id|tipoentidad_id]",
                        "nombre": "string",
                        "identificacion": "string",
                        "correo": "string",
                        "telefono": "number",
                        "direccion": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "tipoentidad_id": "number",
                        "tipoentidad": "[tipoentidad|id|tipoentidad_id]",
                        "nombre": "string",
                        "identificacion": "string",
                        "correo": "string",
                        "telefono": "number",
                        "direccion": "string"
                    },
                    "insert": {
                        "tipoentidad_id": "number",
                        "tipoentidad": "[tipoentidad|id|tipoentidad_id]",
                        "nombre": "string",
                        "identificacion": "string",
                        "correo": "string",
                        "telefono": "number",
                        "direccion": "string"
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
                "name": "pagos",
                "data": {
                    "select": {
                        "id": "number|pk",
                        "fecha_estimada": "date",
                        "fecha_pago": "date",
                        "monto": "number",
                        "saldo": "number",
                        "entidad_pago_id": "number",
                        "entidades": "[entidades|id|entidad_pago_id]",
                        "pagoestado_id": "number",
                        "pagosestados": "[pagosestados|id|pagoestado_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "fecha_estimada": "date",
                        "fecha_pago": "date",
                        "monto": "number",
                        "saldo": "number",
                        "entidad_pago_id": "number",
                        "entidades": "[entidades|id|entidad_pago_id]",
                        "pagoestado_id": "number",
                        "pagosestados": "[pagosestados|id|pagoestado_id]"
                    },
                    "insert": {
                        "fecha_estimada": "date",
                        "fecha_pago": "date",
                        "monto": "number",
                        "saldo": "number",
                        "entidad_pago_id": "number",
                        "entidades": "[entidades|id|entidad_pago_id]",
                        "pagoestado_id": "number",
                        "pagosestados": "[pagosestados|id|pagoestado_id]"
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
            }
        ]
    }
]