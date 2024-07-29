[
    {
        "db": "tre_personal",
        "groups": [
            {
                "name": "control_photos",
                "alias": "control_photos",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "register_date",
                        "value": "date"
                    },
                    {
                        "name": "photo",
                        "value": "string"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
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
                        "id": "number|pk",
                        "register_date": "date",
                        "photo": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "register_date": "date",
                        "photo": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "register_date": "date",
                        "photo": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "addresses",
                "alias": "addresses",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "zone",
                        "value": "string"
                    },
                    {
                        "name": "street",
                        "value": "string"
                    },
                    {
                        "name": "number",
                        "value": "string"
                    },
                    {
                        "name": "build",
                        "value": "string"
                    },
                    {
                        "name": "floor",
                        "value": "string"
                    },
                    {
                        "name": "condominium",
                        "value": "string"
                    },
                    {
                        "name": "block",
                        "value": "string"
                    },
                    {
                        "name": "reference",
                        "value": "string"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "zone": "string",
                        "street": "string",
                        "number": "string",
                        "build": "string",
                        "floor": "string",
                        "condominium": "string",
                        "block": "string",
                        "reference": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "zone": "string",
                        "street": "string",
                        "number": "string",
                        "build": "string",
                        "floor": "string",
                        "condominium": "string",
                        "block": "string",
                        "reference": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "zone": "string",
                        "street": "string",
                        "number": "string",
                        "build": "string",
                        "floor": "string",
                        "condominium": "string",
                        "block": "string",
                        "reference": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "control_observations",
                "alias": "control_observations",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "description",
                        "value": "string"
                    },
                    {
                        "name": "type",
                        "value": "string"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "description": "string",
                        "type": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "description": "string",
                        "type": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "description": "string",
                        "type": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "control_status",
                "alias": "control_status",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "code",
                        "value": "number"
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
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "code": "number",
                        "name": "string",
                        "description": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "code": "number",
                        "name": "string",
                        "description": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "code": "number",
                        "name": "string",
                        "description": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "documents",
                "alias": "documents",
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
                        "name": "state",
                        "value": "boolean"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "description": "string",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "description": "string",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "name": "string",
                        "description": "string",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "dt_items",
                "alias": "dt_items",
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
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "name": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "dt_periodicity",
                "alias": "dt_periodicity",
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
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "description": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "description": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "name": "string",
                        "description": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "files",
                "alias": "files",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "index",
                        "value": "string"
                    },
                    {
                        "name": "path",
                        "value": "string"
                    },
                    {
                        "name": "base",
                        "value": "string"
                    },
                    {
                        "name": "state",
                        "value": "boolean"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "index": "string",
                        "path": "string",
                        "base": "string",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "index": "string",
                        "path": "string",
                        "base": "string",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "index": "string",
                        "path": "string",
                        "base": "string",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "genders",
                "alias": "genders",
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
                        "name": "state",
                        "value": "boolean"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "description": "string",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "description": "string",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "name": "string",
                        "description": "string",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "failed_jobs",
                "alias": "failed_jobs",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "uuid",
                        "value": "string"
                    },
                    {
                        "name": "connection",
                        "value": "string"
                    },
                    {
                        "name": "queue",
                        "value": "string"
                    },
                    {
                        "name": "payload",
                        "value": "string"
                    },
                    {
                        "name": "exception",
                        "value": "string"
                    },
                    {
                        "name": "failed_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "uuid": "string",
                        "connection": "string",
                        "queue": "string",
                        "payload": "string",
                        "exception": "string",
                        "failed_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "uuid": "string",
                        "connection": "string",
                        "queue": "string",
                        "payload": "string",
                        "exception": "string",
                        "failed_at": "date"
                    },
                    "insert": {
                        "uuid": "string",
                        "connection": "string",
                        "queue": "string",
                        "payload": "string",
                        "exception": "string",
                        "failed_at": "date"
                    }
                }
            },
            {
                "name": "expededs",
                "alias": "expededs",
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
                        "name": "state",
                        "value": "boolean"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "description": "string",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "description": "string",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "name": "string",
                        "description": "string",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "migrations",
                "alias": "migrations",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "migration",
                        "value": "string"
                    },
                    {
                        "name": "batch",
                        "value": "number"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "migration": "string",
                        "batch": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "migration": "string",
                        "batch": "number"
                    },
                    "insert": {
                        "migration": "string",
                        "batch": "number"
                    }
                }
            },
            {
                "name": "params",
                "alias": "params",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "param",
                        "value": "string"
                    },
                    {
                        "name": "name",
                        "value": "string"
                    },
                    {
                        "name": "value",
                        "value": "string"
                    },
                    {
                        "name": "state",
                        "value": "boolean"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "param": "string",
                        "name": "string",
                        "value": "string",
                        "state": "boolean",
                        "deleted_at": "date",
                        "created_at": "date",
                        "updated_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "param": "string",
                        "name": "string",
                        "value": "string",
                        "state": "boolean",
                        "deleted_at": "date",
                        "created_at": "date",
                        "updated_at": "date"
                    },
                    "insert": {
                        "param": "string",
                        "name": "string",
                        "value": "string",
                        "state": "boolean",
                        "deleted_at": "date",
                        "created_at": "date",
                        "updated_at": "date"
                    }
                }
            },
            {
                "name": "password_resets",
                "alias": "password_resets",
                "fields": [
                    {
                        "name": "email",
                        "value": "string"
                    },
                    {
                        "name": "token",
                        "value": "string"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "email": "string",
                        "token": "string",
                        "created_at": "date"
                    },
                    "create": {
                        "email": "string",
                        "token": "string",
                        "created_at": "date"
                    },
                    "insert": {
                        "email": "string",
                        "token": "string",
                        "created_at": "date"
                    }
                }
            },
            {
                "name": "personal_access_tokens",
                "alias": "personal_access_tokens",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "tokenable_type",
                        "value": "string"
                    },
                    {
                        "name": "tokenable_id",
                        "value": "number"
                    },
                    {
                        "name": "name",
                        "value": "string"
                    },
                    {
                        "name": "token",
                        "value": "string"
                    },
                    {
                        "name": "abilities",
                        "value": "string"
                    },
                    {
                        "name": "last_used_at",
                        "value": "date"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "tokenable_type": "string",
                        "tokenable_id": "number",
                        "name": "string",
                        "token": "string",
                        "abilities": "string",
                        "last_used_at": "date",
                        "created_at": "date",
                        "updated_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "tokenable_type": "string",
                        "tokenable_id": "number",
                        "name": "string",
                        "token": "string",
                        "abilities": "string",
                        "last_used_at": "date",
                        "created_at": "date",
                        "updated_at": "date"
                    },
                    "insert": {
                        "tokenable_type": "string",
                        "tokenable_id": "number",
                        "name": "string",
                        "token": "string",
                        "abilities": "string",
                        "last_used_at": "date",
                        "created_at": "date",
                        "updated_at": "date"
                    }
                }
            },
            {
                "name": "roles",
                "alias": "roles",
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
                        "name": "state",
                        "value": "boolean"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "description": "string",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "description": "string",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "name": "string",
                        "description": "string",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "routes",
                "alias": "routes",
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
                        "name": "reference",
                        "value": "string"
                    },
                    {
                        "name": "state",
                        "value": "boolean"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "reference": "string",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "reference": "string",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "name": "string",
                        "reference": "string",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "sections",
                "alias": "sections",
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
                        "name": "status",
                        "value": "boolean"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    },
                    {
                        "name": "geofence_points",
                        "value": "string"
                    },
                    {
                        "name": "color",
                        "value": "string"
                    },
                    {
                        "name": "geofence_center",
                        "value": "string"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "status": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date",
                        "geofence_points": "string",
                        "color": "string",
                        "geofence_center": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "status": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date",
                        "geofence_points": "string",
                        "color": "string",
                        "geofence_center": "string"
                    },
                    "insert": {
                        "name": "string",
                        "status": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date",
                        "geofence_points": "string",
                        "color": "string",
                        "geofence_center": "string"
                    }
                }
            },
            {
                "name": "users",
                "alias": "users",
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
                        "name": "username",
                        "value": "string"
                    },
                    {
                        "name": "email",
                        "value": "string"
                    },
                    {
                        "name": "email_verified_at",
                        "value": "date"
                    },
                    {
                        "name": "password",
                        "value": "string"
                    },
                    {
                        "name": "state",
                        "value": "boolean"
                    },
                    {
                        "name": "remember_token",
                        "value": "string"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "username": "string",
                        "email": "string",
                        "email_verified_at": "date",
                        "password": "string",
                        "state": "boolean",
                        "remember_token": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "username": "string",
                        "email": "string",
                        "email_verified_at": "date",
                        "password": "string",
                        "state": "boolean",
                        "remember_token": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "name": "string",
                        "username": "string",
                        "email": "string",
                        "email_verified_at": "date",
                        "password": "string",
                        "state": "boolean",
                        "remember_token": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "dt_attribute_groups",
                "alias": "dt_attribute_groups",
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
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "name": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "questions",
                "alias": "questions",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "question",
                        "value": "string"
                    },
                    {
                        "name": "type",
                        "value": "string"
                    },
                    {
                        "name": "questions",
                        "value": "[questions|id|question_id]",
                        "rel": {
                            "index": "questions",
                            "name": "questions",
                            "field": "id",
                            "ownfield": "question_id",
                            "array": false
                        }
                    },
                    {
                        "name": "question_id",
                        "value": "number"
                    },
                    {
                        "name": "state",
                        "value": "boolean"
                    },
                    {
                        "name": "items",
                        "value": "string"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "question": "string",
                        "type": "string",
                        "questions": "[questions|id|question_id]",
                        "question_id": "number",
                        "state": "boolean",
                        "items": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "question": "string",
                        "type": "string",
                        "questions": "[questions|id|question_id]",
                        "question_id": "number",
                        "state": "boolean",
                        "items": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "question": "string",
                        "type": "string",
                        "questions": "[questions|id|question_id]",
                        "question_id": "number",
                        "state": "boolean",
                        "items": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "resources",
                "alias": "resources",
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
                        "name": "icon",
                        "value": "string"
                    },
                    {
                        "name": "resources",
                        "value": "[resources|id|resource_id]",
                        "rel": {
                            "index": "resources",
                            "name": "resources",
                            "field": "id",
                            "ownfield": "resource_id",
                            "array": false
                        }
                    },
                    {
                        "name": "resource_id",
                        "value": "number"
                    },
                    {
                        "name": "path",
                        "value": "string"
                    },
                    {
                        "name": "order",
                        "value": "number"
                    },
                    {
                        "name": "state",
                        "value": "boolean"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "description": "string",
                        "icon": "string",
                        "resources": "[resources|id|resource_id]",
                        "resource_id": "number",
                        "path": "string",
                        "order": "number",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "description": "string",
                        "icon": "string",
                        "resources": "[resources|id|resource_id]",
                        "resource_id": "number",
                        "path": "string",
                        "order": "number",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "name": "string",
                        "description": "string",
                        "icon": "string",
                        "resources": "[resources|id|resource_id]",
                        "resource_id": "number",
                        "path": "string",
                        "order": "number",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "control_photo_params",
                "alias": "control_photo_params",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "users",
                        "value": "[users|id|user_id]",
                        "rel": {
                            "index": "users",
                            "name": "users",
                            "field": "id",
                            "ownfield": "user_id",
                            "array": false
                        }
                    },
                    {
                        "name": "user_id",
                        "value": "number"
                    },
                    {
                        "name": "percentage",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "percentage": "number",
                        "created_at": "date",
                        "updated_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "percentage": "number",
                        "created_at": "date",
                        "updated_at": "date"
                    },
                    "insert": {
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "percentage": "number",
                        "created_at": "date",
                        "updated_at": "date"
                    }
                }
            },
            {
                "name": "dt_item_code",
                "alias": "dt_item_code",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "dt_items",
                        "value": "[dt_items|id|item_id]",
                        "rel": {
                            "index": "dt_items",
                            "name": "dt_items",
                            "field": "id",
                            "ownfield": "item_id",
                            "array": false
                        }
                    },
                    {
                        "name": "item_id",
                        "value": "number"
                    },
                    {
                        "name": "code",
                        "value": "string"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "dt_items": "[dt_items|id|item_id]",
                        "item_id": "number",
                        "code": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "dt_items": "[dt_items|id|item_id]",
                        "item_id": "number",
                        "code": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "dt_items": "[dt_items|id|item_id]",
                        "item_id": "number",
                        "code": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "dt_attributes",
                "alias": "dt_attributes",
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
                        "name": "dt_attribute_groups",
                        "value": "[dt_attribute_groups|id|attribute_group_id]",
                        "rel": {
                            "index": "dt_attribute_groups",
                            "name": "dt_attribute_groups",
                            "field": "id",
                            "ownfield": "attribute_group_id",
                            "array": false
                        }
                    },
                    {
                        "name": "attribute_group_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "dt_attribute_groups": "[dt_attribute_groups|id|attribute_group_id]",
                        "attribute_group_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "dt_attribute_groups": "[dt_attribute_groups|id|attribute_group_id]",
                        "attribute_group_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "name": "string",
                        "dt_attribute_groups": "[dt_attribute_groups|id|attribute_group_id]",
                        "attribute_group_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "photos_control_observations",
                "alias": "photos_control_observations",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "control_photos",
                        "value": "[control_photos|id|control_photo_id]",
                        "rel": {
                            "index": "control_photos",
                            "name": "control_photos",
                            "field": "id",
                            "ownfield": "control_photo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "control_photo_id",
                        "value": "number"
                    },
                    {
                        "name": "control_observations",
                        "value": "[control_observations|id|control_observation_id]",
                        "rel": {
                            "index": "control_observations",
                            "name": "control_observations",
                            "field": "id",
                            "ownfield": "control_observation_id",
                            "array": false
                        }
                    },
                    {
                        "name": "control_observation_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "control_photos": "[control_photos|id|control_photo_id]",
                        "control_photo_id": "number",
                        "control_observations": "[control_observations|id|control_observation_id]",
                        "control_observation_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "control_photos": "[control_photos|id|control_photo_id]",
                        "control_photo_id": "number",
                        "control_observations": "[control_observations|id|control_observation_id]",
                        "control_observation_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "control_photos": "[control_photos|id|control_photo_id]",
                        "control_photo_id": "number",
                        "control_observations": "[control_observations|id|control_observation_id]",
                        "control_observation_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "user_role",
                "alias": "user_role",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "users",
                        "value": "[users|id|user_id]",
                        "rel": {
                            "index": "users",
                            "name": "users",
                            "field": "id",
                            "ownfield": "user_id",
                            "array": false
                        }
                    },
                    {
                        "name": "user_id",
                        "value": "number"
                    },
                    {
                        "name": "roles",
                        "value": "[roles|id|role_id]",
                        "rel": {
                            "index": "roles",
                            "name": "roles",
                            "field": "id",
                            "ownfield": "role_id",
                            "array": false
                        }
                    },
                    {
                        "name": "role_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "roles": "[roles|id|role_id]",
                        "role_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "roles": "[roles|id|role_id]",
                        "role_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "roles": "[roles|id|role_id]",
                        "role_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "options",
                "alias": "options",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "value",
                        "value": "string"
                    },
                    {
                        "name": "check",
                        "value": "boolean"
                    },
                    {
                        "name": "questions",
                        "value": "[questions|id|question_id]",
                        "rel": {
                            "index": "questions",
                            "name": "questions",
                            "field": "id",
                            "ownfield": "question_id",
                            "array": false
                        }
                    },
                    {
                        "name": "question_id",
                        "value": "number"
                    },
                    {
                        "name": "state",
                        "value": "boolean"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "value": "string",
                        "check": "boolean",
                        "questions": "[questions|id|question_id]",
                        "question_id": "number",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "value": "string",
                        "check": "boolean",
                        "questions": "[questions|id|question_id]",
                        "question_id": "number",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "value": "string",
                        "check": "boolean",
                        "questions": "[questions|id|question_id]",
                        "question_id": "number",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "role_resource",
                "alias": "role_resource",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "roles",
                        "value": "[roles|id|role_id]",
                        "rel": {
                            "index": "roles",
                            "name": "roles",
                            "field": "id",
                            "ownfield": "role_id",
                            "array": false
                        }
                    },
                    {
                        "name": "role_id",
                        "value": "number"
                    },
                    {
                        "name": "resources",
                        "value": "[resources|id|resource_id]",
                        "rel": {
                            "index": "resources",
                            "name": "resources",
                            "field": "id",
                            "ownfield": "resource_id",
                            "array": false
                        }
                    },
                    {
                        "name": "resource_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "roles": "[roles|id|role_id]",
                        "role_id": "number",
                        "resources": "[resources|id|resource_id]",
                        "resource_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "roles": "[roles|id|role_id]",
                        "role_id": "number",
                        "resources": "[resources|id|resource_id]",
                        "resource_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "roles": "[roles|id|role_id]",
                        "role_id": "number",
                        "resources": "[resources|id|resource_id]",
                        "resource_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "dt_item_attribute",
                "alias": "dt_item_attribute",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "dt_item_code",
                        "value": "[dt_item_code|id|item_code_id]",
                        "rel": {
                            "index": "dt_item_code",
                            "name": "dt_item_code",
                            "field": "id",
                            "ownfield": "item_code_id",
                            "array": false
                        }
                    },
                    {
                        "name": "item_code_id",
                        "value": "number"
                    },
                    {
                        "name": "dt_attributes",
                        "value": "[dt_attributes|id|attribute_id]",
                        "rel": {
                            "index": "dt_attributes",
                            "name": "dt_attributes",
                            "field": "id",
                            "ownfield": "attribute_id",
                            "array": false
                        }
                    },
                    {
                        "name": "attribute_id",
                        "value": "number"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "dt_item_code": "[dt_item_code|id|item_code_id]",
                        "item_code_id": "number",
                        "dt_attributes": "[dt_attributes|id|attribute_id]",
                        "attribute_id": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "dt_item_code": "[dt_item_code|id|item_code_id]",
                        "item_code_id": "number",
                        "dt_attributes": "[dt_attributes|id|attribute_id]",
                        "attribute_id": "number"
                    },
                    "insert": {
                        "dt_item_code": "[dt_item_code|id|item_code_id]",
                        "item_code_id": "number",
                        "dt_attributes": "[dt_attributes|id|attribute_id]",
                        "attribute_id": "number"
                    }
                }
            },
            {
                "name": "persons",
                "alias": "persons",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "names",
                        "value": "string"
                    },
                    {
                        "name": "last_name_1",
                        "value": "string"
                    },
                    {
                        "name": "last_name_2",
                        "value": "string"
                    },
                    {
                        "name": "last_name_3",
                        "value": "string"
                    },
                    {
                        "name": "documents",
                        "value": "[documents|id|document_id]",
                        "rel": {
                            "index": "documents",
                            "name": "documents",
                            "field": "id",
                            "ownfield": "document_id",
                            "array": false
                        }
                    },
                    {
                        "name": "document_id",
                        "value": "number"
                    },
                    {
                        "name": "document_number",
                        "value": "string"
                    },
                    {
                        "name": "addresses",
                        "value": "[addresses|id|address_id]",
                        "rel": {
                            "index": "addresses",
                            "name": "addresses",
                            "field": "id",
                            "ownfield": "address_id",
                            "array": false
                        }
                    },
                    {
                        "name": "address_id",
                        "value": "number"
                    },
                    {
                        "name": "latitude",
                        "value": "string"
                    },
                    {
                        "name": "longitude",
                        "value": "string"
                    },
                    {
                        "name": "birth_date",
                        "value": "date"
                    },
                    {
                        "name": "genders",
                        "value": "[genders|id|gender_id]",
                        "rel": {
                            "index": "genders",
                            "name": "genders",
                            "field": "id",
                            "ownfield": "gender_id",
                            "array": false
                        }
                    },
                    {
                        "name": "gender_id",
                        "value": "number"
                    },
                    {
                        "name": "expededs",
                        "value": "[expededs|id|expeded_id]",
                        "rel": {
                            "index": "expededs",
                            "name": "expededs",
                            "field": "id",
                            "ownfield": "expeded_id",
                            "array": false
                        }
                    },
                    {
                        "name": "expeded_id",
                        "value": "number"
                    },
                    {
                        "name": "routes",
                        "value": "string"
                    },
                    {
                        "name": "route_id",
                        "value": "number"
                    },
                    {
                        "name": "exist",
                        "value": "boolean"
                    },
                    {
                        "name": "code",
                        "value": "string"
                    },
                    {
                        "name": "position",
                        "value": "string"
                    },
                    {
                        "name": "custom_position",
                        "value": "boolean"
                    },
                    {
                        "name": "state",
                        "value": "boolean"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    },
                    {
                        "name": "area",
                        "value": "string"
                    },
                    {
                        "name": "type_job",
                        "value": "string"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "names": "string",
                        "last_name_1": "string",
                        "last_name_2": "string",
                        "last_name_3": "string",
                        "documents": "[documents|id|document_id]",
                        "document_id": "number",
                        "document_number": "string",
                        "addresses": "[addresses|id|address_id]",
                        "address_id": "number",
                        "latitude": "string",
                        "longitude": "string",
                        "birth_date": "date",
                        "genders": "[genders|id|gender_id]",
                        "gender_id": "number",
                        "expededs": "[expededs|id|expeded_id]",
                        "expeded_id": "number",
                        "routes": "string",
                        "route_id": "number",
                        "exist": "boolean",
                        "code": "string",
                        "position": "string",
                        "custom_position": "boolean",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date",
                        "area": "string",
                        "type_job": "string"
                    },
                    "create": {
                        "id": "number|pk",
                        "names": "string",
                        "last_name_1": "string",
                        "last_name_2": "string",
                        "last_name_3": "string",
                        "documents": "[documents|id|document_id]",
                        "document_id": "number",
                        "document_number": "string",
                        "addresses": "[addresses|id|address_id]",
                        "address_id": "number",
                        "latitude": "string",
                        "longitude": "string",
                        "birth_date": "date",
                        "genders": "[genders|id|gender_id]",
                        "gender_id": "number",
                        "expededs": "[expededs|id|expeded_id]",
                        "expeded_id": "number",
                        "routes": "string",
                        "route_id": "number",
                        "exist": "boolean",
                        "code": "string",
                        "position": "string",
                        "custom_position": "boolean",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date",
                        "area": "string",
                        "type_job": "string"
                    },
                    "insert": {
                        "names": "string",
                        "last_name_1": "string",
                        "last_name_2": "string",
                        "last_name_3": "string",
                        "documents": "[documents|id|document_id]",
                        "document_id": "number",
                        "document_number": "string",
                        "addresses": "[addresses|id|address_id]",
                        "address_id": "number",
                        "latitude": "string",
                        "longitude": "string",
                        "birth_date": "date",
                        "genders": "[genders|id|gender_id]",
                        "gender_id": "number",
                        "expededs": "[expededs|id|expeded_id]",
                        "expeded_id": "number",
                        "routes": "string",
                        "route_id": "number",
                        "exist": "boolean",
                        "code": "string",
                        "position": "string",
                        "custom_position": "boolean",
                        "state": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date",
                        "area": "string",
                        "type_job": "string"
                    }
                }
            },
            {
                "name": "payments_1",
                "alias": "payments_1",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "users",
                        "value": "[users|id|user_id]",
                        "rel": {
                            "index": "users",
                            "name": "users",
                            "field": "id",
                            "ownfield": "user_id",
                            "array": false
                        }
                    },
                    {
                        "name": "user_id",
                        "value": "number"
                    },
                    {
                        "name": "persons",
                        "value": "[persons|id|person_id]",
                        "rel": {
                            "index": "persons",
                            "name": "persons",
                            "field": "id",
                            "ownfield": "person_id",
                            "array": false
                        }
                    },
                    {
                        "name": "person_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "payments",
                "alias": "payments",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "users",
                        "value": "[users|id|user_id]",
                        "rel": {
                            "index": "users",
                            "name": "users",
                            "field": "id",
                            "ownfield": "user_id",
                            "array": false
                        }
                    },
                    {
                        "name": "user_id",
                        "value": "number"
                    },
                    {
                        "name": "persons",
                        "value": "[persons|id|person_id]",
                        "rel": {
                            "index": "persons",
                            "name": "persons",
                            "field": "id",
                            "ownfield": "person_id",
                            "array": false
                        }
                    },
                    {
                        "name": "person_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "person_file",
                "alias": "person_file",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "persons",
                        "value": "[persons|id|person_id]",
                        "rel": {
                            "index": "persons",
                            "name": "persons",
                            "field": "id",
                            "ownfield": "person_id",
                            "array": false
                        }
                    },
                    {
                        "name": "person_id",
                        "value": "number"
                    },
                    {
                        "name": "files",
                        "value": "[files|id|file_id]",
                        "rel": {
                            "index": "files",
                            "name": "files",
                            "field": "id",
                            "ownfield": "file_id",
                            "array": false
                        }
                    },
                    {
                        "name": "file_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "files": "[files|id|file_id]",
                        "file_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "files": "[files|id|file_id]",
                        "file_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "files": "[files|id|file_id]",
                        "file_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "user_person",
                "alias": "user_person",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "users",
                        "value": "[users|id|user_id]",
                        "rel": {
                            "index": "users",
                            "name": "users",
                            "field": "id",
                            "ownfield": "user_id",
                            "array": false
                        }
                    },
                    {
                        "name": "user_id",
                        "value": "number"
                    },
                    {
                        "name": "persons",
                        "value": "[persons|id|person_id]",
                        "rel": {
                            "index": "persons",
                            "name": "persons",
                            "field": "id",
                            "ownfield": "person_id",
                            "array": false
                        }
                    },
                    {
                        "name": "person_id",
                        "value": "number"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number"
                    },
                    "insert": {
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number"
                    }
                }
            },
            {
                "name": "registers",
                "alias": "registers",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "persons",
                        "value": "[persons|id|person_id]",
                        "rel": {
                            "index": "persons",
                            "name": "persons",
                            "field": "id",
                            "ownfield": "person_id",
                            "array": false
                        }
                    },
                    {
                        "name": "person_id",
                        "value": "number"
                    },
                    {
                        "name": "state",
                        "value": "boolean"
                    },
                    {
                        "name": "users",
                        "value": "[users|id|user_id]",
                        "rel": {
                            "index": "users",
                            "name": "users",
                            "field": "id",
                            "ownfield": "user_id",
                            "array": false
                        }
                    },
                    {
                        "name": "user_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "state": "boolean",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "state": "boolean",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "state": "boolean",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "question_register",
                "alias": "question_register",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "questions",
                        "value": "[questions|id|question_id]",
                        "rel": {
                            "index": "questions",
                            "name": "questions",
                            "field": "id",
                            "ownfield": "question_id",
                            "array": false
                        }
                    },
                    {
                        "name": "question_id",
                        "value": "number"
                    },
                    {
                        "name": "registers",
                        "value": "[registers|id|register_id]",
                        "rel": {
                            "index": "registers",
                            "name": "registers",
                            "field": "id",
                            "ownfield": "register_id",
                            "array": false
                        }
                    },
                    {
                        "name": "register_id",
                        "value": "number"
                    },
                    {
                        "name": "answer",
                        "value": "string"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "questions": "[questions|id|question_id]",
                        "question_id": "number",
                        "registers": "[registers|id|register_id]",
                        "register_id": "number",
                        "answer": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "questions": "[questions|id|question_id]",
                        "question_id": "number",
                        "registers": "[registers|id|register_id]",
                        "register_id": "number",
                        "answer": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "questions": "[questions|id|question_id]",
                        "question_id": "number",
                        "registers": "[registers|id|register_id]",
                        "register_id": "number",
                        "answer": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "dt_kit_items",
                "alias": "dt_kit_items",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "dt_kits",
                        "value": "[dt_kits|id|kit_id]",
                        "rel": {
                            "index": "dt_kits",
                            "name": "dt_kits",
                            "field": "id",
                            "ownfield": "kit_id",
                            "array": false
                        }
                    },
                    {
                        "name": "kit_id",
                        "value": "number"
                    },
                    {
                        "name": "dt_items",
                        "value": "[dt_items|id|item_id]",
                        "rel": {
                            "index": "dt_items",
                            "name": "dt_items",
                            "field": "id",
                            "ownfield": "item_id",
                            "array": false
                        }
                    },
                    {
                        "name": "item_id",
                        "value": "number"
                    },
                    {
                        "name": "quantity",
                        "value": "number"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "dt_kits": "[dt_kits|id|kit_id]",
                        "kit_id": "number",
                        "dt_items": "[dt_items|id|item_id]",
                        "item_id": "number",
                        "quantity": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "dt_kits": "[dt_kits|id|kit_id]",
                        "kit_id": "number",
                        "dt_items": "[dt_items|id|item_id]",
                        "item_id": "number",
                        "quantity": "number"
                    },
                    "insert": {
                        "dt_kits": "[dt_kits|id|kit_id]",
                        "kit_id": "number",
                        "dt_items": "[dt_items|id|item_id]",
                        "item_id": "number",
                        "quantity": "number"
                    }
                }
            },
            {
                "name": "dt_item_replacements",
                "alias": "dt_item_replacements",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "dt_item_code",
                        "value": "[dt_item_code|id|item_code_id]",
                        "rel": {
                            "index": "dt_item_code",
                            "name": "dt_item_code",
                            "field": "id",
                            "ownfield": "item_code_id",
                            "array": false
                        }
                    },
                    {
                        "name": "item_code_id",
                        "value": "number"
                    },
                    {
                        "name": "dt_replacement_deliveries",
                        "value": "[dt_replacement_deliveries|id|replacement_delivery_id]",
                        "rel": {
                            "index": "dt_replacement_deliveries",
                            "name": "dt_replacement_deliveries",
                            "field": "id",
                            "ownfield": "replacement_delivery_id",
                            "array": false
                        }
                    },
                    {
                        "name": "replacement_delivery_id",
                        "value": "number"
                    },
                    {
                        "name": "quantity",
                        "value": "number"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "dt_item_code": "[dt_item_code|id|item_code_id]",
                        "item_code_id": "number",
                        "dt_replacement_deliveries": "[dt_replacement_deliveries|id|replacement_delivery_id]",
                        "replacement_delivery_id": "number",
                        "quantity": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "dt_item_code": "[dt_item_code|id|item_code_id]",
                        "item_code_id": "number",
                        "dt_replacement_deliveries": "[dt_replacement_deliveries|id|replacement_delivery_id]",
                        "replacement_delivery_id": "number",
                        "quantity": "number"
                    },
                    "insert": {
                        "dt_item_code": "[dt_item_code|id|item_code_id]",
                        "item_code_id": "number",
                        "dt_replacement_deliveries": "[dt_replacement_deliveries|id|replacement_delivery_id]",
                        "replacement_delivery_id": "number",
                        "quantity": "number"
                    }
                }
            },
            {
                "name": "qr_controls",
                "alias": "qr_controls",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "persons",
                        "value": "[persons|id|person_id]",
                        "rel": {
                            "index": "persons",
                            "name": "persons",
                            "field": "id",
                            "ownfield": "person_id",
                            "array": false
                        }
                    },
                    {
                        "name": "person_id",
                        "value": "number"
                    },
                    {
                        "name": "register_date",
                        "value": "date"
                    },
                    {
                        "name": "latitude",
                        "value": "number"
                    },
                    {
                        "name": "longitude",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "register_date": "date",
                        "latitude": "number",
                        "longitude": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "register_date": "date",
                        "latitude": "number",
                        "longitude": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "register_date": "date",
                        "latitude": "number",
                        "longitude": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "qr_control_photos",
                "alias": "qr_control_photos",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "qr_controls",
                        "value": "[qr_controls|id|qr_control_id]",
                        "rel": {
                            "index": "qr_controls",
                            "name": "qr_controls",
                            "field": "id",
                            "ownfield": "qr_control_id",
                            "array": false
                        }
                    },
                    {
                        "name": "qr_control_id",
                        "value": "number"
                    },
                    {
                        "name": "control_photos",
                        "value": "[control_photos|id|control_photo_id]",
                        "rel": {
                            "index": "control_photos",
                            "name": "control_photos",
                            "field": "id",
                            "ownfield": "control_photo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "control_photo_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "qr_controls": "[qr_controls|id|qr_control_id]",
                        "qr_control_id": "number",
                        "control_photos": "[control_photos|id|control_photo_id]",
                        "control_photo_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "qr_controls": "[qr_controls|id|qr_control_id]",
                        "qr_control_id": "number",
                        "control_photos": "[control_photos|id|control_photo_id]",
                        "control_photo_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "qr_controls": "[qr_controls|id|qr_control_id]",
                        "qr_control_id": "number",
                        "control_photos": "[control_photos|id|control_photo_id]",
                        "control_photo_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "dt_replacement_observations",
                "alias": "dt_replacement_observations",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "dt_replacement_deliveries",
                        "value": "[dt_replacement_deliveries|id|replacement_delivery_id]",
                        "rel": {
                            "index": "dt_replacement_deliveries",
                            "name": "dt_replacement_deliveries",
                            "field": "id",
                            "ownfield": "replacement_delivery_id",
                            "array": false
                        }
                    },
                    {
                        "name": "replacement_delivery_id",
                        "value": "number"
                    },
                    {
                        "name": "control_observations",
                        "value": "[control_observations|id|control_observation_id]",
                        "rel": {
                            "index": "control_observations",
                            "name": "control_observations",
                            "field": "id",
                            "ownfield": "control_observation_id",
                            "array": false
                        }
                    },
                    {
                        "name": "control_observation_id",
                        "value": "number"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "dt_replacement_deliveries": "[dt_replacement_deliveries|id|replacement_delivery_id]",
                        "replacement_delivery_id": "number",
                        "control_observations": "[control_observations|id|control_observation_id]",
                        "control_observation_id": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "dt_replacement_deliveries": "[dt_replacement_deliveries|id|replacement_delivery_id]",
                        "replacement_delivery_id": "number",
                        "control_observations": "[control_observations|id|control_observation_id]",
                        "control_observation_id": "number"
                    },
                    "insert": {
                        "dt_replacement_deliveries": "[dt_replacement_deliveries|id|replacement_delivery_id]",
                        "replacement_delivery_id": "number",
                        "control_observations": "[control_observations|id|control_observation_id]",
                        "control_observation_id": "number"
                    }
                }
            },
            {
                "name": "dt_replacement_deliveries",
                "alias": "dt_replacement_deliveries",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "register_date",
                        "value": "date"
                    },
                    {
                        "name": "latitude",
                        "value": "number"
                    },
                    {
                        "name": "longitude",
                        "value": "number"
                    },
                    {
                        "name": "persons",
                        "value": "[persons|id|person_id]",
                        "rel": {
                            "index": "persons",
                            "name": "persons",
                            "field": "id",
                            "ownfield": "person_id",
                            "array": false
                        }
                    },
                    {
                        "name": "person_id",
                        "value": "number"
                    },
                    {
                        "name": "users",
                        "value": "[users|id|user_id]",
                        "rel": {
                            "index": "users",
                            "name": "users",
                            "field": "id",
                            "ownfield": "user_id",
                            "array": false
                        }
                    },
                    {
                        "name": "user_id",
                        "value": "number"
                    },
                    {
                        "name": "control_status",
                        "value": "[control_status|id|status_id]",
                        "rel": {
                            "index": "control_status",
                            "name": "control_status",
                            "field": "id",
                            "ownfield": "status_id",
                            "array": false
                        }
                    },
                    {
                        "name": "status_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "register_date": "date",
                        "latitude": "number",
                        "longitude": "number",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "control_status": "[control_status|id|status_id]",
                        "status_id": "number",
                        "created_at": "date",
                        "updated_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "register_date": "date",
                        "latitude": "number",
                        "longitude": "number",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "control_status": "[control_status|id|status_id]",
                        "status_id": "number",
                        "created_at": "date",
                        "updated_at": "date"
                    },
                    "insert": {
                        "register_date": "date",
                        "latitude": "number",
                        "longitude": "number",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "control_status": "[control_status|id|status_id]",
                        "status_id": "number",
                        "created_at": "date",
                        "updated_at": "date"
                    }
                }
            },
            {
                "name": "question_rates",
                "alias": "question_rates",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "registers",
                        "value": "[registers|id|register_id]",
                        "rel": {
                            "index": "registers",
                            "name": "registers",
                            "field": "id",
                            "ownfield": "register_id",
                            "array": false
                        }
                    },
                    {
                        "name": "register_id",
                        "value": "number"
                    },
                    {
                        "name": "total",
                        "value": "number"
                    },
                    {
                        "name": "detail",
                        "value": "string"
                    },
                    {
                        "name": "users",
                        "value": "[users|id|user_id]",
                        "rel": {
                            "index": "users",
                            "name": "users",
                            "field": "id",
                            "ownfield": "user_id",
                            "array": false
                        }
                    },
                    {
                        "name": "user_id",
                        "value": "number"
                    },
                    {
                        "name": "type",
                        "value": "string"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "registers": "[registers|id|register_id]",
                        "register_id": "number",
                        "total": "number",
                        "detail": "string",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "type": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "registers": "[registers|id|register_id]",
                        "register_id": "number",
                        "total": "number",
                        "detail": "string",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "type": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "registers": "[registers|id|register_id]",
                        "register_id": "number",
                        "total": "number",
                        "detail": "string",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "type": "string",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "dt_replacement_photos",
                "alias": "dt_replacement_photos",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "register_date",
                        "value": "date"
                    },
                    {
                        "name": "photo",
                        "value": "string"
                    },
                    {
                        "name": "dt_replacement_deliveries",
                        "value": "[dt_replacement_deliveries|id|replacement_delivery_id]",
                        "rel": {
                            "index": "dt_replacement_deliveries",
                            "name": "dt_replacement_deliveries",
                            "field": "id",
                            "ownfield": "replacement_delivery_id",
                            "array": false
                        }
                    },
                    {
                        "name": "replacement_delivery_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "register_date": "date",
                        "photo": "string",
                        "dt_replacement_deliveries": "[dt_replacement_deliveries|id|replacement_delivery_id]",
                        "replacement_delivery_id": "number",
                        "created_at": "date",
                        "updated_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "register_date": "date",
                        "photo": "string",
                        "dt_replacement_deliveries": "[dt_replacement_deliveries|id|replacement_delivery_id]",
                        "replacement_delivery_id": "number",
                        "created_at": "date",
                        "updated_at": "date"
                    },
                    "insert": {
                        "register_date": "date",
                        "photo": "string",
                        "dt_replacement_deliveries": "[dt_replacement_deliveries|id|replacement_delivery_id]",
                        "replacement_delivery_id": "number",
                        "created_at": "date",
                        "updated_at": "date"
                    }
                }
            },
            {
                "name": "job_routes",
                "alias": "job_routes",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "code",
                        "value": "string"
                    },
                    {
                        "name": "frequency",
                        "value": "string"
                    },
                    {
                        "name": "start_time",
                        "value": "time"
                    },
                    {
                        "name": "service",
                        "value": "number"
                    },
                    {
                        "name": "document",
                        "value": "number"
                    },
                    {
                        "name": "persons",
                        "value": "[persons|id|supervisor_id]",
                        "rel": {
                            "index": "persons",
                            "name": "persons",
                            "field": "id",
                            "ownfield": "supervisor_id",
                            "array": false
                        }
                    },
                    {
                        "name": "supervisor_id",
                        "value": "number"
                    },
                    {
                        "name": "sections",
                        "value": "[sections|id|section_id]",
                        "rel": {
                            "index": "sections",
                            "name": "sections",
                            "field": "id",
                            "ownfield": "section_id",
                            "array": false
                        }
                    },
                    {
                        "name": "section_id",
                        "value": "number"
                    },
                    {
                        "name": "shift",
                        "value": "number"
                    },
                    {
                        "name": "start_point",
                        "value": "string"
                    },
                    {
                        "name": "end_point",
                        "value": "string"
                    },
                    {
                        "name": "snap_road",
                        "value": "string"
                    },
                    {
                        "name": "description",
                        "value": "string"
                    },
                    {
                        "name": "status",
                        "value": "boolean"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    },
                    {
                        "name": "color",
                        "value": "string"
                    },
                    {
                        "name": "distance",
                        "value": "number"
                    },
                    {
                        "name": "users",
                        "value": "[users|id|user_id]",
                        "rel": {
                            "index": "users",
                            "name": "users",
                            "field": "id",
                            "ownfield": "user_id",
                            "array": false
                        }
                    },
                    {
                        "name": "user_id",
                        "value": "number"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "code": "string",
                        "frequency": "string",
                        "start_time": "time",
                        "service": "number",
                        "document": "number",
                        "persons": "[persons|id|supervisor_id]",
                        "supervisor_id": "number",
                        "sections": "[sections|id|section_id]",
                        "section_id": "number",
                        "shift": "number",
                        "start_point": "string",
                        "end_point": "string",
                        "snap_road": "string",
                        "description": "string",
                        "status": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date",
                        "color": "string",
                        "distance": "number",
                        "users": "[users|id|user_id]",
                        "user_id": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "code": "string",
                        "frequency": "string",
                        "start_time": "time",
                        "service": "number",
                        "document": "number",
                        "persons": "[persons|id|supervisor_id]",
                        "supervisor_id": "number",
                        "sections": "[sections|id|section_id]",
                        "section_id": "number",
                        "shift": "number",
                        "start_point": "string",
                        "end_point": "string",
                        "snap_road": "string",
                        "description": "string",
                        "status": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date",
                        "color": "string",
                        "distance": "number",
                        "users": "[users|id|user_id]",
                        "user_id": "number"
                    },
                    "insert": {
                        "code": "string",
                        "frequency": "string",
                        "start_time": "time",
                        "service": "number",
                        "document": "number",
                        "persons": "[persons|id|supervisor_id]",
                        "supervisor_id": "number",
                        "sections": "[sections|id|section_id]",
                        "section_id": "number",
                        "shift": "number",
                        "start_point": "string",
                        "end_point": "string",
                        "snap_road": "string",
                        "description": "string",
                        "status": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date",
                        "color": "string",
                        "distance": "number",
                        "users": "[users|id|user_id]",
                        "user_id": "number"
                    }
                }
            },
            {
                "name": "person_routes",
                "alias": "person_routes",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "persons",
                        "value": "[persons|id|person_id]",
                        "rel": {
                            "index": "persons",
                            "name": "persons",
                            "field": "id",
                            "ownfield": "person_id",
                            "array": false
                        }
                    },
                    {
                        "name": "person_id",
                        "value": "number"
                    },
                    {
                        "name": "job_routes",
                        "value": "[job_routes|id|job_route_id]",
                        "rel": {
                            "index": "job_routes",
                            "name": "job_routes",
                            "field": "id",
                            "ownfield": "job_route_id",
                            "array": false
                        }
                    },
                    {
                        "name": "job_route_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "job_routes": "[job_routes|id|job_route_id]",
                        "job_route_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "job_routes": "[job_routes|id|job_route_id]",
                        "job_route_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "job_routes": "[job_routes|id|job_route_id]",
                        "job_route_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "dt_kits",
                "alias": "dt_kits",
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
                        "name": "persons",
                        "value": "[persons|id|manager_id]",
                        "rel": {
                            "index": "persons",
                            "name": "persons",
                            "field": "id",
                            "ownfield": "manager_id",
                            "array": false
                        }
                    },
                    {
                        "name": "manager_id",
                        "value": "number"
                    },
                    {
                        "name": "dt_periodicity",
                        "value": "[dt_periodicity|id|periodicity_id]",
                        "rel": {
                            "index": "dt_periodicity",
                            "name": "dt_periodicity",
                            "field": "id",
                            "ownfield": "periodicity_id",
                            "array": false
                        }
                    },
                    {
                        "name": "periodicity_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "persons": "[persons|id|manager_id]",
                        "manager_id": "number",
                        "dt_periodicity": "[dt_periodicity|id|periodicity_id]",
                        "periodicity_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "name": "string",
                        "persons": "[persons|id|manager_id]",
                        "manager_id": "number",
                        "dt_periodicity": "[dt_periodicity|id|periodicity_id]",
                        "periodicity_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "name": "string",
                        "persons": "[persons|id|manager_id]",
                        "manager_id": "number",
                        "dt_periodicity": "[dt_periodicity|id|periodicity_id]",
                        "periodicity_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "dt_kit_rules",
                "alias": "dt_kit_rules",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "positions",
                        "value": "string"
                    },
                    {
                        "name": "dt_kits",
                        "value": "[dt_kits|id|kit_id]",
                        "rel": {
                            "index": "dt_kits",
                            "name": "dt_kits",
                            "field": "id",
                            "ownfield": "kit_id",
                            "array": false
                        }
                    },
                    {
                        "name": "kit_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "positions": "string",
                        "dt_kits": "[dt_kits|id|kit_id]",
                        "kit_id": "number",
                        "created_at": "date",
                        "updated_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "positions": "string",
                        "dt_kits": "[dt_kits|id|kit_id]",
                        "kit_id": "number",
                        "created_at": "date",
                        "updated_at": "date"
                    },
                    "insert": {
                        "positions": "string",
                        "dt_kits": "[dt_kits|id|kit_id]",
                        "kit_id": "number",
                        "created_at": "date",
                        "updated_at": "date"
                    }
                }
            },
            {
                "name": "dt_kit_deliveries",
                "alias": "dt_kit_deliveries",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "dt_kits",
                        "value": "[dt_kits|id|kit_id]",
                        "rel": {
                            "index": "dt_kits",
                            "name": "dt_kits",
                            "field": "id",
                            "ownfield": "kit_id",
                            "array": false
                        }
                    },
                    {
                        "name": "kit_id",
                        "value": "number"
                    },
                    {
                        "name": "register_date",
                        "value": "date"
                    },
                    {
                        "name": "latitude",
                        "value": "number"
                    },
                    {
                        "name": "longitude",
                        "value": "number"
                    },
                    {
                        "name": "persons",
                        "value": "[persons|id|person_id]",
                        "rel": {
                            "index": "persons",
                            "name": "persons",
                            "field": "id",
                            "ownfield": "person_id",
                            "array": false
                        }
                    },
                    {
                        "name": "person_id",
                        "value": "number"
                    },
                    {
                        "name": "users",
                        "value": "[users|id|user_id]",
                        "rel": {
                            "index": "users",
                            "name": "users",
                            "field": "id",
                            "ownfield": "user_id",
                            "array": false
                        }
                    },
                    {
                        "name": "user_id",
                        "value": "number"
                    },
                    {
                        "name": "control_status",
                        "value": "[control_status|id|status_id]",
                        "rel": {
                            "index": "control_status",
                            "name": "control_status",
                            "field": "id",
                            "ownfield": "status_id",
                            "array": false
                        }
                    },
                    {
                        "name": "status_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "dt_kits": "[dt_kits|id|kit_id]",
                        "kit_id": "number",
                        "register_date": "date",
                        "latitude": "number",
                        "longitude": "number",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "control_status": "[control_status|id|status_id]",
                        "status_id": "number",
                        "created_at": "date",
                        "updated_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "dt_kits": "[dt_kits|id|kit_id]",
                        "kit_id": "number",
                        "register_date": "date",
                        "latitude": "number",
                        "longitude": "number",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "control_status": "[control_status|id|status_id]",
                        "status_id": "number",
                        "created_at": "date",
                        "updated_at": "date"
                    },
                    "insert": {
                        "dt_kits": "[dt_kits|id|kit_id]",
                        "kit_id": "number",
                        "register_date": "date",
                        "latitude": "number",
                        "longitude": "number",
                        "persons": "[persons|id|person_id]",
                        "person_id": "number",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "control_status": "[control_status|id|status_id]",
                        "status_id": "number",
                        "created_at": "date",
                        "updated_at": "date"
                    }
                }
            },
            {
                "name": "dt_delivery_observations",
                "alias": "dt_delivery_observations",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "dt_kit_deliveries",
                        "value": "[dt_kit_deliveries|id|kit_delivery_id]",
                        "rel": {
                            "index": "dt_kit_deliveries",
                            "name": "dt_kit_deliveries",
                            "field": "id",
                            "ownfield": "kit_delivery_id",
                            "array": false
                        }
                    },
                    {
                        "name": "kit_delivery_id",
                        "value": "number"
                    },
                    {
                        "name": "control_observations",
                        "value": "[control_observations|id|control_observation_id]",
                        "rel": {
                            "index": "control_observations",
                            "name": "control_observations",
                            "field": "id",
                            "ownfield": "control_observation_id",
                            "array": false
                        }
                    },
                    {
                        "name": "control_observation_id",
                        "value": "number"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "dt_kit_deliveries": "[dt_kit_deliveries|id|kit_delivery_id]",
                        "kit_delivery_id": "number",
                        "control_observations": "[control_observations|id|control_observation_id]",
                        "control_observation_id": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "dt_kit_deliveries": "[dt_kit_deliveries|id|kit_delivery_id]",
                        "kit_delivery_id": "number",
                        "control_observations": "[control_observations|id|control_observation_id]",
                        "control_observation_id": "number"
                    },
                    "insert": {
                        "dt_kit_deliveries": "[dt_kit_deliveries|id|kit_delivery_id]",
                        "kit_delivery_id": "number",
                        "control_observations": "[control_observations|id|control_observation_id]",
                        "control_observation_id": "number"
                    }
                }
            },
            {
                "name": "dt_item_deliveries",
                "alias": "dt_item_deliveries",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "dt_item_code",
                        "value": "[dt_item_code|id|item_code_id]",
                        "rel": {
                            "index": "dt_item_code",
                            "name": "dt_item_code",
                            "field": "id",
                            "ownfield": "item_code_id",
                            "array": false
                        }
                    },
                    {
                        "name": "item_code_id",
                        "value": "number"
                    },
                    {
                        "name": "dt_kit_deliveries",
                        "value": "[dt_kit_deliveries|id|kit_delivery_id]",
                        "rel": {
                            "index": "dt_kit_deliveries",
                            "name": "dt_kit_deliveries",
                            "field": "id",
                            "ownfield": "kit_delivery_id",
                            "array": false
                        }
                    },
                    {
                        "name": "kit_delivery_id",
                        "value": "number"
                    },
                    {
                        "name": "quantity",
                        "value": "number"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "dt_item_code": "[dt_item_code|id|item_code_id]",
                        "item_code_id": "number",
                        "dt_kit_deliveries": "[dt_kit_deliveries|id|kit_delivery_id]",
                        "kit_delivery_id": "number",
                        "quantity": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "dt_item_code": "[dt_item_code|id|item_code_id]",
                        "item_code_id": "number",
                        "dt_kit_deliveries": "[dt_kit_deliveries|id|kit_delivery_id]",
                        "kit_delivery_id": "number",
                        "quantity": "number"
                    },
                    "insert": {
                        "dt_item_code": "[dt_item_code|id|item_code_id]",
                        "item_code_id": "number",
                        "dt_kit_deliveries": "[dt_kit_deliveries|id|kit_delivery_id]",
                        "kit_delivery_id": "number",
                        "quantity": "number"
                    }
                }
            },
            {
                "name": "dt_delivery_photos",
                "alias": "dt_delivery_photos",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "register_date",
                        "value": "date"
                    },
                    {
                        "name": "photo",
                        "value": "string"
                    },
                    {
                        "name": "dt_kit_deliveries",
                        "value": "[dt_kit_deliveries|id|kit_delivery_id]",
                        "rel": {
                            "index": "dt_kit_deliveries",
                            "name": "dt_kit_deliveries",
                            "field": "id",
                            "ownfield": "kit_delivery_id",
                            "array": false
                        }
                    },
                    {
                        "name": "kit_delivery_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "register_date": "date",
                        "photo": "string",
                        "dt_kit_deliveries": "[dt_kit_deliveries|id|kit_delivery_id]",
                        "kit_delivery_id": "number",
                        "created_at": "date",
                        "updated_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "register_date": "date",
                        "photo": "string",
                        "dt_kit_deliveries": "[dt_kit_deliveries|id|kit_delivery_id]",
                        "kit_delivery_id": "number",
                        "created_at": "date",
                        "updated_at": "date"
                    },
                    "insert": {
                        "register_date": "date",
                        "photo": "string",
                        "dt_kit_deliveries": "[dt_kit_deliveries|id|kit_delivery_id]",
                        "kit_delivery_id": "number",
                        "created_at": "date",
                        "updated_at": "date"
                    }
                }
            },
            {
                "name": "control_routes",
                "alias": "control_routes",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "date",
                        "value": "date"
                    },
                    {
                        "name": "users",
                        "value": "[users|id|user_id]",
                        "rel": {
                            "index": "users",
                            "name": "users",
                            "field": "id",
                            "ownfield": "user_id",
                            "array": false
                        }
                    },
                    {
                        "name": "user_id",
                        "value": "number"
                    },
                    {
                        "name": "job_routes",
                        "value": "[job_routes|id|job_route_id]",
                        "rel": {
                            "index": "job_routes",
                            "name": "job_routes",
                            "field": "id",
                            "ownfield": "job_route_id",
                            "array": false
                        }
                    },
                    {
                        "name": "job_route_id",
                        "value": "number"
                    },
                    {
                        "name": "qr_controls",
                        "value": "[qr_controls|id|qr_control_id]",
                        "rel": {
                            "index": "qr_controls",
                            "name": "qr_controls",
                            "field": "id",
                            "ownfield": "qr_control_id",
                            "array": false
                        }
                    },
                    {
                        "name": "qr_control_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    },
                    {
                        "name": "control_status",
                        "value": "[control_status|id|control_status_id]",
                        "rel": {
                            "index": "control_status",
                            "name": "control_status",
                            "field": "id",
                            "ownfield": "control_status_id",
                            "array": false
                        }
                    },
                    {
                        "name": "control_status_id",
                        "value": "number"
                    },
                    {
                        "name": "sent",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "date": "date",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "job_routes": "[job_routes|id|job_route_id]",
                        "job_route_id": "number",
                        "qr_controls": "[qr_controls|id|qr_control_id]",
                        "qr_control_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date",
                        "control_status": "[control_status|id|control_status_id]",
                        "control_status_id": "number",
                        "sent": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "date": "date",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "job_routes": "[job_routes|id|job_route_id]",
                        "job_route_id": "number",
                        "qr_controls": "[qr_controls|id|qr_control_id]",
                        "qr_control_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date",
                        "control_status": "[control_status|id|control_status_id]",
                        "control_status_id": "number",
                        "sent": "date"
                    },
                    "insert": {
                        "date": "date",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "job_routes": "[job_routes|id|job_route_id]",
                        "job_route_id": "number",
                        "qr_controls": "[qr_controls|id|qr_control_id]",
                        "qr_control_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date",
                        "control_status": "[control_status|id|control_status_id]",
                        "control_status_id": "number",
                        "sent": "date"
                    }
                }
            },
            {
                "name": "control_checks",
                "alias": "control_checks",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "users",
                        "value": "[users|id|user_id]",
                        "rel": {
                            "index": "users",
                            "name": "users",
                            "field": "id",
                            "ownfield": "user_id",
                            "array": false
                        }
                    },
                    {
                        "name": "user_id",
                        "value": "number"
                    },
                    {
                        "name": "control_routes",
                        "value": "[control_routes|id|control_route_id]",
                        "rel": {
                            "index": "control_routes",
                            "name": "control_routes",
                            "field": "id",
                            "ownfield": "control_route_id",
                            "array": false
                        }
                    },
                    {
                        "name": "control_route_id",
                        "value": "number"
                    },
                    {
                        "name": "status",
                        "value": "boolean"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "control_routes": "[control_routes|id|control_route_id]",
                        "control_route_id": "number",
                        "status": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "control_routes": "[control_routes|id|control_route_id]",
                        "control_route_id": "number",
                        "status": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "users": "[users|id|user_id]",
                        "user_id": "number",
                        "control_routes": "[control_routes|id|control_route_id]",
                        "control_route_id": "number",
                        "status": "boolean",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "control_check_observations",
                "alias": "control_check_observations",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "control_checks",
                        "value": "[control_checks|id|control_check_id]",
                        "rel": {
                            "index": "control_checks",
                            "name": "control_checks",
                            "field": "id",
                            "ownfield": "control_check_id",
                            "array": false
                        }
                    },
                    {
                        "name": "control_check_id",
                        "value": "number"
                    },
                    {
                        "name": "control_observations",
                        "value": "[control_observations|id|control_observation_id]",
                        "rel": {
                            "index": "control_observations",
                            "name": "control_observations",
                            "field": "id",
                            "ownfield": "control_observation_id",
                            "array": false
                        }
                    },
                    {
                        "name": "control_observation_id",
                        "value": "number"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "control_checks": "[control_checks|id|control_check_id]",
                        "control_check_id": "number",
                        "control_observations": "[control_observations|id|control_observation_id]",
                        "control_observation_id": "number"
                    },
                    "create": {
                        "id": "number|pk",
                        "control_checks": "[control_checks|id|control_check_id]",
                        "control_check_id": "number",
                        "control_observations": "[control_observations|id|control_observation_id]",
                        "control_observation_id": "number"
                    },
                    "insert": {
                        "control_checks": "[control_checks|id|control_check_id]",
                        "control_check_id": "number",
                        "control_observations": "[control_observations|id|control_observation_id]",
                        "control_observation_id": "number"
                    }
                }
            },
            {
                "name": "control_route_observations",
                "alias": "control_route_observations",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "control_routes",
                        "value": "[control_routes|id|control_route_id]",
                        "rel": {
                            "index": "control_routes",
                            "name": "control_routes",
                            "field": "id",
                            "ownfield": "control_route_id",
                            "array": false
                        }
                    },
                    {
                        "name": "control_route_id",
                        "value": "number"
                    },
                    {
                        "name": "control_observations",
                        "value": "[control_observations|id|control_observation_id]",
                        "rel": {
                            "index": "control_observations",
                            "name": "control_observations",
                            "field": "id",
                            "ownfield": "control_observation_id",
                            "array": false
                        }
                    },
                    {
                        "name": "control_observation_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "control_routes": "[control_routes|id|control_route_id]",
                        "control_route_id": "number",
                        "control_observations": "[control_observations|id|control_observation_id]",
                        "control_observation_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "control_routes": "[control_routes|id|control_route_id]",
                        "control_route_id": "number",
                        "control_observations": "[control_observations|id|control_observation_id]",
                        "control_observation_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "control_routes": "[control_routes|id|control_route_id]",
                        "control_route_id": "number",
                        "control_observations": "[control_observations|id|control_observation_id]",
                        "control_observation_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            },
            {
                "name": "qr_control_observations",
                "alias": "qr_control_observations",
                "fields": [
                    {
                        "name": "id",
                        "value": "number|pk"
                    },
                    {
                        "name": "qr_controls",
                        "value": "[qr_controls|id|qr_control_id]",
                        "rel": {
                            "index": "qr_controls",
                            "name": "qr_controls",
                            "field": "id",
                            "ownfield": "qr_control_id",
                            "array": false
                        }
                    },
                    {
                        "name": "qr_control_id",
                        "value": "number"
                    },
                    {
                        "name": "control_observations",
                        "value": "[control_observations|id|control_observation_id]",
                        "rel": {
                            "index": "control_observations",
                            "name": "control_observations",
                            "field": "id",
                            "ownfield": "control_observation_id",
                            "array": false
                        }
                    },
                    {
                        "name": "control_observation_id",
                        "value": "number"
                    },
                    {
                        "name": "created_at",
                        "value": "date"
                    },
                    {
                        "name": "updated_at",
                        "value": "date"
                    },
                    {
                        "name": "deleted_at",
                        "value": "date"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "datacustom": [],
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
                        "qr_controls": "[qr_controls|id|qr_control_id]",
                        "qr_control_id": "number",
                        "control_observations": "[control_observations|id|control_observation_id]",
                        "control_observation_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "create": {
                        "id": "number|pk",
                        "qr_controls": "[qr_controls|id|qr_control_id]",
                        "qr_control_id": "number",
                        "control_observations": "[control_observations|id|control_observation_id]",
                        "control_observation_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    },
                    "insert": {
                        "qr_controls": "[qr_controls|id|qr_control_id]",
                        "qr_control_id": "number",
                        "control_observations": "[control_observations|id|control_observation_id]",
                        "control_observation_id": "number",
                        "created_at": "date",
                        "updated_at": "date",
                        "deleted_at": "date"
                    }
                }
            }
        ]
    }
]