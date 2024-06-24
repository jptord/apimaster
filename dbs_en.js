[
    {
        "db": "trackingdb",
        "groups": [
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
                        "name": "state",
                        "value": "string"
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-users-1",
                            "admin",
                            "admin",
                            "enabled"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-users-2",
                            "operador",
                            "operador",
                            "enabled"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-users-3",
                            "prueba",
                            "prueba",
                            "enabled"
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
                        "name": "string",
                        "password": "string",
                        "state": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "name": "string",
                        "password": "string",
                        "state": "string"
                    },
                    "insert": {
                        "name": "string",
                        "password": "string",
                        "state": "string"
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
                            "uuid-personal_types-1",
                            "1719099774",
                            "1719099774"
                        ]
                    }
                ],
                "apicustom": [
                    {
                        "method": "get",
                        "route": "sync",
                        "query": "",
                        "in": "",
                        "type": "custom",
                        "out": "id,name,code,personal_type_id,create_date,update_date"
                    },
                    {
                        "method": "get",
                        "route": "applogin",
                        "query": "code",
                        "in": "",
                        "type": "custom",
                        "out": "id,name,code,personal_type_id,image_id,create_date,update_date"
                    }
                ],
                "apis": [
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
                        "assignments": "[[assignments|personal_id|id]]"
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
                        "assignments": "[[assignments|personal_id|id]]"
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
                        "assignments": "[[assignments|personal_id|id]]"
                    },
                    "custom_sync": {
                        "id": "uuid|pk",
                        "name": "string",
                        "code": "string",
                        "personal_type_id": "number",
                        "create_date": "date",
                        "update_date": "date"
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
                    "select_assignments": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]"
                    },
                    "create_assignments": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]"
                    },
                    "insert_assignments": {
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]"
                    },
                    "custom_bypersonal_assignments": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "route_id": "number"
                    }
                }
            },
            {
                "name": "personal_types",
                "alias": "personal_types",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|number"
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
                            "uuid-personal_types-1",
                            "Operador"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-personal_types-2",
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
                        "id": "uuid|number",
                        "name": "string"
                    },
                    "create": {
                        "id": "uuid|number",
                        "name": "string"
                    },
                    "insert": {
                        "name": "string"
                    }
                }
            },
            {
                "name": "devices",
                "alias": "devices",
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
                        "name": "points",
                        "value": "[[points|route_id|id]]",
                        "rel": {
                            "index": "points",
                            "name": "points",
                            "field": "route_id",
                            "ownfield": "id",
                            "array": true
                        }
                    },
                    {
                        "name": "supervisors",
                        "value": "[[supervisors|route_id|id]]",
                        "rel": {
                            "index": "supervisors",
                            "name": "supervisors",
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
                        "route": "sync",
                        "query": "",
                        "in": "",
                        "type": "custom",
                        "out": "id,name,min_split_mt,max_split_mt,distance,image_id,create_date,update_date"
                    },
                    {
                        "method": "get",
                        "route": "syncfull",
                        "query": "",
                        "in": "",
                        "type": "custom",
                        "out": "id,name,min_split_mt,max_split_mt,distance,image_id,,create_date,update_date"
                    }
                ],
                "apis": [
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
                    },
                    {
                        "method": "GET",
                        "route": ":route_id/supervisors",
                        "in": null,
                        "rel": "[[supervisors|route_id|id]]",
                        "type": "rel",
                        "out": "select_supervisors"
                    },
                    {
                        "method": "GET",
                        "route": ":route_id/supervisors/:id",
                        "in": null,
                        "rel": "[[supervisors|route_id|id]]",
                        "type": "rel",
                        "out": "select_supervisors"
                    },
                    {
                        "method": "POST",
                        "route": ":route_id/supervisors",
                        "in": "insert_supervisors",
                        "rel": "[[supervisors|route_id|id]]",
                        "type": "rel",
                        "out": "select_supervisors"
                    },
                    {
                        "method": "PUT",
                        "route": ":route_id/supervisors/:id",
                        "in": "insert_supervisors",
                        "rel": "[[supervisors|route_id|id]]",
                        "type": "rel",
                        "out": "select_supervisors"
                    },
                    {
                        "method": "DELETE",
                        "route": ":route_id/supervisors/:id",
                        "in": null,
                        "rel": "[[supervisors|route_id|id]]",
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
                        "points": "[[points|route_id|id]]",
                        "supervisors": "[[supervisors|route_id|id]]"
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
                        "points": "[[points|route_id|id]]",
                        "supervisors": "[[supervisors|route_id|id]]"
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
                        "points": "[[points|route_id|id]]",
                        "supervisors": "[[supervisors|route_id|id]]"
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
                    "select_points": {
                        "id": "number|pk",
                        "route_id": "number",
                        "ruute": "[routes|id|route_id]",
                        "lat": "number",
                        "lon": "number"
                    },
                    "create_points": {
                        "id": "number|pk",
                        "route_id": "number",
                        "ruute": "[routes|id|route_id]",
                        "lat": "number",
                        "lon": "number"
                    },
                    "insert_points": {
                        "route_id": "number",
                        "ruute": "[routes|id|route_id]",
                        "lat": "number",
                        "lon": "number"
                    },
                    "custom_sync_points": {
                        "id": "number|pk",
                        "route_id": "number",
                        "lat": "number",
                        "lon": "number"
                    },
                    "select_supervisors": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]"
                    },
                    "create_supervisors": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]"
                    },
                    "insert_supervisors": {
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]"
                    }
                }
            },
            {
                "name": "supervisors",
                "alias": "supervisors",
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
                        "route_id": "number",
                        "route": "[routes|id|route_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]"
                    },
                    "insert": {
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]"
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
                        "out": "id,route_id,lat,lon"
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
                        "lat": "number",
                        "lon": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "route_id": "number",
                        "ruute": "[routes|id|route_id]",
                        "lat": "number",
                        "lon": "number"
                    },
                    "insert": {
                        "route_id": "number",
                        "ruute": "[routes|id|route_id]",
                        "lat": "number",
                        "lon": "number"
                    },
                    "custom_sync": {
                        "id": "number|pk",
                        "route_id": "number",
                        "lat": "number",
                        "lon": "number"
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
                        "route": "[routes|id|route_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]"
                    },
                    "insert": {
                        "personal_id": "number",
                        "personal": "[personal|id|personal_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]"
                    },
                    "custom_bypersonal": {
                        "id": "uuid|pk",
                        "personal_id": "number",
                        "route_id": "number"
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
                        "device_id": "number",
                        "device": "[devices|id|device_id]",
                        "session_id": "number",
                        "session": "[session|id|session_id]",
                        "images": "[[emergency_images|emergency_id|id]]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "datetime": "date",
                        "device_id": "number",
                        "device": "[devices|id|device_id]",
                        "session_id": "number",
                        "session": "[session|id|session_id]",
                        "images": "[[emergency_images|emergency_id|id]]"
                    },
                    "insert": {
                        "datetime": "date",
                        "device_id": "number",
                        "device": "[devices|id|device_id]",
                        "session_id": "number",
                        "session": "[session|id|session_id]",
                        "images": "[[emergency_images|emergency_id|id]]"
                    },
                    "select_emergency_images": {
                        "id": "uuid|pk",
                        "emergency_id": "number",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "emergency": "[emergencys|id|emergency_id]"
                    },
                    "create_emergency_images": {
                        "id": "uuid|pk",
                        "emergency_id": "number",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "emergency": "[emergencys|id|emergency_id]"
                    },
                    "insert_emergency_images": {
                        "emergency_id": "number",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "emergency": "[emergencys|id|emergency_id]"
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
                        "name": "emergency_id",
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
                        "emergency_id": "number",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "emergency": "[emergencys|id|emergency_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "emergency_id": "number",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "emergency": "[emergencys|id|emergency_id]"
                    },
                    "insert": {
                        "emergency_id": "number",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "emergency": "[emergencys|id|emergency_id]"
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
                    "select_claims_images": {
                        "id": "uuid|pk",
                        "claim_id": "number",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "claim": "[claims|id|claim_id]"
                    },
                    "create_claims_images": {
                        "id": "uuid|pk",
                        "claim_id": "number",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "claim": "[claims|id|claim_id]"
                    },
                    "insert_claims_images": {
                        "claim_id": "number",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "claim": "[claims|id|claim_id]"
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
                        "name": "claim_id",
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
                        "claim_id": "number",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "claim": "[claims|id|claim_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "claim_id": "number",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "claim": "[claims|id|claim_id]"
                    },
                    "insert": {
                        "claim_id": "number",
                        "image_id": "number",
                        "image": "[images|id|image_id]",
                        "create_date": "date",
                        "update_date": "date",
                        "claim": "[claims|id|claim_id]"
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
                        "name": "routeb64",
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
                        "assignment_id": "number",
                        "assignment": "[assignments|id|assignment_id]",
                        "session_id": "number",
                        "session": "[session|id|session_id]",
                        "route_id": "number",
                        "route": "[routes|id|route_id]",
                        "start_date": "date",
                        "end_date": "date",
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
                        "routeb64": "string",
                        "trackb64": "string"
                    }
                }
            }
        ]
    }
]