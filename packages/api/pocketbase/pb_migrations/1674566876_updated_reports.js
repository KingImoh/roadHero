migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mrwnd8tdjiyindb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "57gozwly",
    "name": "category",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 6,
      "values": [
        "pavement",
        "drainage",
        "traffic light",
        "street light",
        "signage",
        "marking"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mrwnd8tdjiyindb")

  // remove
  collection.schema.removeField("57gozwly")

  return dao.saveCollection(collection)
})
