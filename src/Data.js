import React from 'react'

export const FamilyTree = {
    name: "John",
    age: 90,
    children: [
      {
        name: "Mary",
        age: 60,
      },
      {
        name: "Arthur",
        age: 60,
        children: [
          {
            name: "Lily",
            age: 35,
            children: [
              {
                name: "Hank",
                age: 60,
              },
              {
                name: "Henry",
                age: 57,
                children: [
                  {
                    name: "Sarah",
                    age: 30,
                  },
                  {
                    name: "Oliver",
                    age: 28,
                    children: [
                      {
                        name: "Emily",
                        age: 5,
                      },
                      {
                        name: "Ethan",
                        age: 3,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Sophie",
            age: 33,
          },
        ],
      },
      {
        name: "William",
        age: 58,
        children: [
          {
            name: "Grace",
            age: 30,
            children: [
              {
                name: "Lucy",
                age: 4,
              },
              {
                name: "Ava",
                age: 2,
              },
            ],
          },
          {
            name: "Olivia",
            age: 28,
          },
        ],
      },
    ],
  };
  
  export default FamilyTree;
  