db.createCollection("countries", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "name", "iso_code", "number_code", "created_date", "updated_date" ],
         properties: {
            name: {
               bsonType: "string"
            },
            iso_code: {
               bsonType: "string"
            },
            number_code: {
               bsonType: "int"
            },
            created_date: {
              bsonType: "date"
            },
            updated_date: {
              bsonType: "date"
            }
         }
      }
   }
})

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "status", "country_code", "username", "password"],
      properties: {
        name: {
          bsonType: "string"
        },
        age: {
          bsonType: "int"
        },
        status: {
          bsonType: "bool"
        },
        country_code: {
          bsonType: "objectId"
        },
        username: {
          bsonType: "string"
        },
        password: {
          bsonType: "string"
        }
      }
    }
  }
})

db.createCollection('usersScore', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["username", "score", "date", "status"],
      properties: {
        username: {
          bsonType: "objectId"
        },
        score: {
          bsonType: "int"
        },
        date: {
          bsonType: "date"
        },
        status: {
          bsonType: "bool"
        }
      }
    }
  }
})
