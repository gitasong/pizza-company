# Chicago's Famous Pizza Company

#### Form-based order page for a fictitious pizza company created for Epicodus' Intro to Programming Week 4 independent project

#### By Nicole Freed

#### on Github Pages: https://gitasong.github.io/pizza-company

## Description

Web-based order page for a fictitious pizza company allowing the user to select pizza size and toppings, and returning the order details and price. Purpose of the exercise is to practice using HTML forms and Javascript objects, constructors, and prototypes.

## Setup/Installation Requirements

* Clone the project directory from https://github.com/gitasong/pizza-company using git clone in Terminal.
* Unzip the cloned file.
* Double-click on index.html in the project directory to load it into your default browser.
* Follow the instructions on the web page that loads.

## Project Specifications
Pizza Company Project Specs

* √ The user can choose the size of their pizza from among available options.
- Example Input: Options: 5" mini, 7", 9", 11", 13" - user chooses 7"
- Expected Output: 7"

* √ The user can choose a single topping for their pizza from among available options.
- Example Input: Options: pepperoni, sausage, mushrooms, onions, spinach, artichokes, pineapple, olives, extra cheese - user chooses artichokes
- Expected Output: artichokes

* √ The user can choose multiple toppings for their pizza from among available options.
- Example Input: Options: pepperoni, sausage, mushrooms, onions, spinach, artichokes, pineapple, olives, extra cheese - user chooses artichokes, sausage, and pineapple
- Expected Output: artichokes, sausage, pineapple

* (√) The program will compute the total cost of the pizza from the chosen options.
- Example Input: 7" pizza, artichokes, sausage, pineapple - pizza costs $10, artichokes and pineapple cost $1 each, sausage costs $1.79
- Expected Output: $13.79

* (√) The program will display the total cost of the pizza to the user.
- Example Input: <user chooses options above>
- Expected Output: Your cost: $13.79

Key: √ = implemented; (√) = partially implemented

## Known Bugs

Total price currently fails to properly incorporate the base pizza price for the size chosen (prototype function is not working). It only returns the price of the toppings. You get your pizza cheap! :)

## Support and contact details

Feel free to contact me at gitasong@github.io.

## Technologies Used

* HTML 5
* CSS 3
* Javascript 5
* JQuery 3

### License

This project is licensed under the MIT license.

Copyright (c) 2016 Nicole Freed
