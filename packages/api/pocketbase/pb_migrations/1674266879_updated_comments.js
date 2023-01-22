migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1idfimaz0m77p4z")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aoemjvux",
    "name": "report",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "mrwnd8tdjiyindb",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1idfimaz0m77p4z")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aoemjvux",
    "name": "report",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "mrwnd8tdjiyindb",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
