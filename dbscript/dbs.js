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
                        "data": "create",
                        "values": [
                            "uuid-grupos-1",
                            "Activo",
                            "1",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-grupos-2",
                            "Pasivo",
                            "2",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-grupos-3",
                            "Patrimonio",
                            "3",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-grupos-4",
                            "Ingreso",
                            "4",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-grupos-5",
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
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-cuentas-1",
                            "Diesel",
                            "5.12.2.2",
                            "0",
                            "true",
                            "true",
                            "1",
                            "",
                            "uuid-grupos-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-cuentas-2",
                            "Otros Combustibles",
                            "5.12.2.3",
                            "0",
                            "true",
                            "true",
                            "1",
                            "",
                            "uuid-grupos-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-cuentas-3",
                            "Herramientas de trabajo",
                            "5.12.4.2",
                            "0",
                            "true",
                            "true",
                            "1",
                            "",
                            "uuid-grupos-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-cuentas-4",
                            "Servicios Externos",
                            "5.12.5.2",
                            "0",
                            "true",
                            "true",
                            "1",
                            "",
                            "uuid-grupos-1"
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
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-1",
                            "CONTABILIDAD",
                            "Módulo de contabilidad",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-2",
                            "COMPRAS",
                            "Módulo de compras",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-3",
                            "VENTAS",
                            "Módulo de ventas",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-4",
                            "INVENTARIO",
                            "Módulo de inventario",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-5",
                            "TESORERÍA",
                            "Módulo de tesoreria",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-6",
                            "RECURSOS HUMANOS",
                            "Módulo de recursos humanos",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-7",
                            "ACTIVOS FIJOS",
                            "Módulo de activos fijos",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-8",
                            "PRESUPUESTOS",
                            "Módulo de presupuestos",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-9",
                            "PRODUCCIÓN",
                            "Módulo de producción",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-10",
                            "CENTRO DE COSTOS",
                            "Módulo de centro de costos",
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
                        "estado": "boolean"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "estado": "boolean"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string",
                        "estado": "boolean"
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
                        "route": "por_modulo",
                        "query": "modulo_id",
                        "in": "",
                        "type": "custom",
                        "out": "select"
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "por_modulo",
                        "query": "modulo_id",
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
                        "modulo": "[modulos|id|modulo_id]",
                        "glosa": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "modulo_id": "number",
                        "modulo": "[modulos|id|modulo_id]",
                        "glosa": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "modulo_id": "number",
                        "modulo": "[modulos|id|modulo_id]",
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
                "name": "asiento_tipo_centrocostos",
                "alias": "asiento_tipo_centrocostos",
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
                "apicustom": [
                    {
                        "method": "get",
                        "route": "por_asiento_tipo",
                        "query": "asiento_tipo_id",
                        "in": "",
                        "type": "custom",
                        "out": "select"
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "por_asiento_tipo",
                        "query": "asiento_tipo_id",
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
                "name": "asiento_tipo_tipo_comprobante",
                "alias": "asiento_tipo_tipo_comprobante",
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
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-asientottcom-1",
                            "uuid-tcompr-1",
                            "uuid-asientot-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-asientottcom-2",
                            "uuid-tcompr-2",
                            "uuid-asientot-1"
                        ]
                    }
                ],
                "apicustom": [
                    {
                        "method": "get",
                        "route": "por_asiento_tipo",
                        "query": "asiento_tipo_id",
                        "in": "",
                        "type": "custom",
                        "out": "select"
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "por_asiento_tipo",
                        "query": "asiento_tipo_id",
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
                "apicustom": [
                    {
                        "method": "get",
                        "route": "por_asiento_tipo",
                        "query": "asiento_tipo_id",
                        "in": "",
                        "type": "custom",
                        "out": "select"
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "por_asiento_tipo",
                        "query": "asiento_tipo_id",
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
                "apicustom": [
                    {
                        "method": "get",
                        "route": "por_tipo_composicion",
                        "query": "asiento_tipo_composicion_id",
                        "in": "",
                        "type": "custom",
                        "out": "select"
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "por_tipo_composicion",
                        "query": "asiento_tipo_composicion_id",
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
                        "data": "create",
                        "values": [
                            "uuid-tcompr-1",
                            "INGRESO",
                            "I",
                            "true",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tcompr-2",
                            "EGRESO",
                            "E",
                            "true",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tcompr-3",
                            "TRASPASO",
                            "T",
                            "true",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tcompr-4",
                            "AJUSTE",
                            "A",
                            "true",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tcompr-5",
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
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-usos-8",
                            "Gasto"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-usos-9",
                            "Inventario"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-usos-10",
                            "Activo Fijo"
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
                "name": "api_usos",
                "alias": "api_usos",
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
                        "name": "api",
                        "value": "string"
                    },
                    {
                        "name": "route",
                        "value": "string"
                    },
                    {
                        "name": "bind_id",
                        "value": "string"
                    },
                    {
                        "name": "bind_label",
                        "value": "string"
                    },
                    {
                        "name": "bind_tree_id",
                        "value": "string"
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-ausos-1",
                            "Grupo Ítem - Presentación",
                            "compras",
                            "/items",
                            "id",
                            "nombre",
                            "supitem_id"
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
                        "api": "string",
                        "route": "string",
                        "bind_id": "string",
                        "bind_label": "string",
                        "bind_tree_id": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "api": "string",
                        "route": "string",
                        "bind_id": "string",
                        "bind_label": "string",
                        "bind_tree_id": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "api": "string",
                        "route": "string",
                        "bind_id": "string",
                        "bind_label": "string",
                        "bind_tree_id": "string"
                    }
                }
            },
            {
                "name": "api_usos_composicion",
                "alias": "api_usos_composicion",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "api_uso_id",
                        "value": "number"
                    },
                    {
                        "name": "api_uso",
                        "value": "[api_usos|id|api_uso_id]",
                        "rel": {
                            "index": "api_uso",
                            "name": "api_usos",
                            "field": "id",
                            "ownfield": "api_uso_id",
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
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-aucomp-1",
                            "uuid-ausos-1",
                            "uuid-tcomp-1"
                        ]
                    }
                ],
                "apicustom": [
                    {
                        "method": "get",
                        "route": "por_tipo_composicion",
                        "query": "asiento_tipo_composicion_id",
                        "in": "",
                        "type": "custom",
                        "out": "select"
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "por_tipo_composicion",
                        "query": "asiento_tipo_composicion_id",
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
                        "api_uso_id": "number",
                        "api_uso": "[api_usos|id|api_uso_id]",
                        "asiento_tipo_composicion_id": "number",
                        "asiento_tipo_composicion": "[asiento_tipo_composiciones|id|asiento_tipo_composicion_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "api_uso_id": "number",
                        "api_uso": "[api_usos|id|api_uso_id]",
                        "asiento_tipo_composicion_id": "number",
                        "asiento_tipo_composicion": "[asiento_tipo_composiciones|id|asiento_tipo_composicion_id]"
                    },
                    "insert": {
                        "api_uso_id": "number",
                        "api_uso": "[api_usos|id|api_uso_id]",
                        "asiento_tipo_composicion_id": "number",
                        "asiento_tipo_composicion": "[asiento_tipo_composiciones|id|asiento_tipo_composicion_id]"
                    }
                }
            },
            {
                "name": "tipo_usos_composicion",
                "alias": "tipo_usos_composicion",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
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
                        "name": "debe_haber",
                        "value": "boolean"
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
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-tucomp-1",
                            "uuid-usos-3",
                            "false",
                            "uuid-tcomp-2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tucomp-2",
                            "uuid-usos-4",
                            "false",
                            "uuid-tcomp-2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tucomp-3",
                            "uuid-usos-5",
                            "false",
                            "uuid-tcomp-2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tucomp-4",
                            "uuid-usos-8",
                            "false",
                            "uuid-tcomp-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tucomp-5",
                            "uuid-usos-9",
                            "false",
                            "uuid-tcomp-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tucomp-6",
                            "uuid-usos-10",
                            "false",
                            "uuid-tcomp-1"
                        ]
                    }
                ],
                "apicustom": [
                    {
                        "method": "get",
                        "route": "por_tipo_composicion",
                        "query": "asiento_tipo_composicion_id",
                        "in": "",
                        "type": "custom",
                        "out": "select"
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "por_tipo_composicion",
                        "query": "asiento_tipo_composicion_id",
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
                        "tipo_uso_id": "number",
                        "tipo_uso": "[tipo_usos|id|tipo_uso_id]",
                        "debe_haber": "boolean",
                        "asiento_tipo_composicion_id": "number",
                        "asiento_tipo_composicion": "[asiento_tipo_composiciones|id|asiento_tipo_composicion_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "tipo_uso_id": "number",
                        "tipo_uso": "[tipo_usos|id|tipo_uso_id]",
                        "debe_haber": "boolean",
                        "asiento_tipo_composicion_id": "number",
                        "asiento_tipo_composicion": "[asiento_tipo_composiciones|id|asiento_tipo_composicion_id]"
                    },
                    "insert": {
                        "tipo_uso_id": "number",
                        "tipo_uso": "[tipo_usos|id|tipo_uso_id]",
                        "debe_haber": "boolean",
                        "asiento_tipo_composicion_id": "number",
                        "asiento_tipo_composicion": "[asiento_tipo_composiciones|id|asiento_tipo_composicion_id]"
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
        "db": "compras",
        "groups": [
            {
                "name": "items",
                "alias": "items",
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
                        "name": "supitem_id",
                        "value": "number"
                    },
                    {
                        "name": "supitem",
                        "value": "[items|id|supitem_id]",
                        "rel": {
                            "index": "supitem",
                            "name": "items",
                            "field": "id",
                            "ownfield": "supitem_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-items-1",
                            "Lacteos",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-items-2",
                            "Repuestos",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-items-3",
                            "Leche",
                            "uuid-items-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-items-4",
                            "Polvo",
                            "uuid-items-3"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-items-5",
                            "1 Litro",
                            "uuid-items-3"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-items-6",
                            "Yogurt",
                            "uuid-items-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-items-7",
                            "Natural",
                            "uuid-items-6"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-items-8",
                            "Saborizado",
                            "uuid-items-6"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-items-9",
                            "Vehiculos",
                            "uuid-items-2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-items-10",
                            "Llantas",
                            "uuid-items-2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-items-11",
                            "Insumos",
                            "uuid-items-2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-items-12",
                            "Tornillos",
                            "uuid-items-2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-items-13",
                            "Llantas de acero",
                            "uuid-items-9"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-items-14",
                            "Llantas de magnesio",
                            "uuid-items-9"
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
                        "supitem_id": "number",
                        "supitem": "[items|id|supitem_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "supitem_id": "number",
                        "supitem": "[items|id|supitem_id]"
                    },
                    "insert": {
                        "nombre": "string",
                        "supitem_id": "number",
                        "supitem": "[items|id|supitem_id]"
                    }
                }
            }
        ]
    }
]