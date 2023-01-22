migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1idfimaz0m77p4z")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1idfimaz0m77p4z")

  // remove
  collection.schema.removeField("ekjulqj9")

  return dao.saveCollection(collection)
})
