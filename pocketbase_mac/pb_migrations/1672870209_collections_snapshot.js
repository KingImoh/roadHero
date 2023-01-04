migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2022-12-08 23:33:34.892Z",
      "updated": "2022-12-08 23:49:12.345Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif"
            ],
            "thumbs": null
          }
        }
      ],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "y4e0iosqknuymo9",
      "created": "2022-12-08 23:58:33.983Z",
      "updated": "2022-12-08 23:58:33.983Z",
      "name": "post",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "tbhm0did",
          "name": "title",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": 20,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "d7smjer0",
          "name": "description",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": 200,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "rqqsfqug",
          "name": "media",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 5,
            "maxSize": 5242880,
            "mimeTypes": [],
            "thumbs": []
          }
        },
        {
          "system": false,
          "id": "etfrxlar",
          "name": "user",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false
          }
        }
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
