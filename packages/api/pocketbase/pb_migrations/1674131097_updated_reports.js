migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mrwnd8tdjiyindb")

  // remove
  collection.schema.removeField("kiyjygfa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bpwpf4fy",
    "name": "upvotes",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mrwnd8tdjiyindb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kiyjygfa",
    "name": "upvotes",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("bpwpf4fy")

  return dao.saveCollection(collection)
})
