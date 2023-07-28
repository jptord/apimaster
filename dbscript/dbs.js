[
    {
        "db": "tesoreria",
        "groups": [
            {
                "name": "tipodato",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
                    },
                    {
                        "name": "tipodato_id",
                        "value": "number"
                    },
                    {
                        "name": "tipodato",
                        "value": "[tipodato|id|tipodato_id]",
                        "rel": {
                            "index": "tipodato",
                            "name": "tipodato",
                            "field": "id",
                            "ownfield": "tipodato_id",
                            "array": false
                        }
                    },
                    {
                        "name": "valores",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "sigla",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
                    },
                    {
                        "name": "dias",
                        "value": "number"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
                    },
                    {
                        "name": "dias",
                        "value": "number"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "contacto_id",
                        "value": "number"
                    },
                    {
                        "name": "contacto",
                        "value": "[contacto|id|contacto_id]",
                        "rel": {
                            "index": "contacto",
                            "name": "contacto",
                            "field": "id",
                            "ownfield": "contacto_id",
                            "array": false
                        }
                    },
                    {
                        "name": "estado",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "contacto_id",
                        "value": "number"
                    },
                    {
                        "name": "contacto",
                        "value": "[contacto|id|contacto_id]",
                        "rel": {
                            "index": "contacto",
                            "name": "contacto",
                            "field": "id",
                            "ownfield": "contacto_id",
                            "array": false
                        }
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
                        "value": "number|pk"
                    },
                    {
                        "name": "sigla",
                        "value": "string"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
                    },
                    {
                        "name": "miembros",
                        "value": "[[contacto|id|id]]",
                        "rel": {
                            "index": "miembros",
                            "name": "contacto",
                            "field": "id",
                            "ownfield": "id",
                            "array": true
                        }
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
                    },
                    {
                        "method": "GET",
                        "route": ":id/contacto",
                        "in": null,
                        "rel": "[[contacto|id|id]]",
                        "type": "rel",
                        "out": "select_contacto"
                    },
                    {
                        "method": "GET",
                        "route": ":id/contacto/:id",
                        "in": null,
                        "rel": "[[contacto|id|id]]",
                        "type": "rel",
                        "out": "select_contacto"
                    },
                    {
                        "method": "POST",
                        "route": ":id/contacto",
                        "in": "insert_contacto",
                        "rel": "[[contacto|id|id]]",
                        "type": "rel",
                        "out": "select_contacto"
                    },
                    {
                        "method": "PUT",
                        "route": ":id/contacto/:id",
                        "in": "insert_contacto",
                        "rel": "[[contacto|id|id]]",
                        "type": "rel",
                        "out": "select_contacto"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id/contacto/:id",
                        "in": null,
                        "rel": "[[contacto|id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "miembros": "[[contacto|id|id]]"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "miembros": "[[contacto|id|id]]"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string",
                        "miembros": "[[contacto|id|id]]"
                    },
                    "select_contacto": {
                        "id": "number|pk",
                        "nombre": "string",
                        "telefono": "number",
                        "correo": "string",
                        "direccion": "string",
                        "descripción": "string",
                        "contactogrupo_id": "number",
                        "contactogrupo": "[contactogrupo|id|contactogrupo_id]"
                    },
                    "create_contacto": {
                        "id": "number|pk",
                        "nombre": "string",
                        "telefono": "number",
                        "correo": "string",
                        "direccion": "string",
                        "descripción": "string",
                        "contactogrupo_id": "number",
                        "contactogrupo": "[contactogrupo|id|contactogrupo_id]"
                    },
                    "insert_contacto": {
                        "nombre": "string",
                        "telefono": "number",
                        "correo": "string",
                        "direccion": "string",
                        "descripción": "string",
                        "contactogrupo_id": "number",
                        "contactogrupo": "[contactogrupo|id|contactogrupo_id]"
                    }
                }
            },
            {
                "name": "contacto",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "telefono",
                        "value": "number"
                    },
                    {
                        "name": "correo",
                        "value": "string"
                    },
                    {
                        "name": "direccion",
                        "value": "string"
                    },
                    {
                        "name": "descripción",
                        "value": "string"
                    },
                    {
                        "name": "contactogrupo_id",
                        "value": "number"
                    },
                    {
                        "name": "contactogrupo",
                        "value": "[contactogrupo|id|contactogrupo_id]",
                        "rel": {
                            "index": "contactogrupo",
                            "name": "contactogrupo",
                            "field": "id",
                            "ownfield": "contactogrupo_id",
                            "array": false
                        }
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
                        "telefono": "number",
                        "correo": "string",
                        "direccion": "string",
                        "descripción": "string",
                        "contactogrupo_id": "number",
                        "contactogrupo": "[contactogrupo|id|contactogrupo_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "telefono": "number",
                        "correo": "string",
                        "direccion": "string",
                        "descripción": "string",
                        "contactogrupo_id": "number",
                        "contactogrupo": "[contactogrupo|id|contactogrupo_id]"
                    },
                    "insert": {
                        "nombre": "string",
                        "telefono": "number",
                        "correo": "string",
                        "direccion": "string",
                        "descripción": "string",
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "capital",
                        "value": "float"
                    },
                    {
                        "name": "cuotas",
                        "value": "number"
                    },
                    {
                        "name": "cuotastiempo_id",
                        "value": "number"
                    },
                    {
                        "name": "cuotastiempo",
                        "value": "[cuotastiempo|id|cuotastiempo_id]",
                        "rel": {
                            "index": "cuotastiempo",
                            "name": "cuotastiempo",
                            "field": "id",
                            "ownfield": "cuotastiempo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "interes",
                        "value": "float"
                    },
                    {
                        "name": "interestiempo_id",
                        "value": "number"
                    },
                    {
                        "name": "interestiempo",
                        "value": "[interestiempo|id|interestiempo_id]",
                        "rel": {
                            "index": "interestiempo",
                            "name": "interestiempo",
                            "field": "id",
                            "ownfield": "interestiempo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "interestipo_id",
                        "value": "number"
                    },
                    {
                        "name": "interestipo",
                        "value": "[interestipo|id|interestipo_id]",
                        "rel": {
                            "index": "interestipo",
                            "name": "interestipo",
                            "field": "id",
                            "ownfield": "interestipo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "tieneiva",
                        "value": "boolean"
                    },
                    {
                        "name": "redondear",
                        "value": "boolean"
                    },
                    {
                        "name": "pagomedio_id",
                        "value": "number"
                    },
                    {
                        "name": "pagomedio",
                        "value": "[pagomedio|id|pagomedio_id]",
                        "rel": {
                            "index": "pagomedio",
                            "name": "pagomedio",
                            "field": "id",
                            "ownfield": "pagomedio_id",
                            "array": false
                        }
                    },
                    {
                        "name": "pagotipo_id",
                        "value": "number"
                    },
                    {
                        "name": "pagotipo",
                        "value": "[pagotipo|id|pagotipo_id]",
                        "rel": {
                            "index": "pagotipo",
                            "name": "pagotipo",
                            "field": "id",
                            "ownfield": "pagotipo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "montoaprobado",
                        "value": "float"
                    },
                    {
                        "name": "montodesembolsado",
                        "value": "float"
                    },
                    {
                        "name": "plazo",
                        "value": "date"
                    },
                    {
                        "name": "dias",
                        "value": "number"
                    },
                    {
                        "name": "acreedor_id",
                        "value": "number"
                    },
                    {
                        "name": "acreedor",
                        "value": "[acreedor|id|acreedor_id]",
                        "rel": {
                            "index": "acreedor",
                            "name": "acreedor",
                            "field": "id",
                            "ownfield": "acreedor_id",
                            "array": false
                        }
                    },
                    {
                        "name": "deudor_id",
                        "value": "number"
                    },
                    {
                        "name": "deudor",
                        "value": "[deudor|id|deudor_id]",
                        "rel": {
                            "index": "deudor",
                            "name": "deudor",
                            "field": "id",
                            "ownfield": "deudor_id",
                            "array": false
                        }
                    },
                    {
                        "name": "creditofecha",
                        "value": "date"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "fecha",
                        "value": "date"
                    },
                    {
                        "name": "credito_id",
                        "value": "number"
                    },
                    {
                        "name": "credito",
                        "value": "[credito|id|credito_id]",
                        "rel": {
                            "index": "credito",
                            "name": "credito",
                            "field": "id",
                            "ownfield": "credito_id",
                            "array": false
                        }
                    },
                    {
                        "name": "creditoestado_id",
                        "value": "number"
                    },
                    {
                        "name": "creditoestado",
                        "value": "[creditoestado|id|creditoestado_id]",
                        "rel": {
                            "index": "creditoestado",
                            "name": "creditoestado",
                            "field": "id",
                            "ownfield": "creditoestado_id",
                            "array": false
                        }
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "pagos_id",
                        "value": "number"
                    },
                    {
                        "name": "pagos",
                        "value": "[pagos|id|pagos_id]",
                        "rel": {
                            "index": "pagos",
                            "name": "pagos",
                            "field": "id",
                            "ownfield": "pagos_id",
                            "array": false
                        }
                    },
                    {
                        "name": "pagoestado_id",
                        "value": "number"
                    },
                    {
                        "name": "pagoestado",
                        "value": "[pagoestado|id|pagoestado_id]",
                        "rel": {
                            "index": "pagoestado",
                            "name": "pagoestado",
                            "field": "id",
                            "ownfield": "pagoestado_id",
                            "array": false
                        }
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
                        "value": "number|pk"
                    },
                    {
                        "name": "creditopagos_id",
                        "value": "number"
                    },
                    {
                        "name": "pagoestado_id",
                        "value": "number"
                    },
                    {
                        "name": "pagoestado",
                        "value": "[pagoestado|id|pagoestado_id]",
                        "rel": {
                            "index": "pagoestado",
                            "name": "pagoestado",
                            "field": "id",
                            "ownfield": "pagoestado_id",
                            "array": false
                        }
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
                        "value": "number|pk"
                    },
                    {
                        "name": "credito_id",
                        "value": "number"
                    },
                    {
                        "name": "credito",
                        "value": "[credito|id|credito_id]",
                        "rel": {
                            "index": "credito",
                            "name": "credito",
                            "field": "id",
                            "ownfield": "credito_id",
                            "array": false
                        }
                    },
                    {
                        "name": "nrocuota",
                        "value": "number"
                    },
                    {
                        "name": "pago",
                        "value": "float"
                    },
                    {
                        "name": "interes",
                        "value": "float"
                    },
                    {
                        "name": "capital",
                        "value": "float"
                    },
                    {
                        "name": "saldo",
                        "value": "float"
                    },
                    {
                        "name": "mora",
                        "value": "float"
                    },
                    {
                        "name": "descuento",
                        "value": "float"
                    },
                    {
                        "name": "recargo",
                        "value": "float"
                    },
                    {
                        "name": "pagofecha",
                        "value": "date"
                    },
                    {
                        "name": "plazo",
                        "value": "date"
                    },
                    {
                        "name": "pago_id",
                        "value": "number"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "acreedor_id",
                        "value": "number"
                    },
                    {
                        "name": "acreedor",
                        "value": "[acreedor|id|acreedor_id]",
                        "rel": {
                            "index": "acreedor",
                            "name": "acreedor",
                            "field": "id",
                            "ownfield": "acreedor_id",
                            "array": false
                        }
                    },
                    {
                        "name": "monto",
                        "value": "float"
                    },
                    {
                        "name": "deudor_id",
                        "value": "number"
                    },
                    {
                        "name": "deudor",
                        "value": "[deudor|id|deudor_id]",
                        "rel": {
                            "index": "deudor",
                            "name": "deudor",
                            "field": "id",
                            "ownfield": "deudor_id",
                            "array": false
                        }
                    },
                    {
                        "name": "pagomedio_id",
                        "value": "number"
                    },
                    {
                        "name": "pagomedio",
                        "value": "[pagomedio|id|pagomedio_id]",
                        "rel": {
                            "index": "pagomedio",
                            "name": "pagomedio",
                            "field": "id",
                            "ownfield": "pagomedio_id",
                            "array": false
                        }
                    },
                    {
                        "name": "pagofecha",
                        "value": "date"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "acreedor_id",
                        "value": "number"
                    },
                    {
                        "name": "acreedor",
                        "value": "[acreedor|id|acreedor_id]",
                        "rel": {
                            "index": "acreedor",
                            "name": "acreedor",
                            "field": "id",
                            "ownfield": "acreedor_id",
                            "array": false
                        }
                    },
                    {
                        "name": "monto",
                        "value": "float"
                    },
                    {
                        "name": "deudor_id",
                        "value": "number"
                    },
                    {
                        "name": "deudor",
                        "value": "[deudor|id|deudor_id]",
                        "rel": {
                            "index": "deudor",
                            "name": "deudor",
                            "field": "id",
                            "ownfield": "deudor_id",
                            "array": false
                        }
                    },
                    {
                        "name": "cobromedio_id",
                        "value": "number"
                    },
                    {
                        "name": "cobromedio",
                        "value": "[cobromedio|id|cobromedio_id]",
                        "rel": {
                            "index": "cobromedio",
                            "name": "cobromedio",
                            "field": "id",
                            "ownfield": "cobromedio_id",
                            "array": false
                        }
                    },
                    {
                        "name": "cobrofecha",
                        "value": "date"
                    },
                    {
                        "name": "cobrostipo_id",
                        "value": "number"
                    },
                    {
                        "name": "cobrostipo",
                        "value": "[cobrotipo|id|cobrostipo_id]",
                        "rel": {
                            "index": "cobrostipo",
                            "name": "cobrotipo",
                            "field": "id",
                            "ownfield": "cobrostipo_id",
                            "array": false
                        }
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
                    },
                    {
                        "name": "estado",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "identificacion",
                        "value": "string"
                    },
                    {
                        "name": "documentotipo_id",
                        "value": "number"
                    },
                    {
                        "name": "documentotipo",
                        "value": "[documentotipo|id|documentotipo_id]",
                        "rel": {
                            "index": "documentotipo",
                            "name": "documentotipo",
                            "field": "id",
                            "ownfield": "documentotipo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
                    },
                    {
                        "name": "observacions",
                        "value": "string"
                    },
                    {
                        "name": "url",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "cuentatipo_id",
                        "value": "number"
                    },
                    {
                        "name": "cuentatipo",
                        "value": "[cuentatipo|id|cuentatipo_id]",
                        "rel": {
                            "index": "cuentatipo",
                            "name": "cuentatipo",
                            "field": "id",
                            "ownfield": "cuentatipo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "codigo",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "acreedor_id",
                        "value": "number"
                    },
                    {
                        "name": "acreedor",
                        "value": "[acreedor|id|acreedor_id]",
                        "rel": {
                            "index": "acreedor",
                            "name": "acreedor",
                            "field": "id",
                            "ownfield": "acreedor_id",
                            "array": false
                        }
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
                        "value": "number|pk"
                    },
                    {
                        "name": "deudor_id",
                        "value": "number"
                    },
                    {
                        "name": "deudor",
                        "value": "[deudor|id|deudor_id]",
                        "rel": {
                            "index": "deudor",
                            "name": "deudor",
                            "field": "id",
                            "ownfield": "deudor_id",
                            "array": false
                        }
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "cargo",
                        "value": "string"
                    },
                    {
                        "name": "uid",
                        "value": "number"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "direccion",
                        "value": "string"
                    },
                    {
                        "name": "ubicacion",
                        "value": "string"
                    },
                    {
                        "name": "fondostipo_id",
                        "value": "number"
                    },
                    {
                        "name": "fondostipo",
                        "value": "[fondostipo|id|fondostipo_id]",
                        "rel": {
                            "index": "fondostipo",
                            "name": "fondostipo",
                            "field": "id",
                            "ownfield": "fondostipo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "solicitud_id",
                        "value": "number"
                    },
                    {
                        "name": "responsables",
                        "value": "[[fondosresponsables|fondo_id|id]]",
                        "rel": {
                            "index": "responsables",
                            "name": "fondosresponsables",
                            "field": "fondo_id",
                            "ownfield": "id",
                            "array": true
                        }
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
                    },
                    {
                        "method": "GET",
                        "route": ":fondo_id/fondosresponsables",
                        "in": null,
                        "rel": "[[fondosresponsables|fondo_id|id]]",
                        "type": "rel",
                        "out": "select_fondosresponsables"
                    },
                    {
                        "method": "GET",
                        "route": ":fondo_id/fondosresponsables/:id",
                        "in": null,
                        "rel": "[[fondosresponsables|fondo_id|id]]",
                        "type": "rel",
                        "out": "select_fondosresponsables"
                    },
                    {
                        "method": "POST",
                        "route": ":fondo_id/fondosresponsables",
                        "in": "insert_fondosresponsables",
                        "rel": "[[fondosresponsables|fondo_id|id]]",
                        "type": "rel",
                        "out": "select_fondosresponsables"
                    },
                    {
                        "method": "PUT",
                        "route": ":fondo_id/fondosresponsables/:id",
                        "in": "insert_fondosresponsables",
                        "rel": "[[fondosresponsables|fondo_id|id]]",
                        "type": "rel",
                        "out": "select_fondosresponsables"
                    },
                    {
                        "method": "DELETE",
                        "route": ":fondo_id/fondosresponsables/:id",
                        "in": null,
                        "rel": "[[fondosresponsables|fondo_id|id]]",
                        "type": "rel",
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
                    },
                    "select_fondosresponsables": {
                        "id": "number|pk",
                        "responsable_id": "number",
                        "responsables": "[usuarios|id|responsable_id]",
                        "fondo_id": "number",
                        "fondo": "[fondos|id|fondo_id]",
                        "estado": "string"
                    },
                    "create_fondosresponsables": {
                        "id": "number|pk",
                        "responsable_id": "number",
                        "responsables": "[usuarios|id|responsable_id]",
                        "fondo_id": "number",
                        "fondo": "[fondos|id|fondo_id]",
                        "estado": "string"
                    },
                    "insert_fondosresponsables": {
                        "responsable_id": "number",
                        "responsables": "[usuarios|id|responsable_id]",
                        "fondo_id": "number",
                        "fondo": "[fondos|id|fondo_id]",
                        "estado": "string"
                    }
                }
            },
            {
                "name": "fondosresponsables",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "responsable_id",
                        "value": "number"
                    },
                    {
                        "name": "responsables",
                        "value": "[usuarios|id|responsable_id]",
                        "rel": {
                            "index": "responsables",
                            "name": "usuarios",
                            "field": "id",
                            "ownfield": "responsable_id",
                            "array": false
                        }
                    },
                    {
                        "name": "fondo_id",
                        "value": "number"
                    },
                    {
                        "name": "fondo",
                        "value": "[fondos|id|fondo_id]",
                        "rel": {
                            "index": "fondo",
                            "name": "fondos",
                            "field": "id",
                            "ownfield": "fondo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "estado",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "fondo_id",
                        "value": "number"
                    },
                    {
                        "name": "fondo",
                        "value": "[fondos|id|fondo_id]",
                        "rel": {
                            "index": "fondo",
                            "name": "fondos",
                            "field": "id",
                            "ownfield": "fondo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "horario_id",
                        "value": "number"
                    },
                    {
                        "name": "horario",
                        "value": "[horarios|id|horario_id]",
                        "rel": {
                            "index": "horario",
                            "name": "horarios",
                            "field": "id",
                            "ownfield": "horario_id",
                            "array": false
                        }
                    },
                    {
                        "name": "estado",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "fondo",
                        "value": "[fondos|id|fondo_id]",
                        "rel": {
                            "index": "fondo",
                            "name": "fondos",
                            "field": "id",
                            "ownfield": "fondo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "cobromedio_id",
                        "value": "number"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "horario",
                        "value": "[[horariodia|horario_id|id]]",
                        "rel": {
                            "index": "horario",
                            "name": "horariodia",
                            "field": "horario_id",
                            "ownfield": "id",
                            "array": true
                        }
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
                    },
                    {
                        "method": "GET",
                        "route": ":horario_id/horariodia",
                        "in": null,
                        "rel": "[[horariodia|horario_id|id]]",
                        "type": "rel",
                        "out": "select_horariodia"
                    },
                    {
                        "method": "GET",
                        "route": ":horario_id/horariodia/:id",
                        "in": null,
                        "rel": "[[horariodia|horario_id|id]]",
                        "type": "rel",
                        "out": "select_horariodia"
                    },
                    {
                        "method": "POST",
                        "route": ":horario_id/horariodia",
                        "in": "insert_horariodia",
                        "rel": "[[horariodia|horario_id|id]]",
                        "type": "rel",
                        "out": "select_horariodia"
                    },
                    {
                        "method": "PUT",
                        "route": ":horario_id/horariodia/:id",
                        "in": "insert_horariodia",
                        "rel": "[[horariodia|horario_id|id]]",
                        "type": "rel",
                        "out": "select_horariodia"
                    },
                    {
                        "method": "DELETE",
                        "route": ":horario_id/horariodia/:id",
                        "in": null,
                        "rel": "[[horariodia|horario_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "nombre": "string",
                        "horario": "[[horariodia|horario_id|id]]"
                    },
                    "create": {
                        "id": "number|pk",
                        "nombre": "string",
                        "horario": "[[horariodia|horario_id|id]]"
                    },
                    "insert": {
                        "nombre": "string",
                        "horario": "[[horariodia|horario_id|id]]"
                    },
                    "select_horariodia": {
                        "id": "number|pk",
                        "horario_id": "number",
                        "horario": "[horarios|id|horario_id]",
                        "dia_id": "integer",
                        "dias": "[dias|id|dia_id]",
                        "apertura": "time",
                        "cierre": "time"
                    },
                    "create_horariodia": {
                        "id": "number|pk",
                        "horario_id": "number",
                        "horario": "[horarios|id|horario_id]",
                        "dia_id": "integer",
                        "dias": "[dias|id|dia_id]",
                        "apertura": "time",
                        "cierre": "time"
                    },
                    "insert_horariodia": {
                        "horario_id": "number",
                        "horario": "[horarios|id|horario_id]",
                        "dia_id": "integer",
                        "dias": "[dias|id|dia_id]",
                        "apertura": "time",
                        "cierre": "time"
                    }
                }
            },
            {
                "name": "dias",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "horario_id",
                        "value": "number"
                    },
                    {
                        "name": "horario",
                        "value": "[horarios|id|horario_id]",
                        "rel": {
                            "index": "horario",
                            "name": "horarios",
                            "field": "id",
                            "ownfield": "horario_id",
                            "array": false
                        }
                    },
                    {
                        "name": "dia_id",
                        "value": "integer"
                    },
                    {
                        "name": "dias",
                        "value": "[dias|id|dia_id]",
                        "rel": {
                            "index": "dias",
                            "name": "dias",
                            "field": "id",
                            "ownfield": "dia_id",
                            "array": false
                        }
                    },
                    {
                        "name": "apertura",
                        "value": "time"
                    },
                    {
                        "name": "cierre",
                        "value": "time"
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
                        "dia_id": "integer",
                        "dias": "[dias|id|dia_id]",
                        "apertura": "time",
                        "cierre": "time"
                    },
                    "create": {
                        "id": "number|pk",
                        "horario_id": "number",
                        "horario": "[horarios|id|horario_id]",
                        "dia_id": "integer",
                        "dias": "[dias|id|dia_id]",
                        "apertura": "time",
                        "cierre": "time"
                    },
                    "insert": {
                        "horario_id": "number",
                        "horario": "[horarios|id|horario_id]",
                        "dia_id": "integer",
                        "dias": "[dias|id|dia_id]",
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
                        "value": "number|pk"
                    },
                    {
                        "name": "fondo_id",
                        "value": "number"
                    },
                    {
                        "name": "fondo",
                        "value": "[fondos|id|fondo_id]",
                        "rel": {
                            "index": "fondo",
                            "name": "fondos",
                            "field": "id",
                            "ownfield": "fondo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "usuario_id",
                        "value": "number"
                    },
                    {
                        "name": "usuario",
                        "value": "[usuarios|id|usuario_id]",
                        "rel": {
                            "index": "usuario",
                            "name": "usuarios",
                            "field": "id",
                            "ownfield": "usuario_id",
                            "array": false
                        }
                    },
                    {
                        "name": "estado",
                        "value": "string"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
                    },
                    {
                        "name": "montofijo",
                        "value": "boolean"
                    },
                    {
                        "name": "moneda_id",
                        "value": "number"
                    },
                    {
                        "name": "moneda",
                        "value": "[monedas|id|moneda_id]",
                        "rel": {
                            "index": "moneda",
                            "name": "monedas",
                            "field": "id",
                            "ownfield": "moneda_id",
                            "array": false
                        }
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
                        "value": "number|pk"
                    },
                    {
                        "name": "fecha",
                        "value": "date"
                    },
                    {
                        "name": "solicitante",
                        "value": "[contacto|id|solicitante_id]",
                        "rel": {
                            "index": "solicitante",
                            "name": "contacto",
                            "field": "id",
                            "ownfield": "solicitante_id",
                            "array": false
                        }
                    },
                    {
                        "name": "aprobacion",
                        "value": "boolean"
                    },
                    {
                        "name": "estado",
                        "value": "string"
                    },
                    {
                        "name": "solicitud_id",
                        "value": "number"
                    },
                    {
                        "name": "solicitudtipo",
                        "value": "[solicitudtipo|id|solicitud_id]",
                        "rel": {
                            "index": "solicitudtipo",
                            "name": "solicitudtipo",
                            "field": "id",
                            "ownfield": "solicitud_id",
                            "array": false
                        }
                    },
                    {
                        "name": "centrodecostos_id",
                        "value": "number"
                    },
                    {
                        "name": "centrodecostos",
                        "value": "[centrodecostos|id|centrodecostos_id]",
                        "rel": {
                            "index": "centrodecostos",
                            "name": "centrodecostos",
                            "field": "id",
                            "ownfield": "centrodecostos_id",
                            "array": false
                        }
                    },
                    {
                        "name": "solicitante_id",
                        "value": "number"
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
                        "value": "number|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "descripción",
                        "value": "string"
                    },
                    {
                        "name": "estado",
                        "value": "string"
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
            },
            {
                "name": "categorias",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "codigo",
                        "value": "string"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
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
                        "codigo": "string",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "codigo": "string",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "insert": {
                        "codigo": "string",
                        "nombre": "string",
                        "descripcion": "string"
                    }
                }
            }
        ]
    }
]