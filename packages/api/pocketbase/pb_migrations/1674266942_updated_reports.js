migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mrwnd8tdjiyindb")

  // remove
  collection.schema.removeField("w1ztettk")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mrwnd8tdjiyindb")

  // add
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

  return dao.saveCollection(collection)
})
