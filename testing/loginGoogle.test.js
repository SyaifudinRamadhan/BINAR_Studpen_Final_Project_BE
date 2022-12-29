const request = require('supertest')
const env = require('dotenv').config()
const api = request(process.env.API_URL)

const login = () => api.post('/api/v1/loginRegGoogle').send({
    credential:"eyJhbGciOiJSUzI1NiIsImtpZCI6IjI3Yjg2ZGM2OTM4ZGMzMjdiMjA0MzMzYTI1MGViYjQzYjMyZTRiM2MiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NjkyNzY1MjMsImF1ZCI6IjEwNzI1MTI0ODI1MzMtZnZqNjY4MjYxMHRqaGdzbXUwNmkxcjVtcmswcmV2b2UuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTI2NjgwNDEwOTQyMzg4MDYzMDYiLCJlbWFpbCI6InN5YWlmdWRpbnJhbWFkaGFuQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIxMDcyNTEyNDgyNTMzLWZ2ajY2ODI2MTB0amhnc211MDZpMXI1bXJrMHJldm9lLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6IkFobWFkIFJhbWFkaGFuIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FMbTV3dTJLN3oxVTdGYlVHY2M5Sm83QkM1ZjduRTgtUFowVFUyblJTV3dKPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkFobWFkIiwiZmFtaWx5X25hbWUiOiJSYW1hZGhhbiIsImlhdCI6MTY2OTI3NjgyMywiZXhwIjoxNjY5MjgwNDIzLCJqdGkiOiI1YTJmM2U5YWMwNzNjYmVmZWNmZWJmMzY5NWUwNGRiN2JmNDFiODZkIn0.bMyVr8MKYkpVPRG7by1pQlhtKPVR_1PHjY44Vn1tYPdWJIDBbOWPcK8WnbgOrF7xrfGic8Nsw-fHY46KFjLHF72-ewuIqXO7BdW9GHXLKQhTG0MBk8BGJxWQozXzxGXZiYhf-6rEIVE9Y4I7qDZqahm_9KSTIqP72zloPEMeQZLM-XMz2iNnSgUhTZaQ8TPJoIj6dlSbQv7yg0jxma68iSmTJuTmg8YhW-yDAmQwB9lHiojfnSBftCpj_PtTdW5ZTVO-qw0mk7XsatZdGDZ_o19v68TDo3q3z-HfzLU9OHCrzOlQ6f31Ds6w9QqCIh7vA3HaZ8e9zr_-aqgFz4MdUg"
}).set('Accept', 'application/json')

const matchers  = require('jest-json-schema').matchers;
expect.extend(matchers);


