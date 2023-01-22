migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1idfimaz0m77p4z")

  // remove
  collection.schema.removeField("mo9mww9l")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1idfimaz0m77p4z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mo9mww9l",
    "name": "report",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "mrwnd8tdjiyindb",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
})
