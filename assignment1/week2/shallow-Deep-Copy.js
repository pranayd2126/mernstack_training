// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

// 🎯 Task
//     1. Create a shallow copy of user
          let    usercopy= {...user}

//     2. Change:
//           i. name in the copied object
                usercopy.name="Anjali"


//           ii. preferences.theme in the copied object
                usercopy.preferences.theme="light"


         

//           iii .Log both original and copied objects
 console.log("Original User:", user);
 console.log("Copied User:", usercopy);
//           iv. Observe what changes and what doesn’t


// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

// 🎯 Task:
//       1. Create a deep copy of order
           
            let ordercopy=structuredClone(order);
//       2. Modify in copied object:
//             i. customer.address.city
                ordercopy.customer.address.city="Chennai";
//             ii. items[0].price
                ordercopy.items[0].price=75000;
//             iii. Verify original object remains unchanged
    console.log("Original Order:", order);
    console.log("Copied Order:", ordercopy);
