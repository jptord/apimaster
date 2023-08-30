[
    {
        "db": "empresas",
        "groups": [
            {
                "name": "actividad_economica",
                "alias": "actividad_economica",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "tipo",
                        "value": "string"
                    },
                    {
                        "name": "codigo",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
                    },
                    {
                        "name": "principal",
                        "value": "boolean"
                    }
                ],
                "seeder": [],
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
                        "id": "uuid|pk",
                        "tipo": "string",
                        "codigo": "string",
                        "descripcion": "string",
                        "principal": "boolean"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "tipo": "string",
                        "codigo": "string",
                        "descripcion": "string",
                        "principal": "boolean"
                    },
                    "insert": {
                        "tipo": "string",
                        "codigo": "string",
                        "descripcion": "string",
                        "principal": "boolean"
                    }
                }
            },
            {
                "name": "periodo_fiscal",
                "alias": "periodo_fiscal",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "sector",
                        "value": "string"
                    },
                    {
                        "name": "diaini",
                        "value": "number"
                    },
                    {
                        "name": "diafin",
                        "value": "number"
                    },
                    {
                        "name": "mesini",
                        "value": "number"
                    },
                    {
                        "name": "mesfin",
                        "value": "number"
                    },
                    {
                        "name": "estado",
                        "value": "boolean"
                    }
                ],
                "seeder": [],
                "apicustom": [],
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
                        "id": "uuid|pk",
                        "sector": "string",
                        "diaini": "number",
                        "diafin": "number",
                        "mesini": "number",
                        "mesfin": "number",
                        "estado": "boolean"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "sector": "string",
                        "diaini": "number",
                        "diafin": "number",
                        "mesini": "number",
                        "mesfin": "number",
                        "estado": "boolean"
                    },
                    "insert": {
                        "sector": "string",
                        "diaini": "number",
                        "diafin": "number",
                        "mesini": "number",
                        "mesfin": "number",
                        "estado": "boolean"
                    }
                }
            },
            {
                "name": "empresa",
                "alias": "empresa",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "razon_social",
                        "value": "string"
                    },
                    {
                        "name": "nombre_corto",
                        "value": "string"
                    },
                    {
                        "name": "nit",
                        "value": "string"
                    },
                    {
                        "name": "logo",
                        "value": "text"
                    },
                    {
                        "name": "matricula_comercio",
                        "value": "string"
                    },
                    {
                        "name": "representante_legal",
                        "value": "string"
                    },
                    {
                        "name": "representante_documento",
                        "value": "string"
                    },
                    {
                        "name": "fecha_actividad",
                        "value": "date"
                    },
                    {
                        "name": "periodo_fiscal_id",
                        "value": "number"
                    },
                    {
                        "name": "periodo_fiscal",
                        "value": "[periodo_fiscal|id|periodo_fiscal_id]",
                        "rel": {
                            "index": "periodo_fiscal",
                            "name": "periodo_fiscal",
                            "field": "id",
                            "ownfield": "periodo_fiscal_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [],
                "apicustom": [],
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
                        "id": "uuid|pk",
                        "razon_social": "string",
                        "nombre_corto": "string",
                        "nit": "string",
                        "logo": "text",
                        "matricula_comercio": "string",
                        "representante_legal": "string",
                        "representante_documento": "string",
                        "fecha_actividad": "date",
                        "periodo_fiscal_id": "number",
                        "periodo_fiscal": "[periodo_fiscal|id|periodo_fiscal_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "razon_social": "string",
                        "nombre_corto": "string",
                        "nit": "string",
                        "logo": "text",
                        "matricula_comercio": "string",
                        "representante_legal": "string",
                        "representante_documento": "string",
                        "fecha_actividad": "date",
                        "periodo_fiscal_id": "number",
                        "periodo_fiscal": "[periodo_fiscal|id|periodo_fiscal_id]"
                    },
                    "insert": {
                        "razon_social": "string",
                        "nombre_corto": "string",
                        "nit": "string",
                        "logo": "text",
                        "matricula_comercio": "string",
                        "representante_legal": "string",
                        "representante_documento": "string",
                        "fecha_actividad": "date",
                        "periodo_fiscal_id": "number",
                        "periodo_fiscal": "[periodo_fiscal|id|periodo_fiscal_id]"
                    }
                }
            },
            {
                "name": "modulo",
                "alias": "modulo",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "codigo",
                        "value": "string"
                    }
                ],
                "seeder": [],
                "apicustom": [],
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
                        "id": "uuid|pk",
                        "nombre": "string",
                        "codigo": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "codigo": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "codigo": "string"
                    }
                }
            },
            {
                "name": "empresa_gestion",
                "alias": "empresa_gestion",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "gestion",
                        "value": "string"
                    },
                    {
                        "name": "gestion_ini",
                        "value": "number"
                    },
                    {
                        "name": "gestion_fin",
                        "value": "number"
                    },
                    {
                        "name": "actual",
                        "value": "boolean"
                    },
                    {
                        "name": "estado",
                        "value": "boolean"
                    }
                ],
                "seeder": [],
                "apicustom": [],
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
                        "id": "uuid|pk",
                        "gestion": "string",
                        "gestion_ini": "number",
                        "gestion_fin": "number",
                        "actual": "boolean",
                        "estado": "boolean"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "gestion": "string",
                        "gestion_ini": "number",
                        "gestion_fin": "number",
                        "actual": "boolean",
                        "estado": "boolean"
                    },
                    "insert": {
                        "gestion": "string",
                        "gestion_ini": "number",
                        "gestion_fin": "number",
                        "actual": "boolean",
                        "estado": "boolean"
                    }
                }
            },
            {
                "name": "mes_apertura",
                "alias": "mes_apertura",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "mes",
                        "value": "string"
                    },
                    {
                        "name": "fecha_ini",
                        "value": "date"
                    },
                    {
                        "name": "fecha_fin",
                        "value": "date"
                    },
                    {
                        "name": "aperturado",
                        "value": "boolean"
                    },
                    {
                        "name": "empresa_gestion_id",
                        "value": "number"
                    },
                    {
                        "name": "empresa_gestion",
                        "value": "[empresa_gestion|id|empresa_gestion_id]",
                        "rel": {
                            "index": "empresa_gestion",
                            "name": "empresa_gestion",
                            "field": "id",
                            "ownfield": "empresa_gestion_id",
                            "array": false
                        }
                    },
                    {
                        "name": "modulo_id",
                        "value": "number"
                    },
                    {
                        "name": "modulo",
                        "value": "[modulo|id|modulo_id]",
                        "rel": {
                            "index": "modulo",
                            "name": "modulo",
                            "field": "id",
                            "ownfield": "modulo_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [],
                "apicustom": [],
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
                        "id": "uuid|pk",
                        "mes": "string",
                        "fecha_ini": "date",
                        "fecha_fin": "date",
                        "aperturado": "boolean",
                        "empresa_gestion_id": "number",
                        "empresa_gestion": "[empresa_gestion|id|empresa_gestion_id]",
                        "modulo_id": "number",
                        "modulo": "[modulo|id|modulo_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "mes": "string",
                        "fecha_ini": "date",
                        "fecha_fin": "date",
                        "aperturado": "boolean",
                        "empresa_gestion_id": "number",
                        "empresa_gestion": "[empresa_gestion|id|empresa_gestion_id]",
                        "modulo_id": "number",
                        "modulo": "[modulo|id|modulo_id]"
                    },
                    "insert": {
                        "mes": "string",
                        "fecha_ini": "date",
                        "fecha_fin": "date",
                        "aperturado": "boolean",
                        "empresa_gestion_id": "number",
                        "empresa_gestion": "[empresa_gestion|id|empresa_gestion_id]",
                        "modulo_id": "number",
                        "modulo": "[modulo|id|modulo_id]"
                    }
                }
            },
            {
                "name": "razon_cierre_apertura",
                "alias": "razon_cierre_apertura",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "razon",
                        "value": "string"
                    },
                    {
                        "name": "mes_apertura_id",
                        "value": "number"
                    },
                    {
                        "name": "mes_apertura",
                        "value": "[mes_apertura|id|mes_apertura_id]",
                        "rel": {
                            "index": "mes_apertura",
                            "name": "mes_apertura",
                            "field": "id",
                            "ownfield": "mes_apertura_id",
                            "array": false
                        }
                    },
                    {
                        "name": "usuario_id",
                        "value": "uuid"
                    }
                ],
                "seeder": [],
                "apicustom": [],
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
                        "id": "uuid|pk",
                        "razon": "string",
                        "mes_apertura_id": "number",
                        "mes_apertura": "[mes_apertura|id|mes_apertura_id]",
                        "usuario_id": "uuid"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "razon": "string",
                        "mes_apertura_id": "number",
                        "mes_apertura": "[mes_apertura|id|mes_apertura_id]",
                        "usuario_id": "uuid"
                    },
                    "insert": {
                        "razon": "string",
                        "mes_apertura_id": "number",
                        "mes_apertura": "[mes_apertura|id|mes_apertura_id]",
                        "usuario_id": "uuid"
                    }
                }
            },
            {
                "name": "configuracion",
                "alias": "configuracion",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "valor",
                        "value": "string"
                    }
                ],
                "seeder": [],
                "apicustom": [],
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
                        "id": "uuid|pk",
                        "nombre": "string",
                        "valor": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "valor": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "valor": "string"
                    }
                }
            },
            {
                "name": "centro_costo",
                "alias": "centro_costo",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
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
                "seeder": [],
                "apicustom": [],
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
                        "id": "uuid|pk",
                        "nombre": "string",
                        "descripcion": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
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
                "name": "impuesto",
                "alias": "impuesto",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
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
                        "name": "alicuota",
                        "value": "float"
                    },
                    {
                        "name": "sigla",
                        "value": "string"
                    }
                ],
                "seeder": [],
                "apicustom": [],
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
                        "id": "uuid|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "alicuota": "float",
                        "sigla": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "alicuota": "float",
                        "sigla": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string",
                        "alicuota": "float",
                        "sigla": "string"
                    }
                }
            },
            {
                "name": "moneda",
                "alias": "moneda",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "sigla",
                        "value": "string"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "simbolo",
                        "value": "string"
                    }
                ],
                "seeder": [],
                "apicustom": [],
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
                        "id": "uuid|pk",
                        "sigla": "string",
                        "nombre": "string",
                        "simbolo": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "sigla": "string",
                        "nombre": "string",
                        "simbolo": "string"
                    },
                    "insert": {
                        "sigla": "string",
                        "nombre": "string",
                        "simbolo": "string"
                    }
                }
            },
            {
                "name": "tipo_cambio",
                "alias": "tipo_cambio",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "fecha",
                        "value": "date"
                    },
                    {
                        "name": "valor",
                        "value": "float"
                    },
                    {
                        "name": "moneda_id",
                        "value": "number"
                    },
                    {
                        "name": "moneda",
                        "value": "[moneda|id|moneda_id]",
                        "rel": {
                            "index": "moneda",
                            "name": "moneda",
                            "field": "id",
                            "ownfield": "moneda_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [],
                "apicustom": [],
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
                        "id": "uuid|pk",
                        "fecha": "date",
                        "valor": "float",
                        "moneda_id": "number",
                        "moneda": "[moneda|id|moneda_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "fecha": "date",
                        "valor": "float",
                        "moneda_id": "number",
                        "moneda": "[moneda|id|moneda_id]"
                    },
                    "insert": {
                        "fecha": "date",
                        "valor": "float",
                        "moneda_id": "number",
                        "moneda": "[moneda|id|moneda_id]"
                    }
                }
            },
            {
                "name": "pais",
                "alias": "pais",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "codigo",
                        "value": "string"
                    }
                ],
                "seeder": [],
                "apicustom": [],
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
                        "id": "uuid|pk",
                        "nombre": "string",
                        "codigo": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "codigo": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "codigo": "string"
                    }
                }
            },
            {
                "name": "ciudad",
                "alias": "ciudad",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "codigo",
                        "value": "string"
                    },
                    {
                        "name": "pais_id",
                        "value": "number"
                    },
                    {
                        "name": "pais",
                        "value": "[pais|id|pais_id]",
                        "rel": {
                            "index": "pais",
                            "name": "pais",
                            "field": "id",
                            "ownfield": "pais_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [],
                "apicustom": [],
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
                        "id": "uuid|pk",
                        "nombre": "string",
                        "codigo": "string",
                        "pais_id": "number",
                        "pais": "[pais|id|pais_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "codigo": "string",
                        "pais_id": "number",
                        "pais": "[pais|id|pais_id]"
                    },
                    "insert": {
                        "nombre": "string",
                        "codigo": "string",
                        "pais_id": "number",
                        "pais": "[pais|id|pais_id]"
                    }
                }
            }
        ]
    }
]