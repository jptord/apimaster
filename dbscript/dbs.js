[
    {
        "db": "trackingdb",
        "groups": [
            {
                "name": "user_states",
                "alias": "user_states",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "name",
                        "value": "string"
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "1",
                            "Habilitado"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "2",
                            "Deshabilitado"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "3",
                            "Eliminado"
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
                        "id": "number|pk",
                        "name": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string"
                    },
                    "insert": {
                        "name": "string"
                    }
                }
            },
            {
                "name": "user_type",
                "alias": "user_type",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "name",
                        "value": "string"
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "1",
                            "Administrador"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "2",
                            "Operador"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "3",
                            "Monitor"
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
                        "id": "number|pk",
                        "name": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string"
                    },
                    "insert": {
                        "name": "string"
                    }
                }
            },
            {
                "name": "images",
                "alias": "images",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "base64",
                        "value": "string"
                    },
                    {
                        "name": "path",
                        "value": "string"
                    },
                    {
                        "name": "create_date",
                        "value": "date"
                    },
                    {
                        "name": "update_date",
                        "value": "date"
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-images-1",
                            "",
                            "",
                            "1719099774",
                            "1719099774"
                        ]
                    }
                ],
                "apicustom": [
                    {
                        "method": "post",
                        "route": "sync",
                        "query": "",
                        "in": "select",
                        "type": "custom",
                        "out": "id"
                    }
                ],
                "apis": [
                    {
                        "method": "POST",
                        "route": "sync",
                        "query": "",
                        "in": "select",
                        "type": "custom",
                        "out": "custom_sync"
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
                        "base64": "string",
                        "path": "string",
                        "create_date": "date",
                        "update_date": "date"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "base64": "string",
                        "path": "string",
                        "create_date": "date",
                        "update_date": "date"
                    },
                    "insert": {
                        "base64": "string",
                        "path": "string",
                        "create_date": "date",
                        "update_date": "date"
                    },
                    "custom_sync": {
                        "id": "uuid|pk"
                    }
                }
            },
            {
                "name": "personal_types",
                "alias": "personal_types",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "1",
                            "Operador"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "2",
                            "Supervisor"
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
                        "id": "number|pk"
                    },
                    "create": {
                        "id": "number|pk"
                    },
                    "insert": {}
                }
            },
            {
                "name": "devices",
                "alias": "devices",
                "fields": [
                    {
                        "name": "id",
                        "value": "string|pk"
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
                "apicustom": [
                    {
                        "method": "post",
                        "route": "sync",
                        "query": "",
                        "in": "select",
                        "type": "custom",
                        "out": "id"
                    }
                ],
                "apis": [
                    {
                        "method": "POST",
                        "route": "sync",
                        "query": "",
                        "in": "select",
                        "type": "custom",
                        "out": "custom_sync"
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
                        "id": "string|pk",
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
                        "id": "string|pk",
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
                    },
                    "custom_sync": {
                        "id": "string|pk"
                    }
                }
            },
            {
                "name": "district",
                "alias": "district",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "name",
                        "value": "string"
                    },
                    {
                        "name": "color",
                        "value": "string"
                    },
                    {
                        "name": "points",
                        "value": "[[district_points|district_id|id]]",
                        "rel": {
                            "index": "points",
                            "name": "district_points",
                            "field": "district_id",
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
                        "route": ":district_id/district_points",
                        "in": null,
                        "rel": "[[district_points|district_id|id]]",
                        "type": "rel",
                        "out": "select_district_points"
                    },
                    {
                        "method": "GET",
                        "route": ":district_id/district_points/:id",
                        "in": null,
                        "rel": "[[district_points|district_id|id]]",
                        "type": "rel",
                        "out": "select_district_points"
                    },
                    {
                        "method": "POST",
                        "route": ":district_id/district_points",
                        "in": "insert_district_points",
                        "rel": "[[district_points|district_id|id]]",
                        "type": "rel",
                        "out": "select_district_points"
                    },
                    {
                        "method": "PUT",
                        "route": ":district_id/district_points/:id",
                        "in": "insert_district_points",
                        "rel": "[[district_points|district_id|id]]",
                        "type": "rel",
                        "out": "select_district_points"
                    },
                    {
                        "method": "DELETE",
                        "route": ":district_id/district_points/:id",
                        "in": null,
                        "rel": "[[district_points|district_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "name": "string",
                        "color": "string",
                        "points": "[[district_points|district_id|id]]"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "color": "string",
                        "points": "[[district_points|district_id|id]]"
                    },
                    "insert": {
                        "name": "string",
                        "color": "string",
                        "points": "[[district_points|district_id|id]]"
                    },
                    "select_district_points": {
                        "id": "number|pk",
                        "district_id": "number",
                        "district": "[district|id|district_id]",
                        "lat": "number",
                        "lon": "number"
                    },
                    "create_district_points": {
                        "id": "number|pk",
                        "district_id": "number",
                        "district": "[district|id|district_id]",
                        "lat": "number",
                        "lon": "number"
                    },
                    "insert_district_points": {
                        "district_id": "number",
                        "district": "[district|id|district_id]",
                        "lat": "number",
                        "lon": "number"
                    }
                }
            },
            {
                "name": "district_points",
                "alias": "district_points",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "district_id",
                        "value": "number"
                    },
                    {
                        "name": "district",
                        "value": "[district|id|district_id]",
                        "rel": {
                            "index": "district",
                            "name": "district",
                            "field": "id",
                            "ownfield": "district_id",
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
                        "district_id": "number",
                        "district": "[district|id|district_id]",
                        "lat": "number",
                        "lon": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "district_id": "number",
                        "district": "[district|id|district_id]",
                        "lat": "number",
                        "lon": "number"
                    },
                    "insert": {
                        "district_id": "number",
                        "district": "[district|id|district_id]",
                        "lat": "number",
                        "lon": "number"
                    }
                }
            },
            {
                "name": "schedule",
                "alias": "schedule",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "name",
                        "value": "string"
                    },
                    {
                        "name": "frecuency",
                        "value": "[[schedule_frecuency|schedule_id|id]]",
                        "rel": {
                            "index": "frecuency",
                            "name": "schedule_frecuency",
                            "field": "schedule_id",
                            "ownfield": "id",
                            "array": true
                        }
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "1",
                            "Mañana"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "2",
                            "Tarde"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "3",
                            "Noche"
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
                    },
                    {
                        "method": "GET",
                        "route": ":schedule_id/schedule_frecuency",
                        "in": null,
                        "rel": "[[schedule_frecuency|schedule_id|id]]",
                        "type": "rel",
                        "out": "select_schedule_frecuency"
                    },
                    {
                        "method": "GET",
                        "route": ":schedule_id/schedule_frecuency/:id",
                        "in": null,
                        "rel": "[[schedule_frecuency|schedule_id|id]]",
                        "type": "rel",
                        "out": "select_schedule_frecuency"
                    },
                    {
                        "method": "POST",
                        "route": ":schedule_id/schedule_frecuency",
                        "in": "insert_schedule_frecuency",
                        "rel": "[[schedule_frecuency|schedule_id|id]]",
                        "type": "rel",
                        "out": "select_schedule_frecuency"
                    },
                    {
                        "method": "PUT",
                        "route": ":schedule_id/schedule_frecuency/:id",
                        "in": "insert_schedule_frecuency",
                        "rel": "[[schedule_frecuency|schedule_id|id]]",
                        "type": "rel",
                        "out": "select_schedule_frecuency"
                    },
                    {
                        "method": "DELETE",
                        "route": ":schedule_id/schedule_frecuency/:id",
                        "in": null,
                        "rel": "[[schedule_frecuency|schedule_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "name": "string",
                        "frecuency": "[[schedule_frecuency|schedule_id|id]]"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "frecuency": "[[schedule_frecuency|schedule_id|id]]"
                    },
                    "insert": {
                        "name": "string",
                        "frecuency": "[[schedule_frecuency|schedule_id|id]]"
                    },
                    "select_schedule_frecuency": {
                        "id": "uuid|pk",
                        "schedule_id": "number",
                        "schedule": "[schedule|id|schedule_id]",
                        "start_time": "date",
                        "end_time": "date",
                        "weekday": "number"
                    },
                    "create_schedule_frecuency": {
                        "id": "uuid|pk",
                        "schedule_id": "number",
                        "schedule": "[schedule|id|schedule_id]",
                        "start_time": "date",
                        "end_time": "date",
                        "weekday": "number"
                    },
                    "insert_schedule_frecuency": {
                        "schedule_id": "number",
                        "schedule": "[schedule|id|schedule_id]",
                        "start_time": "date",
                        "end_time": "date",
                        "weekday": "number"
                    }
                }
            },
            {
                "name": "state_types",
                "alias": "state_types",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "name",
                        "value": "string"
                    },
                    {
                        "name": "description",
                        "value": "string"
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "1",
                            "Iniciado",
                            "Estado inicial al crear que no se repite"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "2",
                            "Proceso",
                            "Estado que se puede continuar con cualquier estado menos iniciado"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "3",
                            "Anulado",
                            "Estado de finalizacion no tiene otros estados siguientes"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "4",
                            "Terminado",
                            "Estado de finalizacion no tiene otros estados siguientes"
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
                        "id": "number|pk",
                        "name": "string",
                        "description": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "description": "string"
                    },
                    "insert": {
                        "name": "string",
                        "description": "string"
                    }
                }
            },
            {
                "name": "schedule_frecuency",
                "alias": "schedule_frecuency",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "schedule_id",
                        "value": "number"
                    },
                    {
                        "name": "schedule",
                        "value": "[schedule|id|schedule_id]",
                        "rel": {
                            "index": "schedule",
                            "name": "schedule",
                            "field": "id",
                            "ownfield": "schedule_id",
                            "array": false
                        }
                    },
                    {
                        "name": "start_time",
                        "value": "date"
                    },
                    {
                        "name": "end_time",
                        "value": "date"
                    },
                    {
                        "name": "weekday",
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
                        "schedule_id": "number",
                        "schedule": "[schedule|id|schedule_id]",
                        "start_time": "date",
                        "end_time": "date",
                        "weekday": "number"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "schedule_id": "number",
                        "schedule": "[schedule|id|schedule_id]",
                        "start_time": "date",
                        "end_time": "date",
                        "weekday": "number"
                    },
                    "insert": {
                        "schedule_id": "number",
                        "schedule": "[schedule|id|schedule_id]",
                        "start_time": "date",
                        "end_time": "date",
                        "weekday": "number"
                    }
                }
            },
            {
                "name": "emergency_states",
                "alias": "emergency_states",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "name",
                        "value": "string"
                    },
                    {
                        "name": "description",
                        "value": "string"
                    },
                    {
                        "name": "color",
                        "value": "string"
                    },
                    {
                        "name": "duration",
                        "value": "number"
                    },
                    {
                        "name": "state_type_id",
                        "value": "number"
                    },
                    {
                        "name": "state_type",
                        "value": "[state_types|id|state_type_id]",
                        "rel": {
                            "index": "state_type",
                            "name": "state_types",
                            "field": "id",
                            "ownfield": "state_type_id",
                            "array": false
                        }
                    },
                    {
                        "name": "next_states",
                        "value": "[[emergency_next_states|emergency_state_id|id]]",
                        "rel": {
                            "index": "next_states",
                            "name": "emergency_next_states",
                            "field": "emergency_state_id",
                            "ownfield": "id",
                            "array": true
                        }
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "1",
                            "Emergencia Recibida",
                            "Se recibió una emergencia",
                            "#00ff00",
                            "0",
                            "1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "2",
                            "Atendiendo Emergencia",
                            "Se recibió una emergencia",
                            "#00ff00",
                            "0",
                            "2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "3",
                            "Buscando supervisor",
                            "Se recibió una emergencia",
                            "#00ff00",
                            "0",
                            "2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "4",
                            "Derivando",
                            "",
                            "#00ff00",
                            "0",
                            "2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "5",
                            "Otros",
                            "",
                            "#00ff00",
                            "0",
                            "2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "6",
                            "Anulada",
                            "",
                            "#00ff00",
                            "0",
                            "3"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "7",
                            "Atendida y finalizada",
                            "",
                            "#00ff00",
                            "0",
                            "4"
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
                    },
                    {
                        "method": "GET",
                        "route": ":emergency_state_id/emergency_next_states",
                        "in": null,
                        "rel": "[[emergency_next_states|emergency_state_id|id]]",
                        "type": "rel",
                        "out": "select_emergency_next_states"
                    },
                    {
                        "method": "GET",
                        "route": ":emergency_state_id/emergency_next_states/:id",
                        "in": null,
                        "rel": "[[emergency_next_states|emergency_state_id|id]]",
                        "type": "rel",
                        "out": "select_emergency_next_states"
                    },
                    {
                        "method": "POST",
                        "route": ":emergency_state_id/emergency_next_states",
                        "in": "insert_emergency_next_states",
                        "rel": "[[emergency_next_states|emergency_state_id|id]]",
                        "type": "rel",
                        "out": "select_emergency_next_states"
                    },
                    {
                        "method": "PUT",
                        "route": ":emergency_state_id/emergency_next_states/:id",
                        "in": "insert_emergency_next_states",
                        "rel": "[[emergency_next_states|emergency_state_id|id]]",
                        "type": "rel",
                        "out": "select_emergency_next_states"
                    },
                    {
                        "method": "DELETE",
                        "route": ":emergency_state_id/emergency_next_states/:id",
                        "in": null,
                        "rel": "[[emergency_next_states|emergency_state_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "name": "string",
                        "description": "string",
                        "color": "string",
                        "duration": "number",
                        "state_type_id": "number",
                        "state_type": "[state_types|id|state_type_id]",
                        "next_states": "[[emergency_next_states|emergency_state_id|id]]"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "description": "string",
                        "color": "string",
                        "duration": "number",
                        "state_type_id": "number",
                        "state_type": "[state_types|id|state_type_id]",
                        "next_states": "[[emergency_next_states|emergency_state_id|id]]"
                    },
                    "insert": {
                        "name": "string",
                        "description": "string",
                        "color": "string",
                        "duration": "number",
                        "state_type_id": "number",
                        "state_type": "[state_types|id|state_type_id]",
                        "next_states": "[[emergency_next_states|emergency_state_id|id]]"
                    },
                    "select_emergency_next_states": {
                        "id": "number|pk",
                        "emergency_state_id": "number",
                        "emergency_state": "[emergency_states|id|emergency_state_id]",
                        "emergency_next_state_id": "number",
                        "emergency_next_state": "[emergency_states|id|emergency_state_id]"
                    },
                    "create_emergency_next_states": {
                        "id": "number|pk",
                        "emergency_state_id": "number",
                        "emergency_state": "[emergency_states|id|emergency_state_id]",
                        "emergency_next_state_id": "number",
                        "emergency_next_state": "[emergency_states|id|emergency_state_id]"
                    },
                    "insert_emergency_next_states": {
                        "emergency_state_id": "number",
                        "emergency_state": "[emergency_states|id|emergency_state_id]",
                        "emergency_next_state_id": "number",
                        "emergency_next_state": "[emergency_states|id|emergency_state_id]"
                    }
                }
            },
            {
                "name": "claim_states",
                "alias": "claim_states",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "name",
                        "value": "string"
                    },
                    {
                        "name": "description",
                        "value": "string"
                    },
                    {
                        "name": "color",
                        "value": "string"
                    },
                    {
                        "name": "duration",
                        "value": "number"
                    },
                    {
                        "name": "state_type_id",
                        "value": "number"
                    },
                    {
                        "name": "state_type",
                        "value": "[state_types|id|state_type_id]",
                        "rel": {
                            "index": "state_type",
                            "name": "state_types",
                            "field": "id",
                            "ownfield": "state_type_id",
                            "array": false
                        }
                    },
                    {
                        "name": "next_states",
                        "value": "[[claim_next_states|claim_state_id|id]]",
                        "rel": {
                            "index": "next_states",
                            "name": "claim_next_states",
                            "field": "claim_state_id",
                            "ownfield": "id",
                            "array": true
                        }
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "1",
                            "Reclamo Recibido",
                            "Se recibió un reclamo",
                            "#00ff00",
                            "0",
                            "1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "2",
                            "Atendiendo Emergencia",
                            "Se recibió un reclamo",
                            "#00ff00",
                            "0",
                            "2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "3",
                            "Buscando supervisor",
                            "Se recibió un reclamo",
                            "#00ff00",
                            "0",
                            "2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "4",
                            "Derivando",
                            "",
                            "#00ff00",
                            "0",
                            "2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "5",
                            "Otros",
                            "",
                            "#00ff00",
                            "0",
                            "2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "6",
                            "Anulada",
                            "",
                            "#00ff00",
                            "0",
                            "3"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "7",
                            "Atendida y finalizada",
                            "",
                            "#00ff00",
                            "0",
                            "4"
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
                    },
                    {
                        "method": "GET",
                        "route": ":claim_state_id/claim_next_states",
                        "in": null,
                        "rel": "[[claim_next_states|claim_state_id|id]]",
                        "type": "rel",
                        "out": "select_claim_next_states"
                    },
                    {
                        "method": "GET",
                        "route": ":claim_state_id/claim_next_states/:id",
                        "in": null,
                        "rel": "[[claim_next_states|claim_state_id|id]]",
                        "type": "rel",
                        "out": "select_claim_next_states"
                    },
                    {
                        "method": "POST",
                        "route": ":claim_state_id/claim_next_states",
                        "in": "insert_claim_next_states",
                        "rel": "[[claim_next_states|claim_state_id|id]]",
                        "type": "rel",
                        "out": "select_claim_next_states"
                    },
                    {
                        "method": "PUT",
                        "route": ":claim_state_id/claim_next_states/:id",
                        "in": "insert_claim_next_states",
                        "rel": "[[claim_next_states|claim_state_id|id]]",
                        "type": "rel",
                        "out": "select_claim_next_states"
                    },
                    {
                        "method": "DELETE",
                        "route": ":claim_state_id/claim_next_states/:id",
                        "in": null,
                        "rel": "[[claim_next_states|claim_state_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "number|pk",
                        "name": "string",
                        "description": "string",
                        "color": "string",
                        "duration": "number",
                        "state_type_id": "number",
                        "state_type": "[state_types|id|state_type_id]",
                        "next_states": "[[claim_next_states|claim_state_id|id]]"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "description": "string",
                        "color": "string",
                        "duration": "number",
                        "state_type_id": "number",
                        "state_type": "[state_types|id|state_type_id]",
                        "next_states": "[[claim_next_states|claim_state_id|id]]"
                    },
                    "insert": {
                        "name": "string",
                        "description": "string",
                        "color": "string",
                        "duration": "number",
                        "state_type_id": "number",
                        "state_type": "[state_types|id|state_type_id]",
                        "next_states": "[[claim_next_states|claim_state_id|id]]"
                    },
                    "select_claim_next_states": {
                        "id": "number|pk",
                        "claim_state_id": "number",
                        "claim_state": "[claim_states|id|claim_state_id]",
                        "claim_next_state_id": "number",
                        "claim_next_state": "[claim_states|id|claim_state_id]"
                    },
                    "create_claim_next_states": {
                        "id": "number|pk",
                        "claim_state_id": "number",
                        "claim_state": "[claim_states|id|claim_state_id]",
                        "claim_next_state_id": "number",
                        "claim_next_state": "[claim_states|id|claim_state_id]"
                    },
                    "insert_claim_next_states": {
                        "claim_state_id": "number",
                        "claim_state": "[claim_states|id|claim_state_id]",
                        "claim_next_state_id": "number",
                        "claim_next_state": "[claim_states|id|claim_state_id]"
                    }
                }
            },
            {
                "name": "users",
                "alias": "users",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "name",
                        "value": "string"
                    },
                    {
                        "name": "password",
                        "value": "string"
                    },
                    {
                        "name": "state_id",
                        "value": "string"
                    },
                    {
                        "name": "state",
                        "value": "[user_states|id|state_id]",
                        "rel": {
                            "index": "state",
                            "name": "user_states",
                            "field": "id",
                            "ownfield": "state_id",
                            "array": false
                        }
                    },
                    {
                        "name": "user_type_id",
                        "value": "number"
                    },
                    {
                        "name": "user_type",
                        "value": "[user_type|id|user_type_id]",
                        "rel": {
                            "index": "user_type",
                            "name": "user_type",
                            "field": "id",
                            "ownfield": "user_type_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-users-1",
                            "admin",
                            "admin",
                            "1",
                            "1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-users-2",
                            "operador",
                            "operador",
                            "1",
                            "2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-users-3",
                            "prueba",
                            "prueba",
                            "2",
                            "2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-users-4",
                            "monitor",
                            "monitor",
                            "3",
                            "3"
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
                        "name": "string",
                        "password": "string",
                        "state_id": "string",
                        "state": "[user_states|id|state_id]",
                        "user_type_id": "number",
                        "user_type": "[user_type|id|user_type_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "name": "string",
                        "password": "string",
                        "state_id": "string",
                        "state": "[user_states|id|state_id]",
                        "user_type_id": "number",
                        "user_type": "[user_type|id|user_type_id]"
                    },
                    "insert": {
                        "name": "string",
                        "password": "string",
                        "state_id": "string",
                        "state": "[user_states|id|state_id]",
                        "user_type_id": "number",
                        "user_type": "[user_type|id|user_type_id]"
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
                        "name": "name",
                        "value": "string"
                    },
                    {
                        "name": "code",
                        "value": "string"
                    },
                    {
                        "name": "image_id",
                        "value": "number"
                    },
                    {
                        "name": "image",
                        "value": "[images|id|image_id]",
                        "rel": {
                            "index": "image",
                            "name": "images",
                            "field": "id",
                            "ownfield": "image_id",
                            "array": false
                        }
                    },
                    {
                        "name": "personal_type_id",
                        "value": "number"
                    },
                    {
                        "name": "personal_type",
                        "value": "[personal_types|id|personal_type_id]",
                        "rel": {
                            "index": "personal_type",
                            "name": "personal_types",
                            "field": "id",
                            "ownfield": "personal_type_id",
                            "array": false
                        }
                    },
                    {
                        "name": "create_date",
                        "value": "date"
                    },
                    {
                        "name": "update_date",
                        "value": "date"
                    },
                    {
                        "name": "assignments",
                        "value": "[[assignments|personal_id|id]]",
                        "rel": {
                            "index": "assignments",
                            "name": "assignments",
                            "field": "personal_id",
                            "ownfield": "id",
                            "array": true
                        }
                    },
                    {
                        "name": "sessions",
                        "value": "[[session|personal_id|id]]",
                        "rel": {
                            "index": "sessions",
                            "name": "session",
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
                            "uuid-images-1",
                            "1",
                            "1719099774",
                            "1719099774"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-personal-2",
                            "Jorge Paredes",
                            "JP0051",
                            "uuid-images-1",
                            "1",
                            "1719099774",
                            "1719099774"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-personal-3",
                            "Pablo Rojas",
                            "PR0021",
                            "uuid-images-1",
                            "2",
                            "1719099774",
                            "1719039774"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-personal-4",
                            "Abrahan Serrano",
                            "AS0021",
                            "uuid-images-1",
                            "2",
                            "1719099774",
                            "1719599774"
                        ]
                    }
                ],
                "apicustom": [
                    {
                        "method": "get",
                        "route": "applogin",
                        "query": "code",
                        "in": "",
                        "type": "custom",
                        "out": "id,name,code,personal_type_id,image_id,create_date,update_date"
                    },
                    {
                        "method": "get",
                        "route": "sync",
                        "query": "",
                        "in": "",
                        "type": "custom",
                        "out": "id,name,code,personal_type_id,create_date,update_date"
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "sync",
                        "query": "",
                        "in": null,
                        "type": "custom",
                        "out": "custom_sync"
                    },
                    {
                        "method": "GET",
                        "route": "applogin",
                        "query": "code",
                        "in": null,
                        "type": "custom",
                        "out": "custom_applogin"
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
                        "route": ":personal_id/assignments",
                        "in": null,
                        "rel": "[[assignments|personal_id|id]]",
                        "type": "rel",
                        "out": "select_assignments"
                    },
                    {
                        "method": "GET",
                        "route": ":personal_id/assignments/:id",
                        "in": null,
                        "rel": "[[assignments|personal_id|id]]",
                        "type": "rel",
                        "out": "select_assignments"
                    },
                    {
                        "method": "POST",
                        "route": ":personal_id/assignments",
                        "in": "insert_assignments",
                        "rel": "[[assignments|personal_id|id]]",
                        "type": "rel",
                        "out": "select_assignments"
                    },
                    {
                        "method": "PUT",
                        "route": ":personal_id/assignments/:id",
                        "in": "insert_assignments",
                        "rel": "[[assignments|personal_id|id]]",
                        "type": "rel",
                        "out": "select_assignments"
                    },
                    {
                        "method": "DELETE",
                        "route": ":personal_id/assignments/:id",
                        "in": null,
                        "rel": "[[assignments|personal_id|id]]",
                        "type": "rel",
                        "out": null
                    },
                    {
                        "method": "GET",
                        "route": ":personal_id/session",
                        "in": null,
                        "rel": "[[session|personal_id|id]]",
                        "type": "rel",
                        "out": "select_session"
                    },
                    {
                        "method": "GET",
                        "route": ":personal_id/session/:id",
                        "in": null,
                        "rel": "[[session|personal_id|id]]",
                        "type": "rel",
                        "out": "select_session"
                    },
                    {
                        "method": "POST",
                        "route": ":personal_id/session",
                        "in": "insert_session",
                        "rel": "[[session|personal_id|id]]",
                        "type": "rel",
                        "out": "select_session"
                    },
                    {
                        "method": "PUT",
                        "route": ":personal_id/session/:id",
                        "in": "insert_session",
                        "rel": "[[session|personal_id|id]]",
                        "type": "rel",
                        "out": "select_session"
                    },
                    {
                        "method": "DELETE",
                        "route": ":personal_id/session/:id",
                        "in": null,
                        "rel": "[[session|personal_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "name": "string",
                        "code": "string",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "personal_type_id": "number",
                        "personal_type": "[personal_types|id|personal_type_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "assignments": "[[assignments|personal_id|id]]",
                        "sessions": "[[session|personal_id|id]]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "name": "string",
                        "code": "string",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "personal_type_id": "number",
                        "personal_type": "[personal_types|id|personal_type_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "assignments": "[[assignments|personal_id|id]]",
                        "sessions": "[[session|personal_id|id]]"
                    },
                    "insert": {
                        "name": "string",
                        "code": "string",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "personal_type_id": "number",
                        "personal_type": "[personal_types|id|personal_type_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "assignments": "[[assignments|personal_id|id]]",
                        "sessions": "[[session|personal_id|id]]"
                    },
                    "custom_applogin": {
                        "id": "uuid|pk",
                        "name": "string",
                        "code": "string",
                        "personal_type_id": "number",
                        "image_id": "number",
                        "create_date": "date",
                        "update_date": "date"
                    },
                    "custom_sync": {
                        "id": "uuid|pk",
                        "name": "string",
                        "code": "string",
                        "personal_type_id": "number",
                        "create_date": "date",
                        "update_date": "date"
                    },
                    "select_assignments": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]",
                        "schedule_id": "number",
                        "schedule": "[schedule|id|schedule_id]"
                    },
                    "create_assignments": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]",
                        "schedule_id": "number",
                        "schedule": "[schedule|id|schedule_id]"
                    },
                    "insert_assignments": {
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]",
                        "schedule_id": "number",
                        "schedule": "[schedule|id|schedule_id]"
                    },
                    "custom_bypersonal_assignments": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "route_id": "number"
                    },
                    "select_session": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "device_id": "number",
                        "device": "[devices|id|device_id]",
                        "login_date": "date",
                        "logout_date": "date",
                        "start_lat": "number",
                        "start_lon": "number",
                        "end_lat": "number",
                        "end_lon": "number"
                    },
                    "create_session": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "device_id": "number",
                        "device": "[devices|id|device_id]",
                        "login_date": "date",
                        "logout_date": "date",
                        "start_lat": "number",
                        "start_lon": "number",
                        "end_lat": "number",
                        "end_lon": "number"
                    },
                    "insert_session": {
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "device_id": "number",
                        "device": "[devices|id|device_id]",
                        "login_date": "date",
                        "logout_date": "date",
                        "start_lat": "number",
                        "start_lon": "number",
                        "end_lat": "number",
                        "end_lon": "number"
                    },
                    "custom_sync_session": {
                        "id": "uuid|pk"
                    }
                }
            },
            {
                "name": "routes",
                "alias": "routes",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "name",
                        "value": "string"
                    },
                    {
                        "name": "description",
                        "value": "string"
                    },
                    {
                        "name": "image_id",
                        "value": "number"
                    },
                    {
                        "name": "image",
                        "value": "[images|id|image_id]",
                        "rel": {
                            "index": "image",
                            "name": "images",
                            "field": "id",
                            "ownfield": "image_id",
                            "array": false
                        }
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
                        "name": "distance",
                        "value": "number"
                    },
                    {
                        "name": "create_date",
                        "value": "date"
                    },
                    {
                        "name": "update_date",
                        "value": "date"
                    },
                    {
                        "name": "district_id",
                        "value": "number"
                    },
                    {
                        "name": "district",
                        "value": "[district|id|district_id]",
                        "rel": {
                            "index": "district",
                            "name": "district",
                            "field": "id",
                            "ownfield": "district_id",
                            "array": false
                        }
                    },
                    {
                        "name": "points",
                        "value": "[[points|route_id|id]]",
                        "rel": {
                            "index": "points",
                            "name": "points",
                            "field": "route_id",
                            "ownfield": "id",
                            "array": true
                        }
                    }
                ],
                "seeder": [],
                "apicustom": [
                    {
                        "method": "get",
                        "route": "syncfull",
                        "query": "",
                        "in": "",
                        "type": "custom",
                        "out": "id,name,min_split_mt,max_split_mt,distance,image_id,create_date,update_date"
                    },
                    {
                        "method": "get",
                        "route": "sync",
                        "query": "",
                        "in": "",
                        "type": "custom",
                        "out": "id,name,min_split_mt,max_split_mt,distance,image_id,create_date,update_date"
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "sync",
                        "query": "",
                        "in": null,
                        "type": "custom",
                        "out": "custom_sync"
                    },
                    {
                        "method": "GET",
                        "route": "syncfull",
                        "query": "",
                        "in": null,
                        "type": "custom",
                        "out": "custom_syncfull"
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
                        "route": ":route_id/points",
                        "in": null,
                        "rel": "[[points|route_id|id]]",
                        "type": "rel",
                        "out": "select_points"
                    },
                    {
                        "method": "GET",
                        "route": ":route_id/points/:id",
                        "in": null,
                        "rel": "[[points|route_id|id]]",
                        "type": "rel",
                        "out": "select_points"
                    },
                    {
                        "method": "POST",
                        "route": ":route_id/points",
                        "in": "insert_points",
                        "rel": "[[points|route_id|id]]",
                        "type": "rel",
                        "out": "select_points"
                    },
                    {
                        "method": "PUT",
                        "route": ":route_id/points/:id",
                        "in": "insert_points",
                        "rel": "[[points|route_id|id]]",
                        "type": "rel",
                        "out": "select_points"
                    },
                    {
                        "method": "DELETE",
                        "route": ":route_id/points/:id",
                        "in": null,
                        "rel": "[[points|route_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "name": "string",
                        "description": "string",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "min_split_mt": "number",
                        "max_split_mt": "number",
                        "distance": "number",
                        "create_date": "date",
                        "update_date": "date",
                        "district_id": "number",
                        "district": "[district|id|district_id]",
                        "points": "[[points|route_id|id]]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "name": "string",
                        "description": "string",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "min_split_mt": "number",
                        "max_split_mt": "number",
                        "distance": "number",
                        "create_date": "date",
                        "update_date": "date",
                        "district_id": "number",
                        "district": "[district|id|district_id]",
                        "points": "[[points|route_id|id]]"
                    },
                    "insert": {
                        "name": "string",
                        "description": "string",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "min_split_mt": "number",
                        "max_split_mt": "number",
                        "distance": "number",
                        "create_date": "date",
                        "update_date": "date",
                        "district_id": "number",
                        "district": "[district|id|district_id]",
                        "points": "[[points|route_id|id]]"
                    },
                    "custom_syncfull": {
                        "id": "uuid|pk",
                        "name": "string",
                        "min_split_mt": "number",
                        "max_split_mt": "number",
                        "distance": "number",
                        "image_id": "number",
                        "create_date": "date",
                        "update_date": "date"
                    },
                    "custom_sync": {
                        "id": "uuid|pk",
                        "name": "string",
                        "min_split_mt": "number",
                        "max_split_mt": "number",
                        "distance": "number",
                        "image_id": "number",
                        "create_date": "date",
                        "update_date": "date"
                    },
                    "select_points": {
                        "id": "number|pk",
                        "route_id": "number",
                        "ruute": "[routes|id|route_id]",
                        "section": "number",
                        "lat": "number",
                        "lon": "number"
                    },
                    "create_points": {
                        "id": "number|pk",
                        "route_id": "number",
                        "ruute": "[routes|id|route_id]",
                        "section": "number",
                        "lat": "number",
                        "lon": "number"
                    },
                    "insert_points": {
                        "route_id": "number",
                        "ruute": "[routes|id|route_id]",
                        "section": "number",
                        "lat": "number",
                        "lon": "number"
                    },
                    "custom_sync_points": {
                        "id": "number|pk",
                        "route_id": "number",
                        "section": "number",
                        "lat": "number",
                        "lon": "number"
                    }
                }
            },
            {
                "name": "emergency_next_states",
                "alias": "emergency_next_states",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "emergency_state_id",
                        "value": "number"
                    },
                    {
                        "name": "emergency_state",
                        "value": "[emergency_states|id|emergency_state_id]",
                        "rel": {
                            "index": "emergency_state",
                            "name": "emergency_states",
                            "field": "id",
                            "ownfield": "emergency_state_id",
                            "array": false
                        }
                    },
                    {
                        "name": "emergency_next_state_id",
                        "value": "number"
                    },
                    {
                        "name": "emergency_next_state",
                        "value": "[emergency_states|id|emergency_state_id]",
                        "rel": {
                            "index": "emergency_next_state",
                            "name": "emergency_states",
                            "field": "id",
                            "ownfield": "emergency_state_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "1",
                            "1",
                            "2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "2",
                            "1",
                            "3"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "3",
                            "1",
                            "4"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "4",
                            "1",
                            "5"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "5",
                            "1",
                            "6"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "6",
                            "2",
                            "3"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "7",
                            "2",
                            "4"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "8",
                            "2",
                            "5"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "9",
                            "2",
                            "6"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "10",
                            "2",
                            "7"
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
                        "id": "number|pk",
                        "emergency_state_id": "number",
                        "emergency_state": "[emergency_states|id|emergency_state_id]",
                        "emergency_next_state_id": "number",
                        "emergency_next_state": "[emergency_states|id|emergency_state_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "emergency_state_id": "number",
                        "emergency_state": "[emergency_states|id|emergency_state_id]",
                        "emergency_next_state_id": "number",
                        "emergency_next_state": "[emergency_states|id|emergency_state_id]"
                    },
                    "insert": {
                        "emergency_state_id": "number",
                        "emergency_state": "[emergency_states|id|emergency_state_id]",
                        "emergency_next_state_id": "number",
                        "emergency_next_state": "[emergency_states|id|emergency_state_id]"
                    }
                }
            },
            {
                "name": "claim_next_states",
                "alias": "claim_next_states",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "claim_state_id",
                        "value": "number"
                    },
                    {
                        "name": "claim_state",
                        "value": "[claim_states|id|claim_state_id]",
                        "rel": {
                            "index": "claim_state",
                            "name": "claim_states",
                            "field": "id",
                            "ownfield": "claim_state_id",
                            "array": false
                        }
                    },
                    {
                        "name": "claim_next_state_id",
                        "value": "number"
                    },
                    {
                        "name": "claim_next_state",
                        "value": "[claim_states|id|claim_state_id]",
                        "rel": {
                            "index": "claim_next_state",
                            "name": "claim_states",
                            "field": "id",
                            "ownfield": "claim_state_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "1",
                            "1",
                            "2"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "2",
                            "1",
                            "3"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "3",
                            "1",
                            "4"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "4",
                            "1",
                            "5"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "5",
                            "1",
                            "6"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "6",
                            "2",
                            "3"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "7",
                            "2",
                            "4"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "8",
                            "2",
                            "5"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "9",
                            "2",
                            "6"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "10",
                            "2",
                            "7"
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
                        "id": "number|pk",
                        "claim_state_id": "number",
                        "claim_state": "[claim_states|id|claim_state_id]",
                        "claim_next_state_id": "number",
                        "claim_next_state": "[claim_states|id|claim_state_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "claim_state_id": "number",
                        "claim_state": "[claim_states|id|claim_state_id]",
                        "claim_next_state_id": "number",
                        "claim_next_state": "[claim_states|id|claim_state_id]"
                    },
                    "insert": {
                        "claim_state_id": "number",
                        "claim_state": "[claim_states|id|claim_state_id]",
                        "claim_next_state_id": "number",
                        "claim_next_state": "[claim_states|id|claim_state_id]"
                    }
                }
            },
            {
                "name": "points",
                "alias": "points",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "route_id",
                        "value": "number"
                    },
                    {
                        "name": "ruute",
                        "value": "[routes|id|route_id]",
                        "rel": {
                            "index": "ruute",
                            "name": "routes",
                            "field": "id",
                            "ownfield": "route_id",
                            "array": false
                        }
                    },
                    {
                        "name": "section",
                        "value": "number"
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
                        "route": "sync",
                        "query": "",
                        "in": "",
                        "type": "custom",
                        "out": "id,route_id,section,lat,lon"
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "sync",
                        "query": "",
                        "in": null,
                        "type": "custom",
                        "out": "custom_sync"
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
                        "route_id": "number",
                        "ruute": "[routes|id|route_id]",
                        "section": "number",
                        "lat": "number",
                        "lon": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "route_id": "number",
                        "ruute": "[routes|id|route_id]",
                        "section": "number",
                        "lat": "number",
                        "lon": "number"
                    },
                    "insert": {
                        "route_id": "number",
                        "ruute": "[routes|id|route_id]",
                        "section": "number",
                        "lat": "number",
                        "lon": "number"
                    },
                    "custom_sync": {
                        "id": "number|pk",
                        "route_id": "number",
                        "section": "number",
                        "lat": "number",
                        "lon": "number"
                    }
                }
            },
            {
                "name": "supervisors",
                "alias": "supervisors",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
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
                        "name": "district_id",
                        "value": "number"
                    },
                    {
                        "name": "district",
                        "value": "[district|id|district_id]",
                        "rel": {
                            "index": "district",
                            "name": "district",
                            "field": "id",
                            "ownfield": "district_id",
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
                        "id": "number|pk",
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "district_id": "number",
                        "district": "[district|id|district_id]"
                    },
                    "create": {
                        "id": "number|pk",
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "district_id": "number",
                        "district": "[district|id|district_id]"
                    },
                    "insert": {
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "district_id": "number",
                        "district": "[district|id|district_id]"
                    }
                }
            },
            {
                "name": "assignments",
                "alias": "assignments",
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
                        "name": "route_id",
                        "value": "number"
                    },
                    {
                        "name": "route",
                        "value": "[routes|id|route_id]",
                        "rel": {
                            "index": "route",
                            "name": "routes",
                            "field": "id",
                            "ownfield": "route_id",
                            "array": false
                        }
                    },
                    {
                        "name": "schedule_id",
                        "value": "number"
                    },
                    {
                        "name": "schedule",
                        "value": "[schedule|id|schedule_id]",
                        "rel": {
                            "index": "schedule",
                            "name": "schedule",
                            "field": "id",
                            "ownfield": "schedule_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [],
                "apicustom": [
                    {
                        "method": "get",
                        "route": "bypersonal",
                        "query": "personal_id",
                        "in": "",
                        "type": "custom",
                        "out": "id,personal_id,route_id"
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "bypersonal",
                        "query": "personal_id",
                        "in": null,
                        "type": "custom",
                        "out": "custom_bypersonal"
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
                        "route_id": "number",
                        "route": "[routes|id|route_id]",
                        "schedule_id": "number",
                        "schedule": "[schedule|id|schedule_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]",
                        "schedule_id": "number",
                        "schedule": "[schedule|id|schedule_id]"
                    },
                    "insert": {
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]",
                        "schedule_id": "number",
                        "schedule": "[schedule|id|schedule_id]"
                    },
                    "custom_bypersonal": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "route_id": "number"
                    }
                }
            },
            {
                "name": "emergency_states_record",
                "alias": "emergency_states_record",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "create_date",
                        "value": "date"
                    },
                    {
                        "name": "user_id",
                        "value": "number"
                    },
                    {
                        "name": "user",
                        "value": "[users|id|user_id]",
                        "rel": {
                            "index": "user",
                            "name": "users",
                            "field": "id",
                            "ownfield": "user_id",
                            "array": false
                        }
                    },
                    {
                        "name": "emergency_id",
                        "value": "number"
                    },
                    {
                        "name": "emergency",
                        "value": "[emergencys|id|emergency_id]",
                        "rel": {
                            "index": "emergency",
                            "name": "emergencys",
                            "field": "id",
                            "ownfield": "emergency_id",
                            "array": false
                        }
                    },
                    {
                        "name": "emergency_state_id",
                        "value": "number"
                    },
                    {
                        "name": "emergency_state",
                        "value": "[emergency_states|id|emergency_state_id]",
                        "rel": {
                            "index": "emergency_state",
                            "name": "emergency_states",
                            "field": "id",
                            "ownfield": "emergency_state_id",
                            "array": false
                        }
                    },
                    {
                        "name": "comments",
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
                        "create_date": "date",
                        "user_id": "number",
                        "user": "[users|id|user_id]",
                        "emergency_id": "number",
                        "emergency": "[emergencys|id|emergency_id]",
                        "emergency_state_id": "number",
                        "emergency_state": "[emergency_states|id|emergency_state_id]",
                        "comments": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "create_date": "date",
                        "user_id": "number",
                        "user": "[users|id|user_id]",
                        "emergency_id": "number",
                        "emergency": "[emergencys|id|emergency_id]",
                        "emergency_state_id": "number",
                        "emergency_state": "[emergency_states|id|emergency_state_id]",
                        "comments": "string"
                    },
                    "insert": {
                        "create_date": "date",
                        "user_id": "number",
                        "user": "[users|id|user_id]",
                        "emergency_id": "number",
                        "emergency": "[emergencys|id|emergency_id]",
                        "emergency_state_id": "number",
                        "emergency_state": "[emergency_states|id|emergency_state_id]",
                        "comments": "string"
                    }
                }
            },
            {
                "name": "claim_states_record",
                "alias": "claim_states_record",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "create_date",
                        "value": "date"
                    },
                    {
                        "name": "user_id",
                        "value": "number"
                    },
                    {
                        "name": "user",
                        "value": "[users|id|user_id]",
                        "rel": {
                            "index": "user",
                            "name": "users",
                            "field": "id",
                            "ownfield": "user_id",
                            "array": false
                        }
                    },
                    {
                        "name": "claim_id",
                        "value": "number"
                    },
                    {
                        "name": "claim",
                        "value": "[claims|id|claim_id]",
                        "rel": {
                            "index": "claim",
                            "name": "claims",
                            "field": "id",
                            "ownfield": "claim_id",
                            "array": false
                        }
                    },
                    {
                        "name": "claim_state_id",
                        "value": "number"
                    },
                    {
                        "name": "claim_state",
                        "value": "[claim_states|id|claim_state_id]",
                        "rel": {
                            "index": "claim_state",
                            "name": "claim_states",
                            "field": "id",
                            "ownfield": "claim_state_id",
                            "array": false
                        }
                    },
                    {
                        "name": "comments",
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
                        "create_date": "date",
                        "user_id": "number",
                        "user": "[users|id|user_id]",
                        "claim_id": "number",
                        "claim": "[claims|id|claim_id]",
                        "claim_state_id": "number",
                        "claim_state": "[claim_states|id|claim_state_id]",
                        "comments": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "create_date": "date",
                        "user_id": "number",
                        "user": "[users|id|user_id]",
                        "claim_id": "number",
                        "claim": "[claims|id|claim_id]",
                        "claim_state_id": "number",
                        "claim_state": "[claim_states|id|claim_state_id]",
                        "comments": "string"
                    },
                    "insert": {
                        "create_date": "date",
                        "user_id": "number",
                        "user": "[users|id|user_id]",
                        "claim_id": "number",
                        "claim": "[claims|id|claim_id]",
                        "claim_state_id": "number",
                        "claim_state": "[claim_states|id|claim_state_id]",
                        "comments": "string"
                    }
                }
            },
            {
                "name": "session_identified",
                "alias": "session_identified",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "image_id",
                        "value": "number"
                    },
                    {
                        "name": "image",
                        "value": "[images|id|image_id]",
                        "rel": {
                            "index": "image",
                            "name": "images",
                            "field": "id",
                            "ownfield": "image_id",
                            "array": false
                        }
                    },
                    {
                        "name": "session_id",
                        "value": "number"
                    },
                    {
                        "name": "session",
                        "value": "[session|id|session_id]",
                        "rel": {
                            "index": "session",
                            "name": "session",
                            "field": "id",
                            "ownfield": "session_id",
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
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "session_id": "number",
                        "session": "[session|id|session_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "session_id": "number",
                        "session": "[session|id|session_id]"
                    },
                    "insert": {
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "session_id": "number",
                        "session": "[session|id|session_id]"
                    }
                }
            },
            {
                "name": "emergency_images",
                "alias": "emergency_images",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "image_id",
                        "value": "number"
                    },
                    {
                        "name": "image",
                        "value": "[images|id|image_id]",
                        "rel": {
                            "index": "image",
                            "name": "images",
                            "field": "id",
                            "ownfield": "image_id",
                            "array": false
                        }
                    },
                    {
                        "name": "create_date",
                        "value": "date"
                    },
                    {
                        "name": "update_date",
                        "value": "date"
                    },
                    {
                        "name": "emergency_id",
                        "value": "number"
                    },
                    {
                        "name": "emergency",
                        "value": "[emergencys|id|emergency_id]",
                        "rel": {
                            "index": "emergency",
                            "name": "emergencys",
                            "field": "id",
                            "ownfield": "emergency_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [],
                "apicustom": [
                    {
                        "method": "post",
                        "route": "sync",
                        "query": "",
                        "in": "select",
                        "type": "custom",
                        "out": "id"
                    }
                ],
                "apis": [
                    {
                        "method": "POST",
                        "route": "sync",
                        "query": "",
                        "in": "select",
                        "type": "custom",
                        "out": "custom_sync"
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
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "emergency_id": "number",
                        "emergency": "[emergencys|id|emergency_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "emergency_id": "number",
                        "emergency": "[emergencys|id|emergency_id]"
                    },
                    "insert": {
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "emergency_id": "number",
                        "emergency": "[emergencys|id|emergency_id]"
                    },
                    "custom_sync": {
                        "id": "uuid|pk"
                    }
                }
            },
            {
                "name": "suggestions_images",
                "alias": "suggestions_images",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "suggestion_id",
                        "value": "number"
                    },
                    {
                        "name": "image_id",
                        "value": "number"
                    },
                    {
                        "name": "image",
                        "value": "[images|id|image_id]",
                        "rel": {
                            "index": "image",
                            "name": "images",
                            "field": "id",
                            "ownfield": "image_id",
                            "array": false
                        }
                    },
                    {
                        "name": "create_date",
                        "value": "date"
                    },
                    {
                        "name": "update_date",
                        "value": "date"
                    },
                    {
                        "name": "suggestion",
                        "value": "[suggestions|id|suggestion_id]",
                        "rel": {
                            "index": "suggestion",
                            "name": "suggestions",
                            "field": "id",
                            "ownfield": "suggestion_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [],
                "apicustom": [
                    {
                        "method": "post",
                        "route": "sync",
                        "query": "",
                        "in": "select",
                        "type": "custom",
                        "out": "id"
                    }
                ],
                "apis": [
                    {
                        "method": "POST",
                        "route": "sync",
                        "query": "",
                        "in": "select",
                        "type": "custom",
                        "out": "custom_sync"
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
                        "suggestion_id": "number",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "suggestion": "[suggestions|id|suggestion_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "suggestion_id": "number",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "suggestion": "[suggestions|id|suggestion_id]"
                    },
                    "insert": {
                        "suggestion_id": "number",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "suggestion": "[suggestions|id|suggestion_id]"
                    },
                    "custom_sync": {
                        "id": "uuid|pk"
                    }
                }
            },
            {
                "name": "tracks",
                "alias": "tracks",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "assignment_id",
                        "value": "number"
                    },
                    {
                        "name": "assignment",
                        "value": "[assignments|id|assignment_id]",
                        "rel": {
                            "index": "assignment",
                            "name": "assignments",
                            "field": "id",
                            "ownfield": "assignment_id",
                            "array": false
                        }
                    },
                    {
                        "name": "session_id",
                        "value": "number"
                    },
                    {
                        "name": "session",
                        "value": "[session|id|session_id]",
                        "rel": {
                            "index": "session",
                            "name": "session",
                            "field": "id",
                            "ownfield": "session_id",
                            "array": false
                        }
                    },
                    {
                        "name": "route_id",
                        "value": "number"
                    },
                    {
                        "name": "route",
                        "value": "[routes|id|route_id]",
                        "rel": {
                            "index": "route",
                            "name": "routes",
                            "field": "id",
                            "ownfield": "route_id",
                            "array": false
                        }
                    },
                    {
                        "name": "start_date",
                        "value": "date"
                    },
                    {
                        "name": "end_date",
                        "value": "date"
                    },
                    {
                        "name": "abandoned",
                        "value": "boolean"
                    },
                    {
                        "name": "comments",
                        "value": "string"
                    },
                    {
                        "name": "complete",
                        "value": "number"
                    },
                    {
                        "name": "routeb64",
                        "value": "string"
                    },
                    {
                        "name": "trackb64",
                        "value": "string"
                    }
                ],
                "seeder": [],
                "apicustom": [
                    {
                        "method": "post",
                        "route": "sync",
                        "query": "",
                        "in": "select",
                        "type": "custom",
                        "out": "id"
                    }
                ],
                "apis": [
                    {
                        "method": "POST",
                        "route": "sync",
                        "query": "",
                        "in": "select",
                        "type": "custom",
                        "out": "custom_sync"
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
                        "assignment_id": "number",
                        "assignment": "[assignments|id|assignment_id]",
                        "session_id": "number",
                        "session": "[session|id|session_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]",
                        "start_date": "date",
                        "end_date": "date",
                        "abandoned": "boolean",
                        "comments": "string",
                        "complete": "number",
                        "routeb64": "string",
                        "trackb64": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "assignment_id": "number",
                        "assignment": "[assignments|id|assignment_id]",
                        "session_id": "number",
                        "session": "[session|id|session_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]",
                        "start_date": "date",
                        "end_date": "date",
                        "abandoned": "boolean",
                        "comments": "string",
                        "complete": "number",
                        "routeb64": "string",
                        "trackb64": "string"
                    },
                    "insert": {
                        "assignment_id": "number",
                        "assignment": "[assignments|id|assignment_id]",
                        "session_id": "number",
                        "session": "[session|id|session_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]",
                        "start_date": "date",
                        "end_date": "date",
                        "abandoned": "boolean",
                        "comments": "string",
                        "complete": "number",
                        "routeb64": "string",
                        "trackb64": "string"
                    },
                    "custom_sync": {
                        "id": "uuid|pk"
                    }
                }
            },
            {
                "name": "claims_images",
                "alias": "claims_images",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "image_id",
                        "value": "number"
                    },
                    {
                        "name": "image",
                        "value": "[images|id|image_id]",
                        "rel": {
                            "index": "image",
                            "name": "images",
                            "field": "id",
                            "ownfield": "image_id",
                            "array": false
                        }
                    },
                    {
                        "name": "create_date",
                        "value": "date"
                    },
                    {
                        "name": "update_date",
                        "value": "date"
                    },
                    {
                        "name": "claim_id",
                        "value": "number"
                    },
                    {
                        "name": "claim",
                        "value": "[claims|id|claim_id]",
                        "rel": {
                            "index": "claim",
                            "name": "claims",
                            "field": "id",
                            "ownfield": "claim_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [],
                "apicustom": [
                    {
                        "method": "post",
                        "route": "sync",
                        "query": "",
                        "in": "select",
                        "type": "custom",
                        "out": "id"
                    }
                ],
                "apis": [
                    {
                        "method": "POST",
                        "route": "sync",
                        "query": "",
                        "in": "select",
                        "type": "custom",
                        "out": "custom_sync"
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
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "claim_id": "number",
                        "claim": "[claims|id|claim_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "claim_id": "number",
                        "claim": "[claims|id|claim_id]"
                    },
                    "insert": {
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "claim_id": "number",
                        "claim": "[claims|id|claim_id]"
                    },
                    "custom_sync": {
                        "id": "uuid|pk"
                    }
                }
            },
            {
                "name": "session",
                "alias": "session",
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
                        "name": "device_id",
                        "value": "number"
                    },
                    {
                        "name": "device",
                        "value": "[devices|id|device_id]",
                        "rel": {
                            "index": "device",
                            "name": "devices",
                            "field": "id",
                            "ownfield": "device_id",
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
                        "name": "start_lat",
                        "value": "number"
                    },
                    {
                        "name": "start_lon",
                        "value": "number"
                    },
                    {
                        "name": "end_lat",
                        "value": "number"
                    },
                    {
                        "name": "end_lon",
                        "value": "number"
                    }
                ],
                "seeder": [],
                "apicustom": [
                    {
                        "method": "post",
                        "route": "sync",
                        "query": "",
                        "in": "select",
                        "type": "custom",
                        "out": "id"
                    }
                ],
                "apis": [
                    {
                        "method": "POST",
                        "route": "sync",
                        "query": "",
                        "in": "select",
                        "type": "custom",
                        "out": "custom_sync"
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
                        "device_id": "number",
                        "device": "[devices|id|device_id]",
                        "login_date": "date",
                        "logout_date": "date",
                        "start_lat": "number",
                        "start_lon": "number",
                        "end_lat": "number",
                        "end_lon": "number"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "device_id": "number",
                        "device": "[devices|id|device_id]",
                        "login_date": "date",
                        "logout_date": "date",
                        "start_lat": "number",
                        "start_lon": "number",
                        "end_lat": "number",
                        "end_lon": "number"
                    },
                    "insert": {
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "device_id": "number",
                        "device": "[devices|id|device_id]",
                        "login_date": "date",
                        "logout_date": "date",
                        "start_lat": "number",
                        "start_lon": "number",
                        "end_lat": "number",
                        "end_lon": "number"
                    },
                    "custom_sync": {
                        "id": "uuid|pk"
                    }
                }
            },
            {
                "name": "emergencys",
                "alias": "emergencys",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "datetime",
                        "value": "date"
                    },
                    {
                        "name": "session_id",
                        "value": "number"
                    },
                    {
                        "name": "session",
                        "value": "[session|id|session_id]",
                        "rel": {
                            "index": "session",
                            "name": "session",
                            "field": "id",
                            "ownfield": "session_id",
                            "array": false
                        }
                    },
                    {
                        "name": "images",
                        "value": "[[emergency_images|emergency_id|id]]",
                        "rel": {
                            "index": "images",
                            "name": "emergency_images",
                            "field": "emergency_id",
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
                        "route": ":emergency_id/emergency_images",
                        "in": null,
                        "rel": "[[emergency_images|emergency_id|id]]",
                        "type": "rel",
                        "out": "select_emergency_images"
                    },
                    {
                        "method": "GET",
                        "route": ":emergency_id/emergency_images/:id",
                        "in": null,
                        "rel": "[[emergency_images|emergency_id|id]]",
                        "type": "rel",
                        "out": "select_emergency_images"
                    },
                    {
                        "method": "POST",
                        "route": ":emergency_id/emergency_images",
                        "in": "insert_emergency_images",
                        "rel": "[[emergency_images|emergency_id|id]]",
                        "type": "rel",
                        "out": "select_emergency_images"
                    },
                    {
                        "method": "PUT",
                        "route": ":emergency_id/emergency_images/:id",
                        "in": "insert_emergency_images",
                        "rel": "[[emergency_images|emergency_id|id]]",
                        "type": "rel",
                        "out": "select_emergency_images"
                    },
                    {
                        "method": "DELETE",
                        "route": ":emergency_id/emergency_images/:id",
                        "in": null,
                        "rel": "[[emergency_images|emergency_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "datetime": "date",
                        "session_id": "number",
                        "session": "[session|id|session_id]",
                        "images": "[[emergency_images|emergency_id|id]]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "datetime": "date",
                        "session_id": "number",
                        "session": "[session|id|session_id]",
                        "images": "[[emergency_images|emergency_id|id]]"
                    },
                    "insert": {
                        "datetime": "date",
                        "session_id": "number",
                        "session": "[session|id|session_id]",
                        "images": "[[emergency_images|emergency_id|id]]"
                    },
                    "select_emergency_images": {
                        "id": "uuid|pk",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "emergency_id": "number",
                        "emergency": "[emergencys|id|emergency_id]"
                    },
                    "create_emergency_images": {
                        "id": "uuid|pk",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "emergency_id": "number",
                        "emergency": "[emergencys|id|emergency_id]"
                    },
                    "insert_emergency_images": {
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "emergency_id": "number",
                        "emergency": "[emergencys|id|emergency_id]"
                    },
                    "custom_sync_emergency_images": {
                        "id": "uuid|pk"
                    }
                }
            },
            {
                "name": "suggestions",
                "alias": "suggestions",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "title",
                        "value": "string"
                    },
                    {
                        "name": "description",
                        "value": "string"
                    },
                    {
                        "name": "date_time",
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
                        "name": "session_id",
                        "value": "number"
                    },
                    {
                        "name": "session",
                        "value": "[session|id|session_id]",
                        "rel": {
                            "index": "session",
                            "name": "session",
                            "field": "id",
                            "ownfield": "session_id",
                            "array": false
                        }
                    },
                    {
                        "name": "images",
                        "value": "[[suggestions_images|suggestion_id|id]]",
                        "rel": {
                            "index": "images",
                            "name": "suggestions_images",
                            "field": "suggestion_id",
                            "ownfield": "id",
                            "array": true
                        }
                    }
                ],
                "seeder": [],
                "apicustom": [
                    {
                        "method": "post",
                        "route": "sync",
                        "query": "",
                        "in": "select",
                        "type": "custom",
                        "out": "id"
                    }
                ],
                "apis": [
                    {
                        "method": "POST",
                        "route": "sync",
                        "query": "",
                        "in": "select",
                        "type": "custom",
                        "out": "custom_sync"
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
                        "route": ":suggestion_id/suggestions_images",
                        "in": null,
                        "rel": "[[suggestions_images|suggestion_id|id]]",
                        "type": "rel",
                        "out": "select_suggestions_images"
                    },
                    {
                        "method": "GET",
                        "route": ":suggestion_id/suggestions_images/:id",
                        "in": null,
                        "rel": "[[suggestions_images|suggestion_id|id]]",
                        "type": "rel",
                        "out": "select_suggestions_images"
                    },
                    {
                        "method": "POST",
                        "route": ":suggestion_id/suggestions_images",
                        "in": "insert_suggestions_images",
                        "rel": "[[suggestions_images|suggestion_id|id]]",
                        "type": "rel",
                        "out": "select_suggestions_images"
                    },
                    {
                        "method": "PUT",
                        "route": ":suggestion_id/suggestions_images/:id",
                        "in": "insert_suggestions_images",
                        "rel": "[[suggestions_images|suggestion_id|id]]",
                        "type": "rel",
                        "out": "select_suggestions_images"
                    },
                    {
                        "method": "DELETE",
                        "route": ":suggestion_id/suggestions_images/:id",
                        "in": null,
                        "rel": "[[suggestions_images|suggestion_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "title": "string",
                        "description": "string",
                        "date_time": "date",
                        "lat": "number",
                        "lon": "number",
                        "session_id": "number",
                        "session": "[session|id|session_id]",
                        "images": "[[suggestions_images|suggestion_id|id]]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "title": "string",
                        "description": "string",
                        "date_time": "date",
                        "lat": "number",
                        "lon": "number",
                        "session_id": "number",
                        "session": "[session|id|session_id]",
                        "images": "[[suggestions_images|suggestion_id|id]]"
                    },
                    "insert": {
                        "title": "string",
                        "description": "string",
                        "date_time": "date",
                        "lat": "number",
                        "lon": "number",
                        "session_id": "number",
                        "session": "[session|id|session_id]",
                        "images": "[[suggestions_images|suggestion_id|id]]"
                    },
                    "custom_sync": {
                        "id": "uuid|pk"
                    },
                    "select_suggestions_images": {
                        "id": "uuid|pk",
                        "suggestion_id": "number",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "suggestion": "[suggestions|id|suggestion_id]"
                    },
                    "create_suggestions_images": {
                        "id": "uuid|pk",
                        "suggestion_id": "number",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "suggestion": "[suggestions|id|suggestion_id]"
                    },
                    "insert_suggestions_images": {
                        "suggestion_id": "number",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "suggestion": "[suggestions|id|suggestion_id]"
                    },
                    "custom_sync_suggestions_images": {
                        "id": "uuid|pk"
                    }
                }
            },
            {
                "name": "claims",
                "alias": "claims",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "title",
                        "value": "string"
                    },
                    {
                        "name": "description",
                        "value": "string"
                    },
                    {
                        "name": "date_time",
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
                        "name": "session_id",
                        "value": "number"
                    },
                    {
                        "name": "session",
                        "value": "[session|id|session_id]",
                        "rel": {
                            "index": "session",
                            "name": "session",
                            "field": "id",
                            "ownfield": "session_id",
                            "array": false
                        }
                    },
                    {
                        "name": "images",
                        "value": "[[claims_images|claim_id|id]]",
                        "rel": {
                            "index": "images",
                            "name": "claims_images",
                            "field": "claim_id",
                            "ownfield": "id",
                            "array": true
                        }
                    }
                ],
                "seeder": [],
                "apicustom": [
                    {
                        "method": "post",
                        "route": "sync",
                        "query": "",
                        "in": "select",
                        "type": "custom",
                        "out": "id"
                    }
                ],
                "apis": [
                    {
                        "method": "POST",
                        "route": "sync",
                        "query": "",
                        "in": "select",
                        "type": "custom",
                        "out": "custom_sync"
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
                        "route": ":claim_id/claims_images",
                        "in": null,
                        "rel": "[[claims_images|claim_id|id]]",
                        "type": "rel",
                        "out": "select_claims_images"
                    },
                    {
                        "method": "GET",
                        "route": ":claim_id/claims_images/:id",
                        "in": null,
                        "rel": "[[claims_images|claim_id|id]]",
                        "type": "rel",
                        "out": "select_claims_images"
                    },
                    {
                        "method": "POST",
                        "route": ":claim_id/claims_images",
                        "in": "insert_claims_images",
                        "rel": "[[claims_images|claim_id|id]]",
                        "type": "rel",
                        "out": "select_claims_images"
                    },
                    {
                        "method": "PUT",
                        "route": ":claim_id/claims_images/:id",
                        "in": "insert_claims_images",
                        "rel": "[[claims_images|claim_id|id]]",
                        "type": "rel",
                        "out": "select_claims_images"
                    },
                    {
                        "method": "DELETE",
                        "route": ":claim_id/claims_images/:id",
                        "in": null,
                        "rel": "[[claims_images|claim_id|id]]",
                        "type": "rel",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "title": "string",
                        "description": "string",
                        "date_time": "date",
                        "lat": "number",
                        "lon": "number",
                        "session_id": "number",
                        "session": "[session|id|session_id]",
                        "images": "[[claims_images|claim_id|id]]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "title": "string",
                        "description": "string",
                        "date_time": "date",
                        "lat": "number",
                        "lon": "number",
                        "session_id": "number",
                        "session": "[session|id|session_id]",
                        "images": "[[claims_images|claim_id|id]]"
                    },
                    "insert": {
                        "title": "string",
                        "description": "string",
                        "date_time": "date",
                        "lat": "number",
                        "lon": "number",
                        "session_id": "number",
                        "session": "[session|id|session_id]",
                        "images": "[[claims_images|claim_id|id]]"
                    },
                    "custom_sync": {
                        "id": "uuid|pk"
                    },
                    "select_claims_images": {
                        "id": "uuid|pk",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "claim_id": "number",
                        "claim": "[claims|id|claim_id]"
                    },
                    "create_claims_images": {
                        "id": "uuid|pk",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "claim_id": "number",
                        "claim": "[claims|id|claim_id]"
                    },
                    "insert_claims_images": {
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "claim_id": "number",
                        "claim": "[claims|id|claim_id]"
                    },
                    "custom_sync_claims_images": {
                        "id": "uuid|pk"
                    }
                }
            }
        ]
    }
]