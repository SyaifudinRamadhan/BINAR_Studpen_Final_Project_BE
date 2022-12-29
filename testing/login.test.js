const request = require('supertest')
const env = require('dotenv').config()
const api = request(process.env.API_URL)

const login = () => api.post('/api/v1/login').send({
    email: "admin@binar.com",
    password: "admin"
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
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMjM1NzRiOGYtM2U4OS00Njg1LWEzNDgtNjdjMWY3ZTViM2M0IiwiaWF0IjoxNjcyMjcyODg4fQ.dKyiq_yXNTv1IrbWhFRGjR2LrGEoraxBQtxbWsaNh08"
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
                        "23574b8f-3e89-4685-a348-67c1f7e5b3c4"
                    ]
                },
                "username": {
                    "type": "string",
                    "default": "",
                    "title": "The username Schema",
                    "examples": [
                        "admin"
                    ]
                },
                "email": {
                    "type": "string",
                    "default": "",
                    "title": "The email Schema",
                    "examples": [
                        "admin@binar.com"
                    ]
                },
                "password": {
                    "type": "string",
                    "default": "",
                    "title": "The password Schema",
                    "examples": [
                        "$2a$10$X7V.FfeIM09h57xISUivxuyaQ3UmjXQcUL.Y6QcgL3icAar5PF4jm"
                    ]
                },
                "g_id": {
                    "type": "string",
                    "default": "",
                    "title": "The g_id Schema",
                    "examples": [
                        ""
                    ]
                },
                "f_name": {
                    "type": "string",
                    "default": "",
                    "title": "The f_name Schema",
                    "examples": [
                        "admin"
                    ]
                },
                "l_name": {
                    "type": "string",
                    "default": "",
                    "title": "The l_name Schema",
                    "examples": [
                        "admin"
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
                        0
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
                        "/user/avatar_default.png"
                    ]
                },
                "visa_ID": {
                    "type": "null",
                    "default": null,
                    "title": "The visa_ID Schema",
                    "examples": [
                        null
                    ]
                },
                "createdAt": {
                    "type": "string",
                    "default": "",
                    "title": "The createdAt Schema",
                    "examples": [
                        "2022-12-21T17:36:40.189Z"
                    ]
                },
                "updatedAt": {
                    "type": "string",
                    "default": "",
                    "title": "The updatedAt Schema",
                    "examples": [
                        "2022-12-21T17:36:40.189Z"
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
                                    98,
                                    102,
                                    83,
                                    96,
                                    85,
                                    97,
                                    103,
                                    86
                                ]
                            },
                            "user_id": {
                                "type": "string",
                                "title": "The user_id Schema",
                                "examples": [
                                    "23574b8f-3e89-4685-a348-67c1f7e5b3c4"
                                ]
                            },
                            "price": {
                                "type": "integer",
                                "title": "The price Schema",
                                "examples": [
                                    0,
                                    500000,
                                    240000,
                                    120000
                                ]
                            },
                            "count": {
                                "type": "integer",
                                "title": "The count Schema",
                                "examples": [
                                    1,
                                    2
                                ]
                            },
                            "token_trx": {
                                "type": "string",
                                "title": "The token_trx Schema",
                                "examples": [
                                    "",
                                    "79092c29-5d35-49ee-bfe3-e8094e0b882d",
                                    "bdba023a-ad28-4f98-94d2-a7d1071f89ba",
                                    "59c148b7-c376-4a91-9f7e-818101184a8e",
                                    "bdad020e-b0be-4c47-94ee-7706362c3705",
                                    "2e3123d0-e9e4-43d1-b242-8bbe8c3a02d4",
                                    "133d8473-8782-4c98-b9ef-29eba1514434"
                                ]
                            },
                            "give_to": {
                                "type": "string",
                                "title": "The give_to Schema",
                                "examples": [
                                    "admin@binar.com"
                                ]
                            },
                            "status": {
                                "type": "string",
                                "title": "The status Schema",
                                "examples": [
                                    "pending",
                                    "expired",
                                    "finished"
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
                                    "null",
                                    "string"
                                ],
                                "title": "The order_id Schema",
                                "examples": [
                                    null,
                                    "1671876912696",
                                    "1671715552870",
                                    "1671869285957",
                                    "1671760283008",
                                    "1671870427698",
                                    "1671760785952"
                                ]
                            },
                            "createdAt": {
                                "type": "string",
                                "title": "The createdAt Schema",
                                "examples": [
                                    "2022-12-24T08:31:42.833Z",
                                    "2022-12-24T10:15:12.676Z",
                                    "2022-12-22T12:17:05.803Z",
                                    "2022-12-24T08:08:05.934Z",
                                    "2022-12-23T01:51:22.984Z",
                                    "2022-12-24T08:27:07.672Z",
                                    "2022-12-24T10:17:39.797Z",
                                    "2022-12-23T01:59:45.929Z"
                                ]
                            },
                            "updatedAt": {
                                "type": "string",
                                "title": "The updatedAt Schema",
                                "examples": [
                                    "2022-12-24T08:31:42.833Z",
                                    "2022-12-25T11:00:01.431Z",
                                    "2022-12-23T01:14:40.470Z",
                                    "2022-12-24T10:32:01.930Z",
                                    "2022-12-24T02:00:01.988Z",
                                    "2022-12-25T09:00:02.741Z",
                                    "2022-12-24T10:17:39.797Z",
                                    "2022-12-24T02:00:03.191Z"
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
                                                28,
                                                33,
                                                6,
                                                5,
                                                26,
                                                9,
                                                8,
                                                27,
                                                34,
                                                11,
                                                10
                                            ]
                                        },
                                        "trx_id": {
                                            "type": "integer",
                                            "title": "The trx_id Schema",
                                            "examples": [
                                                98,
                                                102,
                                                83,
                                                96,
                                                85,
                                                97,
                                                103,
                                                86
                                            ]
                                        },
                                        "ticket_id": {
                                            "type": "string",
                                            "title": "The ticket_id Schema",
                                            "examples": [
                                                "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                                "806a96d1-795b-40da-8d17-91575f6151cb",
                                                "087ec46b-7993-4626-8e8f-e8146193c1f6"
                                            ]
                                        },
                                        "status": {
                                            "type": "string",
                                            "title": "The status Schema",
                                            "examples": [
                                                "pending",
                                                "expired",
                                                "finished"
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
                                                "null",
                                                "integer"
                                            ],
                                            "title": "The chair_number Schema",
                                            "examples": [
                                                null,
                                                9,
                                                6,
                                                5,
                                                12,
                                                10,
                                                7,
                                                13,
                                                11
                                            ]
                                        },
                                        "createdAt": {
                                            "type": "string",
                                            "title": "The createdAt Schema",
                                            "examples": [
                                                "2022-12-24T08:31:42.840Z",
                                                "2022-12-24T10:15:12.680Z",
                                                "2022-12-22T12:17:05.822Z",
                                                "2022-12-22T12:17:05.818Z",
                                                "2022-12-24T08:08:05.939Z",
                                                "2022-12-23T01:51:22.992Z",
                                                "2022-12-23T01:51:22.988Z",
                                                "2022-12-24T08:27:07.681Z",
                                                "2022-12-24T10:17:39.807Z",
                                                "2022-12-23T01:59:45.936Z",
                                                "2022-12-23T01:59:45.933Z"
                                            ]
                                        },
                                        "updatedAt": {
                                            "type": "string",
                                            "title": "The updatedAt Schema",
                                            "examples": [
                                                "2022-12-24T08:31:42.840Z",
                                                "2022-12-25T11:00:01.436Z",
                                                "2022-12-23T01:14:40.478Z",
                                                "2022-12-23T01:14:40.475Z",
                                                "2022-12-24T10:32:01.953Z",
                                                "2022-12-24T02:00:02.008Z",
                                                "2022-12-24T02:00:02.000Z",
                                                "2022-12-25T09:00:02.745Z",
                                                "2022-12-24T10:17:39.807Z",
                                                "2022-12-24T02:00:03.210Z",
                                                "2022-12-24T02:00:03.201Z"
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
                                                        "806a96d1-795b-40da-8d17-91575f6151cb",
                                                        "087ec46b-7993-4626-8e8f-e8146193c1f6"
                                                    ]
                                                },
                                                "name": {
                                                    "type": "string",
                                                    "title": "The name Schema",
                                                    "examples": [
                                                        "Citilink",
                                                        "Air Asia"
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
                                                        "BALI (NGURAH RAI)",
                                                        "MALAYSIA (KUALA LUMPUR)"
                                                    ]
                                                },
                                                "date_air": {
                                                    "type": "string",
                                                    "title": "The date_air Schema",
                                                    "examples": [
                                                        "2022-12-27T14:00:00.000Z",
                                                        "2022-12-30T16:50:00.000Z",
                                                        "2022-12-27T12:00:00.000Z"
                                                    ]
                                                },
                                                "price": {
                                                    "type": "integer",
                                                    "title": "The price Schema",
                                                    "examples": [
                                                        120000,
                                                        500000
                                                    ]
                                                },
                                                "no_chair": {
                                                    "type": "integer",
                                                    "title": "The no_chair Schema",
                                                    "examples": [
                                                        25,
                                                        12
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
                                                        "/ticket/ticket_default.jpg",
                                                        "/ticket/_image_1672165866028_38866620.png"
                                                    ]
                                                },
                                                "flight_number": {
                                                    "type": "string",
                                                    "title": "The flight_number Schema",
                                                    "examples": [
                                                        "CK 707",
                                                        "AA 908",
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
                                                        "2022-12-30T17:50:00.000Z",
                                                        "2022-12-27T13:00:00.000Z"
                                                    ]
                                                },
                                                "createdAt": {
                                                    "type": "string",
                                                    "title": "The createdAt Schema",
                                                    "examples": [
                                                        "2022-12-21T18:06:41.735Z",
                                                        "2022-12-23T18:51:38.150Z",
                                                        "2022-12-21T18:05:28.430Z"
                                                    ]
                                                },
                                                "updatedAt": {
                                                    "type": "string",
                                                    "title": "The updatedAt Schema",
                                                    "examples": [
                                                        "2022-12-21T18:06:41.735Z",
                                                        "2022-12-28T02:34:34.331Z",
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
                                                "id": "806a96d1-795b-40da-8d17-91575f6151cb",
                                                "name": "Air Asia",
                                                "from": "SURABAYA (JUANDA)",
                                                "dest": "BALI (NGURAH RAI)",
                                                "date_air": "2022-12-30T16:50:00.000Z",
                                                "price": 500000,
                                                "no_chair": 12,
                                                "type": 1,
                                                "trip_type": "-",
                                                "deleted": false,
                                                "logo": "/ticket/_image_1672165866028_38866620.png",
                                                "flight_number": "AA 908",
                                                "kelas": 1,
                                                "estimated_up_dest": "2022-12-30T17:50:00.000Z",
                                                "createdAt": "2022-12-23T18:51:38.150Z",
                                                "updatedAt": "2022-12-28T02:34:34.331Z",
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
                                            },
                                            {
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
                                            },
                                            {
                                                "id": "806a96d1-795b-40da-8d17-91575f6151cb",
                                                "name": "Air Asia",
                                                "from": "SURABAYA (JUANDA)",
                                                "dest": "BALI (NGURAH RAI)",
                                                "date_air": "2022-12-30T16:50:00.000Z",
                                                "price": 500000,
                                                "no_chair": 12,
                                                "type": 1,
                                                "trip_type": "-",
                                                "deleted": false,
                                                "logo": "/ticket/_image_1672165866028_38866620.png",
                                                "flight_number": "AA 908",
                                                "kelas": 1,
                                                "estimated_up_dest": "2022-12-30T17:50:00.000Z",
                                                "createdAt": "2022-12-23T18:51:38.150Z",
                                                "updatedAt": "2022-12-28T02:34:34.331Z",
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
                                            }]
                                        }
                                    },
                                    "examples": [{
                                        "id": 28,
                                        "trx_id": 98,
                                        "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                        "status": "pending",
                                        "deleted": false,
                                        "chair_number": null,
                                        "createdAt": "2022-12-24T08:31:42.840Z",
                                        "updatedAt": "2022-12-24T08:31:42.840Z",
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
                                        "id": 33,
                                        "trx_id": 102,
                                        "ticket_id": "806a96d1-795b-40da-8d17-91575f6151cb",
                                        "status": "expired",
                                        "deleted": false,
                                        "chair_number": 9,
                                        "createdAt": "2022-12-24T10:15:12.680Z",
                                        "updatedAt": "2022-12-25T11:00:01.436Z",
                                        "ticket": {
                                            "id": "806a96d1-795b-40da-8d17-91575f6151cb",
                                            "name": "Air Asia",
                                            "from": "SURABAYA (JUANDA)",
                                            "dest": "BALI (NGURAH RAI)",
                                            "date_air": "2022-12-30T16:50:00.000Z",
                                            "price": 500000,
                                            "no_chair": 12,
                                            "type": 1,
                                            "trip_type": "-",
                                            "deleted": false,
                                            "logo": "/ticket/_image_1672165866028_38866620.png",
                                            "flight_number": "AA 908",
                                            "kelas": 1,
                                            "estimated_up_dest": "2022-12-30T17:50:00.000Z",
                                            "createdAt": "2022-12-23T18:51:38.150Z",
                                            "updatedAt": "2022-12-28T02:34:34.331Z",
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
                                        "id": 6,
                                        "trx_id": 83,
                                        "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                        "status": "finished",
                                        "deleted": false,
                                        "chair_number": 6,
                                        "createdAt": "2022-12-22T12:17:05.822Z",
                                        "updatedAt": "2022-12-23T01:14:40.478Z",
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
                                        "id": 5,
                                        "trx_id": 83,
                                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                        "status": "finished",
                                        "deleted": false,
                                        "chair_number": 5,
                                        "createdAt": "2022-12-22T12:17:05.818Z",
                                        "updatedAt": "2022-12-23T01:14:40.475Z",
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
                                        "id": 26,
                                        "trx_id": 96,
                                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                        "status": "finished",
                                        "deleted": false,
                                        "chair_number": 6,
                                        "createdAt": "2022-12-24T08:08:05.939Z",
                                        "updatedAt": "2022-12-24T10:32:01.953Z",
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
                                        "id": 9,
                                        "trx_id": 85,
                                        "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                        "status": "expired",
                                        "deleted": false,
                                        "chair_number": 12,
                                        "createdAt": "2022-12-23T01:51:22.992Z",
                                        "updatedAt": "2022-12-24T02:00:02.008Z",
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
                                        "id": 8,
                                        "trx_id": 85,
                                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                        "status": "expired",
                                        "deleted": false,
                                        "chair_number": 10,
                                        "createdAt": "2022-12-23T01:51:22.988Z",
                                        "updatedAt": "2022-12-24T02:00:02.000Z",
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
                                        "id": 27,
                                        "trx_id": 97,
                                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                        "status": "expired",
                                        "deleted": false,
                                        "chair_number": 7,
                                        "createdAt": "2022-12-24T08:27:07.681Z",
                                        "updatedAt": "2022-12-25T09:00:02.745Z",
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
                                        "id": 34,
                                        "trx_id": 103,
                                        "ticket_id": "806a96d1-795b-40da-8d17-91575f6151cb",
                                        "status": "pending",
                                        "deleted": false,
                                        "chair_number": null,
                                        "createdAt": "2022-12-24T10:17:39.807Z",
                                        "updatedAt": "2022-12-24T10:17:39.807Z",
                                        "ticket": {
                                            "id": "806a96d1-795b-40da-8d17-91575f6151cb",
                                            "name": "Air Asia",
                                            "from": "SURABAYA (JUANDA)",
                                            "dest": "BALI (NGURAH RAI)",
                                            "date_air": "2022-12-30T16:50:00.000Z",
                                            "price": 500000,
                                            "no_chair": 12,
                                            "type": 1,
                                            "trip_type": "-",
                                            "deleted": false,
                                            "logo": "/ticket/_image_1672165866028_38866620.png",
                                            "flight_number": "AA 908",
                                            "kelas": 1,
                                            "estimated_up_dest": "2022-12-30T17:50:00.000Z",
                                            "createdAt": "2022-12-23T18:51:38.150Z",
                                            "updatedAt": "2022-12-28T02:34:34.331Z",
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
                                        "id": 11,
                                        "trx_id": 86,
                                        "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                        "status": "expired",
                                        "deleted": false,
                                        "chair_number": 13,
                                        "createdAt": "2022-12-23T01:59:45.936Z",
                                        "updatedAt": "2022-12-24T02:00:03.210Z",
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
                                        "id": 10,
                                        "trx_id": 86,
                                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                        "status": "expired",
                                        "deleted": false,
                                        "chair_number": 11,
                                        "createdAt": "2022-12-23T01:59:45.933Z",
                                        "updatedAt": "2022-12-24T02:00:03.201Z",
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
                                        "id": 28,
                                        "trx_id": 98,
                                        "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                        "status": "pending",
                                        "deleted": false,
                                        "chair_number": null,
                                        "createdAt": "2022-12-24T08:31:42.840Z",
                                        "updatedAt": "2022-12-24T08:31:42.840Z",
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
                                    }],
                                    [{
                                        "id": 33,
                                        "trx_id": 102,
                                        "ticket_id": "806a96d1-795b-40da-8d17-91575f6151cb",
                                        "status": "expired",
                                        "deleted": false,
                                        "chair_number": 9,
                                        "createdAt": "2022-12-24T10:15:12.680Z",
                                        "updatedAt": "2022-12-25T11:00:01.436Z",
                                        "ticket": {
                                            "id": "806a96d1-795b-40da-8d17-91575f6151cb",
                                            "name": "Air Asia",
                                            "from": "SURABAYA (JUANDA)",
                                            "dest": "BALI (NGURAH RAI)",
                                            "date_air": "2022-12-30T16:50:00.000Z",
                                            "price": 500000,
                                            "no_chair": 12,
                                            "type": 1,
                                            "trip_type": "-",
                                            "deleted": false,
                                            "logo": "/ticket/_image_1672165866028_38866620.png",
                                            "flight_number": "AA 908",
                                            "kelas": 1,
                                            "estimated_up_dest": "2022-12-30T17:50:00.000Z",
                                            "createdAt": "2022-12-23T18:51:38.150Z",
                                            "updatedAt": "2022-12-28T02:34:34.331Z",
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
                                        "id": 6,
                                        "trx_id": 83,
                                        "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                        "status": "finished",
                                        "deleted": false,
                                        "chair_number": 6,
                                        "createdAt": "2022-12-22T12:17:05.822Z",
                                        "updatedAt": "2022-12-23T01:14:40.478Z",
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
                                        "id": 5,
                                        "trx_id": 83,
                                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                        "status": "finished",
                                        "deleted": false,
                                        "chair_number": 5,
                                        "createdAt": "2022-12-22T12:17:05.818Z",
                                        "updatedAt": "2022-12-23T01:14:40.475Z",
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
                                        "id": 26,
                                        "trx_id": 96,
                                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                        "status": "finished",
                                        "deleted": false,
                                        "chair_number": 6,
                                        "createdAt": "2022-12-24T08:08:05.939Z",
                                        "updatedAt": "2022-12-24T10:32:01.953Z",
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
                                        "id": 9,
                                        "trx_id": 85,
                                        "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                        "status": "expired",
                                        "deleted": false,
                                        "chair_number": 12,
                                        "createdAt": "2022-12-23T01:51:22.992Z",
                                        "updatedAt": "2022-12-24T02:00:02.008Z",
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
                                        "id": 8,
                                        "trx_id": 85,
                                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                        "status": "expired",
                                        "deleted": false,
                                        "chair_number": 10,
                                        "createdAt": "2022-12-23T01:51:22.988Z",
                                        "updatedAt": "2022-12-24T02:00:02.000Z",
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
                                        "id": 27,
                                        "trx_id": 97,
                                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                        "status": "expired",
                                        "deleted": false,
                                        "chair_number": 7,
                                        "createdAt": "2022-12-24T08:27:07.681Z",
                                        "updatedAt": "2022-12-25T09:00:02.745Z",
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
                                        "id": 34,
                                        "trx_id": 103,
                                        "ticket_id": "806a96d1-795b-40da-8d17-91575f6151cb",
                                        "status": "pending",
                                        "deleted": false,
                                        "chair_number": null,
                                        "createdAt": "2022-12-24T10:17:39.807Z",
                                        "updatedAt": "2022-12-24T10:17:39.807Z",
                                        "ticket": {
                                            "id": "806a96d1-795b-40da-8d17-91575f6151cb",
                                            "name": "Air Asia",
                                            "from": "SURABAYA (JUANDA)",
                                            "dest": "BALI (NGURAH RAI)",
                                            "date_air": "2022-12-30T16:50:00.000Z",
                                            "price": 500000,
                                            "no_chair": 12,
                                            "type": 1,
                                            "trip_type": "-",
                                            "deleted": false,
                                            "logo": "/ticket/_image_1672165866028_38866620.png",
                                            "flight_number": "AA 908",
                                            "kelas": 1,
                                            "estimated_up_dest": "2022-12-30T17:50:00.000Z",
                                            "createdAt": "2022-12-23T18:51:38.150Z",
                                            "updatedAt": "2022-12-28T02:34:34.331Z",
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
                                        "id": 11,
                                        "trx_id": 86,
                                        "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                        "status": "expired",
                                        "deleted": false,
                                        "chair_number": 13,
                                        "createdAt": "2022-12-23T01:59:45.936Z",
                                        "updatedAt": "2022-12-24T02:00:03.210Z",
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
                                        "id": 10,
                                        "trx_id": 86,
                                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                        "status": "expired",
                                        "deleted": false,
                                        "chair_number": 11,
                                        "createdAt": "2022-12-23T01:59:45.933Z",
                                        "updatedAt": "2022-12-24T02:00:03.201Z",
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
                                "items": {},
                                "examples": [
                                    [],
                                    [],
                                    [],
                                    [],
                                    [],
                                    [],
                                    [],
                                    []
                                ]
                            }
                        },
                        "examples": [{
                            "id": 98,
                            "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                            "price": 0,
                            "count": 1,
                            "token_trx": "",
                            "give_to": "admin@binar.com",
                            "status": "pending",
                            "deleted": false,
                            "order_id": null,
                            "createdAt": "2022-12-24T08:31:42.833Z",
                            "updatedAt": "2022-12-24T08:31:42.833Z",
                            "carts": [{
                                "id": 28,
                                "trx_id": 98,
                                "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                "status": "pending",
                                "deleted": false,
                                "chair_number": null,
                                "createdAt": "2022-12-24T08:31:42.840Z",
                                "updatedAt": "2022-12-24T08:31:42.840Z",
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
                            }],
                            "checkins": []
                        },
                        {
                            "id": 102,
                            "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                            "price": 500000,
                            "count": 1,
                            "token_trx": "79092c29-5d35-49ee-bfe3-e8094e0b882d",
                            "give_to": "admin@binar.com",
                            "status": "expired",
                            "deleted": false,
                            "order_id": "1671876912696",
                            "createdAt": "2022-12-24T10:15:12.676Z",
                            "updatedAt": "2022-12-25T11:00:01.431Z",
                            "carts": [{
                                "id": 33,
                                "trx_id": 102,
                                "ticket_id": "806a96d1-795b-40da-8d17-91575f6151cb",
                                "status": "expired",
                                "deleted": false,
                                "chair_number": 9,
                                "createdAt": "2022-12-24T10:15:12.680Z",
                                "updatedAt": "2022-12-25T11:00:01.436Z",
                                "ticket": {
                                    "id": "806a96d1-795b-40da-8d17-91575f6151cb",
                                    "name": "Air Asia",
                                    "from": "SURABAYA (JUANDA)",
                                    "dest": "BALI (NGURAH RAI)",
                                    "date_air": "2022-12-30T16:50:00.000Z",
                                    "price": 500000,
                                    "no_chair": 12,
                                    "type": 1,
                                    "trip_type": "-",
                                    "deleted": false,
                                    "logo": "/ticket/_image_1672165866028_38866620.png",
                                    "flight_number": "AA 908",
                                    "kelas": 1,
                                    "estimated_up_dest": "2022-12-30T17:50:00.000Z",
                                    "createdAt": "2022-12-23T18:51:38.150Z",
                                    "updatedAt": "2022-12-28T02:34:34.331Z",
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
                        },
                        {
                            "id": 83,
                            "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                            "price": 240000,
                            "count": 2,
                            "token_trx": "bdba023a-ad28-4f98-94d2-a7d1071f89ba",
                            "give_to": "admin@binar.com",
                            "status": "finished",
                            "deleted": false,
                            "order_id": "1671715552870",
                            "createdAt": "2022-12-22T12:17:05.803Z",
                            "updatedAt": "2022-12-23T01:14:40.470Z",
                            "carts": [{
                                "id": 6,
                                "trx_id": 83,
                                "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                "status": "finished",
                                "deleted": false,
                                "chair_number": 6,
                                "createdAt": "2022-12-22T12:17:05.822Z",
                                "updatedAt": "2022-12-23T01:14:40.478Z",
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
                                "id": 5,
                                "trx_id": 83,
                                "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                "status": "finished",
                                "deleted": false,
                                "chair_number": 5,
                                "createdAt": "2022-12-22T12:17:05.818Z",
                                "updatedAt": "2022-12-23T01:14:40.475Z",
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
                        },
                        {
                            "id": 96,
                            "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                            "price": 120000,
                            "count": 1,
                            "token_trx": "59c148b7-c376-4a91-9f7e-818101184a8e",
                            "give_to": "admin@binar.com",
                            "status": "finished",
                            "deleted": false,
                            "order_id": "1671869285957",
                            "createdAt": "2022-12-24T08:08:05.934Z",
                            "updatedAt": "2022-12-24T10:32:01.930Z",
                            "carts": [{
                                "id": 26,
                                "trx_id": 96,
                                "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                "status": "finished",
                                "deleted": false,
                                "chair_number": 6,
                                "createdAt": "2022-12-24T08:08:05.939Z",
                                "updatedAt": "2022-12-24T10:32:01.953Z",
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
                        },
                        {
                            "id": 85,
                            "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                            "price": 240000,
                            "count": 2,
                            "token_trx": "bdad020e-b0be-4c47-94ee-7706362c3705",
                            "give_to": "admin@binar.com",
                            "status": "expired",
                            "deleted": false,
                            "order_id": "1671760283008",
                            "createdAt": "2022-12-23T01:51:22.984Z",
                            "updatedAt": "2022-12-24T02:00:01.988Z",
                            "carts": [{
                                "id": 9,
                                "trx_id": 85,
                                "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                "status": "expired",
                                "deleted": false,
                                "chair_number": 12,
                                "createdAt": "2022-12-23T01:51:22.992Z",
                                "updatedAt": "2022-12-24T02:00:02.008Z",
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
                                "id": 8,
                                "trx_id": 85,
                                "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                "status": "expired",
                                "deleted": false,
                                "chair_number": 10,
                                "createdAt": "2022-12-23T01:51:22.988Z",
                                "updatedAt": "2022-12-24T02:00:02.000Z",
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
                        },
                        {
                            "id": 97,
                            "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                            "price": 120000,
                            "count": 1,
                            "token_trx": "2e3123d0-e9e4-43d1-b242-8bbe8c3a02d4",
                            "give_to": "admin@binar.com",
                            "status": "expired",
                            "deleted": false,
                            "order_id": "1671870427698",
                            "createdAt": "2022-12-24T08:27:07.672Z",
                            "updatedAt": "2022-12-25T09:00:02.741Z",
                            "carts": [{
                                "id": 27,
                                "trx_id": 97,
                                "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                "status": "expired",
                                "deleted": false,
                                "chair_number": 7,
                                "createdAt": "2022-12-24T08:27:07.681Z",
                                "updatedAt": "2022-12-25T09:00:02.745Z",
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
                        },
                        {
                            "id": 103,
                            "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                            "price": 0,
                            "count": 1,
                            "token_trx": "",
                            "give_to": "admin@binar.com",
                            "status": "pending",
                            "deleted": false,
                            "order_id": null,
                            "createdAt": "2022-12-24T10:17:39.797Z",
                            "updatedAt": "2022-12-24T10:17:39.797Z",
                            "carts": [{
                                "id": 34,
                                "trx_id": 103,
                                "ticket_id": "806a96d1-795b-40da-8d17-91575f6151cb",
                                "status": "pending",
                                "deleted": false,
                                "chair_number": null,
                                "createdAt": "2022-12-24T10:17:39.807Z",
                                "updatedAt": "2022-12-24T10:17:39.807Z",
                                "ticket": {
                                    "id": "806a96d1-795b-40da-8d17-91575f6151cb",
                                    "name": "Air Asia",
                                    "from": "SURABAYA (JUANDA)",
                                    "dest": "BALI (NGURAH RAI)",
                                    "date_air": "2022-12-30T16:50:00.000Z",
                                    "price": 500000,
                                    "no_chair": 12,
                                    "type": 1,
                                    "trip_type": "-",
                                    "deleted": false,
                                    "logo": "/ticket/_image_1672165866028_38866620.png",
                                    "flight_number": "AA 908",
                                    "kelas": 1,
                                    "estimated_up_dest": "2022-12-30T17:50:00.000Z",
                                    "createdAt": "2022-12-23T18:51:38.150Z",
                                    "updatedAt": "2022-12-28T02:34:34.331Z",
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
                        },
                        {
                            "id": 86,
                            "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                            "price": 240000,
                            "count": 2,
                            "token_trx": "133d8473-8782-4c98-b9ef-29eba1514434",
                            "give_to": "admin@binar.com",
                            "status": "expired",
                            "deleted": false,
                            "order_id": "1671760785952",
                            "createdAt": "2022-12-23T01:59:45.929Z",
                            "updatedAt": "2022-12-24T02:00:03.191Z",
                            "carts": [{
                                "id": 11,
                                "trx_id": 86,
                                "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                "status": "expired",
                                "deleted": false,
                                "chair_number": 13,
                                "createdAt": "2022-12-23T01:59:45.936Z",
                                "updatedAt": "2022-12-24T02:00:03.210Z",
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
                                "id": 10,
                                "trx_id": 86,
                                "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                "status": "expired",
                                "deleted": false,
                                "chair_number": 11,
                                "createdAt": "2022-12-23T01:59:45.933Z",
                                "updatedAt": "2022-12-24T02:00:03.201Z",
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
                            "id": 98,
                            "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                            "price": 0,
                            "count": 1,
                            "token_trx": "",
                            "give_to": "admin@binar.com",
                            "status": "pending",
                            "deleted": false,
                            "order_id": null,
                            "createdAt": "2022-12-24T08:31:42.833Z",
                            "updatedAt": "2022-12-24T08:31:42.833Z",
                            "carts": [{
                                "id": 28,
                                "trx_id": 98,
                                "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                "status": "pending",
                                "deleted": false,
                                "chair_number": null,
                                "createdAt": "2022-12-24T08:31:42.840Z",
                                "updatedAt": "2022-12-24T08:31:42.840Z",
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
                            }],
                            "checkins": []
                        },
                        {
                            "id": 102,
                            "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                            "price": 500000,
                            "count": 1,
                            "token_trx": "79092c29-5d35-49ee-bfe3-e8094e0b882d",
                            "give_to": "admin@binar.com",
                            "status": "expired",
                            "deleted": false,
                            "order_id": "1671876912696",
                            "createdAt": "2022-12-24T10:15:12.676Z",
                            "updatedAt": "2022-12-25T11:00:01.431Z",
                            "carts": [{
                                "id": 33,
                                "trx_id": 102,
                                "ticket_id": "806a96d1-795b-40da-8d17-91575f6151cb",
                                "status": "expired",
                                "deleted": false,
                                "chair_number": 9,
                                "createdAt": "2022-12-24T10:15:12.680Z",
                                "updatedAt": "2022-12-25T11:00:01.436Z",
                                "ticket": {
                                    "id": "806a96d1-795b-40da-8d17-91575f6151cb",
                                    "name": "Air Asia",
                                    "from": "SURABAYA (JUANDA)",
                                    "dest": "BALI (NGURAH RAI)",
                                    "date_air": "2022-12-30T16:50:00.000Z",
                                    "price": 500000,
                                    "no_chair": 12,
                                    "type": 1,
                                    "trip_type": "-",
                                    "deleted": false,
                                    "logo": "/ticket/_image_1672165866028_38866620.png",
                                    "flight_number": "AA 908",
                                    "kelas": 1,
                                    "estimated_up_dest": "2022-12-30T17:50:00.000Z",
                                    "createdAt": "2022-12-23T18:51:38.150Z",
                                    "updatedAt": "2022-12-28T02:34:34.331Z",
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
                        },
                        {
                            "id": 83,
                            "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                            "price": 240000,
                            "count": 2,
                            "token_trx": "bdba023a-ad28-4f98-94d2-a7d1071f89ba",
                            "give_to": "admin@binar.com",
                            "status": "finished",
                            "deleted": false,
                            "order_id": "1671715552870",
                            "createdAt": "2022-12-22T12:17:05.803Z",
                            "updatedAt": "2022-12-23T01:14:40.470Z",
                            "carts": [{
                                "id": 6,
                                "trx_id": 83,
                                "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                "status": "finished",
                                "deleted": false,
                                "chair_number": 6,
                                "createdAt": "2022-12-22T12:17:05.822Z",
                                "updatedAt": "2022-12-23T01:14:40.478Z",
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
                                "id": 5,
                                "trx_id": 83,
                                "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                "status": "finished",
                                "deleted": false,
                                "chair_number": 5,
                                "createdAt": "2022-12-22T12:17:05.818Z",
                                "updatedAt": "2022-12-23T01:14:40.475Z",
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
                        },
                        {
                            "id": 96,
                            "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                            "price": 120000,
                            "count": 1,
                            "token_trx": "59c148b7-c376-4a91-9f7e-818101184a8e",
                            "give_to": "admin@binar.com",
                            "status": "finished",
                            "deleted": false,
                            "order_id": "1671869285957",
                            "createdAt": "2022-12-24T08:08:05.934Z",
                            "updatedAt": "2022-12-24T10:32:01.930Z",
                            "carts": [{
                                "id": 26,
                                "trx_id": 96,
                                "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                "status": "finished",
                                "deleted": false,
                                "chair_number": 6,
                                "createdAt": "2022-12-24T08:08:05.939Z",
                                "updatedAt": "2022-12-24T10:32:01.953Z",
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
                        },
                        {
                            "id": 85,
                            "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                            "price": 240000,
                            "count": 2,
                            "token_trx": "bdad020e-b0be-4c47-94ee-7706362c3705",
                            "give_to": "admin@binar.com",
                            "status": "expired",
                            "deleted": false,
                            "order_id": "1671760283008",
                            "createdAt": "2022-12-23T01:51:22.984Z",
                            "updatedAt": "2022-12-24T02:00:01.988Z",
                            "carts": [{
                                "id": 9,
                                "trx_id": 85,
                                "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                "status": "expired",
                                "deleted": false,
                                "chair_number": 12,
                                "createdAt": "2022-12-23T01:51:22.992Z",
                                "updatedAt": "2022-12-24T02:00:02.008Z",
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
                                "id": 8,
                                "trx_id": 85,
                                "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                "status": "expired",
                                "deleted": false,
                                "chair_number": 10,
                                "createdAt": "2022-12-23T01:51:22.988Z",
                                "updatedAt": "2022-12-24T02:00:02.000Z",
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
                        },
                        {
                            "id": 97,
                            "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                            "price": 120000,
                            "count": 1,
                            "token_trx": "2e3123d0-e9e4-43d1-b242-8bbe8c3a02d4",
                            "give_to": "admin@binar.com",
                            "status": "expired",
                            "deleted": false,
                            "order_id": "1671870427698",
                            "createdAt": "2022-12-24T08:27:07.672Z",
                            "updatedAt": "2022-12-25T09:00:02.741Z",
                            "carts": [{
                                "id": 27,
                                "trx_id": 97,
                                "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                "status": "expired",
                                "deleted": false,
                                "chair_number": 7,
                                "createdAt": "2022-12-24T08:27:07.681Z",
                                "updatedAt": "2022-12-25T09:00:02.745Z",
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
                        },
                        {
                            "id": 103,
                            "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                            "price": 0,
                            "count": 1,
                            "token_trx": "",
                            "give_to": "admin@binar.com",
                            "status": "pending",
                            "deleted": false,
                            "order_id": null,
                            "createdAt": "2022-12-24T10:17:39.797Z",
                            "updatedAt": "2022-12-24T10:17:39.797Z",
                            "carts": [{
                                "id": 34,
                                "trx_id": 103,
                                "ticket_id": "806a96d1-795b-40da-8d17-91575f6151cb",
                                "status": "pending",
                                "deleted": false,
                                "chair_number": null,
                                "createdAt": "2022-12-24T10:17:39.807Z",
                                "updatedAt": "2022-12-24T10:17:39.807Z",
                                "ticket": {
                                    "id": "806a96d1-795b-40da-8d17-91575f6151cb",
                                    "name": "Air Asia",
                                    "from": "SURABAYA (JUANDA)",
                                    "dest": "BALI (NGURAH RAI)",
                                    "date_air": "2022-12-30T16:50:00.000Z",
                                    "price": 500000,
                                    "no_chair": 12,
                                    "type": 1,
                                    "trip_type": "-",
                                    "deleted": false,
                                    "logo": "/ticket/_image_1672165866028_38866620.png",
                                    "flight_number": "AA 908",
                                    "kelas": 1,
                                    "estimated_up_dest": "2022-12-30T17:50:00.000Z",
                                    "createdAt": "2022-12-23T18:51:38.150Z",
                                    "updatedAt": "2022-12-28T02:34:34.331Z",
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
                        },
                        {
                            "id": 86,
                            "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                            "price": 240000,
                            "count": 2,
                            "token_trx": "133d8473-8782-4c98-b9ef-29eba1514434",
                            "give_to": "admin@binar.com",
                            "status": "expired",
                            "deleted": false,
                            "order_id": "1671760785952",
                            "createdAt": "2022-12-23T01:59:45.929Z",
                            "updatedAt": "2022-12-24T02:00:03.191Z",
                            "carts": [{
                                "id": 11,
                                "trx_id": 86,
                                "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                                "status": "expired",
                                "deleted": false,
                                "chair_number": 13,
                                "createdAt": "2022-12-23T01:59:45.936Z",
                                "updatedAt": "2022-12-24T02:00:03.210Z",
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
                                "id": 10,
                                "trx_id": 86,
                                "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                                "status": "expired",
                                "deleted": false,
                                "chair_number": 11,
                                "createdAt": "2022-12-23T01:59:45.933Z",
                                "updatedAt": "2022-12-24T02:00:03.201Z",
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
                "id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                "username": "admin",
                "email": "admin@binar.com",
                "password": "$2a$10$X7V.FfeIM09h57xISUivxuyaQ3UmjXQcUL.Y6QcgL3icAar5PF4jm",
                "g_id": "",
                "f_name": "admin",
                "l_name": "admin",
                "active": true,
                "access_level": 0,
                "deleted": false,
                "photo": "/user/avatar_default.png",
                "visa_ID": null,
                "createdAt": "2022-12-21T17:36:40.189Z",
                "updatedAt": "2022-12-21T17:36:40.189Z",
                "trx": [{
                    "id": 98,
                    "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                    "price": 0,
                    "count": 1,
                    "token_trx": "",
                    "give_to": "admin@binar.com",
                    "status": "pending",
                    "deleted": false,
                    "order_id": null,
                    "createdAt": "2022-12-24T08:31:42.833Z",
                    "updatedAt": "2022-12-24T08:31:42.833Z",
                    "carts": [{
                        "id": 28,
                        "trx_id": 98,
                        "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                        "status": "pending",
                        "deleted": false,
                        "chair_number": null,
                        "createdAt": "2022-12-24T08:31:42.840Z",
                        "updatedAt": "2022-12-24T08:31:42.840Z",
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
                    }],
                    "checkins": []
                },
                {
                    "id": 102,
                    "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                    "price": 500000,
                    "count": 1,
                    "token_trx": "79092c29-5d35-49ee-bfe3-e8094e0b882d",
                    "give_to": "admin@binar.com",
                    "status": "expired",
                    "deleted": false,
                    "order_id": "1671876912696",
                    "createdAt": "2022-12-24T10:15:12.676Z",
                    "updatedAt": "2022-12-25T11:00:01.431Z",
                    "carts": [{
                        "id": 33,
                        "trx_id": 102,
                        "ticket_id": "806a96d1-795b-40da-8d17-91575f6151cb",
                        "status": "expired",
                        "deleted": false,
                        "chair_number": 9,
                        "createdAt": "2022-12-24T10:15:12.680Z",
                        "updatedAt": "2022-12-25T11:00:01.436Z",
                        "ticket": {
                            "id": "806a96d1-795b-40da-8d17-91575f6151cb",
                            "name": "Air Asia",
                            "from": "SURABAYA (JUANDA)",
                            "dest": "BALI (NGURAH RAI)",
                            "date_air": "2022-12-30T16:50:00.000Z",
                            "price": 500000,
                            "no_chair": 12,
                            "type": 1,
                            "trip_type": "-",
                            "deleted": false,
                            "logo": "/ticket/_image_1672165866028_38866620.png",
                            "flight_number": "AA 908",
                            "kelas": 1,
                            "estimated_up_dest": "2022-12-30T17:50:00.000Z",
                            "createdAt": "2022-12-23T18:51:38.150Z",
                            "updatedAt": "2022-12-28T02:34:34.331Z",
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
                },
                {
                    "id": 83,
                    "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                    "price": 240000,
                    "count": 2,
                    "token_trx": "bdba023a-ad28-4f98-94d2-a7d1071f89ba",
                    "give_to": "admin@binar.com",
                    "status": "finished",
                    "deleted": false,
                    "order_id": "1671715552870",
                    "createdAt": "2022-12-22T12:17:05.803Z",
                    "updatedAt": "2022-12-23T01:14:40.470Z",
                    "carts": [{
                        "id": 6,
                        "trx_id": 83,
                        "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                        "status": "finished",
                        "deleted": false,
                        "chair_number": 6,
                        "createdAt": "2022-12-22T12:17:05.822Z",
                        "updatedAt": "2022-12-23T01:14:40.478Z",
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
                        "id": 5,
                        "trx_id": 83,
                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                        "status": "finished",
                        "deleted": false,
                        "chair_number": 5,
                        "createdAt": "2022-12-22T12:17:05.818Z",
                        "updatedAt": "2022-12-23T01:14:40.475Z",
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
                },
                {
                    "id": 96,
                    "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                    "price": 120000,
                    "count": 1,
                    "token_trx": "59c148b7-c376-4a91-9f7e-818101184a8e",
                    "give_to": "admin@binar.com",
                    "status": "finished",
                    "deleted": false,
                    "order_id": "1671869285957",
                    "createdAt": "2022-12-24T08:08:05.934Z",
                    "updatedAt": "2022-12-24T10:32:01.930Z",
                    "carts": [{
                        "id": 26,
                        "trx_id": 96,
                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                        "status": "finished",
                        "deleted": false,
                        "chair_number": 6,
                        "createdAt": "2022-12-24T08:08:05.939Z",
                        "updatedAt": "2022-12-24T10:32:01.953Z",
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
                },
                {
                    "id": 85,
                    "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                    "price": 240000,
                    "count": 2,
                    "token_trx": "bdad020e-b0be-4c47-94ee-7706362c3705",
                    "give_to": "admin@binar.com",
                    "status": "expired",
                    "deleted": false,
                    "order_id": "1671760283008",
                    "createdAt": "2022-12-23T01:51:22.984Z",
                    "updatedAt": "2022-12-24T02:00:01.988Z",
                    "carts": [{
                        "id": 9,
                        "trx_id": 85,
                        "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                        "status": "expired",
                        "deleted": false,
                        "chair_number": 12,
                        "createdAt": "2022-12-23T01:51:22.992Z",
                        "updatedAt": "2022-12-24T02:00:02.008Z",
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
                        "id": 8,
                        "trx_id": 85,
                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                        "status": "expired",
                        "deleted": false,
                        "chair_number": 10,
                        "createdAt": "2022-12-23T01:51:22.988Z",
                        "updatedAt": "2022-12-24T02:00:02.000Z",
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
                },
                {
                    "id": 97,
                    "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                    "price": 120000,
                    "count": 1,
                    "token_trx": "2e3123d0-e9e4-43d1-b242-8bbe8c3a02d4",
                    "give_to": "admin@binar.com",
                    "status": "expired",
                    "deleted": false,
                    "order_id": "1671870427698",
                    "createdAt": "2022-12-24T08:27:07.672Z",
                    "updatedAt": "2022-12-25T09:00:02.741Z",
                    "carts": [{
                        "id": 27,
                        "trx_id": 97,
                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                        "status": "expired",
                        "deleted": false,
                        "chair_number": 7,
                        "createdAt": "2022-12-24T08:27:07.681Z",
                        "updatedAt": "2022-12-25T09:00:02.745Z",
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
                },
                {
                    "id": 103,
                    "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                    "price": 0,
                    "count": 1,
                    "token_trx": "",
                    "give_to": "admin@binar.com",
                    "status": "pending",
                    "deleted": false,
                    "order_id": null,
                    "createdAt": "2022-12-24T10:17:39.797Z",
                    "updatedAt": "2022-12-24T10:17:39.797Z",
                    "carts": [{
                        "id": 34,
                        "trx_id": 103,
                        "ticket_id": "806a96d1-795b-40da-8d17-91575f6151cb",
                        "status": "pending",
                        "deleted": false,
                        "chair_number": null,
                        "createdAt": "2022-12-24T10:17:39.807Z",
                        "updatedAt": "2022-12-24T10:17:39.807Z",
                        "ticket": {
                            "id": "806a96d1-795b-40da-8d17-91575f6151cb",
                            "name": "Air Asia",
                            "from": "SURABAYA (JUANDA)",
                            "dest": "BALI (NGURAH RAI)",
                            "date_air": "2022-12-30T16:50:00.000Z",
                            "price": 500000,
                            "no_chair": 12,
                            "type": 1,
                            "trip_type": "-",
                            "deleted": false,
                            "logo": "/ticket/_image_1672165866028_38866620.png",
                            "flight_number": "AA 908",
                            "kelas": 1,
                            "estimated_up_dest": "2022-12-30T17:50:00.000Z",
                            "createdAt": "2022-12-23T18:51:38.150Z",
                            "updatedAt": "2022-12-28T02:34:34.331Z",
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
                },
                {
                    "id": 86,
                    "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                    "price": 240000,
                    "count": 2,
                    "token_trx": "133d8473-8782-4c98-b9ef-29eba1514434",
                    "give_to": "admin@binar.com",
                    "status": "expired",
                    "deleted": false,
                    "order_id": "1671760785952",
                    "createdAt": "2022-12-23T01:59:45.929Z",
                    "updatedAt": "2022-12-24T02:00:03.191Z",
                    "carts": [{
                        "id": 11,
                        "trx_id": 86,
                        "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                        "status": "expired",
                        "deleted": false,
                        "chair_number": 13,
                        "createdAt": "2022-12-23T01:59:45.936Z",
                        "updatedAt": "2022-12-24T02:00:03.210Z",
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
                        "id": 10,
                        "trx_id": 86,
                        "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                        "status": "expired",
                        "deleted": false,
                        "chair_number": 11,
                        "createdAt": "2022-12-23T01:59:45.933Z",
                        "updatedAt": "2022-12-24T02:00:03.201Z",
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
        "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMjM1NzRiOGYtM2U4OS00Njg1LWEzNDgtNjdjMWY3ZTViM2M0IiwiaWF0IjoxNjcyMjcyODg4fQ.dKyiq_yXNTv1IrbWhFRGjR2LrGEoraxBQtxbWsaNh08",
        "user": {
            "id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
            "username": "admin",
            "email": "admin@binar.com",
            "password": "$2a$10$X7V.FfeIM09h57xISUivxuyaQ3UmjXQcUL.Y6QcgL3icAar5PF4jm",
            "g_id": "",
            "f_name": "admin",
            "l_name": "admin",
            "active": true,
            "access_level": 0,
            "deleted": false,
            "photo": "/user/avatar_default.png",
            "visa_ID": null,
            "createdAt": "2022-12-21T17:36:40.189Z",
            "updatedAt": "2022-12-21T17:36:40.189Z",
            "trx": [{
                "id": 98,
                "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                "price": 0,
                "count": 1,
                "token_trx": "",
                "give_to": "admin@binar.com",
                "status": "pending",
                "deleted": false,
                "order_id": null,
                "createdAt": "2022-12-24T08:31:42.833Z",
                "updatedAt": "2022-12-24T08:31:42.833Z",
                "carts": [{
                    "id": 28,
                    "trx_id": 98,
                    "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                    "status": "pending",
                    "deleted": false,
                    "chair_number": null,
                    "createdAt": "2022-12-24T08:31:42.840Z",
                    "updatedAt": "2022-12-24T08:31:42.840Z",
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
                }],
                "checkins": []
            },
            {
                "id": 102,
                "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                "price": 500000,
                "count": 1,
                "token_trx": "79092c29-5d35-49ee-bfe3-e8094e0b882d",
                "give_to": "admin@binar.com",
                "status": "expired",
                "deleted": false,
                "order_id": "1671876912696",
                "createdAt": "2022-12-24T10:15:12.676Z",
                "updatedAt": "2022-12-25T11:00:01.431Z",
                "carts": [{
                    "id": 33,
                    "trx_id": 102,
                    "ticket_id": "806a96d1-795b-40da-8d17-91575f6151cb",
                    "status": "expired",
                    "deleted": false,
                    "chair_number": 9,
                    "createdAt": "2022-12-24T10:15:12.680Z",
                    "updatedAt": "2022-12-25T11:00:01.436Z",
                    "ticket": {
                        "id": "806a96d1-795b-40da-8d17-91575f6151cb",
                        "name": "Air Asia",
                        "from": "SURABAYA (JUANDA)",
                        "dest": "BALI (NGURAH RAI)",
                        "date_air": "2022-12-30T16:50:00.000Z",
                        "price": 500000,
                        "no_chair": 12,
                        "type": 1,
                        "trip_type": "-",
                        "deleted": false,
                        "logo": "/ticket/_image_1672165866028_38866620.png",
                        "flight_number": "AA 908",
                        "kelas": 1,
                        "estimated_up_dest": "2022-12-30T17:50:00.000Z",
                        "createdAt": "2022-12-23T18:51:38.150Z",
                        "updatedAt": "2022-12-28T02:34:34.331Z",
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
            },
            {
                "id": 83,
                "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                "price": 240000,
                "count": 2,
                "token_trx": "bdba023a-ad28-4f98-94d2-a7d1071f89ba",
                "give_to": "admin@binar.com",
                "status": "finished",
                "deleted": false,
                "order_id": "1671715552870",
                "createdAt": "2022-12-22T12:17:05.803Z",
                "updatedAt": "2022-12-23T01:14:40.470Z",
                "carts": [{
                    "id": 6,
                    "trx_id": 83,
                    "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                    "status": "finished",
                    "deleted": false,
                    "chair_number": 6,
                    "createdAt": "2022-12-22T12:17:05.822Z",
                    "updatedAt": "2022-12-23T01:14:40.478Z",
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
                    "id": 5,
                    "trx_id": 83,
                    "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                    "status": "finished",
                    "deleted": false,
                    "chair_number": 5,
                    "createdAt": "2022-12-22T12:17:05.818Z",
                    "updatedAt": "2022-12-23T01:14:40.475Z",
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
            },
            {
                "id": 96,
                "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                "price": 120000,
                "count": 1,
                "token_trx": "59c148b7-c376-4a91-9f7e-818101184a8e",
                "give_to": "admin@binar.com",
                "status": "finished",
                "deleted": false,
                "order_id": "1671869285957",
                "createdAt": "2022-12-24T08:08:05.934Z",
                "updatedAt": "2022-12-24T10:32:01.930Z",
                "carts": [{
                    "id": 26,
                    "trx_id": 96,
                    "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                    "status": "finished",
                    "deleted": false,
                    "chair_number": 6,
                    "createdAt": "2022-12-24T08:08:05.939Z",
                    "updatedAt": "2022-12-24T10:32:01.953Z",
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
            },
            {
                "id": 85,
                "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                "price": 240000,
                "count": 2,
                "token_trx": "bdad020e-b0be-4c47-94ee-7706362c3705",
                "give_to": "admin@binar.com",
                "status": "expired",
                "deleted": false,
                "order_id": "1671760283008",
                "createdAt": "2022-12-23T01:51:22.984Z",
                "updatedAt": "2022-12-24T02:00:01.988Z",
                "carts": [{
                    "id": 9,
                    "trx_id": 85,
                    "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                    "status": "expired",
                    "deleted": false,
                    "chair_number": 12,
                    "createdAt": "2022-12-23T01:51:22.992Z",
                    "updatedAt": "2022-12-24T02:00:02.008Z",
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
                    "id": 8,
                    "trx_id": 85,
                    "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                    "status": "expired",
                    "deleted": false,
                    "chair_number": 10,
                    "createdAt": "2022-12-23T01:51:22.988Z",
                    "updatedAt": "2022-12-24T02:00:02.000Z",
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
            },
            {
                "id": 97,
                "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                "price": 120000,
                "count": 1,
                "token_trx": "2e3123d0-e9e4-43d1-b242-8bbe8c3a02d4",
                "give_to": "admin@binar.com",
                "status": "expired",
                "deleted": false,
                "order_id": "1671870427698",
                "createdAt": "2022-12-24T08:27:07.672Z",
                "updatedAt": "2022-12-25T09:00:02.741Z",
                "carts": [{
                    "id": 27,
                    "trx_id": 97,
                    "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                    "status": "expired",
                    "deleted": false,
                    "chair_number": 7,
                    "createdAt": "2022-12-24T08:27:07.681Z",
                    "updatedAt": "2022-12-25T09:00:02.745Z",
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
            },
            {
                "id": 103,
                "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                "price": 0,
                "count": 1,
                "token_trx": "",
                "give_to": "admin@binar.com",
                "status": "pending",
                "deleted": false,
                "order_id": null,
                "createdAt": "2022-12-24T10:17:39.797Z",
                "updatedAt": "2022-12-24T10:17:39.797Z",
                "carts": [{
                    "id": 34,
                    "trx_id": 103,
                    "ticket_id": "806a96d1-795b-40da-8d17-91575f6151cb",
                    "status": "pending",
                    "deleted": false,
                    "chair_number": null,
                    "createdAt": "2022-12-24T10:17:39.807Z",
                    "updatedAt": "2022-12-24T10:17:39.807Z",
                    "ticket": {
                        "id": "806a96d1-795b-40da-8d17-91575f6151cb",
                        "name": "Air Asia",
                        "from": "SURABAYA (JUANDA)",
                        "dest": "BALI (NGURAH RAI)",
                        "date_air": "2022-12-30T16:50:00.000Z",
                        "price": 500000,
                        "no_chair": 12,
                        "type": 1,
                        "trip_type": "-",
                        "deleted": false,
                        "logo": "/ticket/_image_1672165866028_38866620.png",
                        "flight_number": "AA 908",
                        "kelas": 1,
                        "estimated_up_dest": "2022-12-30T17:50:00.000Z",
                        "createdAt": "2022-12-23T18:51:38.150Z",
                        "updatedAt": "2022-12-28T02:34:34.331Z",
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
            },
            {
                "id": 86,
                "user_id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
                "price": 240000,
                "count": 2,
                "token_trx": "133d8473-8782-4c98-b9ef-29eba1514434",
                "give_to": "admin@binar.com",
                "status": "expired",
                "deleted": false,
                "order_id": "1671760785952",
                "createdAt": "2022-12-23T01:59:45.929Z",
                "updatedAt": "2022-12-24T02:00:03.191Z",
                "carts": [{
                    "id": 11,
                    "trx_id": 86,
                    "ticket_id": "2eb3be01-ce08-4943-ac88-0f89a31441ed",
                    "status": "expired",
                    "deleted": false,
                    "chair_number": 13,
                    "createdAt": "2022-12-23T01:59:45.936Z",
                    "updatedAt": "2022-12-24T02:00:03.210Z",
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
                    "id": 10,
                    "trx_id": 86,
                    "ticket_id": "087ec46b-7993-4626-8e8f-e8146193c1f6",
                    "status": "expired",
                    "deleted": false,
                    "chair_number": 11,
                    "createdAt": "2022-12-23T01:59:45.933Z",
                    "updatedAt": "2022-12-24T02:00:03.201Z",
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