export const userPayload = `{
  "name": "Lukas Graham",
  "username": "Lugrel",
  "email": "Lukas57@april.com",
  "address": {
      "street": "8 Miles",
      "suite": "Apt. 556",
      "city": "Los Vegas",
      "zipcode": "93958-3638",
      "geo": {
          "lat": "-42.1556",
          "lng": "63.1671"
      }
  },
  "phone": "1-770-722-7872 x63442",
  "website": "wildegardogrel.org",
  "company": {
      "name": "Widergora-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
  }
}`

export const expectedUserResponse = `{
    "name": "Lukas Graham",
    "username": "Lugrel",
    "id": 11
  }`

