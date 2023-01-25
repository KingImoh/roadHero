migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mrwnd8tdjiyindb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yejknitg",
    "name": "comments",
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

  // update
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
})
