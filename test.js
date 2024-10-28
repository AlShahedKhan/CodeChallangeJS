const articals = [
    {
      "id": 1,
      "name": "John Doe",
      "age": 30,
      "email": "john.doe@example.com",
      "role": "Admin"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "age": 25,
      "email": "jane.smith@example.com",
      "role": "Editor"
    },
    {
      "id": 3,
      "name": "Michael Johnson",
      "age": 40,
      "email": "michael.johnson@example.com",
      "role": "Viewer"
    },
    {
      "id": 4,
      "name": "Emily Davis",
      "age": 22,
      "email": "emily.davis@example.com",
      "role": "Contributor"
    },
    {
      "id": 5,
      "name": "David Wilson",
      "age": 35,
      "email": "david.wilson@example.com",
      "role": "Admin"
    },
    {
      "id": 6,
      "name": "Sophia Brown",
      "age": 28,
      "email": "sophia.brown@example.com",
      "role": "Viewer"
    },
    {
      "id": 7,
      "name": "Chris Taylor",
      "age": 32,
      "email": "chris.taylor@example.com",
      "role": "Editor"
    },
    {
      "id": 8,
      "name": "Lisa Martin",
      "age": 29,
      "email": "lisa.martin@example.com",
      "role": "Admin"
    },
    {
      "id": 9,
      "name": "James Anderson",
      "age": 45,
      "email": "james.anderson@example.com",
      "role": "Contributor"
    },
    {
      "id": 10,
      "name": "Olivia White",
      "age": 31,
      "email": "olivia.white@example.com",
      "role": "Viewer"
    }
  ]
  
  const artical = articals.find((item) => item.id === 3);
  
  console.log(artical);