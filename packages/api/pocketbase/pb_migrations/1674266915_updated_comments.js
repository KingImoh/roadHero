migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1idfimaz0m77p4z")

  // remove
  collection.schema.removeField("ctstdq9u")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xgxuwmeu",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
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
    "id": "xgxuwmeu",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
})
