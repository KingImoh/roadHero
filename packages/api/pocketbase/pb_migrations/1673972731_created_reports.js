migrate((db) => {
  const collection = new Collection({
    "id": "mrwnd8tdjiyindb",
    "created": "2023-01-17 16:25:31.628Z",
    "updated": "2023-01-17 16:25:31.628Z",
    "name": "reports",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rwbzh0ms",
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
        "id": "w1ztettk",
        "name": "video",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "rlfpuyez",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 3,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "kiyjygfa",
        "name": "upvotes",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "zqtdzu7x",
        "name": "comment",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("mrwnd8tdjiyindb");

  return dao.deleteCollection(collection);
})
