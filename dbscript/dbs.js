[
    {
        "db": "trackingdb",
        "groups": [
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
                        "name": "clave",
                        "value": "string"
                    },
                    {
                        "name": "estado",
                        "value": "string"
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-usuarios-1",
                            "admin",
                            "admin",
                            "habilitado"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-usuarios-2",
                            "operador",
                            "operador",
                            "habilitado"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-usuarios-3",
                            "prueba",
                            "prueba",
                            "habilitado"
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
                        "clave": "string",
                        "estado": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "clave": "string",
                        "estado": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "clave": "string",
                        "estado": "string"
                    }
                }
            },
            {
                "name": "personal",
                "alias": "personal",
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
                        "name": "foto",
                        "value": "string"
                    },
                    {
                        "name": "estado",
                        "value": "string"
                    },
                    {
                        "name": "asignaciones",
                        "value": "[[asignaciones|personal_id|id]]",
                        "rel": {
                            "index": "asignaciones",
                            "name": "asignaciones",
                            "field": "personal_id",
                            "ownfield": "id",
                            "array": true
                        }
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-personal-1",
                            "Jorge Tordoya",
                            "JT0021",
                            "",
                            "habilitado"
                        ]
                    }
                ],
                "apicustom": [
                    {
                        "method": "get",
                        "route": "descargar",
                        "query": "",
                        "in": "",
                        "type": "custom",
                        "out": "id,nombre,codigo,estado"
                    },
                    {
                        "method": "get",
                        "route": "applogin",
                        "query": "codigo",
                        "in": "",
                        "type": "custom",
                        "out": "id,nombre,codigo,foto,estado"
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "applogin",
                        "query": "codigo",
                        "in": null,
                        "type": "custom",
                        "out": "custom_applogin"
                    },
                    {
                        "method": "GET",
                        "route": "descargar",
                        "query": "",
                        "in": null,
                        "type": "custom",
                        "out": "custom_descargar"
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
                    },
                    {
                        "method": "GET",
                        "route": ":personal_id/asignaciones",
                        "in": null,
                        "rel": "[[asignaciones|personal_id|id]]",
                        "type": "rel",
                        "out": "select_asignaciones"
                    },
                    {
                        "method": "GET",
                        "route": ":personal_id/asignaciones/:id",
                        "in": null,
                        "rel": "[[asignaciones|personal_id|id]]",
                        "type": "rel",
                        "out": "select_asignaciones"
                    },
                    {
                        "method": "POST",
                        "route": ":personal_id/asignaciones",
                        "in": "insert_asignaciones",
                        "rel": "[[asignaciones|personal_id|id]]",
                        "type": "rel",
                        "out": "select_asignaciones"
                    },
                    {
                        "method": "PUT",
                        "route": ":personal_id/asignaciones/:id",
                        "in": "insert_asignaciones",
                        "rel": "[[asignaciones|personal_id|id]]",
                        "type": "rel",
                        "out": "select_asignaciones"
                    },
                    {
                        "method": "DELETE",
                        "route": ":personal_id/asignaciones/:id",
                        "in": null,
                        "rel": "[[asignaciones|personal_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "codigo": "string",
                        "foto": "string",
                        "estado": "string",
                        "asignaciones": "[[asignaciones|personal_id|id]]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "codigo": "string",
                        "foto": "string",
                        "estado": "string",
                        "asignaciones": "[[asignaciones|personal_id|id]]"
                    },
                    "insert": {
                        "nombre": "string",
                        "codigo": "string",
                        "foto": "string",
                        "estado": "string",
                        "asignaciones": "[[asignaciones|personal_id|id]]"
                    },
                    "custom_descargar": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "codigo": "string",
                        "estado": "string"
                    },
                    "custom_applogin": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "codigo": "string",
                        "foto": "string",
                        "estado": "string"
                    },
                    "select_asignaciones": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "ruta_id": "number",
                        "ruta": "[rutas|id|ruta_id]",
                        "fecha_desde": "date",
                        "fecha_hasta": "date"
                    },
                    "create_asignaciones": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "ruta_id": "number",
                        "ruta": "[rutas|id|ruta_id]",
                        "fecha_desde": "date",
                        "fecha_hasta": "date"
                    },
                    "insert_asignaciones": {
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "ruta_id": "number",
                        "ruta": "[rutas|id|ruta_id]",
                        "fecha_desde": "date",
                        "fecha_hasta": "date"
                    },
                    "custom_descargar_asignaciones": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "ruta_id": "number",
                        "fecha_desde": "date",
                        "fecha_hasta": "date"
                    }
                }
            },
            {
                "name": "dispositivos",
                "alias": "dispositivos",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "info_brand",
                        "value": "string"
                    },
                    {
                        "name": "info_device",
                        "value": "string"
                    },
                    {
                        "name": "info_manufacturer",
                        "value": "string"
                    },
                    {
                        "name": "info_model",
                        "value": "string"
                    },
                    {
                        "name": "info_product",
                        "value": "string"
                    },
                    {
                        "name": "info_serial",
                        "value": "string"
                    },
                    {
                        "name": "info_fingerprint",
                        "value": "string"
                    },
                    {
                        "name": "config_internettest",
                        "value": "number"
                    },
                    {
                        "name": "config_livecapture",
                        "value": "number"
                    },
                    {
                        "name": "config_paramupdate",
                        "value": "number"
                    },
                    {
                        "name": "config_saveoffline",
                        "value": "number"
                    },
                    {
                        "name": "config_saveonline",
                        "value": "number"
                    },
                    {
                        "name": "config_serverapi",
                        "value": "string"
                    },
                    {
                        "name": "config_servertrack",
                        "value": "string"
                    },
                    {
                        "name": "config_trackcapture",
                        "value": "number"
                    },
                    {
                        "name": "config_updatestatus",
                        "value": "number"
                    },
                    {
                        "name": "registred",
                        "value": "boolean"
                    },
                    {
                        "name": "registred_date",
                        "value": "date"
                    },
                    {
                        "name": "last_connect",
                        "value": "date"
                    },
                    {
                        "name": "first_connect",
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
                        "info_brand": "string",
                        "info_device": "string",
                        "info_manufacturer": "string",
                        "info_model": "string",
                        "info_product": "string",
                        "info_serial": "string",
                        "info_fingerprint": "string",
                        "config_internettest": "number",
                        "config_livecapture": "number",
                        "config_paramupdate": "number",
                        "config_saveoffline": "number",
                        "config_saveonline": "number",
                        "config_serverapi": "string",
                        "config_servertrack": "string",
                        "config_trackcapture": "number",
                        "config_updatestatus": "number",
                        "registred": "boolean",
                        "registred_date": "date",
                        "last_connect": "date",
                        "first_connect": "date"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "info_brand": "string",
                        "info_device": "string",
                        "info_manufacturer": "string",
                        "info_model": "string",
                        "info_product": "string",
                        "info_serial": "string",
                        "info_fingerprint": "string",
                        "config_internettest": "number",
                        "config_livecapture": "number",
                        "config_paramupdate": "number",
                        "config_saveoffline": "number",
                        "config_saveonline": "number",
                        "config_serverapi": "string",
                        "config_servertrack": "string",
                        "config_trackcapture": "number",
                        "config_updatestatus": "number",
                        "registred": "boolean",
                        "registred_date": "date",
                        "last_connect": "date",
                        "first_connect": "date"
                    },
                    "insert": {
                        "info_brand": "string",
                        "info_device": "string",
                        "info_manufacturer": "string",
                        "info_model": "string",
                        "info_product": "string",
                        "info_serial": "string",
                        "info_fingerprint": "string",
                        "config_internettest": "number",
                        "config_livecapture": "number",
                        "config_paramupdate": "number",
                        "config_saveoffline": "number",
                        "config_saveonline": "number",
                        "config_serverapi": "string",
                        "config_servertrack": "string",
                        "config_trackcapture": "number",
                        "config_updatestatus": "number",
                        "registred": "boolean",
                        "registred_date": "date",
                        "last_connect": "date",
                        "first_connect": "date"
                    }
                }
            },
            {
                "name": "rutas",
                "alias": "rutas",
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
                        "name": "thumb",
                        "value": "string"
                    },
                    {
                        "name": "min_split_mt",
                        "value": "number"
                    },
                    {
                        "name": "max_split_mt",
                        "value": "number"
                    },
                    {
                        "name": "distancia",
                        "value": "number"
                    }
                ],
                "seeder": [],
                "apicustom": [
                    {
                        "method": "get",
                        "route": "descargar",
                        "query": "",
                        "in": "",
                        "type": "custom",
                        "out": "id,nombre,min_split_mt,max_split_mt,distancia"
                    },
                    {
                        "method": "get",
                        "route": "descargar2",
                        "query": "",
                        "in": "",
                        "type": "custom",
                        "out": "id,nombre,min_split_mt,max_split_mt,distancia,thumb"
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "descargar2",
                        "query": "",
                        "in": null,
                        "type": "custom",
                        "out": "custom_descargar2"
                    },
                    {
                        "method": "GET",
                        "route": "descargar",
                        "query": "",
                        "in": null,
                        "type": "custom",
                        "out": "custom_descargar"
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
                        "thumb": "string",
                        "min_split_mt": "number",
                        "max_split_mt": "number",
                        "distancia": "number"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "thumb": "string",
                        "min_split_mt": "number",
                        "max_split_mt": "number",
                        "distancia": "number"
                    },
                    "insert": {
                        "nombre": "string",
                        "thumb": "string",
                        "min_split_mt": "number",
                        "max_split_mt": "number",
                        "distancia": "number"
                    },
                    "custom_descargar": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "min_split_mt": "number",
                        "max_split_mt": "number",
                        "distancia": "number"
                    },
                    "custom_descargar2": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "min_split_mt": "number",
                        "max_split_mt": "number",
                        "distancia": "number",
                        "thumb": "string"
                    }
                }
            },
            {
                "name": "puntos",
                "alias": "puntos",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "ruta_id",
                        "value": "number"
                    },
                    {
                        "name": "ruta",
                        "value": "[rutas|id|ruta_id]",
                        "rel": {
                            "index": "ruta",
                            "name": "rutas",
                            "field": "id",
                            "ownfield": "ruta_id",
                            "array": false
                        }
                    },
                    {
                        "name": "lat",
                        "value": "number"
                    },
                    {
                        "name": "lon",
                        "value": "number"
                    }
                ],
                "seeder": [],
                "apicustom": [
                    {
                        "method": "get",
                        "route": "descargar",
                        "query": "",
                        "in": "",
                        "type": "custom",
                        "out": "id,ruta_id,lat,lon"
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "descargar",
                        "query": "",
                        "in": null,
                        "type": "custom",
                        "out": "custom_descargar"
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
                        "id": "number|pk",
                        "ruta_id": "number",
                        "ruta": "[rutas|id|ruta_id]",
                        "lat": "number",
                        "lon": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "ruta_id": "number",
                        "ruta": "[rutas|id|ruta_id]",
                        "lat": "number",
                        "lon": "number"
                    },
                    "insert": {
                        "ruta_id": "number",
                        "ruta": "[rutas|id|ruta_id]",
                        "lat": "number",
                        "lon": "number"
                    },
                    "custom_descargar": {
                        "id": "number|pk",
                        "ruta_id": "number",
                        "lat": "number",
                        "lon": "number"
                    }
                }
            },
            {
                "name": "asignaciones",
                "alias": "asignaciones",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "personal_id",
                        "value": "number"
                    },
                    {
                        "name": "personal",
                        "value": "[personal|id|personal_id]",
                        "rel": {
                            "index": "personal",
                            "name": "personal",
                            "field": "id",
                            "ownfield": "personal_id",
                            "array": false
                        }
                    },
                    {
                        "name": "ruta_id",
                        "value": "number"
                    },
                    {
                        "name": "ruta",
                        "value": "[rutas|id|ruta_id]",
                        "rel": {
                            "index": "ruta",
                            "name": "rutas",
                            "field": "id",
                            "ownfield": "ruta_id",
                            "array": false
                        }
                    },
                    {
                        "name": "fecha_desde",
                        "value": "date"
                    },
                    {
                        "name": "fecha_hasta",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [
                    {
                        "method": "get",
                        "route": "descargar",
                        "query": "",
                        "in": "",
                        "type": "custom",
                        "out": "id,personal_id,ruta_id,fecha_desde,fecha_hasta"
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "descargar",
                        "query": "",
                        "in": null,
                        "type": "custom",
                        "out": "custom_descargar"
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
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "ruta_id": "number",
                        "ruta": "[rutas|id|ruta_id]",
                        "fecha_desde": "date",
                        "fecha_hasta": "date"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "ruta_id": "number",
                        "ruta": "[rutas|id|ruta_id]",
                        "fecha_desde": "date",
                        "fecha_hasta": "date"
                    },
                    "insert": {
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "ruta_id": "number",
                        "ruta": "[rutas|id|ruta_id]",
                        "fecha_desde": "date",
                        "fecha_hasta": "date"
                    },
                    "custom_descargar": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "ruta_id": "number",
                        "fecha_desde": "date",
                        "fecha_hasta": "date"
                    }
                }
            },
            {
                "name": "sesion",
                "alias": "sesion",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "personal_id",
                        "value": "number"
                    },
                    {
                        "name": "personal",
                        "value": "[personal|id|personal_id]",
                        "rel": {
                            "index": "personal",
                            "name": "personal",
                            "field": "id",
                            "ownfield": "personal_id",
                            "array": false
                        }
                    },
                    {
                        "name": "dispositivo_id",
                        "value": "number"
                    },
                    {
                        "name": "dispositivo",
                        "value": "[dispositivos|id|dispositivo_id]",
                        "rel": {
                            "index": "dispositivo",
                            "name": "dispositivos",
                            "field": "id",
                            "ownfield": "dispositivo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "login_date",
                        "value": "date"
                    },
                    {
                        "name": "logout_date",
                        "value": "date"
                    },
                    {
                        "name": "inicio_lat",
                        "value": "number"
                    },
                    {
                        "name": "inicio_lon",
                        "value": "number"
                    },
                    {
                        "name": "fin_lat",
                        "value": "number"
                    },
                    {
                        "name": "fin_lon",
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
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "dispositivo_id": "number",
                        "dispositivo": "[dispositivos|id|dispositivo_id]",
                        "login_date": "date",
                        "logout_date": "date",
                        "inicio_lat": "number",
                        "inicio_lon": "number",
                        "fin_lat": "number",
                        "fin_lon": "number"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "dispositivo_id": "number",
                        "dispositivo": "[dispositivos|id|dispositivo_id]",
                        "login_date": "date",
                        "logout_date": "date",
                        "inicio_lat": "number",
                        "inicio_lon": "number",
                        "fin_lat": "number",
                        "fin_lon": "number"
                    },
                    "insert": {
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "dispositivo_id": "number",
                        "dispositivo": "[dispositivos|id|dispositivo_id]",
                        "login_date": "date",
                        "logout_date": "date",
                        "inicio_lat": "number",
                        "inicio_lon": "number",
                        "fin_lat": "number",
                        "fin_lon": "number"
                    }
                }
            },
            {
                "name": "sesion_identificacion",
                "alias": "sesion_identificacion",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "foto",
                        "value": "string"
                    },
                    {
                        "name": "sesion_id",
                        "value": "number"
                    },
                    {
                        "name": "sesion",
                        "value": "[sesion|id|sesion_id]",
                        "rel": {
                            "index": "sesion",
                            "name": "sesion",
                            "field": "id",
                            "ownfield": "sesion_id",
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
                        "foto": "string",
                        "sesion_id": "number",
                        "sesion": "[sesion|id|sesion_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "foto": "string",
                        "sesion_id": "number",
                        "sesion": "[sesion|id|sesion_id]"
                    },
                    "insert": {
                        "foto": "string",
                        "sesion_id": "number",
                        "sesion": "[sesion|id|sesion_id]"
                    }
                }
            },
            {
                "name": "reclamos",
                "alias": "reclamos",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "motivo",
                        "value": "string"
                    },
                    {
                        "name": "foto",
                        "value": "string"
                    },
                    {
                        "name": "fechahora",
                        "value": "date"
                    },
                    {
                        "name": "lat",
                        "value": "number"
                    },
                    {
                        "name": "lon",
                        "value": "number"
                    },
                    {
                        "name": "sesion_id",
                        "value": "number"
                    },
                    {
                        "name": "sesion",
                        "value": "[sesion|id|sesion_id]",
                        "rel": {
                            "index": "sesion",
                            "name": "sesion",
                            "field": "id",
                            "ownfield": "sesion_id",
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
                        "motivo": "string",
                        "foto": "string",
                        "fechahora": "date",
                        "lat": "number",
                        "lon": "number",
                        "sesion_id": "number",
                        "sesion": "[sesion|id|sesion_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "motivo": "string",
                        "foto": "string",
                        "fechahora": "date",
                        "lat": "number",
                        "lon": "number",
                        "sesion_id": "number",
                        "sesion": "[sesion|id|sesion_id]"
                    },
                    "insert": {
                        "motivo": "string",
                        "foto": "string",
                        "fechahora": "date",
                        "lat": "number",
                        "lon": "number",
                        "sesion_id": "number",
                        "sesion": "[sesion|id|sesion_id]"
                    }
                }
            },
            {
                "name": "sugerencias",
                "alias": "sugerencias",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "motivo",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
                    },
                    {
                        "name": "fechahora",
                        "value": "date"
                    },
                    {
                        "name": "foto",
                        "value": "string"
                    },
                    {
                        "name": "sesion_id",
                        "value": "number"
                    },
                    {
                        "name": "sesion",
                        "value": "[sesion|id|sesion_id]",
                        "rel": {
                            "index": "sesion",
                            "name": "sesion",
                            "field": "id",
                            "ownfield": "sesion_id",
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
                        "motivo": "string",
                        "descripcion": "string",
                        "fechahora": "date",
                        "foto": "string",
                        "sesion_id": "number",
                        "sesion": "[sesion|id|sesion_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "motivo": "string",
                        "descripcion": "string",
                        "fechahora": "date",
                        "foto": "string",
                        "sesion_id": "number",
                        "sesion": "[sesion|id|sesion_id]"
                    },
                    "insert": {
                        "motivo": "string",
                        "descripcion": "string",
                        "fechahora": "date",
                        "foto": "string",
                        "sesion_id": "number",
                        "sesion": "[sesion|id|sesion_id]"
                    }
                }
            },
            {
                "name": "trayectos",
                "alias": "trayectos",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "asignacion_id",
                        "value": "number"
                    },
                    {
                        "name": "asignacion",
                        "value": "[asignaciones|id|asignacion_id]",
                        "rel": {
                            "index": "asignacion",
                            "name": "asignaciones",
                            "field": "id",
                            "ownfield": "asignacion_id",
                            "array": false
                        }
                    },
                    {
                        "name": "sesion_id",
                        "value": "number"
                    },
                    {
                        "name": "sesion",
                        "value": "[sesion|id|sesion_id]",
                        "rel": {
                            "index": "sesion",
                            "name": "sesion",
                            "field": "id",
                            "ownfield": "sesion_id",
                            "array": false
                        }
                    },
                    {
                        "name": "inicio",
                        "value": "date"
                    },
                    {
                        "name": "fin",
                        "value": "date"
                    },
                    {
                        "name": "rutab64",
                        "value": "string"
                    },
                    {
                        "name": "trackb64",
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
                        "asignacion_id": "number",
                        "asignacion": "[asignaciones|id|asignacion_id]",
                        "sesion_id": "number",
                        "sesion": "[sesion|id|sesion_id]",
                        "inicio": "date",
                        "fin": "date",
                        "rutab64": "string",
                        "trackb64": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "asignacion_id": "number",
                        "asignacion": "[asignaciones|id|asignacion_id]",
                        "sesion_id": "number",
                        "sesion": "[sesion|id|sesion_id]",
                        "inicio": "date",
                        "fin": "date",
                        "rutab64": "string",
                        "trackb64": "string"
                    },
                    "insert": {
                        "asignacion_id": "number",
                        "asignacion": "[asignaciones|id|asignacion_id]",
                        "sesion_id": "number",
                        "sesion": "[sesion|id|sesion_id]",
                        "inicio": "date",
                        "fin": "date",
                        "rutab64": "string",
                        "trackb64": "string"
                    }
                }
            }
        ]
    }
]