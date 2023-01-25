migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1idfimaz0m77p4z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ctstdq9u",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ekjulqj9",
    "name": "upvotes",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1idfimaz0m77p4z")

  // remove
  collection.schema.removeField("ctstdq9u")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ekjulqj9",
    "name": "upvote",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
