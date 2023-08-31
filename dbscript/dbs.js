[
    {
        "db": "inmo",
        "groups": [
            {
                "name": "tabla",
                "alias": "tabla",
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
            }
        ]
    }
]