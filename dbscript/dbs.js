[
    {
        "db": "contabilidad",
        "groups": [
            {
                "name": "grupos",
                "alias": "grupos",
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
                        "name": "orden",
                        "value": "integer"
                    },
                    {
                        "name": "estado",
                        "value": "boolean"
                    }
                ],
                "seeder": [
                    {
                        "data": "insert",
                        "values": [
                            "Activo",
                            "1",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "Pasivo",
                            "2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "Patrimonio",
                            "3",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "Ingreso",
                            "4",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "Egreso",
                            "5",
                            ""
                        ]
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
                        "id": "uuid|pk",
                        "nombre": "string",
                        "orden": "integer",
                        "estado": "boolean"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "orden": "integer",
                        "estado": "boolean"
                    },
                    "insert": {
                        "nombre": "string",
                        "orden": "integer",
                        "estado": "boolean"
                    }
                }
            },
            {
                "name": "cuentas",
                "alias": "cuentas",
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
                        "name": "valor",
                        "value": "number"
                    },
                    {
                        "name": "estado",
                        "value": "boolean"
                    },
                    {
                        "name": "registro",
                        "value": "boolean"
                    },
                    {
                        "name": "nivel",
                        "value": "number"
                    },
                    {
                        "name": "cuenta_id",
                        "value": "number"
                    },
                    {
                        "name": "cuenta",
                        "value": "[cuentas|id|cuenta_id]",
                        "rel": {
                            "index": "cuenta",
                            "name": "cuentas",
                            "field": "id",
                            "ownfield": "cuenta_id",
                            "array": false
                        }
                    },
                    {
                        "name": "grupo_id",
                        "value": "number"
                    },
                    {
                        "name": "grupo",
                        "value": "[grupos|id|grupo_id]",
                        "rel": {
                            "index": "grupo",
                            "name": "grupos",
                            "field": "id",
                            "ownfield": "grupo_id",
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
                        "valor": "number",
                        "estado": "boolean",
                        "registro": "boolean",
                        "nivel": "number",
                        "cuenta_id": "number",
                        "cuenta": "[cuentas|id|cuenta_id]",
                        "grupo_id": "number",
                        "grupo": "[grupos|id|grupo_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "codigo": "string",
                        "valor": "number",
                        "estado": "boolean",
                        "registro": "boolean",
                        "nivel": "number",
                        "cuenta_id": "number",
                        "cuenta": "[cuentas|id|cuenta_id]",
                        "grupo_id": "number",
                        "grupo": "[grupos|id|grupo_id]"
                    },
                    "insert": {
                        "nombre": "string",
                        "codigo": "string",
                        "valor": "number",
                        "estado": "boolean",
                        "registro": "boolean",
                        "nivel": "number",
                        "cuenta_id": "number",
                        "cuenta": "[cuentas|id|cuenta_id]",
                        "grupo_id": "number",
                        "grupo": "[grupos|id|grupo_id]"
                    }
                }
            },
            {
                "name": "centro_costo_cuenta",
                "alias": "centro_costo_cuenta",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "cuenta_id",
                        "value": "number"
                    },
                    {
                        "name": "cuenta",
                        "value": "[cuentas|id|cuenta_id]",
                        "rel": {
                            "index": "cuenta",
                            "name": "cuentas",
                            "field": "id",
                            "ownfield": "cuenta_id",
                            "array": false
                        }
                    },
                    {
                        "name": "centro_costo_id",
                        "value": "number"
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
                        "cuenta_id": "number",
                        "cuenta": "[cuentas|id|cuenta_id]",
                        "centro_costo_id": "number"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "cuenta_id": "number",
                        "cuenta": "[cuentas|id|cuenta_id]",
                        "centro_costo_id": "number"
                    },
                    "insert": {
                        "cuenta_id": "number",
                        "cuenta": "[cuentas|id|cuenta_id]",
                        "centro_costo_id": "number"
                    }
                }
            },
            {
                "name": "modulos",
                "alias": "modulos",
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
                        "name": "estado",
                        "value": "boolean"
                    },
                    {
                        "name": "codigo",
                        "value": "string"
                    },
                    {
                        "name": "prefix",
                        "value": "string"
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-1",
                            "CONTABILIDAD",
                            "Módulo de contabilidad",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-2",
                            "COMPRAS",
                            "Módulo de compras",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-3",
                            "VENTAS",
                            "Módulo de ventas",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-4",
                            "INVENTARIO",
                            "Módulo de inventario",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-5",
                            "TESORERÍA",
                            "Módulo de tesoreria",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-6",
                            "RECURSOS HUMANOS",
                            "Módulo de recursos humanos",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-7",
                            "ACTIVOS FIJOS",
                            "Módulo de activos fijos",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-8",
                            "PRESUPUESTOS",
                            "Módulo de presupuestos",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-9",
                            "PRODUCCIÓN",
                            "Módulo de producción",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-10",
                            "CENTRO DE COSTOS",
                            "Módulo de centro de costos",
                            "",
                            "",
                            ""
                        ]
                    }
                ],
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
                        "estado": "boolean",
                        "codigo": "string",
                        "prefix": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "estado": "boolean",
                        "codigo": "string",
                        "prefix": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string",
                        "estado": "boolean",
                        "codigo": "string",
                        "prefix": "string"
                    }
                }
            },
            {
                "name": "asiento_tipos",
                "alias": "asiento_tipos",
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
                        "name": "modulo_id",
                        "value": "number"
                    },
                    {
                        "name": "glosa",
                        "value": "string"
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-asientot-1",
                            "COMPRAS CON FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "COMPRAS SIN FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "DESCARGO FONDO A RENDIR CON FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "DESCARGO FONDO A RENDIR SIN FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "DESCARGO FONDO OPERATIVO CON FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "DESCARGO FONDO OPERATIVO SIN FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "DEVOLUCIONES CON FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "DEVOLUCIONES SIN FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "REGULARIZACION DEVENGADOS CON FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "REGULARIZACION DEVENGADOS SIN FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    }
                ],
                "apicustom": [
                    {
                        "method": "get",
                        "route": "pormodulo/",
                        "query": "modulo_id",
                        "in": "",
                        "type": "custom",
                        "out": ""
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "pormodulo",
                        "query": "modulo_id,nombre",
                        "in": null,
                        "type": "custom",
                        "out": "select"
                    },
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
                        "modulo_id": "number",
                        "glosa": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "modulo_id": "number",
                        "glosa": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "modulo_id": "number",
                        "glosa": "string"
                    }
                }
            },
            {
                "name": "centro_costos",
                "alias": "centro_costos",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-centro-1",
                            "Centro de Costos 1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-centro-2",
                            "Centro de Costos 2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-centro-3",
                            "Centro de Costos 3"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-centro-4",
                            "Centro de Costos 4"
                        ]
                    }
                ],
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
                        "nombre": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string"
                    },
                    "insert": {
                        "nombre": "string"
                    }
                }
            },
            {
                "name": "asiento_tipos_centrocostos",
                "alias": "asiento_tipos_centrocostos",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "centro_costos_id",
                        "value": "number"
                    },
                    {
                        "name": "centro_costos",
                        "value": "[centro_costos|id|centro_costos_id]",
                        "rel": {
                            "index": "centro_costos",
                            "name": "centro_costos",
                            "field": "id",
                            "ownfield": "centro_costos_id",
                            "array": false
                        }
                    },
                    {
                        "name": "asiento_tipo_id",
                        "value": "number"
                    },
                    {
                        "name": "asiento_tipo",
                        "value": "[asiento_tipos|id|asiento_tipo_id]",
                        "rel": {
                            "index": "asiento_tipo",
                            "name": "asiento_tipos",
                            "field": "id",
                            "ownfield": "asiento_tipo_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-asientocen-1",
                            "uuid-centro-1",
                            "uuid-asientot-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-asientocen-2",
                            "uuid-centro-2",
                            "uuid-asientot-1"
                        ]
                    }
                ],
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
                        "centro_costos_id": "number",
                        "centro_costos": "[centro_costos|id|centro_costos_id]",
                        "asiento_tipo_id": "number",
                        "asiento_tipo": "[asiento_tipos|id|asiento_tipo_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "centro_costos_id": "number",
                        "centro_costos": "[centro_costos|id|centro_costos_id]",
                        "asiento_tipo_id": "number",
                        "asiento_tipo": "[asiento_tipos|id|asiento_tipo_id]"
                    },
                    "insert": {
                        "centro_costos_id": "number",
                        "centro_costos": "[centro_costos|id|centro_costos_id]",
                        "asiento_tipo_id": "number",
                        "asiento_tipo": "[asiento_tipos|id|asiento_tipo_id]"
                    }
                }
            },
            {
                "name": "tabla_consultas",
                "alias": "tabla_consultas",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre_tabla",
                        "value": "string"
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-tablac-1",
                            "tipo_usos"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tablac-2",
                            "api_compras_destino"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tablac-3",
                            "api_tesoreria_formas_pago"
                        ]
                    }
                ],
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
                        "nombre_tabla": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre_tabla": "string"
                    },
                    "insert": {
                        "nombre_tabla": "string"
                    }
                }
            },
            {
                "name": "asiento_tipo_comprobante",
                "alias": "asiento_tipo_comprobante",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "tipo_comprobante_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_comprobante",
                        "value": "[tipo_comprobantes|id|tipo_comprobante_id]",
                        "rel": {
                            "index": "tipo_comprobante",
                            "name": "tipo_comprobantes",
                            "field": "id",
                            "ownfield": "tipo_comprobante_id",
                            "array": false
                        }
                    },
                    {
                        "name": "asiento_tipo_id",
                        "value": "number"
                    },
                    {
                        "name": "asiento_tipo",
                        "value": "[asiento_tipos|id|asiento_tipo_id]",
                        "rel": {
                            "index": "asiento_tipo",
                            "name": "asiento_tipos",
                            "field": "id",
                            "ownfield": "asiento_tipo_id",
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
                        "tipo_comprobante_id": "number",
                        "tipo_comprobante": "[tipo_comprobantes|id|tipo_comprobante_id]",
                        "asiento_tipo_id": "number",
                        "asiento_tipo": "[asiento_tipos|id|asiento_tipo_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "tipo_comprobante_id": "number",
                        "tipo_comprobante": "[tipo_comprobantes|id|tipo_comprobante_id]",
                        "asiento_tipo_id": "number",
                        "asiento_tipo": "[asiento_tipos|id|asiento_tipo_id]"
                    },
                    "insert": {
                        "tipo_comprobante_id": "number",
                        "tipo_comprobante": "[tipo_comprobantes|id|tipo_comprobante_id]",
                        "asiento_tipo_id": "number",
                        "asiento_tipo": "[asiento_tipos|id|asiento_tipo_id]"
                    }
                }
            },
            {
                "name": "asiento_tipo_composiciones",
                "alias": "asiento_tipo_composiciones",
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
                        "name": "existe_opcion_configuracion",
                        "value": "boolean"
                    },
                    {
                        "name": "configuracion_fija",
                        "value": "boolean"
                    },
                    {
                        "name": "posicion",
                        "value": "number"
                    },
                    {
                        "name": "asiento_tipo_id",
                        "value": "number"
                    },
                    {
                        "name": "asiento_tipo",
                        "value": "[asiento_tipos|id|asiento_tipo_id]",
                        "rel": {
                            "index": "asiento_tipo",
                            "name": "asiento_tipos",
                            "field": "id",
                            "ownfield": "asiento_tipo_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-tcomp-1",
                            "ITEMS",
                            "CONFIGURACIÓN DE ITEMS PRESENTACIONES",
                            "true",
                            "true",
                            "1",
                            "uuid-asientot-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tcomp-2",
                            "IMPUESTOS",
                            "CONFIGURACIÓN DE IMPUESTOS",
                            "false",
                            "true",
                            "2",
                            "uuid-asientot-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tcomp-3",
                            "TASAS",
                            "CONFIGURACIÓN DE TASAS",
                            "false",
                            "true",
                            "3",
                            "uuid-asientot-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tcomp-4",
                            "IMPORTES",
                            "CONFIGURACIÓN DE IMPORTES LIBRO COMPRAS",
                            "false",
                            "true",
                            "4",
                            "uuid-asientot-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tcomp-5",
                            "DESCUENTOS",
                            "CONFIGURACIÓN DE DESCUENTOS",
                            "false",
                            "true",
                            "5",
                            "uuid-asientot-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tcomp-6",
                            "GIFT_CARD",
                            "CONFIGURACIÓN DE GIFT CARD",
                            "false",
                            "true",
                            "6",
                            "uuid-asientot-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tcomp-7",
                            "FORMA_PAGO",
                            "CONFIGURACIÓN DE FORMA DE PAGO",
                            "true",
                            "true",
                            "7",
                            "uuid-asientot-1"
                        ]
                    }
                ],
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
                        "existe_opcion_configuracion": "boolean",
                        "configuracion_fija": "boolean",
                        "posicion": "number",
                        "asiento_tipo_id": "number",
                        "asiento_tipo": "[asiento_tipos|id|asiento_tipo_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "existe_opcion_configuracion": "boolean",
                        "configuracion_fija": "boolean",
                        "posicion": "number",
                        "asiento_tipo_id": "number",
                        "asiento_tipo": "[asiento_tipos|id|asiento_tipo_id]"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string",
                        "existe_opcion_configuracion": "boolean",
                        "configuracion_fija": "boolean",
                        "posicion": "number",
                        "asiento_tipo_id": "number",
                        "asiento_tipo": "[asiento_tipos|id|asiento_tipo_id]"
                    }
                }
            },
            {
                "name": "asiento_tipo_cuentas",
                "alias": "asiento_tipo_cuentas",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "debe_haber",
                        "value": "boolean"
                    },
                    {
                        "name": "cuenta_id",
                        "value": "number"
                    },
                    {
                        "name": "cuenta",
                        "value": "[cuentas|id|cuenta_id]",
                        "rel": {
                            "index": "cuenta",
                            "name": "cuentas",
                            "field": "id",
                            "ownfield": "cuenta_id",
                            "array": false
                        }
                    },
                    {
                        "name": "asiento_tipo_composicion_id",
                        "value": "number"
                    },
                    {
                        "name": "asiento_tipo_composicion",
                        "value": "[asiento_tipo_composiciones|id|asiento_tipo_composicion_id]",
                        "rel": {
                            "index": "asiento_tipo_composicion",
                            "name": "asiento_tipo_composiciones",
                            "field": "id",
                            "ownfield": "asiento_tipo_composicion_id",
                            "array": false
                        }
                    },
                    {
                        "name": "tabla_consulta_id",
                        "value": "number"
                    },
                    {
                        "name": "tabla_consulta",
                        "value": "[tabla_consultas|id|tabla_consulta_id]",
                        "rel": {
                            "index": "tabla_consulta",
                            "name": "tabla_consultas",
                            "field": "id",
                            "ownfield": "tabla_consulta_id",
                            "array": false
                        }
                    },
                    {
                        "name": "tipo_uso_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_uso",
                        "value": "[tipo_usos|id|tipo_uso_id]",
                        "rel": {
                            "index": "tipo_uso",
                            "name": "tipo_usos",
                            "field": "id",
                            "ownfield": "tipo_uso_id",
                            "array": false
                        }
                    },
                    {
                        "name": "forma_pago_id",
                        "value": "number"
                    },
                    {
                        "name": "codigo_id",
                        "value": "number"
                    }
                ],
                "seeder": [
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-1",
                            "uuid-tablac-2",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-1",
                            "uuid-tablac-2",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-1",
                            "uuid-tablac-2",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-2",
                            "uuid-tablac-1",
                            "uuid-usos-1",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-3",
                            "uuid-tablac-1",
                            "uuid-usos-2",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-4",
                            "uuid-tablac-1",
                            "uuid-usos-3",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-4",
                            "uuid-tablac-1",
                            "uuid-usos-4",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-4",
                            "uuid-tablac-1",
                            "uuid-usos-5",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-5",
                            "uuid-tablac-1",
                            "uuid-usos-6",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-6",
                            "uuid-tablac-1",
                            "uuid-usos-7",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-7",
                            "uuid-tablac-3",
                            "",
                            "",
                            ""
                        ]
                    }
                ],
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
                        "debe_haber": "boolean",
                        "cuenta_id": "number",
                        "cuenta": "[cuentas|id|cuenta_id]",
                        "asiento_tipo_composicion_id": "number",
                        "asiento_tipo_composicion": "[asiento_tipo_composiciones|id|asiento_tipo_composicion_id]",
                        "tabla_consulta_id": "number",
                        "tabla_consulta": "[tabla_consultas|id|tabla_consulta_id]",
                        "tipo_uso_id": "number",
                        "tipo_uso": "[tipo_usos|id|tipo_uso_id]",
                        "forma_pago_id": "number",
                        "codigo_id": "number"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "debe_haber": "boolean",
                        "cuenta_id": "number",
                        "cuenta": "[cuentas|id|cuenta_id]",
                        "asiento_tipo_composicion_id": "number",
                        "asiento_tipo_composicion": "[asiento_tipo_composiciones|id|asiento_tipo_composicion_id]",
                        "tabla_consulta_id": "number",
                        "tabla_consulta": "[tabla_consultas|id|tabla_consulta_id]",
                        "tipo_uso_id": "number",
                        "tipo_uso": "[tipo_usos|id|tipo_uso_id]",
                        "forma_pago_id": "number",
                        "codigo_id": "number"
                    },
                    "insert": {
                        "debe_haber": "boolean",
                        "cuenta_id": "number",
                        "cuenta": "[cuentas|id|cuenta_id]",
                        "asiento_tipo_composicion_id": "number",
                        "asiento_tipo_composicion": "[asiento_tipo_composiciones|id|asiento_tipo_composicion_id]",
                        "tabla_consulta_id": "number",
                        "tabla_consulta": "[tabla_consultas|id|tabla_consulta_id]",
                        "tipo_uso_id": "number",
                        "tipo_uso": "[tipo_usos|id|tipo_uso_id]",
                        "forma_pago_id": "number",
                        "codigo_id": "number"
                    }
                }
            },
            {
                "name": "tipo_comprobantes",
                "alias": "tipo_comprobantes",
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
                        "name": "simbolo",
                        "value": "string"
                    },
                    {
                        "name": "estado",
                        "value": "boolean"
                    },
                    {
                        "name": "editable",
                        "value": "boolean"
                    }
                ],
                "seeder": [
                    {
                        "data": "insert",
                        "values": [
                            "INGRESO",
                            "I",
                            "true",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "EGRESO",
                            "E",
                            "true",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "TRASPASO",
                            "T",
                            "true",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "AJUSTE",
                            "A",
                            "true",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "AUXILIAR",
                            "AX",
                            "false",
                            ""
                        ]
                    }
                ],
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
                        "simbolo": "string",
                        "estado": "boolean",
                        "editable": "boolean"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "simbolo": "string",
                        "estado": "boolean",
                        "editable": "boolean"
                    },
                    "insert": {
                        "nombre": "string",
                        "simbolo": "string",
                        "estado": "boolean",
                        "editable": "boolean"
                    }
                }
            },
            {
                "name": "tipo_usos",
                "alias": "tipo_usos",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-usos-1",
                            "Crédito fiscal"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-usos-2",
                            "Tasas"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-usos-3",
                            "Importe ICE"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-usos-4",
                            "Importe IEHD"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-usos-5",
                            "Importe IPJ"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-usos-6",
                            "Descuento"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-usos-7",
                            "Gift Card"
                        ]
                    }
                ],
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
                        "nombre": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string"
                    },
                    "insert": {
                        "nombre": "string"
                    }
                }
            },
            {
                "name": "firmas",
                "alias": "firmas",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
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
                        "nombre": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string"
                    },
                    "insert": {
                        "nombre": "string"
                    }
                }
            },
            {
                "name": "firma_tipo_comprobante",
                "alias": "firma_tipo_comprobante",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "firma_id",
                        "value": "number"
                    },
                    {
                        "name": "firma",
                        "value": "[firmas|id|firma_id]",
                        "rel": {
                            "index": "firma",
                            "name": "firmas",
                            "field": "id",
                            "ownfield": "firma_id",
                            "array": false
                        }
                    },
                    {
                        "name": "tipo_comprobante_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_comprobante",
                        "value": "[tipo_comprobantes|id|tipo_comprobante_id]",
                        "rel": {
                            "index": "tipo_comprobante",
                            "name": "tipo_comprobantes",
                            "field": "id",
                            "ownfield": "tipo_comprobante_id",
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
                        "firma_id": "number",
                        "firma": "[firmas|id|firma_id]",
                        "tipo_comprobante_id": "number",
                        "tipo_comprobante": "[tipo_comprobantes|id|tipo_comprobante_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "firma_id": "number",
                        "firma": "[firmas|id|firma_id]",
                        "tipo_comprobante_id": "number",
                        "tipo_comprobante": "[tipo_comprobantes|id|tipo_comprobante_id]"
                    },
                    "insert": {
                        "firma_id": "number",
                        "firma": "[firmas|id|firma_id]",
                        "tipo_comprobante_id": "number",
                        "tipo_comprobante": "[tipo_comprobantes|id|tipo_comprobante_id]"
                    }
                }
            },
            {
                "name": "estado_comprobantes",
                "alias": "estado_comprobantes",
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
                        "name": "posicion",
                        "value": "number"
                    },
                    {
                        "name": "estado",
                        "value": "boolean"
                    }
                ],
                "seeder": [
                    {
                        "data": "insert",
                        "values": [
                            "PRE-GRABADO",
                            "1",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "CONTABILIZADO",
                            "2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "OBSERVADO",
                            "3",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "REVERTIDO",
                            "4",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "ELIMINADO",
                            "5",
                            ""
                        ]
                    }
                ],
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
                        "posicion": "number",
                        "estado": "boolean"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "posicion": "number",
                        "estado": "boolean"
                    },
                    "insert": {
                        "nombre": "string",
                        "posicion": "number",
                        "estado": "boolean"
                    }
                }
            },
            {
                "name": "comprobantes",
                "alias": "comprobantes",
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
                        "name": "centro_costo_id",
                        "value": "number"
                    },
                    {
                        "name": "glosa",
                        "value": "string"
                    },
                    {
                        "name": "estado_comprobante_id",
                        "value": "number"
                    },
                    {
                        "name": "estado_comprobante",
                        "value": "[estado_comprobantes|id|estado_comprobante_id]",
                        "rel": {
                            "index": "estado_comprobante",
                            "name": "estado_comprobantes",
                            "field": "id",
                            "ownfield": "estado_comprobante_id",
                            "array": false
                        }
                    },
                    {
                        "name": "modulo_id",
                        "value": "number"
                    },
                    {
                        "name": "modulo",
                        "value": "[modulos|id|modulo_id]",
                        "rel": {
                            "index": "modulo",
                            "name": "modulos",
                            "field": "id",
                            "ownfield": "modulo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "tipo_comprobante_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_comprobante",
                        "value": "[tipo_comprobantes|id|tipo_comprobante_id]",
                        "rel": {
                            "index": "tipo_comprobante",
                            "name": "tipo_comprobantes",
                            "field": "id",
                            "ownfield": "tipo_comprobante_id",
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
                        "centro_costo_id": "number",
                        "glosa": "string",
                        "estado_comprobante_id": "number",
                        "estado_comprobante": "[estado_comprobantes|id|estado_comprobante_id]",
                        "modulo_id": "number",
                        "modulo": "[modulos|id|modulo_id]",
                        "tipo_comprobante_id": "number",
                        "tipo_comprobante": "[tipo_comprobantes|id|tipo_comprobante_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "fecha": "date",
                        "centro_costo_id": "number",
                        "glosa": "string",
                        "estado_comprobante_id": "number",
                        "estado_comprobante": "[estado_comprobantes|id|estado_comprobante_id]",
                        "modulo_id": "number",
                        "modulo": "[modulos|id|modulo_id]",
                        "tipo_comprobante_id": "number",
                        "tipo_comprobante": "[tipo_comprobantes|id|tipo_comprobante_id]"
                    },
                    "insert": {
                        "fecha": "date",
                        "centro_costo_id": "number",
                        "glosa": "string",
                        "estado_comprobante_id": "number",
                        "estado_comprobante": "[estado_comprobantes|id|estado_comprobante_id]",
                        "modulo_id": "number",
                        "modulo": "[modulos|id|modulo_id]",
                        "tipo_comprobante_id": "number",
                        "tipo_comprobante": "[tipo_comprobantes|id|tipo_comprobante_id]"
                    }
                }
            },
            {
                "name": "variables_configuracion",
                "alias": "variables_configuracion",
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
                        "name": "tipo",
                        "value": "string"
                    },
                    {
                        "name": "estado",
                        "value": "boolean"
                    }
                ],
                "seeder": [
                    {
                        "data": "insert",
                        "values": [
                            "NUMERACION_COMPROBANTE",
                            "JSON",
                            "true"
                        ]
                    }
                ],
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
                        "tipo": "string",
                        "estado": "boolean"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "tipo": "string",
                        "estado": "boolean"
                    },
                    "insert": {
                        "nombre": "string",
                        "tipo": "string",
                        "estado": "boolean"
                    }
                }
            }
        ]
    },
    {
        "db": "tesoreria",
        "groups": [
            {
                "name": "tipo_dato",
                "alias": "tipo_dato",
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
                "name": "variables_configuracion",
                "alias": "variables_configuracion",
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
                        "name": "tipo_dato_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_dato",
                        "value": "[tipo_dato|id|tipo_dato_id]",
                        "rel": {
                            "index": "tipo_dato",
                            "name": "tipo_dato",
                            "field": "id",
                            "ownfield": "tipo_dato_id",
                            "array": false
                        }
                    },
                    {
                        "name": "valores",
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
                        "tipo_dato_id": "number",
                        "tipo_dato": "[tipo_dato|id|tipo_dato_id]",
                        "valores": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "tipo_dato_id": "number",
                        "tipo_dato": "[tipo_dato|id|tipo_dato_id]",
                        "valores": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string",
                        "tipo_dato_id": "number",
                        "tipo_dato": "[tipo_dato|id|tipo_dato_id]",
                        "valores": "string"
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
                        "name": "nombre",
                        "value": "string"
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
                        "sigla": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
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
                "name": "cuotas_tiempo",
                "alias": "cuotas_tiempo",
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
                "name": "tiempo_interes",
                "alias": "tiempo_interes",
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
                        "name": "dias",
                        "value": "number"
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
                        "dias": "number"
                    },
                    "create": {
                        "id": "uuid|pk",
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
                "name": "tipo_interes",
                "alias": "tipo_interes",
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
                "name": "forma_pago",
                "alias": "forma_pago",
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
                "name": "medio_transferencia",
                "alias": "medio_transferencia",
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
                "name": "vias",
                "alias": "vias",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
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
                        "nombre": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string"
                    },
                    "insert": {
                        "nombre": "string"
                    }
                }
            },
            {
                "name": "tipo_pago",
                "alias": "tipo_pago",
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
                        "name": "tipo_pago_medios",
                        "value": "[[tipo_pago_medios|tipo_pago_id|id]]",
                        "rel": {
                            "index": "tipo_pago_medios",
                            "name": "tipo_pago_medios",
                            "field": "tipo_pago_id",
                            "ownfield": "id",
                            "array": true
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
                    },
                    {
                        "method": "GET",
                        "route": ":tipo_pago_id/tipo_pago_medios",
                        "in": null,
                        "rel": "[[tipo_pago_medios|tipo_pago_id|id]]",
                        "type": "rel",
                        "out": "select_tipo_pago_medios"
                    },
                    {
                        "method": "GET",
                        "route": ":tipo_pago_id/tipo_pago_medios/:id",
                        "in": null,
                        "rel": "[[tipo_pago_medios|tipo_pago_id|id]]",
                        "type": "rel",
                        "out": "select_tipo_pago_medios"
                    },
                    {
                        "method": "POST",
                        "route": ":tipo_pago_id/tipo_pago_medios",
                        "in": "insert_tipo_pago_medios",
                        "rel": "[[tipo_pago_medios|tipo_pago_id|id]]",
                        "type": "rel",
                        "out": "select_tipo_pago_medios"
                    },
                    {
                        "method": "PUT",
                        "route": ":tipo_pago_id/tipo_pago_medios/:id",
                        "in": "insert_tipo_pago_medios",
                        "rel": "[[tipo_pago_medios|tipo_pago_id|id]]",
                        "type": "rel",
                        "out": "select_tipo_pago_medios"
                    },
                    {
                        "method": "DELETE",
                        "route": ":tipo_pago_id/tipo_pago_medios/:id",
                        "in": null,
                        "rel": "[[tipo_pago_medios|tipo_pago_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "tipo_pago_medios": "[[tipo_pago_medios|tipo_pago_id|id]]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "tipo_pago_medios": "[[tipo_pago_medios|tipo_pago_id|id]]"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string",
                        "tipo_pago_medios": "[[tipo_pago_medios|tipo_pago_id|id]]"
                    },
                    "select_tipo_pago_medios": {
                        "id": "uuid|pk",
                        "tipo_pago_id": "number",
                        "tipo_pago": "[tipo_pago|id|tipo_pago_id]",
                        "medio_transferencia_id": "number",
                        "medio_transferencia": "[medio_transferencia|id|medio_transferencia_id]"
                    },
                    "create_tipo_pago_medios": {
                        "id": "uuid|pk",
                        "tipo_pago_id": "number",
                        "tipo_pago": "[tipo_pago|id|tipo_pago_id]",
                        "medio_transferencia_id": "number",
                        "medio_transferencia": "[medio_transferencia|id|medio_transferencia_id]"
                    },
                    "insert_tipo_pago_medios": {
                        "tipo_pago_id": "number",
                        "tipo_pago": "[tipo_pago|id|tipo_pago_id]",
                        "medio_transferencia_id": "number",
                        "medio_transferencia": "[medio_transferencia|id|medio_transferencia_id]"
                    }
                }
            },
            {
                "name": "tipo_pago_via",
                "alias": "tipo_pago_via",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "tipo_pago_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_pago",
                        "value": "[tipo_pago|id|tipo_pago_id]",
                        "rel": {
                            "index": "tipo_pago",
                            "name": "tipo_pago",
                            "field": "id",
                            "ownfield": "tipo_pago_id",
                            "array": false
                        }
                    },
                    {
                        "name": "via_id",
                        "value": "number"
                    },
                    {
                        "name": "via",
                        "value": "[vias|id|via_id]",
                        "rel": {
                            "index": "via",
                            "name": "vias",
                            "field": "id",
                            "ownfield": "via_id",
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
                        "tipo_pago_id": "number",
                        "tipo_pago": "[tipo_pago|id|tipo_pago_id]",
                        "via_id": "number",
                        "via": "[vias|id|via_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "tipo_pago_id": "number",
                        "tipo_pago": "[tipo_pago|id|tipo_pago_id]",
                        "via_id": "number",
                        "via": "[vias|id|via_id]"
                    },
                    "insert": {
                        "tipo_pago_id": "number",
                        "tipo_pago": "[tipo_pago|id|tipo_pago_id]",
                        "via_id": "number",
                        "via": "[vias|id|via_id]"
                    }
                }
            },
            {
                "name": "tipo_pago_medios",
                "alias": "tipo_pago_medios",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "tipo_pago_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_pago",
                        "value": "[tipo_pago|id|tipo_pago_id]",
                        "rel": {
                            "index": "tipo_pago",
                            "name": "tipo_pago",
                            "field": "id",
                            "ownfield": "tipo_pago_id",
                            "array": false
                        }
                    },
                    {
                        "name": "medio_transferencia_id",
                        "value": "number"
                    },
                    {
                        "name": "medio_transferencia",
                        "value": "[medio_transferencia|id|medio_transferencia_id]",
                        "rel": {
                            "index": "medio_transferencia",
                            "name": "medio_transferencia",
                            "field": "id",
                            "ownfield": "medio_transferencia_id",
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
                        "tipo_pago_id": "number",
                        "tipo_pago": "[tipo_pago|id|tipo_pago_id]",
                        "medio_transferencia_id": "number",
                        "medio_transferencia": "[medio_transferencia|id|medio_transferencia_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "tipo_pago_id": "number",
                        "tipo_pago": "[tipo_pago|id|tipo_pago_id]",
                        "medio_transferencia_id": "number",
                        "medio_transferencia": "[medio_transferencia|id|medio_transferencia_id]"
                    },
                    "insert": {
                        "tipo_pago_id": "number",
                        "tipo_pago": "[tipo_pago|id|tipo_pago_id]",
                        "medio_transferencia_id": "number",
                        "medio_transferencia": "[medio_transferencia|id|medio_transferencia_id]"
                    }
                }
            },
            {
                "name": "acreedor",
                "alias": "acreedor",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "entidad_id",
                        "value": "number"
                    },
                    {
                        "name": "entidad",
                        "value": "[entidades|id|entidad_id]",
                        "rel": {
                            "index": "entidad",
                            "name": "entidades",
                            "field": "id",
                            "ownfield": "entidad_id",
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
                        "entidad_id": "number",
                        "entidad": "[entidades|id|entidad_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "entidad_id": "number",
                        "entidad": "[entidades|id|entidad_id]"
                    },
                    "insert": {
                        "entidad_id": "number",
                        "entidad": "[entidades|id|entidad_id]"
                    }
                }
            },
            {
                "name": "deudor",
                "alias": "deudor",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "entidad_id",
                        "value": "number"
                    },
                    {
                        "name": "entidad",
                        "value": "[entidades|id|entidad_id]",
                        "rel": {
                            "index": "entidad",
                            "name": "entidades",
                            "field": "id",
                            "ownfield": "entidad_id",
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
                        "entidad_id": "number",
                        "entidad": "[entidades|id|entidad_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "entidad_id": "number",
                        "entidad": "[entidades|id|entidad_id]"
                    },
                    "insert": {
                        "entidad_id": "number",
                        "entidad": "[entidades|id|entidad_id]"
                    }
                }
            },
            {
                "name": "tipo_identificacion",
                "alias": "tipo_identificacion",
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
                        "nombre": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
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
                "name": "grupo",
                "alias": "grupo",
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
                "name": "contacto_grupo",
                "alias": "contacto_grupo",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "grupo_id",
                        "value": "number"
                    },
                    {
                        "name": "grupo",
                        "value": "[grupo|id|grupo_id]",
                        "rel": {
                            "index": "grupo",
                            "name": "grupo",
                            "field": "id",
                            "ownfield": "grupo_id",
                            "array": false
                        }
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
                        "grupo_id": "number",
                        "grupo": "[grupo|id|grupo_id]",
                        "contacto_id": "number",
                        "contacto": "[contacto|id|contacto_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "grupo_id": "number",
                        "grupo": "[grupo|id|grupo_id]",
                        "contacto_id": "number",
                        "contacto": "[contacto|id|contacto_id]"
                    },
                    "insert": {
                        "grupo_id": "number",
                        "grupo": "[grupo|id|grupo_id]",
                        "contacto_id": "number",
                        "contacto": "[contacto|id|contacto_id]"
                    }
                }
            },
            {
                "name": "contacto",
                "alias": "contacto",
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
                        "name": "descripcion",
                        "value": "string"
                    },
                    {
                        "name": "identificacion",
                        "value": "string"
                    },
                    {
                        "name": "tipo_identificacion_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_identificacion",
                        "value": "[tipo_identificacion|id|tipo_identificacion_id]",
                        "rel": {
                            "index": "tipo_identificacion",
                            "name": "tipo_identificacion",
                            "field": "id",
                            "ownfield": "tipo_identificacion_id",
                            "array": false
                        }
                    },
                    {
                        "name": "contacto_grupos",
                        "value": "[[contacto_grupo|contacto_id|id]]",
                        "rel": {
                            "index": "contacto_grupos",
                            "name": "contacto_grupo",
                            "field": "contacto_id",
                            "ownfield": "id",
                            "array": true
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
                    },
                    {
                        "method": "GET",
                        "route": ":contacto_id/contacto_grupo",
                        "in": null,
                        "rel": "[[contacto_grupo|contacto_id|id]]",
                        "type": "rel",
                        "out": "select_contacto_grupo"
                    },
                    {
                        "method": "GET",
                        "route": ":contacto_id/contacto_grupo/:id",
                        "in": null,
                        "rel": "[[contacto_grupo|contacto_id|id]]",
                        "type": "rel",
                        "out": "select_contacto_grupo"
                    },
                    {
                        "method": "POST",
                        "route": ":contacto_id/contacto_grupo",
                        "in": "insert_contacto_grupo",
                        "rel": "[[contacto_grupo|contacto_id|id]]",
                        "type": "rel",
                        "out": "select_contacto_grupo"
                    },
                    {
                        "method": "PUT",
                        "route": ":contacto_id/contacto_grupo/:id",
                        "in": "insert_contacto_grupo",
                        "rel": "[[contacto_grupo|contacto_id|id]]",
                        "type": "rel",
                        "out": "select_contacto_grupo"
                    },
                    {
                        "method": "DELETE",
                        "route": ":contacto_id/contacto_grupo/:id",
                        "in": null,
                        "rel": "[[contacto_grupo|contacto_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "telefono": "number",
                        "correo": "string",
                        "direccion": "string",
                        "descripcion": "string",
                        "identificacion": "string",
                        "tipo_identificacion_id": "number",
                        "tipo_identificacion": "[tipo_identificacion|id|tipo_identificacion_id]",
                        "contacto_grupos": "[[contacto_grupo|contacto_id|id]]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "telefono": "number",
                        "correo": "string",
                        "direccion": "string",
                        "descripcion": "string",
                        "identificacion": "string",
                        "tipo_identificacion_id": "number",
                        "tipo_identificacion": "[tipo_identificacion|id|tipo_identificacion_id]",
                        "contacto_grupos": "[[contacto_grupo|contacto_id|id]]"
                    },
                    "insert": {
                        "nombre": "string",
                        "telefono": "number",
                        "correo": "string",
                        "direccion": "string",
                        "descripcion": "string",
                        "identificacion": "string",
                        "tipo_identificacion_id": "number",
                        "tipo_identificacion": "[tipo_identificacion|id|tipo_identificacion_id]",
                        "contacto_grupos": "[[contacto_grupo|contacto_id|id]]"
                    },
                    "select_contacto_grupo": {
                        "id": "uuid|pk",
                        "grupo_id": "number",
                        "grupo": "[grupo|id|grupo_id]",
                        "contacto_id": "number",
                        "contacto": "[contacto|id|contacto_id]"
                    },
                    "create_contacto_grupo": {
                        "id": "uuid|pk",
                        "grupo_id": "number",
                        "grupo": "[grupo|id|grupo_id]",
                        "contacto_id": "number",
                        "contacto": "[contacto|id|contacto_id]"
                    },
                    "insert_contacto_grupo": {
                        "grupo_id": "number",
                        "grupo": "[grupo|id|grupo_id]",
                        "contacto_id": "number",
                        "contacto": "[contacto|id|contacto_id]"
                    }
                }
            },
            {
                "name": "tipo_entidad",
                "alias": "tipo_entidad",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
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
                        "nombre": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string"
                    },
                    "insert": {
                        "nombre": "string"
                    }
                }
            },
            {
                "name": "entidades",
                "alias": "entidades",
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
                        "name": "identificacion",
                        "value": "string"
                    },
                    {
                        "name": "entidades_tipo_entidad",
                        "value": "[[entidades_tipo_entidad|entidad_id|id]]",
                        "rel": {
                            "index": "entidades_tipo_entidad",
                            "name": "entidades_tipo_entidad",
                            "field": "entidad_id",
                            "ownfield": "id",
                            "array": true
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
                    },
                    {
                        "method": "GET",
                        "route": ":entidad_id/entidades_tipo_entidad",
                        "in": null,
                        "rel": "[[entidades_tipo_entidad|entidad_id|id]]",
                        "type": "rel",
                        "out": "select_entidades_tipo_entidad"
                    },
                    {
                        "method": "GET",
                        "route": ":entidad_id/entidades_tipo_entidad/:id",
                        "in": null,
                        "rel": "[[entidades_tipo_entidad|entidad_id|id]]",
                        "type": "rel",
                        "out": "select_entidades_tipo_entidad"
                    },
                    {
                        "method": "POST",
                        "route": ":entidad_id/entidades_tipo_entidad",
                        "in": "insert_entidades_tipo_entidad",
                        "rel": "[[entidades_tipo_entidad|entidad_id|id]]",
                        "type": "rel",
                        "out": "select_entidades_tipo_entidad"
                    },
                    {
                        "method": "PUT",
                        "route": ":entidad_id/entidades_tipo_entidad/:id",
                        "in": "insert_entidades_tipo_entidad",
                        "rel": "[[entidades_tipo_entidad|entidad_id|id]]",
                        "type": "rel",
                        "out": "select_entidades_tipo_entidad"
                    },
                    {
                        "method": "DELETE",
                        "route": ":entidad_id/entidades_tipo_entidad/:id",
                        "in": null,
                        "rel": "[[entidades_tipo_entidad|entidad_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "identificacion": "string",
                        "entidades_tipo_entidad": "[[entidades_tipo_entidad|entidad_id|id]]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "identificacion": "string",
                        "entidades_tipo_entidad": "[[entidades_tipo_entidad|entidad_id|id]]"
                    },
                    "insert": {
                        "nombre": "string",
                        "identificacion": "string",
                        "entidades_tipo_entidad": "[[entidades_tipo_entidad|entidad_id|id]]"
                    },
                    "select_entidades_tipo_entidad": {
                        "id": "uuid|pk",
                        "tipo_entidad_id": "number",
                        "tipo_entidad": "[tipo_entidad|id|tipo_entidad_id]",
                        "entidad_id": "number",
                        "entidades": "[entidades|id|entidad_id]"
                    },
                    "create_entidades_tipo_entidad": {
                        "id": "uuid|pk",
                        "tipo_entidad_id": "number",
                        "tipo_entidad": "[tipo_entidad|id|tipo_entidad_id]",
                        "entidad_id": "number",
                        "entidades": "[entidades|id|entidad_id]"
                    },
                    "insert_entidades_tipo_entidad": {
                        "tipo_entidad_id": "number",
                        "tipo_entidad": "[tipo_entidad|id|tipo_entidad_id]",
                        "entidad_id": "number",
                        "entidades": "[entidades|id|entidad_id]"
                    }
                }
            },
            {
                "name": "entidades_tipo_entidad",
                "alias": "entidades_tipo_entidad",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "tipo_entidad_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_entidad",
                        "value": "[tipo_entidad|id|tipo_entidad_id]",
                        "rel": {
                            "index": "tipo_entidad",
                            "name": "tipo_entidad",
                            "field": "id",
                            "ownfield": "tipo_entidad_id",
                            "array": false
                        }
                    },
                    {
                        "name": "entidad_id",
                        "value": "number"
                    },
                    {
                        "name": "entidades",
                        "value": "[entidades|id|entidad_id]",
                        "rel": {
                            "index": "entidades",
                            "name": "entidades",
                            "field": "id",
                            "ownfield": "entidad_id",
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
                        "tipo_entidad_id": "number",
                        "tipo_entidad": "[tipo_entidad|id|tipo_entidad_id]",
                        "entidad_id": "number",
                        "entidades": "[entidades|id|entidad_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "tipo_entidad_id": "number",
                        "tipo_entidad": "[tipo_entidad|id|tipo_entidad_id]",
                        "entidad_id": "number",
                        "entidades": "[entidades|id|entidad_id]"
                    },
                    "insert": {
                        "tipo_entidad_id": "number",
                        "tipo_entidad": "[tipo_entidad|id|tipo_entidad_id]",
                        "entidad_id": "number",
                        "entidades": "[entidades|id|entidad_id]"
                    }
                }
            },
            {
                "name": "entidad_contactos",
                "alias": "entidad_contactos",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
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
                        "name": "entidad_id",
                        "value": "number"
                    },
                    {
                        "name": "entidades",
                        "value": "[entidades|id|entidad_id]",
                        "rel": {
                            "index": "entidades",
                            "name": "entidades",
                            "field": "id",
                            "ownfield": "entidad_id",
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
                        "contacto_id": "number",
                        "contacto": "[contacto|id|contacto_id]",
                        "entidad_id": "number",
                        "entidades": "[entidades|id|entidad_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "contacto_id": "number",
                        "contacto": "[contacto|id|contacto_id]",
                        "entidad_id": "number",
                        "entidades": "[entidades|id|entidad_id]"
                    },
                    "insert": {
                        "contacto_id": "number",
                        "contacto": "[contacto|id|contacto_id]",
                        "entidad_id": "number",
                        "entidades": "[entidades|id|entidad_id]"
                    }
                }
            },
            {
                "name": "estado_credito",
                "alias": "estado_credito",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
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
                        "nombre": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string"
                    },
                    "insert": {
                        "nombre": "string"
                    }
                }
            },
            {
                "name": "credito",
                "alias": "credito",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
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
                        "name": "cuotas_tiempo_id",
                        "value": "number"
                    },
                    {
                        "name": "cuotas_tiempo",
                        "value": "[cuotas_tiempo|id|cuotas_tiempo_id]",
                        "rel": {
                            "index": "cuotas_tiempo",
                            "name": "cuotas_tiempo",
                            "field": "id",
                            "ownfield": "cuotas_tiempo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "interes",
                        "value": "float"
                    },
                    {
                        "name": "tiempo_interes_id",
                        "value": "number"
                    },
                    {
                        "name": "tiempo_interes",
                        "value": "[tiempo_interes|id|tiempo_interes_id]",
                        "rel": {
                            "index": "tiempo_interes",
                            "name": "tiempo_interes",
                            "field": "id",
                            "ownfield": "tiempo_interes_id",
                            "array": false
                        }
                    },
                    {
                        "name": "tipo_interes_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_interes",
                        "value": "[tipo_interes|id|tipo_interes_id]",
                        "rel": {
                            "index": "tipo_interes",
                            "name": "tipo_interes",
                            "field": "id",
                            "ownfield": "tipo_interes_id",
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
                        "name": "forma_pago_id",
                        "value": "number"
                    },
                    {
                        "name": "forma_pago",
                        "value": "[forma_pago|id|forma_pago_id]",
                        "rel": {
                            "index": "forma_pago",
                            "name": "forma_pago",
                            "field": "id",
                            "ownfield": "forma_pago_id",
                            "array": false
                        }
                    },
                    {
                        "name": "tipo_pago_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_pago",
                        "value": "[tipo_pago|id|tipo_pago_id]",
                        "rel": {
                            "index": "tipo_pago",
                            "name": "tipo_pago",
                            "field": "id",
                            "ownfield": "tipo_pago_id",
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
                    },
                    {
                        "name": "estados",
                        "value": "[[credito_estado|credito_id|id]]",
                        "rel": {
                            "index": "estados",
                            "name": "credito_estado",
                            "field": "credito_id",
                            "ownfield": "id",
                            "array": true
                        }
                    },
                    {
                        "name": "pagos",
                        "value": "[[credito_pagos|credito_id|id]]",
                        "rel": {
                            "index": "pagos",
                            "name": "credito_pagos",
                            "field": "credito_id",
                            "ownfield": "id",
                            "array": true
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
                    },
                    {
                        "method": "GET",
                        "route": ":credito_id/credito_estado",
                        "in": null,
                        "rel": "[[credito_estado|credito_id|id]]",
                        "type": "rel",
                        "out": "select_credito_estado"
                    },
                    {
                        "method": "GET",
                        "route": ":credito_id/credito_estado/:id",
                        "in": null,
                        "rel": "[[credito_estado|credito_id|id]]",
                        "type": "rel",
                        "out": "select_credito_estado"
                    },
                    {
                        "method": "POST",
                        "route": ":credito_id/credito_estado",
                        "in": "insert_credito_estado",
                        "rel": "[[credito_estado|credito_id|id]]",
                        "type": "rel",
                        "out": "select_credito_estado"
                    },
                    {
                        "method": "PUT",
                        "route": ":credito_id/credito_estado/:id",
                        "in": "insert_credito_estado",
                        "rel": "[[credito_estado|credito_id|id]]",
                        "type": "rel",
                        "out": "select_credito_estado"
                    },
                    {
                        "method": "DELETE",
                        "route": ":credito_id/credito_estado/:id",
                        "in": null,
                        "rel": "[[credito_estado|credito_id|id]]",
                        "type": "rel",
                        "out": null
                    },
                    {
                        "method": "GET",
                        "route": ":credito_id/credito_pagos",
                        "in": null,
                        "rel": "[[credito_pagos|credito_id|id]]",
                        "type": "rel",
                        "out": "select_credito_pagos"
                    },
                    {
                        "method": "GET",
                        "route": ":credito_id/credito_pagos/:id",
                        "in": null,
                        "rel": "[[credito_pagos|credito_id|id]]",
                        "type": "rel",
                        "out": "select_credito_pagos"
                    },
                    {
                        "method": "POST",
                        "route": ":credito_id/credito_pagos",
                        "in": "insert_credito_pagos",
                        "rel": "[[credito_pagos|credito_id|id]]",
                        "type": "rel",
                        "out": "select_credito_pagos"
                    },
                    {
                        "method": "PUT",
                        "route": ":credito_id/credito_pagos/:id",
                        "in": "insert_credito_pagos",
                        "rel": "[[credito_pagos|credito_id|id]]",
                        "type": "rel",
                        "out": "select_credito_pagos"
                    },
                    {
                        "method": "DELETE",
                        "route": ":credito_id/credito_pagos/:id",
                        "in": null,
                        "rel": "[[credito_pagos|credito_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "capital": "float",
                        "cuotas": "number",
                        "cuotas_tiempo_id": "number",
                        "cuotas_tiempo": "[cuotas_tiempo|id|cuotas_tiempo_id]",
                        "interes": "float",
                        "tiempo_interes_id": "number",
                        "tiempo_interes": "[tiempo_interes|id|tiempo_interes_id]",
                        "tipo_interes_id": "number",
                        "tipo_interes": "[tipo_interes|id|tipo_interes_id]",
                        "tieneiva": "boolean",
                        "redondear": "boolean",
                        "forma_pago_id": "number",
                        "forma_pago": "[forma_pago|id|forma_pago_id]",
                        "tipo_pago_id": "number",
                        "tipo_pago": "[tipo_pago|id|tipo_pago_id]",
                        "montoaprobado": "float",
                        "montodesembolsado": "float",
                        "plazo": "date",
                        "dias": "number",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "creditofecha": "date",
                        "estados": "[[credito_estado|credito_id|id]]",
                        "pagos": "[[credito_pagos|credito_id|id]]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "capital": "float",
                        "cuotas": "number",
                        "cuotas_tiempo_id": "number",
                        "cuotas_tiempo": "[cuotas_tiempo|id|cuotas_tiempo_id]",
                        "interes": "float",
                        "tiempo_interes_id": "number",
                        "tiempo_interes": "[tiempo_interes|id|tiempo_interes_id]",
                        "tipo_interes_id": "number",
                        "tipo_interes": "[tipo_interes|id|tipo_interes_id]",
                        "tieneiva": "boolean",
                        "redondear": "boolean",
                        "forma_pago_id": "number",
                        "forma_pago": "[forma_pago|id|forma_pago_id]",
                        "tipo_pago_id": "number",
                        "tipo_pago": "[tipo_pago|id|tipo_pago_id]",
                        "montoaprobado": "float",
                        "montodesembolsado": "float",
                        "plazo": "date",
                        "dias": "number",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "creditofecha": "date",
                        "estados": "[[credito_estado|credito_id|id]]",
                        "pagos": "[[credito_pagos|credito_id|id]]"
                    },
                    "insert": {
                        "capital": "float",
                        "cuotas": "number",
                        "cuotas_tiempo_id": "number",
                        "cuotas_tiempo": "[cuotas_tiempo|id|cuotas_tiempo_id]",
                        "interes": "float",
                        "tiempo_interes_id": "number",
                        "tiempo_interes": "[tiempo_interes|id|tiempo_interes_id]",
                        "tipo_interes_id": "number",
                        "tipo_interes": "[tipo_interes|id|tipo_interes_id]",
                        "tieneiva": "boolean",
                        "redondear": "boolean",
                        "forma_pago_id": "number",
                        "forma_pago": "[forma_pago|id|forma_pago_id]",
                        "tipo_pago_id": "number",
                        "tipo_pago": "[tipo_pago|id|tipo_pago_id]",
                        "montoaprobado": "float",
                        "montodesembolsado": "float",
                        "plazo": "date",
                        "dias": "number",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "creditofecha": "date",
                        "estados": "[[credito_estado|credito_id|id]]",
                        "pagos": "[[credito_pagos|credito_id|id]]"
                    },
                    "select_credito_estado": {
                        "id": "uuid|pk",
                        "fecha": "date",
                        "credito_id": "number",
                        "credito": "[credito|id|credito_id]",
                        "estado_credito_id": "number",
                        "estado_credito": "[estado_credito|id|estado_credito_id]"
                    },
                    "create_credito_estado": {
                        "id": "uuid|pk",
                        "fecha": "date",
                        "credito_id": "number",
                        "credito": "[credito|id|credito_id]",
                        "estado_credito_id": "number",
                        "estado_credito": "[estado_credito|id|estado_credito_id]"
                    },
                    "insert_credito_estado": {
                        "fecha": "date",
                        "credito_id": "number",
                        "credito": "[credito|id|credito_id]",
                        "estado_credito_id": "number",
                        "estado_credito": "[estado_credito|id|estado_credito_id]"
                    },
                    "select_credito_pagos": {
                        "id": "uuid|pk",
                        "credito_id": "number",
                        "credito": "[credito|id|credito_id]",
                        "nrocuota": "number",
                        "pago": "[pagos|id|pago_id]",
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
                    "create_credito_pagos": {
                        "id": "uuid|pk",
                        "credito_id": "number",
                        "credito": "[credito|id|credito_id]",
                        "nrocuota": "number",
                        "pago": "[pagos|id|pago_id]",
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
                    "insert_credito_pagos": {
                        "credito_id": "number",
                        "credito": "[credito|id|credito_id]",
                        "nrocuota": "number",
                        "pago": "[pagos|id|pago_id]",
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
                "name": "credito_estado",
                "alias": "credito_estado",
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
                        "name": "estado_credito_id",
                        "value": "number"
                    },
                    {
                        "name": "estado_credito",
                        "value": "[estado_credito|id|estado_credito_id]",
                        "rel": {
                            "index": "estado_credito",
                            "name": "estado_credito",
                            "field": "id",
                            "ownfield": "estado_credito_id",
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
                        "credito_id": "number",
                        "credito": "[credito|id|credito_id]",
                        "estado_credito_id": "number",
                        "estado_credito": "[estado_credito|id|estado_credito_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "fecha": "date",
                        "credito_id": "number",
                        "credito": "[credito|id|credito_id]",
                        "estado_credito_id": "number",
                        "estado_credito": "[estado_credito|id|estado_credito_id]"
                    },
                    "insert": {
                        "fecha": "date",
                        "credito_id": "number",
                        "credito": "[credito|id|credito_id]",
                        "estado_credito_id": "number",
                        "estado_credito": "[estado_credito|id|estado_credito_id]"
                    }
                }
            },
            {
                "name": "estado_pago",
                "alias": "estado_pago",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
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
                        "nombre": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string"
                    },
                    "insert": {
                        "nombre": "string"
                    }
                }
            },
            {
                "name": "pagos_estado_pago",
                "alias": "pagos_estado_pago",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
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
                        "name": "estado_pago_id",
                        "value": "number"
                    },
                    {
                        "name": "estado_pago",
                        "value": "[estado_pago|id|estado_pago_id]",
                        "rel": {
                            "index": "estado_pago",
                            "name": "estado_pago",
                            "field": "id",
                            "ownfield": "estado_pago_id",
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
                        "pagos_id": "number",
                        "pagos": "[pagos|id|pagos_id]",
                        "estado_pago_id": "number",
                        "estado_pago": "[estado_pago|id|estado_pago_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "pagos_id": "number",
                        "pagos": "[pagos|id|pagos_id]",
                        "estado_pago_id": "number",
                        "estado_pago": "[estado_pago|id|estado_pago_id]"
                    },
                    "insert": {
                        "pagos_id": "number",
                        "pagos": "[pagos|id|pagos_id]",
                        "estado_pago_id": "number",
                        "estado_pago": "[estado_pago|id|estado_pago_id]"
                    }
                }
            },
            {
                "name": "credito_estado_pago",
                "alias": "credito_estado_pago",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "credito_pagos_id",
                        "value": "number"
                    },
                    {
                        "name": "estado_pago_id",
                        "value": "number"
                    },
                    {
                        "name": "estado_pago",
                        "value": "[estado_pago|id|estado_pago_id]",
                        "rel": {
                            "index": "estado_pago",
                            "name": "estado_pago",
                            "field": "id",
                            "ownfield": "estado_pago_id",
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
                        "credito_pagos_id": "number",
                        "estado_pago_id": "number",
                        "estado_pago": "[estado_pago|id|estado_pago_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "credito_pagos_id": "number",
                        "estado_pago_id": "number",
                        "estado_pago": "[estado_pago|id|estado_pago_id]"
                    },
                    "insert": {
                        "credito_pagos_id": "number",
                        "estado_pago_id": "number",
                        "estado_pago": "[estado_pago|id|estado_pago_id]"
                    }
                }
            },
            {
                "name": "credito_pagos",
                "alias": "credito_pagos",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
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
                        "value": "[pagos|id|pago_id]",
                        "rel": {
                            "index": "pago",
                            "name": "pagos",
                            "field": "id",
                            "ownfield": "pago_id",
                            "array": false
                        }
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
                        "credito_id": "number",
                        "credito": "[credito|id|credito_id]",
                        "nrocuota": "number",
                        "pago": "[pagos|id|pago_id]",
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
                        "id": "uuid|pk",
                        "credito_id": "number",
                        "credito": "[credito|id|credito_id]",
                        "nrocuota": "number",
                        "pago": "[pagos|id|pago_id]",
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
                        "pago": "[pagos|id|pago_id]",
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
                "alias": "pagos",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
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
                        "name": "forma_pago_id",
                        "value": "number"
                    },
                    {
                        "name": "forma_pago",
                        "value": "[forma_pago|id|forma_pago_id]",
                        "rel": {
                            "index": "forma_pago",
                            "name": "forma_pago",
                            "field": "id",
                            "ownfield": "forma_pago_id",
                            "array": false
                        }
                    },
                    {
                        "name": "tipo_pago_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_pago",
                        "value": "[tipo_pago|id|tipo_pago_id]",
                        "rel": {
                            "index": "tipo_pago",
                            "name": "tipo_pago",
                            "field": "id",
                            "ownfield": "tipo_pago_id",
                            "array": false
                        }
                    },
                    {
                        "name": "pago_fecha",
                        "value": "date"
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
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "monto": "float",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "forma_pago_id": "number",
                        "forma_pago": "[forma_pago|id|forma_pago_id]",
                        "tipo_pago_id": "number",
                        "tipo_pago": "[tipo_pago|id|tipo_pago_id]",
                        "pago_fecha": "date"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "monto": "float",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "forma_pago_id": "number",
                        "forma_pago": "[forma_pago|id|forma_pago_id]",
                        "tipo_pago_id": "number",
                        "tipo_pago": "[tipo_pago|id|tipo_pago_id]",
                        "pago_fecha": "date"
                    },
                    "insert": {
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "monto": "float",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "forma_pago_id": "number",
                        "forma_pago": "[forma_pago|id|forma_pago_id]",
                        "tipo_pago_id": "number",
                        "tipo_pago": "[tipo_pago|id|tipo_pago_id]",
                        "pago_fecha": "date"
                    }
                }
            },
            {
                "name": "pagos_devengados",
                "alias": "pagos_devengados",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "pago_id",
                        "value": "number"
                    },
                    {
                        "name": "pagos",
                        "value": "[pagos|id|pago_id]",
                        "rel": {
                            "index": "pagos",
                            "name": "pagos",
                            "field": "id",
                            "ownfield": "pago_id",
                            "array": false
                        }
                    },
                    {
                        "name": "realizado",
                        "value": "boolean"
                    },
                    {
                        "name": "fecha",
                        "value": "date"
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
                        "pago_id": "number",
                        "pagos": "[pagos|id|pago_id]",
                        "realizado": "boolean",
                        "fecha": "date"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "pago_id": "number",
                        "pagos": "[pagos|id|pago_id]",
                        "realizado": "boolean",
                        "fecha": "date"
                    },
                    "insert": {
                        "pago_id": "number",
                        "pagos": "[pagos|id|pago_id]",
                        "realizado": "boolean",
                        "fecha": "date"
                    }
                }
            },
            {
                "name": "regularizacion",
                "alias": "regularizacion",
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
                        "name": "transferencia",
                        "value": "number"
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
                        "transferencia": "number"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "fecha": "date",
                        "transferencia": "number"
                    },
                    "insert": {
                        "fecha": "date",
                        "transferencia": "number"
                    }
                }
            },
            {
                "name": "regularizacion_pagos",
                "alias": "regularizacion_pagos",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "regularizacion_id",
                        "value": "number"
                    },
                    {
                        "name": "regularizacion",
                        "value": "[regularizacion|id|regularizacion_id]",
                        "rel": {
                            "index": "regularizacion",
                            "name": "regularizacion",
                            "field": "id",
                            "ownfield": "regularizacion_id",
                            "array": false
                        }
                    },
                    {
                        "name": "pagos_devengados_id",
                        "value": "number"
                    },
                    {
                        "name": "pagos_devengados",
                        "value": "[pagos_devengados|id|pagos_devengados_id]",
                        "rel": {
                            "index": "pagos_devengados",
                            "name": "pagos_devengados",
                            "field": "id",
                            "ownfield": "pagos_devengados_id",
                            "array": false
                        }
                    },
                    {
                        "name": "proveedor_id",
                        "value": "number"
                    },
                    {
                        "name": "proveedor",
                        "value": "[entidades|id|proveedor_id]",
                        "rel": {
                            "index": "proveedor",
                            "name": "entidades",
                            "field": "id",
                            "ownfield": "proveedor_id",
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
                        "regularizacion_id": "number",
                        "regularizacion": "[regularizacion|id|regularizacion_id]",
                        "pagos_devengados_id": "number",
                        "pagos_devengados": "[pagos_devengados|id|pagos_devengados_id]",
                        "proveedor_id": "number",
                        "proveedor": "[entidades|id|proveedor_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "regularizacion_id": "number",
                        "regularizacion": "[regularizacion|id|regularizacion_id]",
                        "pagos_devengados_id": "number",
                        "pagos_devengados": "[pagos_devengados|id|pagos_devengados_id]",
                        "proveedor_id": "number",
                        "proveedor": "[entidades|id|proveedor_id]"
                    },
                    "insert": {
                        "regularizacion_id": "number",
                        "regularizacion": "[regularizacion|id|regularizacion_id]",
                        "pagos_devengados_id": "number",
                        "pagos_devengados": "[pagos_devengados|id|pagos_devengados_id]",
                        "proveedor_id": "number",
                        "proveedor": "[entidades|id|proveedor_id]"
                    }
                }
            },
            {
                "name": "regularizacion_cobros",
                "alias": "regularizacion_cobros",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "regularizacion_id",
                        "value": "number"
                    },
                    {
                        "name": "regularizacion",
                        "value": "[regularizacion|id|regularizacion_id]",
                        "rel": {
                            "index": "regularizacion",
                            "name": "regularizacion",
                            "field": "id",
                            "ownfield": "regularizacion_id",
                            "array": false
                        }
                    },
                    {
                        "name": "cobros_devengados_id",
                        "value": "number"
                    },
                    {
                        "name": "cobros_devengados",
                        "value": "[cobros_devengados|id|cobros_devengados_id]",
                        "rel": {
                            "index": "cobros_devengados",
                            "name": "cobros_devengados",
                            "field": "id",
                            "ownfield": "cobros_devengados_id",
                            "array": false
                        }
                    },
                    {
                        "name": "cliente_id",
                        "value": "number"
                    },
                    {
                        "name": "cliente",
                        "value": "[entidades|id|cliente_id]",
                        "rel": {
                            "index": "cliente",
                            "name": "entidades",
                            "field": "id",
                            "ownfield": "cliente_id",
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
                        "regularizacion_id": "number",
                        "regularizacion": "[regularizacion|id|regularizacion_id]",
                        "cobros_devengados_id": "number",
                        "cobros_devengados": "[cobros_devengados|id|cobros_devengados_id]",
                        "cliente_id": "number",
                        "cliente": "[entidades|id|cliente_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "regularizacion_id": "number",
                        "regularizacion": "[regularizacion|id|regularizacion_id]",
                        "cobros_devengados_id": "number",
                        "cobros_devengados": "[cobros_devengados|id|cobros_devengados_id]",
                        "cliente_id": "number",
                        "cliente": "[entidades|id|cliente_id]"
                    },
                    "insert": {
                        "regularizacion_id": "number",
                        "regularizacion": "[regularizacion|id|regularizacion_id]",
                        "cobros_devengados_id": "number",
                        "cobros_devengados": "[cobros_devengados|id|cobros_devengados_id]",
                        "cliente_id": "number",
                        "cliente": "[entidades|id|cliente_id]"
                    }
                }
            },
            {
                "name": "forma_cobro",
                "alias": "forma_cobro",
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
                "name": "cobros",
                "alias": "cobros",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
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
                        "name": "forma_cobro_id",
                        "value": "number"
                    },
                    {
                        "name": "forma_cobro",
                        "value": "[forma_cobro|id|forma_cobro_id]",
                        "rel": {
                            "index": "forma_cobro",
                            "name": "forma_cobro",
                            "field": "id",
                            "ownfield": "forma_cobro_id",
                            "array": false
                        }
                    },
                    {
                        "name": "cobro_fecha",
                        "value": "date"
                    },
                    {
                        "name": "tipo_cobro_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_cobro",
                        "value": "[tipo_cobro|id|tipo_cobro_id]",
                        "rel": {
                            "index": "tipo_cobro",
                            "name": "tipo_cobro",
                            "field": "id",
                            "ownfield": "tipo_cobro_id",
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
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "monto": "float",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "forma_cobro_id": "number",
                        "forma_cobro": "[forma_cobro|id|forma_cobro_id]",
                        "cobro_fecha": "date",
                        "tipo_cobro_id": "number",
                        "tipo_cobro": "[tipo_cobro|id|tipo_cobro_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "monto": "float",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "forma_cobro_id": "number",
                        "forma_cobro": "[forma_cobro|id|forma_cobro_id]",
                        "cobro_fecha": "date",
                        "tipo_cobro_id": "number",
                        "tipo_cobro": "[tipo_cobro|id|tipo_cobro_id]"
                    },
                    "insert": {
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]",
                        "monto": "float",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "forma_cobro_id": "number",
                        "forma_cobro": "[forma_cobro|id|forma_cobro_id]",
                        "cobro_fecha": "date",
                        "tipo_cobro_id": "number",
                        "tipo_cobro": "[tipo_cobro|id|tipo_cobro_id]"
                    }
                }
            },
            {
                "name": "cobros_devengados",
                "alias": "cobros_devengados",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "cobro_id",
                        "value": "number"
                    },
                    {
                        "name": "cobro",
                        "value": "[cobros|id|cobro_id]",
                        "rel": {
                            "index": "cobro",
                            "name": "cobros",
                            "field": "id",
                            "ownfield": "cobro_id",
                            "array": false
                        }
                    },
                    {
                        "name": "realizado",
                        "value": "boolean"
                    },
                    {
                        "name": "fecha",
                        "value": "date"
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
                        "cobro_id": "number",
                        "cobro": "[cobros|id|cobro_id]",
                        "realizado": "boolean",
                        "fecha": "date"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "cobro_id": "number",
                        "cobro": "[cobros|id|cobro_id]",
                        "realizado": "boolean",
                        "fecha": "date"
                    },
                    "insert": {
                        "cobro_id": "number",
                        "cobro": "[cobros|id|cobro_id]",
                        "realizado": "boolean",
                        "fecha": "date"
                    }
                }
            },
            {
                "name": "tipo_cobro_via",
                "alias": "tipo_cobro_via",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "tipo_cobro_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_cobro",
                        "value": "[tipo_cobro|id|tipo_cobro_id]",
                        "rel": {
                            "index": "tipo_cobro",
                            "name": "tipo_cobro",
                            "field": "id",
                            "ownfield": "tipo_cobro_id",
                            "array": false
                        }
                    },
                    {
                        "name": "via_id",
                        "value": "number"
                    },
                    {
                        "name": "via",
                        "value": "[vias|id|via_id]",
                        "rel": {
                            "index": "via",
                            "name": "vias",
                            "field": "id",
                            "ownfield": "via_id",
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
                        "tipo_cobro_id": "number",
                        "tipo_cobro": "[tipo_cobro|id|tipo_cobro_id]",
                        "via_id": "number",
                        "via": "[vias|id|via_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "tipo_cobro_id": "number",
                        "tipo_cobro": "[tipo_cobro|id|tipo_cobro_id]",
                        "via_id": "number",
                        "via": "[vias|id|via_id]"
                    },
                    "insert": {
                        "tipo_cobro_id": "number",
                        "tipo_cobro": "[tipo_cobro|id|tipo_cobro_id]",
                        "via_id": "number",
                        "via": "[vias|id|via_id]"
                    }
                }
            },
            {
                "name": "tipo_cobro",
                "alias": "tipo_cobro",
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
                "name": "tipo_cobro_medios",
                "alias": "tipo_cobro_medios",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "tipo_cobro_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_cobro",
                        "value": "[tipo_cobro|id|tipo_cobro_id]",
                        "rel": {
                            "index": "tipo_cobro",
                            "name": "tipo_cobro",
                            "field": "id",
                            "ownfield": "tipo_cobro_id",
                            "array": false
                        }
                    },
                    {
                        "name": "medio_transferencia_id",
                        "value": "number"
                    },
                    {
                        "name": "medio_transferencia",
                        "value": "[medio_transferencia|id|medio_transferencia_id]",
                        "rel": {
                            "index": "medio_transferencia",
                            "name": "medio_transferencia",
                            "field": "id",
                            "ownfield": "medio_transferencia_id",
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
                        "tipo_cobro_id": "number",
                        "tipo_cobro": "[tipo_cobro|id|tipo_cobro_id]",
                        "medio_transferencia_id": "number",
                        "medio_transferencia": "[medio_transferencia|id|medio_transferencia_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "tipo_cobro_id": "number",
                        "tipo_cobro": "[tipo_cobro|id|tipo_cobro_id]",
                        "medio_transferencia_id": "number",
                        "medio_transferencia": "[medio_transferencia|id|medio_transferencia_id]"
                    },
                    "insert": {
                        "tipo_cobro_id": "number",
                        "tipo_cobro": "[tipo_cobro|id|tipo_cobro_id]",
                        "medio_transferencia_id": "number",
                        "medio_transferencia": "[medio_transferencia|id|medio_transferencia_id]"
                    }
                }
            },
            {
                "name": "documento_tipo",
                "alias": "documento_tipo",
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
                "name": "documento",
                "alias": "documento",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "documento_tipo_id",
                        "value": "number"
                    },
                    {
                        "name": "documento_tipo",
                        "value": "[documento_tipo|id|documento_tipo_id]",
                        "rel": {
                            "index": "documento_tipo",
                            "name": "documento_tipo",
                            "field": "id",
                            "ownfield": "documento_tipo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "referencia_id",
                        "value": "number"
                    },
                    {
                        "name": "observaciones",
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
                        "documento_tipo_id": "number",
                        "documento_tipo": "[documento_tipo|id|documento_tipo_id]",
                        "referencia_id": "number",
                        "observaciones": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "documento_tipo_id": "number",
                        "documento_tipo": "[documento_tipo|id|documento_tipo_id]",
                        "referencia_id": "number",
                        "observaciones": "string"
                    },
                    "insert": {
                        "documento_tipo_id": "number",
                        "documento_tipo": "[documento_tipo|id|documento_tipo_id]",
                        "referencia_id": "number",
                        "observaciones": "string"
                    }
                }
            },
            {
                "name": "cuenta_tipo",
                "alias": "cuenta_tipo",
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
                "name": "cuenta",
                "alias": "cuenta",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "cuenta_tipo_id",
                        "value": "number"
                    },
                    {
                        "name": "cuenta_tipo",
                        "value": "[cuenta_tipo|id|cuenta_tipo_id]",
                        "rel": {
                            "index": "cuenta_tipo",
                            "name": "cuenta_tipo",
                            "field": "id",
                            "ownfield": "cuenta_tipo_id",
                            "array": false
                        }
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
                        "cuenta_tipo_id": "number",
                        "cuenta_tipo": "[cuenta_tipo|id|cuenta_tipo_id]",
                        "codigo": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "cuenta_tipo_id": "number",
                        "cuenta_tipo": "[cuenta_tipo|id|cuenta_tipo_id]",
                        "codigo": "string"
                    },
                    "insert": {
                        "cuenta_tipo_id": "number",
                        "cuenta_tipo": "[cuenta_tipo|id|cuenta_tipo_id]",
                        "codigo": "string"
                    }
                }
            },
            {
                "name": "acreedor_cuenta",
                "alias": "acreedor_cuenta",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "acreedor_id",
                        "value": "number"
                    },
                    {
                        "name": "acreedor",
                        "value": "[acreedor|id|acreedor_id]]",
                        "rel": {
                            "index": "acreedor",
                            "name": "acreedor",
                            "field": "id",
                            "ownfield": "acreedor_id",
                            "array": false
                        }
                    },
                    {
                        "name": "cuenta_id",
                        "value": "number"
                    },
                    {
                        "name": "cuenta",
                        "value": "[cuenta|id|cuenta_id]",
                        "rel": {
                            "index": "cuenta",
                            "name": "cuenta",
                            "field": "id",
                            "ownfield": "cuenta_id",
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
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]]",
                        "cuenta_id": "number",
                        "cuenta": "[cuenta|id|cuenta_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]]",
                        "cuenta_id": "number",
                        "cuenta": "[cuenta|id|cuenta_id]"
                    },
                    "insert": {
                        "acreedor_id": "number",
                        "acreedor": "[acreedor|id|acreedor_id]]",
                        "cuenta_id": "number",
                        "cuenta": "[cuenta|id|cuenta_id]"
                    }
                }
            },
            {
                "name": "deudor_cuenta",
                "alias": "deudor_cuenta",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
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
                        "name": "cuenta_id",
                        "value": "number"
                    },
                    {
                        "name": "cuenta",
                        "value": "[cuenta|id|cuenta_id]",
                        "rel": {
                            "index": "cuenta",
                            "name": "cuenta",
                            "field": "id",
                            "ownfield": "cuenta_id",
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
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "cuenta_id": "number",
                        "cuenta": "[cuenta|id|cuenta_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "cuenta_id": "number",
                        "cuenta": "[cuenta|id|cuenta_id]"
                    },
                    "insert": {
                        "deudor_id": "number",
                        "deudor": "[deudor|id|deudor_id]",
                        "cuenta_id": "number",
                        "cuenta": "[cuenta|id|cuenta_id]"
                    }
                }
            },
            {
                "name": "usuarios",
                "alias": "usuarios",
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
                        "name": "nombrecompleto",
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
                        "nombrecompleto": "string",
                        "cargo": "string",
                        "uid": "number"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "nombrecompleto": "string",
                        "cargo": "string",
                        "uid": "number"
                    },
                    "insert": {
                        "nombre": "string",
                        "nombrecompleto": "string",
                        "cargo": "string",
                        "uid": "number"
                    }
                }
            },
            {
                "name": "fondo_tipo",
                "alias": "fondo_tipo",
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
                        "name": "esrotativo",
                        "value": "boolean"
                    },
                    {
                        "name": "esoperativo",
                        "value": "boolean"
                    },
                    {
                        "name": "conrendicion",
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
                        "nombre": "string",
                        "descripcion": "string",
                        "esrotativo": "boolean",
                        "esoperativo": "boolean",
                        "conrendicion": "boolean"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "esrotativo": "boolean",
                        "esoperativo": "boolean",
                        "conrendicion": "boolean"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string",
                        "esrotativo": "boolean",
                        "esoperativo": "boolean",
                        "conrendicion": "boolean"
                    }
                }
            },
            {
                "name": "fondo",
                "alias": "fondo",
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
                        "name": "direccion",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
                    },
                    {
                        "name": "fondo_tipo_id",
                        "value": "number"
                    },
                    {
                        "name": "fondo_tipo",
                        "value": "[fondo_tipo|id|fondo_tipo_id]",
                        "rel": {
                            "index": "fondo_tipo",
                            "name": "fondo_tipo",
                            "field": "id",
                            "ownfield": "fondo_tipo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "solicitud_id",
                        "value": "number"
                    },
                    {
                        "name": "fondo_responsables",
                        "value": "[[fondo_responsables|fondo_id|id]]",
                        "rel": {
                            "index": "fondo_responsables",
                            "name": "fondo_responsables",
                            "field": "fondo_id",
                            "ownfield": "id",
                            "array": true
                        }
                    },
                    {
                        "name": "fondo_centrodecostos",
                        "value": "[[fondo_centrodecostos|fondo_id|id]]",
                        "rel": {
                            "index": "fondo_centrodecostos",
                            "name": "fondo_centrodecostos",
                            "field": "fondo_id",
                            "ownfield": "id",
                            "array": true
                        }
                    },
                    {
                        "name": "fondo_forma_cobro",
                        "value": "[[fondo_forma_cobro|fondo_id|id]]",
                        "rel": {
                            "index": "fondo_forma_cobro",
                            "name": "fondo_forma_cobro",
                            "field": "fondo_id",
                            "ownfield": "id",
                            "array": true
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
                    },
                    {
                        "method": "GET",
                        "route": ":fondo_id/fondo_responsables",
                        "in": null,
                        "rel": "[[fondo_responsables|fondo_id|id]]",
                        "type": "rel",
                        "out": "select_fondo_responsables"
                    },
                    {
                        "method": "GET",
                        "route": ":fondo_id/fondo_responsables/:id",
                        "in": null,
                        "rel": "[[fondo_responsables|fondo_id|id]]",
                        "type": "rel",
                        "out": "select_fondo_responsables"
                    },
                    {
                        "method": "POST",
                        "route": ":fondo_id/fondo_responsables",
                        "in": "insert_fondo_responsables",
                        "rel": "[[fondo_responsables|fondo_id|id]]",
                        "type": "rel",
                        "out": "select_fondo_responsables"
                    },
                    {
                        "method": "PUT",
                        "route": ":fondo_id/fondo_responsables/:id",
                        "in": "insert_fondo_responsables",
                        "rel": "[[fondo_responsables|fondo_id|id]]",
                        "type": "rel",
                        "out": "select_fondo_responsables"
                    },
                    {
                        "method": "DELETE",
                        "route": ":fondo_id/fondo_responsables/:id",
                        "in": null,
                        "rel": "[[fondo_responsables|fondo_id|id]]",
                        "type": "rel",
                        "out": null
                    },
                    {
                        "method": "GET",
                        "route": ":fondo_id/fondo_centrodecostos",
                        "in": null,
                        "rel": "[[fondo_centrodecostos|fondo_id|id]]",
                        "type": "rel",
                        "out": "select_fondo_centrodecostos"
                    },
                    {
                        "method": "GET",
                        "route": ":fondo_id/fondo_centrodecostos/:id",
                        "in": null,
                        "rel": "[[fondo_centrodecostos|fondo_id|id]]",
                        "type": "rel",
                        "out": "select_fondo_centrodecostos"
                    },
                    {
                        "method": "POST",
                        "route": ":fondo_id/fondo_centrodecostos",
                        "in": "insert_fondo_centrodecostos",
                        "rel": "[[fondo_centrodecostos|fondo_id|id]]",
                        "type": "rel",
                        "out": "select_fondo_centrodecostos"
                    },
                    {
                        "method": "PUT",
                        "route": ":fondo_id/fondo_centrodecostos/:id",
                        "in": "insert_fondo_centrodecostos",
                        "rel": "[[fondo_centrodecostos|fondo_id|id]]",
                        "type": "rel",
                        "out": "select_fondo_centrodecostos"
                    },
                    {
                        "method": "DELETE",
                        "route": ":fondo_id/fondo_centrodecostos/:id",
                        "in": null,
                        "rel": "[[fondo_centrodecostos|fondo_id|id]]",
                        "type": "rel",
                        "out": null
                    },
                    {
                        "method": "GET",
                        "route": ":fondo_id/fondo_forma_cobro",
                        "in": null,
                        "rel": "[[fondo_forma_cobro|fondo_id|id]]",
                        "type": "rel",
                        "out": "select_fondo_forma_cobro"
                    },
                    {
                        "method": "GET",
                        "route": ":fondo_id/fondo_forma_cobro/:id",
                        "in": null,
                        "rel": "[[fondo_forma_cobro|fondo_id|id]]",
                        "type": "rel",
                        "out": "select_fondo_forma_cobro"
                    },
                    {
                        "method": "POST",
                        "route": ":fondo_id/fondo_forma_cobro",
                        "in": "insert_fondo_forma_cobro",
                        "rel": "[[fondo_forma_cobro|fondo_id|id]]",
                        "type": "rel",
                        "out": "select_fondo_forma_cobro"
                    },
                    {
                        "method": "PUT",
                        "route": ":fondo_id/fondo_forma_cobro/:id",
                        "in": "insert_fondo_forma_cobro",
                        "rel": "[[fondo_forma_cobro|fondo_id|id]]",
                        "type": "rel",
                        "out": "select_fondo_forma_cobro"
                    },
                    {
                        "method": "DELETE",
                        "route": ":fondo_id/fondo_forma_cobro/:id",
                        "in": null,
                        "rel": "[[fondo_forma_cobro|fondo_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "direccion": "string",
                        "descripcion": "string",
                        "fondo_tipo_id": "number",
                        "fondo_tipo": "[fondo_tipo|id|fondo_tipo_id]",
                        "solicitud_id": "number",
                        "fondo_responsables": "[[fondo_responsables|fondo_id|id]]",
                        "fondo_centrodecostos": "[[fondo_centrodecostos|fondo_id|id]]",
                        "fondo_forma_cobro": "[[fondo_forma_cobro|fondo_id|id]]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "direccion": "string",
                        "descripcion": "string",
                        "fondo_tipo_id": "number",
                        "fondo_tipo": "[fondo_tipo|id|fondo_tipo_id]",
                        "solicitud_id": "number",
                        "fondo_responsables": "[[fondo_responsables|fondo_id|id]]",
                        "fondo_centrodecostos": "[[fondo_centrodecostos|fondo_id|id]]",
                        "fondo_forma_cobro": "[[fondo_forma_cobro|fondo_id|id]]"
                    },
                    "insert": {
                        "nombre": "string",
                        "direccion": "string",
                        "descripcion": "string",
                        "fondo_tipo_id": "number",
                        "fondo_tipo": "[fondo_tipo|id|fondo_tipo_id]",
                        "solicitud_id": "number",
                        "fondo_responsables": "[[fondo_responsables|fondo_id|id]]",
                        "fondo_centrodecostos": "[[fondo_centrodecostos|fondo_id|id]]",
                        "fondo_forma_cobro": "[[fondo_forma_cobro|fondo_id|id]]"
                    },
                    "select_fondo_responsables": {
                        "id": "uuid|pk",
                        "responsable_id": "number",
                        "responsables": "[usuarios|id|responsable_id]",
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "estado": "string"
                    },
                    "create_fondo_responsables": {
                        "id": "uuid|pk",
                        "responsable_id": "number",
                        "responsables": "[usuarios|id|responsable_id]",
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "estado": "string"
                    },
                    "insert_fondo_responsables": {
                        "responsable_id": "number",
                        "responsables": "[usuarios|id|responsable_id]",
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "estado": "string"
                    },
                    "select_fondo_centrodecostos": {
                        "id": "uuid|pk",
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "centrodecostos_id": "number",
                        "centrodecostos": "[centrodecostos|id|centrodecostos_id]"
                    },
                    "create_fondo_centrodecostos": {
                        "id": "uuid|pk",
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "centrodecostos_id": "number",
                        "centrodecostos": "[centrodecostos|id|centrodecostos_id]"
                    },
                    "insert_fondo_centrodecostos": {
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "centrodecostos_id": "number",
                        "centrodecostos": "[centrodecostos|id|centrodecostos_id]"
                    },
                    "select_fondo_forma_cobro": {
                        "id": "uuid|pk",
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "forma_cobro_id": "number",
                        "forma_cobro": "[forma_cobro|id|forma_cobro_id]"
                    },
                    "create_fondo_forma_cobro": {
                        "id": "uuid|pk",
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "forma_cobro_id": "number",
                        "forma_cobro": "[forma_cobro|id|forma_cobro_id]"
                    },
                    "insert_fondo_forma_cobro": {
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "forma_cobro_id": "number",
                        "forma_cobro": "[forma_cobro|id|forma_cobro_id]"
                    }
                }
            },
            {
                "name": "fondo_responsables",
                "alias": "fondo_responsables",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
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
                        "value": "[fondo|id|fondo_id]",
                        "rel": {
                            "index": "fondo",
                            "name": "fondo",
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
                        "responsable_id": "number",
                        "responsables": "[usuarios|id|responsable_id]",
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "estado": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "responsable_id": "number",
                        "responsables": "[usuarios|id|responsable_id]",
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "estado": "string"
                    },
                    "insert": {
                        "responsable_id": "number",
                        "responsables": "[usuarios|id|responsable_id]",
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "estado": "string"
                    }
                }
            },
            {
                "name": "fondo_forma_cobro",
                "alias": "fondo_forma_cobro",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "fondo_id",
                        "value": "number"
                    },
                    {
                        "name": "fondo",
                        "value": "[fondo|id|fondo_id]",
                        "rel": {
                            "index": "fondo",
                            "name": "fondo",
                            "field": "id",
                            "ownfield": "fondo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "forma_cobro_id",
                        "value": "number"
                    },
                    {
                        "name": "forma_cobro",
                        "value": "[forma_cobro|id|forma_cobro_id]",
                        "rel": {
                            "index": "forma_cobro",
                            "name": "forma_cobro",
                            "field": "id",
                            "ownfield": "forma_cobro_id",
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
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "forma_cobro_id": "number",
                        "forma_cobro": "[forma_cobro|id|forma_cobro_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "forma_cobro_id": "number",
                        "forma_cobro": "[forma_cobro|id|forma_cobro_id]"
                    },
                    "insert": {
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "forma_cobro_id": "number",
                        "forma_cobro": "[forma_cobro|id|forma_cobro_id]"
                    }
                }
            },
            {
                "name": "fondo_centrodecostos",
                "alias": "fondo_centrodecostos",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "fondo_id",
                        "value": "number"
                    },
                    {
                        "name": "fondo",
                        "value": "[fondo|id|fondo_id]",
                        "rel": {
                            "index": "fondo",
                            "name": "fondo",
                            "field": "id",
                            "ownfield": "fondo_id",
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
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "centrodecostos_id": "number",
                        "centrodecostos": "[centrodecostos|id|centrodecostos_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "centrodecostos_id": "number",
                        "centrodecostos": "[centrodecostos|id|centrodecostos_id]"
                    },
                    "insert": {
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "centrodecostos_id": "number",
                        "centrodecostos": "[centrodecostos|id|centrodecostos_id]"
                    }
                }
            },
            {
                "name": "dias",
                "alias": "dias",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
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
                        "nombre": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string"
                    },
                    "insert": {
                        "nombre": "string"
                    }
                }
            },
            {
                "name": "horarios",
                "alias": "horarios",
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
                        "name": "horarios_dia",
                        "value": "[[horarios_dia|horario_id|id]]",
                        "rel": {
                            "index": "horarios_dia",
                            "name": "horarios_dia",
                            "field": "horario_id",
                            "ownfield": "id",
                            "array": true
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
                    },
                    {
                        "method": "GET",
                        "route": ":horario_id/horarios_dia",
                        "in": null,
                        "rel": "[[horarios_dia|horario_id|id]]",
                        "type": "rel",
                        "out": "select_horarios_dia"
                    },
                    {
                        "method": "GET",
                        "route": ":horario_id/horarios_dia/:id",
                        "in": null,
                        "rel": "[[horarios_dia|horario_id|id]]",
                        "type": "rel",
                        "out": "select_horarios_dia"
                    },
                    {
                        "method": "POST",
                        "route": ":horario_id/horarios_dia",
                        "in": "insert_horarios_dia",
                        "rel": "[[horarios_dia|horario_id|id]]",
                        "type": "rel",
                        "out": "select_horarios_dia"
                    },
                    {
                        "method": "PUT",
                        "route": ":horario_id/horarios_dia/:id",
                        "in": "insert_horarios_dia",
                        "rel": "[[horarios_dia|horario_id|id]]",
                        "type": "rel",
                        "out": "select_horarios_dia"
                    },
                    {
                        "method": "DELETE",
                        "route": ":horario_id/horarios_dia/:id",
                        "in": null,
                        "rel": "[[horarios_dia|horario_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "horarios_dia": "[[horarios_dia|horario_id|id]]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "horarios_dia": "[[horarios_dia|horario_id|id]]"
                    },
                    "insert": {
                        "nombre": "string",
                        "horarios_dia": "[[horarios_dia|horario_id|id]]"
                    },
                    "select_horarios_dia": {
                        "id": "uuid|pk",
                        "horario_id": "number",
                        "horarios": "[horarios|id|horario_id]",
                        "dia_id": "number",
                        "dias": "[dias|id|dia_id]",
                        "apertura": "time",
                        "cierre": "time"
                    },
                    "create_horarios_dia": {
                        "id": "uuid|pk",
                        "horario_id": "number",
                        "horarios": "[horarios|id|horario_id]",
                        "dia_id": "number",
                        "dias": "[dias|id|dia_id]",
                        "apertura": "time",
                        "cierre": "time"
                    },
                    "insert_horarios_dia": {
                        "horario_id": "number",
                        "horarios": "[horarios|id|horario_id]",
                        "dia_id": "number",
                        "dias": "[dias|id|dia_id]",
                        "apertura": "time",
                        "cierre": "time"
                    }
                }
            },
            {
                "name": "horarios_dia",
                "alias": "horarios_dia",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "horario_id",
                        "value": "number"
                    },
                    {
                        "name": "horarios",
                        "value": "[horarios|id|horario_id]",
                        "rel": {
                            "index": "horarios",
                            "name": "horarios",
                            "field": "id",
                            "ownfield": "horario_id",
                            "array": false
                        }
                    },
                    {
                        "name": "dia_id",
                        "value": "number"
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
                        "horario_id": "number",
                        "horarios": "[horarios|id|horario_id]",
                        "dia_id": "number",
                        "dias": "[dias|id|dia_id]",
                        "apertura": "time",
                        "cierre": "time"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "horario_id": "number",
                        "horarios": "[horarios|id|horario_id]",
                        "dia_id": "number",
                        "dias": "[dias|id|dia_id]",
                        "apertura": "time",
                        "cierre": "time"
                    },
                    "insert": {
                        "horario_id": "number",
                        "horarios": "[horarios|id|horario_id]",
                        "dia_id": "number",
                        "dias": "[dias|id|dia_id]",
                        "apertura": "time",
                        "cierre": "time"
                    }
                }
            },
            {
                "name": "caja",
                "alias": "caja",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "fondo_id",
                        "value": "number"
                    },
                    {
                        "name": "fondo",
                        "value": "[fondo|id|fondo_id]",
                        "rel": {
                            "index": "fondo",
                            "name": "fondo",
                            "field": "id",
                            "ownfield": "fondo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "nombre",
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
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "nombre": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "nombre": "string"
                    },
                    "insert": {
                        "fondo_id": "number",
                        "fondo": "[fondo|id|fondo_id]",
                        "nombre": "string"
                    }
                }
            },
            {
                "name": "caja_horarios",
                "alias": "caja_horarios",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "caja_id",
                        "value": "number"
                    },
                    {
                        "name": "caja",
                        "value": "[caja|id|caja_id]",
                        "rel": {
                            "index": "caja",
                            "name": "caja",
                            "field": "id",
                            "ownfield": "caja_id",
                            "array": false
                        }
                    },
                    {
                        "name": "horario_id",
                        "value": "number"
                    },
                    {
                        "name": "horarios",
                        "value": "[horarios|id|horario_id]",
                        "rel": {
                            "index": "horarios",
                            "name": "horarios",
                            "field": "id",
                            "ownfield": "horario_id",
                            "array": false
                        }
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
                        "caja_id": "number",
                        "caja": "[caja|id|caja_id]",
                        "horario_id": "number",
                        "horarios": "[horarios|id|horario_id]",
                        "responsable_id": "number",
                        "responsables": "[usuarios|id|responsable_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "caja_id": "number",
                        "caja": "[caja|id|caja_id]",
                        "horario_id": "number",
                        "horarios": "[horarios|id|horario_id]",
                        "responsable_id": "number",
                        "responsables": "[usuarios|id|responsable_id]"
                    },
                    "insert": {
                        "caja_id": "number",
                        "caja": "[caja|id|caja_id]",
                        "horario_id": "number",
                        "horarios": "[horarios|id|horario_id]",
                        "responsable_id": "number",
                        "responsables": "[usuarios|id|responsable_id]"
                    }
                }
            },
            {
                "name": "tipo_solicitud",
                "alias": "tipo_solicitud",
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
                        "name": "montofijo",
                        "value": "boolean"
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
                        "nombre": "string",
                        "descripcion": "string",
                        "montofijo": "boolean",
                        "moneda_id": "number",
                        "moneda": "[moneda|id|moneda_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "montofijo": "boolean",
                        "moneda_id": "number",
                        "moneda": "[moneda|id|moneda_id]"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string",
                        "montofijo": "boolean",
                        "moneda_id": "number",
                        "moneda": "[moneda|id|moneda_id]"
                    }
                }
            },
            {
                "name": "solicitudes",
                "alias": "solicitudes",
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
                        "name": "tipo_solicitud_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_solicitud",
                        "value": "[tipo_solicitud|id|tipo_solicitud_id]",
                        "rel": {
                            "index": "tipo_solicitud",
                            "name": "tipo_solicitud",
                            "field": "id",
                            "ownfield": "tipo_solicitud_id",
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
                        "solicitante": "[contacto|id|solicitante_id]",
                        "aprobacion": "boolean",
                        "estado": "string",
                        "tipo_solicitud_id": "number",
                        "tipo_solicitud": "[tipo_solicitud|id|tipo_solicitud_id]",
                        "centrodecostos_id": "number",
                        "centrodecostos": "[centrodecostos|id|centrodecostos_id]",
                        "solicitante_id": "number"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "fecha": "date",
                        "solicitante": "[contacto|id|solicitante_id]",
                        "aprobacion": "boolean",
                        "estado": "string",
                        "tipo_solicitud_id": "number",
                        "tipo_solicitud": "[tipo_solicitud|id|tipo_solicitud_id]",
                        "centrodecostos_id": "number",
                        "centrodecostos": "[centrodecostos|id|centrodecostos_id]",
                        "solicitante_id": "number"
                    },
                    "insert": {
                        "fecha": "date",
                        "solicitante": "[contacto|id|solicitante_id]",
                        "aprobacion": "boolean",
                        "estado": "string",
                        "tipo_solicitud_id": "number",
                        "tipo_solicitud": "[tipo_solicitud|id|tipo_solicitud_id]",
                        "centrodecostos_id": "number",
                        "centrodecostos": "[centrodecostos|id|centrodecostos_id]",
                        "solicitante_id": "number"
                    }
                }
            },
            {
                "name": "centrodecostos",
                "alias": "centrodecostos",
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
                        "name": "estado",
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
                        "estado": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
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
                "name": "banco",
                "alias": "banco",
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
                        "name": "direccion",
                        "value": "string"
                    },
                    {
                        "name": "url",
                        "value": "string"
                    },
                    {
                        "name": "via_id",
                        "value": "number"
                    },
                    {
                        "name": "via",
                        "value": "[vias|id|via_id]",
                        "rel": {
                            "index": "via",
                            "name": "vias",
                            "field": "id",
                            "ownfield": "via_id",
                            "array": false
                        }
                    },
                    {
                        "name": "cuentas",
                        "value": "[[cuenta_banco|banco_id|id]]",
                        "rel": {
                            "index": "cuentas",
                            "name": "cuenta_banco",
                            "field": "banco_id",
                            "ownfield": "id",
                            "array": true
                        }
                    },
                    {
                        "name": "lineasdecredito",
                        "value": "[[lineacredito_banco|banco_id|id]]",
                        "rel": {
                            "index": "lineasdecredito",
                            "name": "lineacredito_banco",
                            "field": "banco_id",
                            "ownfield": "id",
                            "array": true
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
                    },
                    {
                        "method": "GET",
                        "route": ":banco_id/cuenta_banco",
                        "in": null,
                        "rel": "[[cuenta_banco|banco_id|id]]",
                        "type": "rel",
                        "out": "select_cuenta_banco"
                    },
                    {
                        "method": "GET",
                        "route": ":banco_id/cuenta_banco/:id",
                        "in": null,
                        "rel": "[[cuenta_banco|banco_id|id]]",
                        "type": "rel",
                        "out": "select_cuenta_banco"
                    },
                    {
                        "method": "POST",
                        "route": ":banco_id/cuenta_banco",
                        "in": "insert_cuenta_banco",
                        "rel": "[[cuenta_banco|banco_id|id]]",
                        "type": "rel",
                        "out": "select_cuenta_banco"
                    },
                    {
                        "method": "PUT",
                        "route": ":banco_id/cuenta_banco/:id",
                        "in": "insert_cuenta_banco",
                        "rel": "[[cuenta_banco|banco_id|id]]",
                        "type": "rel",
                        "out": "select_cuenta_banco"
                    },
                    {
                        "method": "DELETE",
                        "route": ":banco_id/cuenta_banco/:id",
                        "in": null,
                        "rel": "[[cuenta_banco|banco_id|id]]",
                        "type": "rel",
                        "out": null
                    },
                    {
                        "method": "GET",
                        "route": ":banco_id/lineacredito_banco",
                        "in": null,
                        "rel": "[[lineacredito_banco|banco_id|id]]",
                        "type": "rel",
                        "out": "select_lineacredito_banco"
                    },
                    {
                        "method": "GET",
                        "route": ":banco_id/lineacredito_banco/:id",
                        "in": null,
                        "rel": "[[lineacredito_banco|banco_id|id]]",
                        "type": "rel",
                        "out": "select_lineacredito_banco"
                    },
                    {
                        "method": "POST",
                        "route": ":banco_id/lineacredito_banco",
                        "in": "insert_lineacredito_banco",
                        "rel": "[[lineacredito_banco|banco_id|id]]",
                        "type": "rel",
                        "out": "select_lineacredito_banco"
                    },
                    {
                        "method": "PUT",
                        "route": ":banco_id/lineacredito_banco/:id",
                        "in": "insert_lineacredito_banco",
                        "rel": "[[lineacredito_banco|banco_id|id]]",
                        "type": "rel",
                        "out": "select_lineacredito_banco"
                    },
                    {
                        "method": "DELETE",
                        "route": ":banco_id/lineacredito_banco/:id",
                        "in": null,
                        "rel": "[[lineacredito_banco|banco_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "direccion": "string",
                        "url": "string",
                        "via_id": "number",
                        "via": "[vias|id|via_id]",
                        "cuentas": "[[cuenta_banco|banco_id|id]]",
                        "lineasdecredito": "[[lineacredito_banco|banco_id|id]]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "direccion": "string",
                        "url": "string",
                        "via_id": "number",
                        "via": "[vias|id|via_id]",
                        "cuentas": "[[cuenta_banco|banco_id|id]]",
                        "lineasdecredito": "[[lineacredito_banco|banco_id|id]]"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string",
                        "direccion": "string",
                        "url": "string",
                        "via_id": "number",
                        "via": "[vias|id|via_id]",
                        "cuentas": "[[cuenta_banco|banco_id|id]]",
                        "lineasdecredito": "[[lineacredito_banco|banco_id|id]]"
                    },
                    "select_cuenta_banco": {
                        "id": "uuid|pk",
                        "nrocuenta": "number",
                        "moneda_id": "number",
                        "moneda": "[moneda|id|moneda_id]",
                        "banco_id": "number",
                        "banco": "[banco|id|banco_id]"
                    },
                    "create_cuenta_banco": {
                        "id": "uuid|pk",
                        "nrocuenta": "number",
                        "moneda_id": "number",
                        "moneda": "[moneda|id|moneda_id]",
                        "banco_id": "number",
                        "banco": "[banco|id|banco_id]"
                    },
                    "insert_cuenta_banco": {
                        "nrocuenta": "number",
                        "moneda_id": "number",
                        "moneda": "[moneda|id|moneda_id]",
                        "banco_id": "number",
                        "banco": "[banco|id|banco_id]"
                    },
                    "select_lineacredito_banco": {
                        "id": "uuid|pk",
                        "lineacredito_id": "number",
                        "lineacredito": "[lineacredito|id|lineacredito_id]",
                        "banco_id": "number",
                        "banco": "[banco|id|banco_id]"
                    },
                    "create_lineacredito_banco": {
                        "id": "uuid|pk",
                        "lineacredito_id": "number",
                        "lineacredito": "[lineacredito|id|lineacredito_id]",
                        "banco_id": "number",
                        "banco": "[banco|id|banco_id]"
                    },
                    "insert_lineacredito_banco": {
                        "lineacredito_id": "number",
                        "lineacredito": "[lineacredito|id|lineacredito_id]",
                        "banco_id": "number",
                        "banco": "[banco|id|banco_id]"
                    }
                }
            },
            {
                "name": "banco_medios_transferencia",
                "alias": "banco_medios_transferencia",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "banco_id",
                        "value": "number"
                    },
                    {
                        "name": "banco",
                        "value": "[banco|id|banco_id]",
                        "rel": {
                            "index": "banco",
                            "name": "banco",
                            "field": "id",
                            "ownfield": "banco_id",
                            "array": false
                        }
                    },
                    {
                        "name": "medio_transferencia_id",
                        "value": "number"
                    },
                    {
                        "name": "medio_transferencia",
                        "value": "[medio_transferencia|id|medio_transferencia_id]",
                        "rel": {
                            "index": "medio_transferencia",
                            "name": "medio_transferencia",
                            "field": "id",
                            "ownfield": "medio_transferencia_id",
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
                        "banco_id": "number",
                        "banco": "[banco|id|banco_id]",
                        "medio_transferencia_id": "number",
                        "medio_transferencia": "[medio_transferencia|id|medio_transferencia_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "banco_id": "number",
                        "banco": "[banco|id|banco_id]",
                        "medio_transferencia_id": "number",
                        "medio_transferencia": "[medio_transferencia|id|medio_transferencia_id]"
                    },
                    "insert": {
                        "banco_id": "number",
                        "banco": "[banco|id|banco_id]",
                        "medio_transferencia_id": "number",
                        "medio_transferencia": "[medio_transferencia|id|medio_transferencia_id]"
                    }
                }
            },
            {
                "name": "contacto_banco",
                "alias": "contacto_banco",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "banco_id",
                        "value": "number"
                    },
                    {
                        "name": "banco",
                        "value": "[banco|id|banco_id]",
                        "rel": {
                            "index": "banco",
                            "name": "banco",
                            "field": "id",
                            "ownfield": "banco_id",
                            "array": false
                        }
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
                        "banco_id": "number",
                        "banco": "[banco|id|banco_id]",
                        "contacto_id": "number",
                        "contacto": "[contacto|id|contacto_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "banco_id": "number",
                        "banco": "[banco|id|banco_id]",
                        "contacto_id": "number",
                        "contacto": "[contacto|id|contacto_id]"
                    },
                    "insert": {
                        "banco_id": "number",
                        "banco": "[banco|id|banco_id]",
                        "contacto_id": "number",
                        "contacto": "[contacto|id|contacto_id]"
                    }
                }
            },
            {
                "name": "cuenta_banco",
                "alias": "cuenta_banco",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nrocuenta",
                        "value": "number"
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
                    },
                    {
                        "name": "banco_id",
                        "value": "number"
                    },
                    {
                        "name": "banco",
                        "value": "[banco|id|banco_id]",
                        "rel": {
                            "index": "banco",
                            "name": "banco",
                            "field": "id",
                            "ownfield": "banco_id",
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
                        "nrocuenta": "number",
                        "moneda_id": "number",
                        "moneda": "[moneda|id|moneda_id]",
                        "banco_id": "number",
                        "banco": "[banco|id|banco_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nrocuenta": "number",
                        "moneda_id": "number",
                        "moneda": "[moneda|id|moneda_id]",
                        "banco_id": "number",
                        "banco": "[banco|id|banco_id]"
                    },
                    "insert": {
                        "nrocuenta": "number",
                        "moneda_id": "number",
                        "moneda": "[moneda|id|moneda_id]",
                        "banco_id": "number",
                        "banco": "[banco|id|banco_id]"
                    }
                }
            },
            {
                "name": "lineacredito",
                "alias": "lineacredito",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "numero",
                        "value": "string"
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
                    },
                    {
                        "name": "importe",
                        "value": "float"
                    },
                    {
                        "name": "fechainicio",
                        "value": "date"
                    },
                    {
                        "name": "fechafin",
                        "value": "date"
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
                        "numero": "string",
                        "moneda_id": "number",
                        "moneda": "[moneda|id|moneda_id]",
                        "importe": "float",
                        "fechainicio": "date",
                        "fechafin": "date"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "numero": "string",
                        "moneda_id": "number",
                        "moneda": "[moneda|id|moneda_id]",
                        "importe": "float",
                        "fechainicio": "date",
                        "fechafin": "date"
                    },
                    "insert": {
                        "numero": "string",
                        "moneda_id": "number",
                        "moneda": "[moneda|id|moneda_id]",
                        "importe": "float",
                        "fechainicio": "date",
                        "fechafin": "date"
                    }
                }
            },
            {
                "name": "lineacredito_banco",
                "alias": "lineacredito_banco",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "lineacredito_id",
                        "value": "number"
                    },
                    {
                        "name": "lineacredito",
                        "value": "[lineacredito|id|lineacredito_id]",
                        "rel": {
                            "index": "lineacredito",
                            "name": "lineacredito",
                            "field": "id",
                            "ownfield": "lineacredito_id",
                            "array": false
                        }
                    },
                    {
                        "name": "banco_id",
                        "value": "number"
                    },
                    {
                        "name": "banco",
                        "value": "[banco|id|banco_id]",
                        "rel": {
                            "index": "banco",
                            "name": "banco",
                            "field": "id",
                            "ownfield": "banco_id",
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
                        "lineacredito_id": "number",
                        "lineacredito": "[lineacredito|id|lineacredito_id]",
                        "banco_id": "number",
                        "banco": "[banco|id|banco_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "lineacredito_id": "number",
                        "lineacredito": "[lineacredito|id|lineacredito_id]",
                        "banco_id": "number",
                        "banco": "[banco|id|banco_id]"
                    },
                    "insert": {
                        "lineacredito_id": "number",
                        "lineacredito": "[lineacredito|id|lineacredito_id]",
                        "banco_id": "number",
                        "banco": "[banco|id|banco_id]"
                    }
                }
            },
            {
                "name": "movimiento_cuenta",
                "alias": "movimiento_cuenta",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "cuenta_id",
                        "value": "number"
                    },
                    {
                        "name": "cuenta",
                        "value": "[cuenta_banco|id|cuenta_id]",
                        "rel": {
                            "index": "cuenta",
                            "name": "cuenta_banco",
                            "field": "id",
                            "ownfield": "cuenta_id",
                            "array": false
                        }
                    },
                    {
                        "name": "ingreso",
                        "value": "float"
                    },
                    {
                        "name": "egreso",
                        "value": "float"
                    },
                    {
                        "name": "saldo",
                        "value": "float"
                    },
                    {
                        "name": "tipo_movimiento_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_movimiento",
                        "value": "[tipo_movimiento|id|tipo_movimiento_id]",
                        "rel": {
                            "index": "tipo_movimiento",
                            "name": "tipo_movimiento",
                            "field": "id",
                            "ownfield": "tipo_movimiento_id",
                            "array": false
                        }
                    },
                    {
                        "name": "pago_forma_id",
                        "value": "number"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
                    },
                    {
                        "name": "usuario_id",
                        "value": "number"
                    },
                    {
                        "name": "fecha_pago",
                        "value": "date"
                    },
                    {
                        "name": "fecha_reg",
                        "value": "date"
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
                        "cuenta_id": "number",
                        "cuenta": "[cuenta_banco|id|cuenta_id]",
                        "ingreso": "float",
                        "egreso": "float",
                        "saldo": "float",
                        "tipo_movimiento_id": "number",
                        "tipo_movimiento": "[tipo_movimiento|id|tipo_movimiento_id]",
                        "pago_forma_id": "number",
                        "descripcion": "string",
                        "usuario_id": "number",
                        "fecha_pago": "date",
                        "fecha_reg": "date"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "cuenta_id": "number",
                        "cuenta": "[cuenta_banco|id|cuenta_id]",
                        "ingreso": "float",
                        "egreso": "float",
                        "saldo": "float",
                        "tipo_movimiento_id": "number",
                        "tipo_movimiento": "[tipo_movimiento|id|tipo_movimiento_id]",
                        "pago_forma_id": "number",
                        "descripcion": "string",
                        "usuario_id": "number",
                        "fecha_pago": "date",
                        "fecha_reg": "date"
                    },
                    "insert": {
                        "cuenta_id": "number",
                        "cuenta": "[cuenta_banco|id|cuenta_id]",
                        "ingreso": "float",
                        "egreso": "float",
                        "saldo": "float",
                        "tipo_movimiento_id": "number",
                        "tipo_movimiento": "[tipo_movimiento|id|tipo_movimiento_id]",
                        "pago_forma_id": "number",
                        "descripcion": "string",
                        "usuario_id": "number",
                        "fecha_pago": "date",
                        "fecha_reg": "date"
                    }
                }
            },
            {
                "name": "tipo_movimiento",
                "alias": "tipo_movimiento",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
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
                        "nombre": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string"
                    },
                    "insert": {
                        "nombre": "string"
                    }
                }
            },
            {
                "name": "anticipo_movimiento_cuenta",
                "alias": "anticipo_movimiento_cuenta",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "movimiento_cuenta_id",
                        "value": "number"
                    },
                    {
                        "name": "movimiento_cuenta",
                        "value": "[movimiento_cuenta|id|movimiento_cuenta]",
                        "rel": {
                            "index": "movimiento_cuenta",
                            "name": "movimiento_cuenta",
                            "field": "id",
                            "ownfield": "movimiento_cuenta",
                            "array": false
                        }
                    },
                    {
                        "name": "anticipo_id",
                        "value": "number"
                    },
                    {
                        "name": "anticipo",
                        "value": "[anticipo|id|anticipo_id]",
                        "rel": {
                            "index": "anticipo",
                            "name": "anticipo",
                            "field": "id",
                            "ownfield": "anticipo_id",
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
                        "movimiento_cuenta_id": "number",
                        "movimiento_cuenta": "[movimiento_cuenta|id|movimiento_cuenta]",
                        "anticipo_id": "number",
                        "anticipo": "[anticipo|id|anticipo_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "movimiento_cuenta_id": "number",
                        "movimiento_cuenta": "[movimiento_cuenta|id|movimiento_cuenta]",
                        "anticipo_id": "number",
                        "anticipo": "[anticipo|id|anticipo_id]"
                    },
                    "insert": {
                        "movimiento_cuenta_id": "number",
                        "movimiento_cuenta": "[movimiento_cuenta|id|movimiento_cuenta]",
                        "anticipo_id": "number",
                        "anticipo": "[anticipo|id|anticipo_id]"
                    }
                }
            },
            {
                "name": "anticipo",
                "alias": "anticipo",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "tipo_entidad_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_entidad",
                        "value": "[tipo_entidad|id|tipo_entidad_id]",
                        "rel": {
                            "index": "tipo_entidad",
                            "name": "tipo_entidad",
                            "field": "id",
                            "ownfield": "tipo_entidad_id",
                            "array": false
                        }
                    },
                    {
                        "name": "forma_registro",
                        "value": "string"
                    },
                    {
                        "name": "anticipo_regularizar_id",
                        "value": "number"
                    },
                    {
                        "name": "anticipo",
                        "value": "[anticipo|id|anticipo_regularizar_id]",
                        "rel": {
                            "index": "anticipo",
                            "name": "anticipo",
                            "field": "id",
                            "ownfield": "anticipo_regularizar_id",
                            "array": false
                        }
                    },
                    {
                        "name": "monto",
                        "value": "float"
                    },
                    {
                        "name": "ingreso_egreso",
                        "value": "float"
                    },
                    {
                        "name": "saldo",
                        "value": "float"
                    },
                    {
                        "name": "documento_id",
                        "value": "number"
                    },
                    {
                        "name": "documento",
                        "value": "[documento|id|documento_id]",
                        "rel": {
                            "index": "documento",
                            "name": "documento",
                            "field": "id",
                            "ownfield": "documento_id",
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
                        "tipo_entidad_id": "number",
                        "tipo_entidad": "[tipo_entidad|id|tipo_entidad_id]",
                        "forma_registro": "string",
                        "anticipo_regularizar_id": "number",
                        "anticipo": "[anticipo|id|anticipo_regularizar_id]",
                        "monto": "float",
                        "ingreso_egreso": "float",
                        "saldo": "float",
                        "documento_id": "number",
                        "documento": "[documento|id|documento_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "tipo_entidad_id": "number",
                        "tipo_entidad": "[tipo_entidad|id|tipo_entidad_id]",
                        "forma_registro": "string",
                        "anticipo_regularizar_id": "number",
                        "anticipo": "[anticipo|id|anticipo_regularizar_id]",
                        "monto": "float",
                        "ingreso_egreso": "float",
                        "saldo": "float",
                        "documento_id": "number",
                        "documento": "[documento|id|documento_id]"
                    },
                    "insert": {
                        "tipo_entidad_id": "number",
                        "tipo_entidad": "[tipo_entidad|id|tipo_entidad_id]",
                        "forma_registro": "string",
                        "anticipo_regularizar_id": "number",
                        "anticipo": "[anticipo|id|anticipo_regularizar_id]",
                        "monto": "float",
                        "ingreso_egreso": "float",
                        "saldo": "float",
                        "documento_id": "number",
                        "documento": "[documento|id|documento_id]"
                    }
                }
            },
            {
                "name": "medio_forma_pago",
                "alias": "medio_forma_pago",
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
                        "name": "forma_pago_id",
                        "value": "number"
                    },
                    {
                        "name": "forma_pago",
                        "value": "[forma_pago|id|forma_pago_id]",
                        "rel": {
                            "index": "forma_pago",
                            "name": "forma_pago",
                            "field": "id",
                            "ownfield": "forma_pago_id",
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
                        "descripcion": "string",
                        "forma_pago_id": "number",
                        "forma_pago": "[forma_pago|id|forma_pago_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "forma_pago_id": "number",
                        "forma_pago": "[forma_pago|id|forma_pago_id]"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string",
                        "forma_pago_id": "number",
                        "forma_pago": "[forma_pago|id|forma_pago_id]"
                    }
                }
            },
            {
                "name": "caja_banco_medio",
                "alias": "caja_banco_medio",
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
                        "name": "tabla_relacion",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
                    },
                    {
                        "name": "id_relacion",
                        "value": "uuid"
                    },
                    {
                        "name": "medio_forma_pago_id",
                        "value": "number"
                    },
                    {
                        "name": "medio_forma_pago",
                        "value": "[medio_forma_pago|id|medio_forma_pago_id]",
                        "rel": {
                            "index": "medio_forma_pago",
                            "name": "medio_forma_pago",
                            "field": "id",
                            "ownfield": "medio_forma_pago_id",
                            "array": false
                        }
                    },
                    {
                        "name": "caja_banco_transferencia",
                        "value": "[[caja_banco_transferencia|caja_banco_medio_id|id]]",
                        "rel": {
                            "index": "caja_banco_transferencia",
                            "name": "caja_banco_transferencia",
                            "field": "caja_banco_medio_id",
                            "ownfield": "id",
                            "array": true
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
                    },
                    {
                        "method": "GET",
                        "route": ":caja_banco_medio_id/caja_banco_transferencia",
                        "in": null,
                        "rel": "[[caja_banco_transferencia|caja_banco_medio_id|id]]",
                        "type": "rel",
                        "out": "select_caja_banco_transferencia"
                    },
                    {
                        "method": "GET",
                        "route": ":caja_banco_medio_id/caja_banco_transferencia/:id",
                        "in": null,
                        "rel": "[[caja_banco_transferencia|caja_banco_medio_id|id]]",
                        "type": "rel",
                        "out": "select_caja_banco_transferencia"
                    },
                    {
                        "method": "POST",
                        "route": ":caja_banco_medio_id/caja_banco_transferencia",
                        "in": "insert_caja_banco_transferencia",
                        "rel": "[[caja_banco_transferencia|caja_banco_medio_id|id]]",
                        "type": "rel",
                        "out": "select_caja_banco_transferencia"
                    },
                    {
                        "method": "PUT",
                        "route": ":caja_banco_medio_id/caja_banco_transferencia/:id",
                        "in": "insert_caja_banco_transferencia",
                        "rel": "[[caja_banco_transferencia|caja_banco_medio_id|id]]",
                        "type": "rel",
                        "out": "select_caja_banco_transferencia"
                    },
                    {
                        "method": "DELETE",
                        "route": ":caja_banco_medio_id/caja_banco_transferencia/:id",
                        "in": null,
                        "rel": "[[caja_banco_transferencia|caja_banco_medio_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "tabla_relacion": "string",
                        "descripcion": "string",
                        "id_relacion": "uuid",
                        "medio_forma_pago_id": "number",
                        "medio_forma_pago": "[medio_forma_pago|id|medio_forma_pago_id]",
                        "caja_banco_transferencia": "[[caja_banco_transferencia|caja_banco_medio_id|id]]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "tabla_relacion": "string",
                        "descripcion": "string",
                        "id_relacion": "uuid",
                        "medio_forma_pago_id": "number",
                        "medio_forma_pago": "[medio_forma_pago|id|medio_forma_pago_id]",
                        "caja_banco_transferencia": "[[caja_banco_transferencia|caja_banco_medio_id|id]]"
                    },
                    "insert": {
                        "nombre": "string",
                        "tabla_relacion": "string",
                        "descripcion": "string",
                        "id_relacion": "uuid",
                        "medio_forma_pago_id": "number",
                        "medio_forma_pago": "[medio_forma_pago|id|medio_forma_pago_id]",
                        "caja_banco_transferencia": "[[caja_banco_transferencia|caja_banco_medio_id|id]]"
                    },
                    "select_caja_banco_transferencia": {
                        "id": "uuid|pk",
                        "caja_banco_medio_id": "number",
                        "caja_banco_medio": "[caja_banco_medio|id|caja_banco_medio_id]",
                        "medio_transferencia_id": "number",
                        "medio_transferencia": "[medio_transferencia|id|medio_transferencia_id]"
                    },
                    "create_caja_banco_transferencia": {
                        "id": "uuid|pk",
                        "caja_banco_medio_id": "number",
                        "caja_banco_medio": "[caja_banco_medio|id|caja_banco_medio_id]",
                        "medio_transferencia_id": "number",
                        "medio_transferencia": "[medio_transferencia|id|medio_transferencia_id]"
                    },
                    "insert_caja_banco_transferencia": {
                        "caja_banco_medio_id": "number",
                        "caja_banco_medio": "[caja_banco_medio|id|caja_banco_medio_id]",
                        "medio_transferencia_id": "number",
                        "medio_transferencia": "[medio_transferencia|id|medio_transferencia_id]"
                    }
                }
            },
            {
                "name": "caja_banco_transferencia",
                "alias": "caja_banco_transferencia",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "caja_banco_medio_id",
                        "value": "number"
                    },
                    {
                        "name": "caja_banco_medio",
                        "value": "[caja_banco_medio|id|caja_banco_medio_id]",
                        "rel": {
                            "index": "caja_banco_medio",
                            "name": "caja_banco_medio",
                            "field": "id",
                            "ownfield": "caja_banco_medio_id",
                            "array": false
                        }
                    },
                    {
                        "name": "medio_transferencia_id",
                        "value": "number"
                    },
                    {
                        "name": "medio_transferencia",
                        "value": "[medio_transferencia|id|medio_transferencia_id]",
                        "rel": {
                            "index": "medio_transferencia",
                            "name": "medio_transferencia",
                            "field": "id",
                            "ownfield": "medio_transferencia_id",
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
                        "caja_banco_medio_id": "number",
                        "caja_banco_medio": "[caja_banco_medio|id|caja_banco_medio_id]",
                        "medio_transferencia_id": "number",
                        "medio_transferencia": "[medio_transferencia|id|medio_transferencia_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "caja_banco_medio_id": "number",
                        "caja_banco_medio": "[caja_banco_medio|id|caja_banco_medio_id]",
                        "medio_transferencia_id": "number",
                        "medio_transferencia": "[medio_transferencia|id|medio_transferencia_id]"
                    },
                    "insert": {
                        "caja_banco_medio_id": "number",
                        "caja_banco_medio": "[caja_banco_medio|id|caja_banco_medio_id]",
                        "medio_transferencia_id": "number",
                        "medio_transferencia": "[medio_transferencia|id|medio_transferencia_id]"
                    }
                }
            }
        ]
    }
]