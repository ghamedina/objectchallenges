Object Oriented Password Checker
Take your Password Checker and write in code that will notify the user when they have entered a non-valid user name and password.
Tasks:

For each criteria create a function that checks the string for the password or username and returns one of two objects.

Either { valid: true } or { valid: false, reason: "User ID cannot contain $"} with the reason for the rule failing.
Then create a main function that runs all functions and prints out all failures for all criteria one at a time.

Car Object Challenge
Story 1

Create a function that creates car objects which have a make, model year, and color.

Add a function that returns make, model year, and color as one string and use the method to tell the user the car's information.

Challenges:

Write a function that creates an object that represents a car with the following properties:
model year
make
color
Add a function to the object that is being returned that contatenates the make, year and color.
Story 2

The car can accelerate, brake, and tell you its speed.

Challenges:

Add a speed variable to the closure of the car object. Add the following functions to the object:
getSpeed: returns current speed
accelerate: increases the speed by 10mph (but does not return anything)
brake: decreases the speed by 7mph (but does not return anything)
Story 3

Create a car object and use a while loop to take its speed up to 50mph.
Then use a while loop to brake down to 0mph.
Surprise: it doesnt stop at 0mph, fix that.

Challenges:

Create a loop that accelerates the car up to 70mph.
Create a loop that decelerates the car to 0pmh.
Call break after the car is at 0mph.
Fix the issue.
Hint: The loops use a car object, but is not part of the car object.

Story 4

Challenge:

Limit the car's maximum speed to 85mph. Try taking it above 80mph and see what happens.
Hint: What should happen when you call accelerate at 80mph?

Story 5 (Extra)

Challenge:

Sometimes roads are slippery and downhill, and sometimes brakes fail: make the brake change the speed by a random amount with a maximum of minus 1/2 of the current speed. (Hint: Math.random()). How many iterations does it take to stop the car?
Resources