// Skema validator
const schemaUser = {
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "token",
        "user"
    ],
    "properties": {
        "token": {
            "type": "string",
            "default": "",
            "title": "The token Schema",
            "examples": [
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZDk0MDcyZDktMDg2Yy00MjlmLTg0MmMtMjdkMDg0NGVlODExIiwiaWF0IjoxNjcyMjc5Njc5fQ.2pO20pta3-JIygEHaVT2XSitVTIO4KKAIgUAB83UaxE"
            ]
        },
        "user": {
            "type": "object",
            "default": {},
            "title": "The user Schema",
            "required": [
                "id",
                "username",
                "email",
                "password",
                "g_id",
                "f_name",
                "l_name",
                "active",
                "access_level",
                "deleted",
                "photo",
                "visa_ID",
                "createdAt",
                "updatedAt",
                "trx"
            ],
            "properties": {
                "id": {
                    "type": "string",
                    "default": "",
                    "title": "The id Schema",
                    "examples": [
                        "d94072d9-086c-429f-842c-27d0844ee811"
                    ]
                },
                "username": {
                    "type": "string",
                    "default": "",
                    "title": "The username Schema",
                    "examples": [
                        "Mr. Ahmad Ramadhan"
                    ]
                },
                "email": {
                    "type": "string",
                    "default": "",
                    "title": "The email Schema",
                    "examples": [
                        "syaifudinramadhan@gmail.com"
                    ]
                },
                "password": {
                    "type": "string",
                    "default": "",
                    "title": "The password Schema",
                    "examples": [
                        "$2a$10$84t8NOtYVLZnId89q/aod.9iFxjeZ.3uHv2RzPsq0HoDdya8HfmHa"
                    ]
                },
                "g_id": {
                    "type": "string",
                    "default": "",
                    "title": "The g_id Schema",
                    "examples": [
                        "112668041094238806306"
                    ]
                },
                "f_name": {
                    "type": "string",
                    "default": "",
                    "title": "The f_name Schema",
                    "examples": [
                        "Ahmad"
                    ]
                },
                "l_name": {
                    "type": "string",
                    "default": "",
                    "title": "The l_name Schema",
                    "examples": [
                        "Ramadhan"
                    ]
                },
                "active": {
                    "type": "boolean",
                    "default": false,
                    "title": "The active Schema",
                    "examples": [
                        true
                    ]
                },
                "access_level": {
                    "type": "integer",
                    "default": 0,
                    "title": "The access_level Schema",
                    "examples": [
                        1
                    ]
                },
                "deleted": {
                    "type": "boolean",
                    "default": false,
                    "title": "The deleted Schema",
                    "examples": [
                        false
                    ]
                },
                "photo": {
                    "type": "string",
                    "default": "",
                    "title": "The photo Schema",
                    "examples": [
                        "/user/_image_1672224505401_543580614.jpg"
                    ]
                },
                "visa_ID": {
                    "type": "string",
                    "default": "",
                    "title": "The visa_ID Schema",
                    "examples": [
                        "5658956626595"
                    ]
                },
                "createdAt": {
                    "type": "string",
                    "default": "",
                    "title": "The createdAt Schema",
                    "examples": [
                        "2022-12-24T13:49:57.389Z"
                    ]
                },
                "updatedAt": {
                    "type": "string",
                    "default": "",
                    "title": "The updatedAt Schema",
                    "examples": [
                        "2022-12-28T11:46:41.796Z"
                    ]
                },
                "trx": {
                    "type": "array",
                    "default": [],
                    "title": "The trx Schema",
                    "items": {
                        "type": "object",
                        "title": "A Schema",
                        "required": [
                            "id",
                            "user_id",
                            "price",
                            "count",
                            "token_trx",
                            "give_to",
                            "status",
                            "deleted",
                            "order_id",
                            "createdAt",
                            "updatedAt",
                            "carts",
                            "checkins"
                        ],
                        "properties": {
                            "id": {
                                "type": "integer",
                                "title": "The id Schema",
                                "examples": [
                                    115,
                                    110
                                ]
                            },
                            "user_id": {
                                "type": "string",
                                "title": "The user_id Schema",
                                "examples": [
                                    "d94072d9-086c-429f-842c-27d0844ee811"
                                ]
                            },
                            "price": {
                                "type": "integer",
                                "title": "The price Schema",
                                "examples": [
                                    240000,
                                    0
                                ]
                            },
                            "count": {
                                "type": "integer",
                                "title": "The count Schema",
                                "examples": [
                                    2,
                                    1
                                ]
                            },
                            "token_trx": {
                                "type": "string",
                                "title": "The token_trx Schema",
                                "examples": [
                                    "14c77e95-9bb3-4439-b911-21b942c168c1",
                                    ""
                                ]
                            },
                            "give_to": {
                                "type": "string",
                                "title": "The give_to Schema",
                                "examples": [
                                    "syaifudinramadhan@gmail.com"
                                ]
                            },
                            "status": {
                                "type": "string",
                                "title": "The status Schema",
                                "examples": [
                                    "finished",
                                    "pending"
                                ]
                            },
                            "deleted": {
                                "type": "boolean",
                                "title": "The deleted Schema",
                                "examples": [
                                    false
                                ]
                            },
                            "order_id": {
                                "type": [
                                    "string",
                                    "null"
                                ],
                                "title": "The order_id Schema",
                                "examples": [
                                    "1672063221721",
                                    null
                                ]
                            },
                            "createdAt": {
                                "type": "string",
                                "title": "The createdAt Schema",
                                "examples": [
                                    "2022-12-26T14:00:21.699Z",
                                    "2022-12-26T06:06:07.807Z"
                                ]
                            },
                            "updatedAt": {
                                "type": "string",
                                "title": "The updatedAt Schema",
                                "examples": [
                                    "2022-12-26T14:02:00.928Z",
                                    "2022-12-26T06:06:07.807Z"
                                ]
                            },
                            "carts": {
                                "type": "array",
                                "title": "The carts Schema",
                                "items": {
                                    "type": "object",
                                    "title": "A Schema",
                                    "required": [
                                        "id",
                                        "trx_id",
                                        "ticket_id",
                                        "status",
                                        "deleted",
                                        "chair_number",
                                        "createdAt",
                                        "updatedAt",
                                        "ticket"
                                    ],
                                    "properties": {
                                        "id": {
                                            "type": "integer",
                                            "title": "The id Schema",
                                            "examples": [
                                                47,
                                                46,
                                                41
                                            ]
                                        },
                                        "trx_id": {
                                            "type": "integer",
                                            "title": "The trx_id Schema",
                                            "examples": [
                                                115,
                                                110
                                            ]
                                        },
                                        "ticket_id": {
                                            "type": "string",
                                            "title": "The ticket_id Schema",
                                            "examples": [
                                                "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                                "087ec46b-7993-4626-8e8f-e8146193c1f6"
                                            ]
                                        },
                                        "status": {
                                            "type": "string",
                                            "title": "The status Schema",
                                            "examples": [
                                                "finished",
                                                "pending"
                                            ]
                                        },
                                        "deleted": {
                                            "type": "boolean",
                                            "title": "The deleted Schema",
                                            "examples": [
                                                false
                                            ]
                                        },
                                        "chair_number": {
                                            "type": [
                                                "integer",
                                                "null"
                                            ],
                                            "title": "The chair_number Schema",
                                            "examples": [
                                                7,
                                                13,
                                                null
                                            ]
                                        },
                                        "createdAt": {
                                            "type": "string",
                                            "title": "The createdAt Schema",
                                            "examples": [
                                                "2022-12-26T14:00:21.706Z",
                                                "2022-12-26T14:00:21.703Z",
                                                "2022-12-26T06:06:07.816Z"
                                            ]
                                        },
                                        "updatedAt": {
                                            "type": "string",
                                            "title": "The updatedAt Schema",
                                            "examples": [
                                                "2022-12-26T14:02:00.936Z",
                                                "2022-12-26T14:02:00.933Z",
                                                "2022-12-26T06:06:07.816Z"
                                            ]
                                        },
                                        "ticket": {
                                            "type": "object",
                                            "title": "The ticket Schema",
                                            "required": [
                                                "id",
                                                "name",
                                                "from",
                                                "dest",
                                                "date_air",
                                                "price",
                                                "no_chair",
                                                "type",
                                                "trip_type",
                                                "deleted",
                                                "logo",
                                                "flight_number",
                                                "kelas",
                                                "estimated_up_dest",
                                                "createdAt",
                                                "updatedAt",
                                                "ticketClass",
                                                "passenger"
                                            ],
                                            "properties": {
                                                "id": {
                                                    "type": "string",
                                                    "title": "The id Schema",
                                                    "examples": [
                                                        "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                                        "087ec46b-7993-4626-8e8f-e8146193c1f6"
                                                    ]
                                                },
                                                "name": {
                                                    "type": "string",
                                                    "title": "The name Schema",
                                                    "examples": [
                                                        "Citilink"
                                                    ]
                                                },
                                                "from": {
                                                    "type": "string",
                                                    "title": "The from Schema",
                                                    "examples": [
                                                        "MALAYSIA (KUALA LUMPUR)",
                                                        "SURABAYA (JUANDA)"
                                                    ]
                                                },
                                                "dest": {
                                                    "type": "string",
                                                    "title": "The dest Schema",
                                                    "examples": [
                                                        "SURABAYA (JUANDA)",
                                                        "MALAYSIA (KUALA LUMPUR)"
                                                    ]
                                                },
                                                "date_air": {
                                                    "type": "string",
                                                    "title": "The date_air Schema",
                                                    "examples": [
                                                        "2022-12-27T14:00:00.000Z",
                                                        "2022-12-27T12:00:00.000Z"
                                                    ]
                                                },
                                                "price": {
                                                    "type": "integer",
                                                    "title": "The price Schema",
                                                    "examples": [
                                                        120000
                                                    ]
                                                },
                                                "no_chair": {
                                                    "type": "integer",
                                                    "title": "The no_chair Schema",
                                                    "examples": [
                                                        25
                                                    ]
                                                },
                                                "type": {
                                                    "type": "integer",
                                                    "title": "The type Schema",
                                                    "examples": [
                                                        1
                                                    ]
                                                },
                                                "trip_type": {
                                                    "type": "string",
                                                    "title": "The trip_type Schema",
                                                    "examples": [
                                                        "-"
                                                    ]
                                                },
                                                "deleted": {
                                                    "type": "boolean",
                                                    "title": "The deleted Schema",
                                                    "examples": [
                                                        false
                                                    ]
                                                },
                                                "logo": {
                                                    "type": "string",
                                                    "title": "The logo Schema",
                                                    "examples": [
                                                        "/ticket/ticket_default.jpg"
                                                    ]
                                                },
                                                "flight_number": {
                                                    "type": "string",
                                                    "title": "The flight_number Schema",
                                                    "examples": [
                                                        "CK 707",
                                                        "CK 507"
                                                    ]
                                                },
                                                "kelas": {
                                                    "type": "integer",
                                                    "title": "The kelas Schema",
                                                    "examples": [
                                                        1
                                                    ]
                                                },
                                                "estimated_up_dest": {
                                                    "type": "string",
                                                    "title": "The estimated_up_dest Schema",
                                                    "examples": [
                                                        "2022-12-27T15:00:00.000Z",
                                                        "2022-12-27T13:00:00.000Z"
                                                    ]
                                                },
                                                "createdAt": {
                                                    "type": "string",
                                                    "title": "The createdAt Schema",
                                                    "examples": [
                                                        "2022-12-21T18:06:41.735Z",
                                                        "2022-12-21T18:05:28.430Z"
                                                    ]
                                                },
                                                "updatedAt": {
                                                    "type": "string",
                                                    "title": "The updatedAt Schema",
                                                    "examples": [
                                                        "2022-12-21T18:06:41.735Z",
                                                        "2022-12-21T18:05:28.430Z"
                                                    ]
                                                },
                                                "ticketClass": {
                                                    "type": "object",
                                                    "title": "The ticketClass Schema",
                                                    "required": [
                                                        "id",
                                                        "name",
                                                        "createdAt",
                                                        "updatedAt"
                                                    ],
                                                    "properties": {
                                                        "id": {
                                                            "type": "integer",
                                                            "title": "The id Schema",
                                                            "examples": [
                                                                1
                                                            ]
                                                        },
                                                        "name": {
                                                            "type": "string",
                                                            "title": "The name Schema",
                                                            "examples": [
                                                                "ECONOMY"
                                                            ]
                                                        },
                                                        "createdAt": {
                                                            "type": "string",
                                                            "title": "The createdAt Schema",
                                                            "examples": [
                                                                "2022-12-21T17:36:40.697Z"
                                                            ]
                                                        },
                                                        "updatedAt": {
                                                            "type": "string",
                                                            "title": "The updatedAt Schema",
                                                            "examples": [
                                                                "2022-12-21T17:36:40.697Z"
                                                            ]
                                                        }
                                                    },
                                                    "examples": [{
                                                        "id": 1,
                                                        "name": "ECONOMY",
                                                        "createdAt": "2022-12-21T17:36:40.697Z",
                                                        "updatedAt": "2022-12-21T17:36:40.697Z"
                                                    },
                                                    {
                                                        "id": 1,
                                                        "name": "ECONOMY",
                                                        "createdAt": "2022-12-21T17:36:40.697Z",
                                                        "updatedAt": "2022-12-21T17:36:40.697Z"
                                                    },
                                                    {
                                                        "id": 1,
                                                        "name": "ECONOMY",
                                                        "createdAt": "2022-12-21T17:36:40.697Z",
                                                        "updatedAt": "2022-12-21T17:36:40.697Z"
                                                    }]
                                                },
                                                "passenger": {
                                                    "type": "object",
                                                    "title": "The passenger Schema",
                                                    "required": [
                                                        "id",
                                                        "passenger",
                                                        "createdAt",
                                                        "updatedAt"
                                                    ],
                                                    "properties": {
                                                        "id": {
                                                            "type": "integer",
                                                            "title": "The id Schema",
                                                            "examples": [
                                                                1
                                                            ]
                                                        },
                                                        "passenger": {
                                                            "type": "string",
                                                            "title": "The passenger Schema",
                                                            "examples": [
                                                                "DEWASA"
                                                            ]
                                                        },
                                                        "createdAt": {
                                                            "type": "string",
                                                            "title": "The createdAt Schema",
                                                            "examples": [
                                                                "2022-12-21T17:36:40.469Z"
                                                            ]
                                                        },
                                                        "updatedAt": {
                                                            "type": "string",
                                                            "title": "The updatedAt Schema",
                                                            "examples": [
                                                                "2022-12-21T17:36:40.469Z"
                                                            ]
                                                        }
                                                    },
                                                    "examples": [{
                                                        "id": 1,
                                                        "passenger": "DEWASA",
                                                        "createdAt": "2022-12-21T17:36:40.469Z",
                                                        "updatedAt": "2022-12-21T17:36:40.469Z"
                                                    },
                                                    {
                                                        "id": 1,
                                                        "passenger": "DEWASA",
                                                        "createdAt": "2022-12-21T17:36:40.469Z",
                                                        "updatedAt": "2022-12-21T17:36:40.469Z"
                                                    },
                                                    {
                                                        "id": 1,
                                                        "passenger": "DEWASA",
                                                        "createdAt": "2022-12-21T17:36:40.469Z",
                                                        "updatedAt": "2022-12-21T17:36:40.469Z"
                                                    }]
                                                }
                                            },
                                            "examples": [{
                                                "id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                                "name": "Citilink",
                                                "from": "MALAYSIA (KUALA LUMPUR)",
                                                "dest": "SURABAYA (JUANDA)",
                                                "date_air": "2022-12-27T14:00:00.000Z",
                                                "price": 120000,
                                                "no_chair": 25,
                                                "type": 1,
                                                "trip_type": "-",
                                                "deleted": false,
                                                "logo": "/ticket/ticket_default.jpg",
                                                "flight_number": "CK 707",
                                                "kelas": 1,
                                                "estimated_up_dest": "2022-12-27T15:00:00.000Z",
                                                "createdAt": "2022-12-21T18:06:41.735Z",
                                                "updatedAt": "2022-12-21T18:06:41.735Z",
                                                "ticketClass": {
                                                    "id": 1,
                                                    "name": "ECONOMY",
                                                    "createdAt": "2022-12-21T17:36:40.697Z",
                                                    "updatedAt": "2022-12-21T17:36:40.697Z"
                                                },
                                                "passenger": {
                                                    "id": 1,
                                                    "passenger": "DEWASA",
                                                    "createdAt": "2022-12-21T17:36:40.469Z",
                                                    "updatedAt": "2022-12-21T17:36:40.469Z"
                                                }
                                            },
                                            {
                                                "id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                                "name": "Citilink",
                                                "from": "SURABAYA (JUANDA)",
                                                "dest": "MALAYSIA (KUALA LUMPUR)",
                                                "date_air": "2022-12-27T12:00:00.000Z",
                                                "price": 120000,
                                                "no_chair": 25,
                                                "type": 1,
                                                "trip_type": "-",
                                                "deleted": false,
                                                "logo": "/ticket/ticket_default.jpg",
                                                "flight_number": "CK 507",
                                                "kelas": 1,
                                                "estimated_up_dest": "2022-12-27T13:00:00.000Z",
                                                "createdAt": "2022-12-21T18:05:28.430Z",
                                                "updatedAt": "2022-12-21T18:05:28.430Z",
                                                "ticketClass": {
                                                    "id": 1,
                                                    "name": "ECONOMY",
                                                    "createdAt": "2022-12-21T17:36:40.697Z",
                                                    "updatedAt": "2022-12-21T17:36:40.697Z"
                                                },
                                                "passenger": {
                                                    "id": 1,
                                                    "passenger": "DEWASA",
                                                    "createdAt": "2022-12-21T17:36:40.469Z",
                                                    "updatedAt": "2022-12-21T17:36:40.469Z"
                                                }
                                            },
                                            {
                                                "id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                                "name": "Citilink",
                                                "from": "SURABAYA (JUANDA)",
                                                "dest": "MALAYSIA (KUALA LUMPUR)",
                                                "date_air": "2022-12-27T12:00:00.000Z",
                                                "price": 120000,
                                                "no_chair": 25,
                                                "type": 1,
                                                "trip_type": "-",
                                                "deleted": false,
                                                "logo": "/ticket/ticket_default.jpg",
                                                "flight_number": "CK 507",
                                                "kelas": 1,
                                                "estimated_up_dest": "2022-12-27T13:00:00.000Z",
                                                "createdAt": "2022-12-21T18:05:28.430Z",
                                                "updatedAt": "2022-12-21T18:05:28.430Z",
                                                "ticketClass": {
                                                    "id": 1,
                                                    "name": "ECONOMY",
                                                    "createdAt": "2022-12-21T17:36:40.697Z",
                                                    "updatedAt": "2022-12-21T17:36:40.697Z"
                                                },
                                                "passenger": {
                                                    "id": 1,
                                                    "passenger": "DEWASA",
                                                    "createdAt": "2022-12-21T17:36:40.469Z",
                                                    "updatedAt": "2022-12-21T17:36:40.469Z"
                                                }
                                            }]
                                        }
                                    },
                                    "examples": [{
                                        "id": 47,
                                        "trx_id": 115,
                                        "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                        "status": "finished",
                                        "deleted": false,
                                        "chair_number": 7,
                                        "createdAt": "2022-12-26T14:00:21.706Z",
                                        "updatedAt": "2022-12-26T14:02:00.936Z",
                                        "ticket": {
                                            "id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                            "name": "Citilink",
                                            "from": "MALAYSIA (KUALA LUMPUR)",
                                            "dest": "SURABAYA (JUANDA)",
                                            "date_air": "2022-12-27T14:00:00.000Z",
                                            "price": 120000,
                                            "no_chair": 25,
                                            "type": 1,
                                            "trip_type": "-",
                                            "deleted": false,
                                            "logo": "/ticket/ticket_default.jpg",
                                            "flight_number": "CK 707",
                                            "kelas": 1,
                                            "estimated_up_dest": "2022-12-27T15:00:00.000Z",
                                            "createdAt": "2022-12-21T18:06:41.735Z",
                                            "updatedAt": "2022-12-21T18:06:41.735Z",
                                            "ticketClass": {
                                                "id": 1,
                                                "name": "ECONOMY",
                                                "createdAt": "2022-12-21T17:36:40.697Z",
                                                "updatedAt": "2022-12-21T17:36:40.697Z"
                                            },
                                            "passenger": {
                                                "id": 1,
                                                "passenger": "DEWASA",
                                                "createdAt": "2022-12-21T17:36:40.469Z",
                                                "updatedAt": "2022-12-21T17:36:40.469Z"
                                            }
                                        }
                                    },
                                    {
                                        "id": 46,
                                        "trx_id": 115,
                                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                        "status": "finished",
                                        "deleted": false,
                                        "chair_number": 13,
                                        "createdAt": "2022-12-26T14:00:21.703Z",
                                        "updatedAt": "2022-12-26T14:02:00.933Z",
                                        "ticket": {
                                            "id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                            "name": "Citilink",
                                            "from": "SURABAYA (JUANDA)",
                                            "dest": "MALAYSIA (KUALA LUMPUR)",
                                            "date_air": "2022-12-27T12:00:00.000Z",
                                            "price": 120000,
                                            "no_chair": 25,
                                            "type": 1,
                                            "trip_type": "-",
                                            "deleted": false,
                                            "logo": "/ticket/ticket_default.jpg",
                                            "flight_number": "CK 507",
                                            "kelas": 1,
                                            "estimated_up_dest": "2022-12-27T13:00:00.000Z",
                                            "createdAt": "2022-12-21T18:05:28.430Z",
                                            "updatedAt": "2022-12-21T18:05:28.430Z",
                                            "ticketClass": {
                                                "id": 1,
                                                "name": "ECONOMY",
                                                "createdAt": "2022-12-21T17:36:40.697Z",
                                                "updatedAt": "2022-12-21T17:36:40.697Z"
                                            },
                                            "passenger": {
                                                "id": 1,
                                                "passenger": "DEWASA",
                                                "createdAt": "2022-12-21T17:36:40.469Z",
                                                "updatedAt": "2022-12-21T17:36:40.469Z"
                                            }
                                        }
                                    },
                                    {
                                        "id": 41,
                                        "trx_id": 110,
                                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                        "status": "pending",
                                        "deleted": false,
                                        "chair_number": null,
                                        "createdAt": "2022-12-26T06:06:07.816Z",
                                        "updatedAt": "2022-12-26T06:06:07.816Z",
                                        "ticket": {
                                            "id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                            "name": "Citilink",
                                            "from": "SURABAYA (JUANDA)",
                                            "dest": "MALAYSIA (KUALA LUMPUR)",
                                            "date_air": "2022-12-27T12:00:00.000Z",
                                            "price": 120000,
                                            "no_chair": 25,
                                            "type": 1,
                                            "trip_type": "-",
                                            "deleted": false,
                                            "logo": "/ticket/ticket_default.jpg",
                                            "flight_number": "CK 507",
                                            "kelas": 1,
                                            "estimated_up_dest": "2022-12-27T13:00:00.000Z",
                                            "createdAt": "2022-12-21T18:05:28.430Z",
                                            "updatedAt": "2022-12-21T18:05:28.430Z",
                                            "ticketClass": {
                                                "id": 1,
                                                "name": "ECONOMY",
                                                "createdAt": "2022-12-21T17:36:40.697Z",
                                                "updatedAt": "2022-12-21T17:36:40.697Z"
                                            },
                                            "passenger": {
                                                "id": 1,
                                                "passenger": "DEWASA",
                                                "createdAt": "2022-12-21T17:36:40.469Z",
                                                "updatedAt": "2022-12-21T17:36:40.469Z"
                                            }
                                        }
                                    }]
                                },
                                "examples": [
                                    [{
                                        "id": 47,
                                        "trx_id": 115,
                                        "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                        "status": "finished",
                                        "deleted": false,
                                        "chair_number": 7,
                                        "createdAt": "2022-12-26T14:00:21.706Z",
                                        "updatedAt": "2022-12-26T14:02:00.936Z",
                                        "ticket": {
                                            "id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                            "name": "Citilink",
                                            "from": "MALAYSIA (KUALA LUMPUR)",
                                            "dest": "SURABAYA (JUANDA)",
                                            "date_air": "2022-12-27T14:00:00.000Z",
                                            "price": 120000,
                                            "no_chair": 25,
                                            "type": 1,
                                            "trip_type": "-",
                                            "deleted": false,
                                            "logo": "/ticket/ticket_default.jpg",
                                            "flight_number": "CK 707",
                                            "kelas": 1,
                                            "estimated_up_dest": "2022-12-27T15:00:00.000Z",
                                            "createdAt": "2022-12-21T18:06:41.735Z",
                                            "updatedAt": "2022-12-21T18:06:41.735Z",
                                            "ticketClass": {
                                                "id": 1,
                                                "name": "ECONOMY",
                                                "createdAt": "2022-12-21T17:36:40.697Z",
                                                "updatedAt": "2022-12-21T17:36:40.697Z"
                                            },
                                            "passenger": {
                                                "id": 1,
                                                "passenger": "DEWASA",
                                                "createdAt": "2022-12-21T17:36:40.469Z",
                                                "updatedAt": "2022-12-21T17:36:40.469Z"
                                            }
                                        }
                                    },
                                    {
                                        "id": 46,
                                        "trx_id": 115,
                                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                        "status": "finished",
                                        "deleted": false,
                                        "chair_number": 13,
                                        "createdAt": "2022-12-26T14:00:21.703Z",
                                        "updatedAt": "2022-12-26T14:02:00.933Z",
                                        "ticket": {
                                            "id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                            "name": "Citilink",
                                            "from": "SURABAYA (JUANDA)",
                                            "dest": "MALAYSIA (KUALA LUMPUR)",
                                            "date_air": "2022-12-27T12:00:00.000Z",
                                            "price": 120000,
                                            "no_chair": 25,
                                            "type": 1,
                                            "trip_type": "-",
                                            "deleted": false,
                                            "logo": "/ticket/ticket_default.jpg",
                                            "flight_number": "CK 507",
                                            "kelas": 1,
                                            "estimated_up_dest": "2022-12-27T13:00:00.000Z",
                                            "createdAt": "2022-12-21T18:05:28.430Z",
                                            "updatedAt": "2022-12-21T18:05:28.430Z",
                                            "ticketClass": {
                                                "id": 1,
                                                "name": "ECONOMY",
                                                "createdAt": "2022-12-21T17:36:40.697Z",
                                                "updatedAt": "2022-12-21T17:36:40.697Z"
                                            },
                                            "passenger": {
                                                "id": 1,
                                                "passenger": "DEWASA",
                                                "createdAt": "2022-12-21T17:36:40.469Z",
                                                "updatedAt": "2022-12-21T17:36:40.469Z"
                                            }
                                        }
                                    }],
                                    [{
                                        "id": 41,
                                        "trx_id": 110,
                                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                        "status": "pending",
                                        "deleted": false,
                                        "chair_number": null,
                                        "createdAt": "2022-12-26T06:06:07.816Z",
                                        "updatedAt": "2022-12-26T06:06:07.816Z",
                                        "ticket": {
                                            "id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                            "name": "Citilink",
                                            "from": "SURABAYA (JUANDA)",
                                            "dest": "MALAYSIA (KUALA LUMPUR)",
                                            "date_air": "2022-12-27T12:00:00.000Z",
                                            "price": 120000,
                                            "no_chair": 25,
                                            "type": 1,
                                            "trip_type": "-",
                                            "deleted": false,
                                            "logo": "/ticket/ticket_default.jpg",
                                            "flight_number": "CK 507",
                                            "kelas": 1,
                                            "estimated_up_dest": "2022-12-27T13:00:00.000Z",
                                            "createdAt": "2022-12-21T18:05:28.430Z",
                                            "updatedAt": "2022-12-21T18:05:28.430Z",
                                            "ticketClass": {
                                                "id": 1,
                                                "name": "ECONOMY",
                                                "createdAt": "2022-12-21T17:36:40.697Z",
                                                "updatedAt": "2022-12-21T17:36:40.697Z"
                                            },
                                            "passenger": {
                                                "id": 1,
                                                "passenger": "DEWASA",
                                                "createdAt": "2022-12-21T17:36:40.469Z",
                                                "updatedAt": "2022-12-21T17:36:40.469Z"
                                            }
                                        }
                                    }]
                                ]
                            },
                            "checkins": {
                                "type": "array",
                                "title": "The checkins Schema",
                                "items": {
                                    "type": "object",
                                    "default": {},
                                    "title": "A Schema",
                                    "required": [
                                        "id",
                                        "trx_id",
                                        "status",
                                        "createdAt",
                                        "updatedAt"
                                    ],
                                    "properties": {
                                        "id": {
                                            "type": "integer",
                                            "default": 0,
                                            "title": "The id Schema",
                                            "examples": [
                                                6
                                            ]
                                        },
                                        "trx_id": {
                                            "type": "integer",
                                            "default": 0,
                                            "title": "The trx_id Schema",
                                            "examples": [
                                                115
                                            ]
                                        },
                                        "status": {
                                            "type": "string",
                                            "default": "",
                                            "title": "The status Schema",
                                            "examples": [
                                                "checkined"
                                            ]
                                        },
                                        "createdAt": {
                                            "type": "string",
                                            "default": "",
                                            "title": "The createdAt Schema",
                                            "examples": [
                                                "2022-12-26T14:07:13.127Z"
                                            ]
                                        },
                                        "updatedAt": {
                                            "type": "string",
                                            "default": "",
                                            "title": "The updatedAt Schema",
                                            "examples": [
                                                "2022-12-26T14:07:13.127Z"
                                            ]
                                        }
                                    },
                                    "examples": [{
                                        "id": 6,
                                        "trx_id": 115,
                                        "status": "checkined",
                                        "createdAt": "2022-12-26T14:07:13.127Z",
                                        "updatedAt": "2022-12-26T14:07:13.127Z"
                                    }]
                                },
                                "examples": [
                                    [{
                                        "id": 6,
                                        "trx_id": 115,
                                        "status": "checkined",
                                        "createdAt": "2022-12-26T14:07:13.127Z",
                                        "updatedAt": "2022-12-26T14:07:13.127Z"
                                    }],
                                    []
                                ]
                            }
                        },
                        "examples": [{
                            "id": 115,
                            "user_id": "d94072d9-086c-429f-842c-27d0844ee811",
                            "price": 240000,
                            "count": 2,
                            "token_trx": "14c77e95-9bb3-4439-b911-21b942c168c1",
                            "give_to": "syaifudinramadhan@gmail.com",
                            "status": "finished",
                            "deleted": false,
                            "order_id": "1672063221721",
                            "createdAt": "2022-12-26T14:00:21.699Z",
                            "updatedAt": "2022-12-26T14:02:00.928Z",
                            "carts": [{
                                "id": 47,
                                "trx_id": 115,
                                "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                "status": "finished",
                                "deleted": false,
                                "chair_number": 7,
                                "createdAt": "2022-12-26T14:00:21.706Z",
                                "updatedAt": "2022-12-26T14:02:00.936Z",
                                "ticket": {
                                    "id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                    "name": "Citilink",
                                    "from": "MALAYSIA (KUALA LUMPUR)",
                                    "dest": "SURABAYA (JUANDA)",
                                    "date_air": "2022-12-27T14:00:00.000Z",
                                    "price": 120000,
                                    "no_chair": 25,
                                    "type": 1,
                                    "trip_type": "-",
                                    "deleted": false,
                                    "logo": "/ticket/ticket_default.jpg",
                                    "flight_number": "CK 707",
                                    "kelas": 1,
                                    "estimated_up_dest": "2022-12-27T15:00:00.000Z",
                                    "createdAt": "2022-12-21T18:06:41.735Z",
                                    "updatedAt": "2022-12-21T18:06:41.735Z",
                                    "ticketClass": {
                                        "id": 1,
                                        "name": "ECONOMY",
                                        "createdAt": "2022-12-21T17:36:40.697Z",
                                        "updatedAt": "2022-12-21T17:36:40.697Z"
                                    },
                                    "passenger": {
                                        "id": 1,
                                        "passenger": "DEWASA",
                                        "createdAt": "2022-12-21T17:36:40.469Z",
                                        "updatedAt": "2022-12-21T17:36:40.469Z"
                                    }
                                }
                            },
                            {
                                "id": 46,
                                "trx_id": 115,
                                "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                "status": "finished",
                                "deleted": false,
                                "chair_number": 13,
                                "createdAt": "2022-12-26T14:00:21.703Z",
                                "updatedAt": "2022-12-26T14:02:00.933Z",
                                "ticket": {
                                    "id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                    "name": "Citilink",
                                    "from": "SURABAYA (JUANDA)",
                                    "dest": "MALAYSIA (KUALA LUMPUR)",
                                    "date_air": "2022-12-27T12:00:00.000Z",
                                    "price": 120000,
                                    "no_chair": 25,
                                    "type": 1,
                                    "trip_type": "-",
                                    "deleted": false,
                                    "logo": "/ticket/ticket_default.jpg",
                                    "flight_number": "CK 507",
                                    "kelas": 1,
                                    "estimated_up_dest": "2022-12-27T13:00:00.000Z",
                                    "createdAt": "2022-12-21T18:05:28.430Z",
                                    "updatedAt": "2022-12-21T18:05:28.430Z",
                                    "ticketClass": {
                                        "id": 1,
                                        "name": "ECONOMY",
                                        "createdAt": "2022-12-21T17:36:40.697Z",
                                        "updatedAt": "2022-12-21T17:36:40.697Z"
                                    },
                                    "passenger": {
                                        "id": 1,
                                        "passenger": "DEWASA",
                                        "createdAt": "2022-12-21T17:36:40.469Z",
                                        "updatedAt": "2022-12-21T17:36:40.469Z"
                                    }
                                }
                            }],
                            "checkins": [{
                                "id": 6,
                                "trx_id": 115,
                                "status": "checkined",
                                "createdAt": "2022-12-26T14:07:13.127Z",
                                "updatedAt": "2022-12-26T14:07:13.127Z"
                            }]
                        },
                        {
                            "id": 110,
                            "user_id": "d94072d9-086c-429f-842c-27d0844ee811",
                            "price": 0,
                            "count": 1,
                            "token_trx": "",
                            "give_to": "syaifudinramadhan@gmail.com",
                            "status": "pending",
                            "deleted": false,
                            "order_id": null,
                            "createdAt": "2022-12-26T06:06:07.807Z",
                            "updatedAt": "2022-12-26T06:06:07.807Z",
                            "carts": [{
                                "id": 41,
                                "trx_id": 110,
                                "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                "status": "pending",
                                "deleted": false,
                                "chair_number": null,
                                "createdAt": "2022-12-26T06:06:07.816Z",
                                "updatedAt": "2022-12-26T06:06:07.816Z",
                                "ticket": {
                                    "id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                    "name": "Citilink",
                                    "from": "SURABAYA (JUANDA)",
                                    "dest": "MALAYSIA (KUALA LUMPUR)",
                                    "date_air": "2022-12-27T12:00:00.000Z",
                                    "price": 120000,
                                    "no_chair": 25,
                                    "type": 1,
                                    "trip_type": "-",
                                    "deleted": false,
                                    "logo": "/ticket/ticket_default.jpg",
                                    "flight_number": "CK 507",
                                    "kelas": 1,
                                    "estimated_up_dest": "2022-12-27T13:00:00.000Z",
                                    "createdAt": "2022-12-21T18:05:28.430Z",
                                    "updatedAt": "2022-12-21T18:05:28.430Z",
                                    "ticketClass": {
                                        "id": 1,
                                        "name": "ECONOMY",
                                        "createdAt": "2022-12-21T17:36:40.697Z",
                                        "updatedAt": "2022-12-21T17:36:40.697Z"
                                    },
                                    "passenger": {
                                        "id": 1,
                                        "passenger": "DEWASA",
                                        "createdAt": "2022-12-21T17:36:40.469Z",
                                        "updatedAt": "2022-12-21T17:36:40.469Z"
                                    }
                                }
                            }],
                            "checkins": []
                        }]
                    },
                    "examples": [
                        [{
                            "id": 115,
                            "user_id": "d94072d9-086c-429f-842c-27d0844ee811",
                            "price": 240000,
                            "count": 2,
                            "token_trx": "14c77e95-9bb3-4439-b911-21b942c168c1",
                            "give_to": "syaifudinramadhan@gmail.com",
                            "status": "finished",
                            "deleted": false,
                            "order_id": "1672063221721",
                            "createdAt": "2022-12-26T14:00:21.699Z",
                            "updatedAt": "2022-12-26T14:02:00.928Z",
                            "carts": [{
                                "id": 47,
                                "trx_id": 115,
                                "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                "status": "finished",
                                "deleted": false,
                                "chair_number": 7,
                                "createdAt": "2022-12-26T14:00:21.706Z",
                                "updatedAt": "2022-12-26T14:02:00.936Z",
                                "ticket": {
                                    "id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                    "name": "Citilink",
                                    "from": "MALAYSIA (KUALA LUMPUR)",
                                    "dest": "SURABAYA (JUANDA)",
                                    "date_air": "2022-12-27T14:00:00.000Z",
                                    "price": 120000,
                                    "no_chair": 25,
                                    "type": 1,
                                    "trip_type": "-",
                                    "deleted": false,
                                    "logo": "/ticket/ticket_default.jpg",
                                    "flight_number": "CK 707",
                                    "kelas": 1,
                                    "estimated_up_dest": "2022-12-27T15:00:00.000Z",
                                    "createdAt": "2022-12-21T18:06:41.735Z",
                                    "updatedAt": "2022-12-21T18:06:41.735Z",
                                    "ticketClass": {
                                        "id": 1,
                                        "name": "ECONOMY",
                                        "createdAt": "2022-12-21T17:36:40.697Z",
                                        "updatedAt": "2022-12-21T17:36:40.697Z"
                                    },
                                    "passenger": {
                                        "id": 1,
                                        "passenger": "DEWASA",
                                        "createdAt": "2022-12-21T17:36:40.469Z",
                                        "updatedAt": "2022-12-21T17:36:40.469Z"
                                    }
                                }
                            },
                            {
                                "id": 46,
                                "trx_id": 115,
                                "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                "status": "finished",
                                "deleted": false,
                                "chair_number": 13,
                                "createdAt": "2022-12-26T14:00:21.703Z",
                                "updatedAt": "2022-12-26T14:02:00.933Z",
                                "ticket": {
                                    "id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                    "name": "Citilink",
                                    "from": "SURABAYA (JUANDA)",
                                    "dest": "MALAYSIA (KUALA LUMPUR)",
                                    "date_air": "2022-12-27T12:00:00.000Z",
                                    "price": 120000,
                                    "no_chair": 25,
                                    "type": 1,
                                    "trip_type": "-",
                                    "deleted": false,
                                    "logo": "/ticket/ticket_default.jpg",
                                    "flight_number": "CK 507",
                                    "kelas": 1,
                                    "estimated_up_dest": "2022-12-27T13:00:00.000Z",
                                    "createdAt": "2022-12-21T18:05:28.430Z",
                                    "updatedAt": "2022-12-21T18:05:28.430Z",
                                    "ticketClass": {
                                        "id": 1,
                                        "name": "ECONOMY",
                                        "createdAt": "2022-12-21T17:36:40.697Z",
                                        "updatedAt": "2022-12-21T17:36:40.697Z"
                                    },
                                    "passenger": {
                                        "id": 1,
                                        "passenger": "DEWASA",
                                        "createdAt": "2022-12-21T17:36:40.469Z",
                                        "updatedAt": "2022-12-21T17:36:40.469Z"
                                    }
                                }
                            }],
                            "checkins": [{
                                "id": 6,
                                "trx_id": 115,
                                "status": "checkined",
                                "createdAt": "2022-12-26T14:07:13.127Z",
                                "updatedAt": "2022-12-26T14:07:13.127Z"
                            }]
                        },
                        {
                            "id": 110,
                            "user_id": "d94072d9-086c-429f-842c-27d0844ee811",
                            "price": 0,
                            "count": 1,
                            "token_trx": "",
                            "give_to": "syaifudinramadhan@gmail.com",
                            "status": "pending",
                            "deleted": false,
                            "order_id": null,
                            "createdAt": "2022-12-26T06:06:07.807Z",
                            "updatedAt": "2022-12-26T06:06:07.807Z",
                            "carts": [{
                                "id": 41,
                                "trx_id": 110,
                                "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                "status": "pending",
                                "deleted": false,
                                "chair_number": null,
                                "createdAt": "2022-12-26T06:06:07.816Z",
                                "updatedAt": "2022-12-26T06:06:07.816Z",
                                "ticket": {
                                    "id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                    "name": "Citilink",
                                    "from": "SURABAYA (JUANDA)",
                                    "dest": "MALAYSIA (KUALA LUMPUR)",
                                    "date_air": "2022-12-27T12:00:00.000Z",
                                    "price": 120000,
                                    "no_chair": 25,
                                    "type": 1,
                                    "trip_type": "-",
                                    "deleted": false,
                                    "logo": "/ticket/ticket_default.jpg",
                                    "flight_number": "CK 507",
                                    "kelas": 1,
                                    "estimated_up_dest": "2022-12-27T13:00:00.000Z",
                                    "createdAt": "2022-12-21T18:05:28.430Z",
                                    "updatedAt": "2022-12-21T18:05:28.430Z",
                                    "ticketClass": {
                                        "id": 1,
                                        "name": "ECONOMY",
                                        "createdAt": "2022-12-21T17:36:40.697Z",
                                        "updatedAt": "2022-12-21T17:36:40.697Z"
                                    },
                                    "passenger": {
                                        "id": 1,
                                        "passenger": "DEWASA",
                                        "createdAt": "2022-12-21T17:36:40.469Z",
                                        "updatedAt": "2022-12-21T17:36:40.469Z"
                                    }
                                }
                            }],
                            "checkins": []
                        }]
                    ]
                }
            },
            "examples": [{
                "id": "d94072d9-086c-429f-842c-27d0844ee811",
                "username": "Mr. Ahmad Ramadhan",
                "email": "syaifudinramadhan@gmail.com",
                "password": "$2a$10$84t8NOtYVLZnId89q/aod.9iFxjeZ.3uHv2RzPsq0HoDdya8HfmHa",
                "g_id": "112668041094238806306",
                "f_name": "Ahmad",
                "l_name": "Ramadhan",
                "active": true,
                "access_level": 1,
                "deleted": false,
                "photo": "/user/_image_1672224505401_543580614.jpg",
                "visa_ID": "5658956626595",
                "createdAt": "2022-12-24T13:49:57.389Z",
                "updatedAt": "2022-12-28T11:46:41.796Z",
                "trx": [{
                    "id": 115,
                    "user_id": "d94072d9-086c-429f-842c-27d0844ee811",
                    "price": 240000,
                    "count": 2,
                    "token_trx": "14c77e95-9bb3-4439-b911-21b942c168c1",
                    "give_to": "syaifudinramadhan@gmail.com",
                    "status": "finished",
                    "deleted": false,
                    "order_id": "1672063221721",
                    "createdAt": "2022-12-26T14:00:21.699Z",
                    "updatedAt": "2022-12-26T14:02:00.928Z",
                    "carts": [{
                        "id": 47,
                        "trx_id": 115,
                        "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                        "status": "finished",
                        "deleted": false,
                        "chair_number": 7,
                        "createdAt": "2022-12-26T14:00:21.706Z",
                        "updatedAt": "2022-12-26T14:02:00.936Z",
                        "ticket": {
                            "id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                            "name": "Citilink",
                            "from": "MALAYSIA (KUALA LUMPUR)",
                            "dest": "SURABAYA (JUANDA)",
                            "date_air": "2022-12-27T14:00:00.000Z",
                            "price": 120000,
                            "no_chair": 25,
                            "type": 1,
                            "trip_type": "-",
                            "deleted": false,
                            "logo": "/ticket/ticket_default.jpg",
                            "flight_number": "CK 707",
                            "kelas": 1,
                            "estimated_up_dest": "2022-12-27T15:00:00.000Z",
                            "createdAt": "2022-12-21T18:06:41.735Z",
                            "updatedAt": "2022-12-21T18:06:41.735Z",
                            "ticketClass": {
                                "id": 1,
                                "name": "ECONOMY",
                                "createdAt": "2022-12-21T17:36:40.697Z",
                                "updatedAt": "2022-12-21T17:36:40.697Z"
                            },
                            "passenger": {
                                "id": 1,
                                "passenger": "DEWASA",
                                "createdAt": "2022-12-21T17:36:40.469Z",
                                "updatedAt": "2022-12-21T17:36:40.469Z"
                            }
                        }
                    },
                    {
                        "id": 46,
                        "trx_id": 115,
                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                        "status": "finished",
                        "deleted": false,
                        "chair_number": 13,
                        "createdAt": "2022-12-26T14:00:21.703Z",
                        "updatedAt": "2022-12-26T14:02:00.933Z",
                        "ticket": {
                            "id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                            "name": "Citilink",
                            "from": "SURABAYA (JUANDA)",
                            "dest": "MALAYSIA (KUALA LUMPUR)",
                            "date_air": "2022-12-27T12:00:00.000Z",
                            "price": 120000,
                            "no_chair": 25,
                            "type": 1,
                            "trip_type": "-",
                            "deleted": false,
                            "logo": "/ticket/ticket_default.jpg",
                            "flight_number": "CK 507",
                            "kelas": 1,
                            "estimated_up_dest": "2022-12-27T13:00:00.000Z",
                            "createdAt": "2022-12-21T18:05:28.430Z",
                            "updatedAt": "2022-12-21T18:05:28.430Z",
                            "ticketClass": {
                                "id": 1,
                                "name": "ECONOMY",
                                "createdAt": "2022-12-21T17:36:40.697Z",
                                "updatedAt": "2022-12-21T17:36:40.697Z"
                            },
                            "passenger": {
                                "id": 1,
                                "passenger": "DEWASA",
                                "createdAt": "2022-12-21T17:36:40.469Z",
                                "updatedAt": "2022-12-21T17:36:40.469Z"
                            }
                        }
                    }],
                    "checkins": [{
                        "id": 6,
                        "trx_id": 115,
                        "status": "checkined",
                        "createdAt": "2022-12-26T14:07:13.127Z",
                        "updatedAt": "2022-12-26T14:07:13.127Z"
                    }]
                },
                {
                    "id": 110,
                    "user_id": "d94072d9-086c-429f-842c-27d0844ee811",
                    "price": 0,
                    "count": 1,
                    "token_trx": "",
                    "give_to": "syaifudinramadhan@gmail.com",
                    "status": "pending",
                    "deleted": false,
                    "order_id": null,
                    "createdAt": "2022-12-26T06:06:07.807Z",
                    "updatedAt": "2022-12-26T06:06:07.807Z",
                    "carts": [{
                        "id": 41,
                        "trx_id": 110,
                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                        "status": "pending",
                        "deleted": false,
                        "chair_number": null,
                        "createdAt": "2022-12-26T06:06:07.816Z",
                        "updatedAt": "2022-12-26T06:06:07.816Z",
                        "ticket": {
                            "id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                            "name": "Citilink",
                            "from": "SURABAYA (JUANDA)",
                            "dest": "MALAYSIA (KUALA LUMPUR)",
                            "date_air": "2022-12-27T12:00:00.000Z",
                            "price": 120000,
                            "no_chair": 25,
                            "type": 1,
                            "trip_type": "-",
                            "deleted": false,
                            "logo": "/ticket/ticket_default.jpg",
                            "flight_number": "CK 507",
                            "kelas": 1,
                            "estimated_up_dest": "2022-12-27T13:00:00.000Z",
                            "createdAt": "2022-12-21T18:05:28.430Z",
                            "updatedAt": "2022-12-21T18:05:28.430Z",
                            "ticketClass": {
                                "id": 1,
                                "name": "ECONOMY",
                                "createdAt": "2022-12-21T17:36:40.697Z",
                                "updatedAt": "2022-12-21T17:36:40.697Z"
                            },
                            "passenger": {
                                "id": 1,
                                "passenger": "DEWASA",
                                "createdAt": "2022-12-21T17:36:40.469Z",
                                "updatedAt": "2022-12-21T17:36:40.469Z"
                            }
                        }
                    }],
                    "checkins": []
                }]
            }]
        }
    },
    "examples": [{
        "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZDk0MDcyZDktMDg2Yy00MjlmLTg0MmMtMjdkMDg0NGVlODExIiwiaWF0IjoxNjcyMjc5Njc5fQ.2pO20pta3-JIygEHaVT2XSitVTIO4KKAIgUAB83UaxE",
        "user": {
            "id": "d94072d9-086c-429f-842c-27d0844ee811",
            "username": "Mr. Ahmad Ramadhan",
            "email": "syaifudinramadhan@gmail.com",
            "password": "$2a$10$84t8NOtYVLZnId89q/aod.9iFxjeZ.3uHv2RzPsq0HoDdya8HfmHa",
            "g_id": "112668041094238806306",
            "f_name": "Ahmad",
            "l_name": "Ramadhan",
            "active": true,
            "access_level": 1,
            "deleted": false,
            "photo": "/user/_image_1672224505401_543580614.jpg",
            "visa_ID": "5658956626595",
            "createdAt": "2022-12-24T13:49:57.389Z",
            "updatedAt": "2022-12-28T11:46:41.796Z",
            "trx": [{
                "id": 115,
                "user_id": "d94072d9-086c-429f-842c-27d0844ee811",
                "price": 240000,
                "count": 2,
                "token_trx": "14c77e95-9bb3-4439-b911-21b942c168c1",
                "give_to": "syaifudinramadhan@gmail.com",
                "status": "finished",
                "deleted": false,
                "order_id": "1672063221721",
                "createdAt": "2022-12-26T14:00:21.699Z",
                "updatedAt": "2022-12-26T14:02:00.928Z",
                "carts": [{
                    "id": 47,
                    "trx_id": 115,
                    "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                    "status": "finished",
                    "deleted": false,
                    "chair_number": 7,
                    "createdAt": "2022-12-26T14:00:21.706Z",
                    "updatedAt": "2022-12-26T14:02:00.936Z",
                    "ticket": {
                        "id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                        "name": "Citilink",
                        "from": "MALAYSIA (KUALA LUMPUR)",
                        "dest": "SURABAYA (JUANDA)",
                        "date_air": "2022-12-27T14:00:00.000Z",
                        "price": 120000,
                        "no_chair": 25,
                        "type": 1,
                        "trip_type": "-",
                        "deleted": false,
                        "logo": "/ticket/ticket_default.jpg",
                        "flight_number": "CK 707",
                        "kelas": 1,
                        "estimated_up_dest": "2022-12-27T15:00:00.000Z",
                        "createdAt": "2022-12-21T18:06:41.735Z",
                        "updatedAt": "2022-12-21T18:06:41.735Z",
                        "ticketClass": {
                            "id": 1,
                            "name": "ECONOMY",
                            "createdAt": "2022-12-21T17:36:40.697Z",
                            "updatedAt": "2022-12-21T17:36:40.697Z"
                        },
                        "passenger": {
                            "id": 1,
                            "passenger": "DEWASA",
                            "createdAt": "2022-12-21T17:36:40.469Z",
                            "updatedAt": "2022-12-21T17:36:40.469Z"
                        }
                    }
                },
                {
                    "id": 46,
                    "trx_id": 115,
                    "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                    "status": "finished",
                    "deleted": false,
                    "chair_number": 13,
                    "createdAt": "2022-12-26T14:00:21.703Z",
                    "updatedAt": "2022-12-26T14:02:00.933Z",
                    "ticket": {
                        "id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                        "name": "Citilink",
                        "from": "SURABAYA (JUANDA)",
                        "dest": "MALAYSIA (KUALA LUMPUR)",
                        "date_air": "2022-12-27T12:00:00.000Z",
                        "price": 120000,
                        "no_chair": 25,
                        "type": 1,
                        "trip_type": "-",
                        "deleted": false,
                        "logo": "/ticket/ticket_default.jpg",
                        "flight_number": "CK 507",
                        "kelas": 1,
                        "estimated_up_dest": "2022-12-27T13:00:00.000Z",
                        "createdAt": "2022-12-21T18:05:28.430Z",
                        "updatedAt": "2022-12-21T18:05:28.430Z",
                        "ticketClass": {
                            "id": 1,
                            "name": "ECONOMY",
                            "createdAt": "2022-12-21T17:36:40.697Z",
                            "updatedAt": "2022-12-21T17:36:40.697Z"
                        },
                        "passenger": {
                            "id": 1,
                            "passenger": "DEWASA",
                            "createdAt": "2022-12-21T17:36:40.469Z",
                            "updatedAt": "2022-12-21T17:36:40.469Z"
                        }
                    }
                }],
                "checkins": [{
                    "id": 6,
                    "trx_id": 115,
                    "status": "checkined",
                    "createdAt": "2022-12-26T14:07:13.127Z",
                    "updatedAt": "2022-12-26T14:07:13.127Z"
                }]
            },
            {
                "id": 110,
                "user_id": "d94072d9-086c-429f-842c-27d0844ee811",
                "price": 0,
                "count": 1,
                "token_trx": "",
                "give_to": "syaifudinramadhan@gmail.com",
                "status": "pending",
                "deleted": false,
                "order_id": null,
                "createdAt": "2022-12-26T06:06:07.807Z",
                "updatedAt": "2022-12-26T06:06:07.807Z",
                "carts": [{
                    "id": 41,
                    "trx_id": 110,
                    "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                    "status": "pending",
                    "deleted": false,
                    "chair_number": null,
                    "createdAt": "2022-12-26T06:06:07.816Z",
                    "updatedAt": "2022-12-26T06:06:07.816Z",
                    "ticket": {
                        "id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                        "name": "Citilink",
                        "from": "SURABAYA (JUANDA)",
                        "dest": "MALAYSIA (KUALA LUMPUR)",
                        "date_air": "2022-12-27T12:00:00.000Z",
                        "price": 120000,
                        "no_chair": 25,
                        "type": 1,
                        "trip_type": "-",
                        "deleted": false,
                        "logo": "/ticket/ticket_default.jpg",
                        "flight_number": "CK 507",
                        "kelas": 1,
                        "estimated_up_dest": "2022-12-27T13:00:00.000Z",
                        "createdAt": "2022-12-21T18:05:28.430Z",
                        "updatedAt": "2022-12-21T18:05:28.430Z",
                        "ticketClass": {
                            "id": 1,
                            "name": "ECONOMY",
                            "createdAt": "2022-12-21T17:36:40.697Z",
                            "updatedAt": "2022-12-21T17:36:40.697Z"
                        },
                        "passenger": {
                            "id": 1,
                            "passenger": "DEWASA",
                            "createdAt": "2022-12-21T17:36:40.469Z",
                            "updatedAt": "2022-12-21T17:36:40.469Z"
                        }
                    }
                }],
                "checkins": []
            }]
        }
    }]
}

// requesst dan validate respect
describe('Endpoint login', () => {
    test('Endpoint login berstatus 200', async () => {
        const response = await login()
        expect(response.status).toEqual(200)
        expect(response.body).toMatchSchema(schemaUser)
    })
})