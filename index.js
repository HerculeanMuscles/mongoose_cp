import mongoose from "mongoose";
import Person from "./model/Person.js";

mongoose.connect(
	"mongodb+srv://fahry657:test@cluster0.yw1oke1.mongodb.net/abcde?retryWrites=true&w=majority"
);

// const newPerson = new Person({
// 	name: "John Doe",
// 	age: 25,
// 	favoriteFoods: ["Pizza", "Burger"],
// });

// newPerson
// 	.save()
// 	.then((data) => {
// 		console.log("Record saved successfully:", data);
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	});

// Define an array of people data
// const arrayOfPerson = [
// 	{ name: "John", age: 30, favoriteFoods: ["Pizza", "Pasta"] },
// 	{ name: "Jane", age: 25, favoriteFoods: ["Burger", "Sushi"] },
// 	{ name: "Bob", age: 35, favoriteFoods: ["Steak", "Chicken"] },
// ];

// // Create many records in the database
// Person.create(arrayOfPerson)
// 	.then((person) => {
// 		console.log("Records created successfully:", person);
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	});

// Specify the name to search for
const searchName = "John";

// Find all people with the specified name
Person.find({ name: searchName })
	.then((people) => {
		console.log(`People with the name ${searchName}:`, people);
		// Your stuff here
	})
	.catch((err) => {
		console.error(err);
	});

// Specify the food to search for
const searchFood = "Pizza";

// Find one person with the specified food in favorites
Person.findOne({ favoriteFoods: searchFood })
	.then((person) => {
		if (person) {
			console.log(`Person with ${searchFood} in favorites:`, person);
			// Your stuff here
		} else {
			console.log(`No person found with ${searchFood} in favorites.`);
		}
	})
	.catch((err) => {
		console.error(err);
	});
