migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mrwnd8tdjiyindb")

  // remove
  collection.schema.removeField("zqtdzu7x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yejknitg",
    "name": "comment",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "1idfimaz0m77p4z",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mrwnd8tdjiyindb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zqtdzu7x",
    "name": "comment",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("yejknitg")

  return dao.saveCollection(collection)
})
