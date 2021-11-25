db.users.insertMany([{
  name: "Ana",
  age: 25,
  status: true,
  country_code: {
    $ref : "countries",
    $id : ObjectId("619fc9d8b2f54ed96e88c3f5")
  },
  username: "osito23",
  password: "8987542bfwdkj"
},
{
  name: "Berenice",
  age: 55,
  status: true,
  country_code: {
    $ref : "countries",
    $id : ObjectId("619fc9d8b2f54ed96e88c3f6")
  },
  username: "caramelitoRojo",
  password: "83hedsjh873"
},
{
  name: "Carlos",
  age: 14,
  status: true,
  country_code: {
    $ref : "countries",
    $id : ObjectId("619fc9d8b2f54ed96e88c3f5")
  },
  username: "Superman",
  password: "fkmdjf83"
},
{
  name: "Damian",
  age: 25,
  status: false,
  country_code: {
    $ref : "countries",
    $id : ObjectId("619fc9d8b2f54ed96e88c3f8")
  },
  username: "EseMan",
  password: "fdfdsk4311"
},
{
  name: "Edan",
  age: 28,
  status: true,
  country_code: {
    $ref : "countries",
    $id : ObjectId("619fc9d8b2f54ed96e88c3f7")
  },
  username: "el3cuartos",
  password: "23232dfd"
}])
