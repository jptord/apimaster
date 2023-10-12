[
    {
        "db": "contabilidad",
        "groups": [
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
            }
        ]
    }
]