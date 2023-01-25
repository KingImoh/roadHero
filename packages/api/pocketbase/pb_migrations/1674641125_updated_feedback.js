migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t7dkab870cq6km1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7fdgawnw",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t7dkab870cq6km1")

  // remove
  collection.schema.removeField("7fdgawnw")

  return dao.saveCollection(collection)
})
