migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1idfimaz0m77p4z")

  // remove
  collection.schema.removeField("4qnpjd0u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bsgbij7r",
    "name": "content",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 200,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1idfimaz0m77p4z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4qnpjd0u",
    "name": "comment",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 100,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("bsgbij7r")

  return dao.saveCollection(collection)
})
