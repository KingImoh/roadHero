migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mrwnd8tdjiyindb")

  // update
  collection.schema.addField(new SchemaField({
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
        "video/mp4",
        "video/x-ms-wmv",
        "video/quicktime",
        "video/3gpp"
      ],
      "thumbs": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rlfpuyez",
    "name": "media",
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
        "image/webp",
        "video/mp4",
        "video/x-ms-wmv",
        "video/quicktime",
        "video/3gpp"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mrwnd8tdjiyindb")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
