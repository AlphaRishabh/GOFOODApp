# MERN Food Order App

Welcome to the MERN Food Order App! This application is designed to streamline the process of ordering food online. With features including a sign-in page, login page, viewing orders, managing your cart, and exploring the food menu, this app aims to provide a seamless experience for users to satisfy their cravings with just a few clicks.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setting Up Environment Variables](#setting-up-environment-variables)
- [Usage](#usage)
  - [Running the Development Server](#running-the-development-server)
  - [Exploring the App](#exploring-the-app)
- [Functionality](#functionality)
  - [Sign-In Page](#sign-in-page)
  - [Login Page](#login-page)
  - [My Orders](#my-orders)
  - [Cart](#cart)
  - [Food Menu](#food-menu)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Getting Started

### Prerequisites

Before running the MERN Food Order App, make sure you have the following installed on your machine:

- Node.js and npm: [Download & Install Node.js](https://nodejs.org/)
- MongoDB: [Download & Install MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/mern-food-order-app.git


Navigate to the Project Directory: Change your current directory to the cloned project directory:

``cd GoFoodOrder

Install Dependencies: Install the project dependencies using npm:

``npm install

Setting Up Environment Variables
Create .env File: Create a .env file in the root directory of the project.

Define Environment Variables: Add the following environment variables to the .env file:
# MongoDB Connection URL
MONGODB_URI=mongodb://localhost:27017/mern-food-order

# JWT Secret Key (used for authentication)
JWT_SECRET=your-secret-key



Certainly! Here's a more detailed README file with instructions and additional details:

markdown
Copy code
# MERN Food Order App

Welcome to the MERN Food Order App! This application is designed to streamline the process of ordering food online. With features including a sign-in page, login page, viewing orders, managing your cart, and exploring the food menu, this app aims to provide a seamless experience for users to satisfy their cravings with just a few clicks.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setting Up Environment Variables](#setting-up-environment-variables)
- [Usage](#usage)
  - [Running the Development Server](#running-the-development-server)
  - [Exploring the App](#exploring-the-app)
- [Functionality](#functionality)
  - [Sign-In Page](#sign-in-page)
  - [Login Page](#login-page)
  - [My Orders](#my-orders)
  - [Cart](#cart)
  - [Food Menu](#food-menu)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Getting Started

### Prerequisites

Before running the MERN Food Order App, make sure you have the following installed on your machine:

- Node.js and npm: [Download & Install Node.js](https://nodejs.org/)
- MongoDB: [Download & Install MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/mern-food-order-app.git
Navigate to the Project Directory: Change your current directory to the cloned project directory:

bash
Copy code
cd mern-food-order-app
Install Dependencies: Install the project dependencies using npm:

bash
Copy code
npm install
Setting Up Environment Variables
Create .env File: Create a .env file in the root directory of the project.

Define Environment Variables: Add the following environment variables to the .env file:

plaintext
Copy code
# MongoDB Connection URL
MONGODB_URI=m'mongodb+srv://rishabhproject:rishabh29@cluster0.5vttfxj.mongodb.net/gofoodmern?retryWrites=true&w=majority'

# JWT Secret Key (used for authentication)
JWT_SECRET=your-secret-key


## Usage
Running the Development Server
To start the development server, run the following command:

npm start

By default, the app will be available at http://localhost:3000.

 ## Running bakcned
``cd backend
``node index.js

Exploring the App
Open your web browser and navigate to http://localhost:3000 to explore the MERN Food Order App.

## Functionality
Sign-In Page
The sign-in page allows users to create an account by providing their email address and password. Upon successful sign-up, users will be redirected to the login page to access their account.

## Login Page
Users can log in to their existing account by providing their email address and password. Upon successful login, users will gain access to their account features such as viewing orders, managing the cart, and exploring the food menu.

## My Orders
In the "My Orders" section, users can view their order history, including details such as order date, items ordered, total amount, and order status.

## Cart
The cart functionality allows users to add items to their cart while browsing the food menu. Users can manage their cart by adding, removing, or updating the quantity of items. The cart also displays the total amount of the order.

## Food Menu
The food menu is where users can explore various food items available for ordering. Each item is listed with its name, description, price, and an option to add it to the cart.

## Technologies Used
The MERN Food Order App is built using the following technologies:

MongoDB: Database for storing user information, orders, and food items.
Express.js: Backend framework for handling HTTP requests and routing.
React.js: Frontend library for building user interfaces.
Node.js: JavaScript runtime environment for executing server-side code.
JWT (JSON Web Tokens): For user authentication and authorization.
Bootstrap: Frontend framework for responsive design and styling.
Contributing
Contributions to the MERN Food Order App are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
Special thanks to the developers of MongoDB, Express.js, React.js, and Node.js for providing the tools and frameworks necessary to build this application.
Thanks to the open-source community for their contributions to the libraries and packages used in this project.
