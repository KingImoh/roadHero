migrate((db) => {
  const collection = new Collection({
    "id": "t7dkab870cq6km1",
    "created": "2023-01-25 10:04:45.602Z",
    "updated": "2023-01-25 10:04:45.602Z",
    "name": "feedback",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uqzv26bb",
        "name": "content",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "aigekspa",
        "name": "media",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "video/mp4",
            "video/x-ms-wmv",
            "video/quicktime",
            "video/3gpp",
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("t7dkab870cq6km1");

  return dao.deleteCollection(collection);
})
