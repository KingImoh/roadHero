migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mrwnd8tdjiyindb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yg4mqls5",
    "name": "location",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mrwnd8tdjiyindb")

  // remove
  collection.schema.removeField("yg4mqls5")

  return dao.saveCollection(collection)
})
