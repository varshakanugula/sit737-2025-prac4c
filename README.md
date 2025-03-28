# Calculator Microservice

## **Overview**
This project is a **Node.js-based calculator microservice** that supports **basic and advanced arithmetic operations** via API endpoints.  
It demonstrates **RESTful API development, microservices architecture, and error handling**.

## **Features**
✅ Supports Addition, Subtraction, Multiplication, and Division  
✅ Includes advanced operations: **Exponentiation, Square Root, and Modulo**  
✅ Implements **error handling** for missing or invalid inputs  

---

## **Installation & Setup**
### **1. Clone the Repository**
```sh
git clone https://github.com/yourusername/sit737-2025-prac4c.git
cd sit737-2025-prac4c

### **2. Install the Dependencies**
** Before running the project, you need to install the necessary dependencies. The project is built with ## Node.js, so you’ll need npm (Node Package Manager) to manage these dependencies. 
** Run the following command to install all required packages:
npm install
* This will install all dependencies listed in the package.json file. These dependencies include Express.js (for routing), among others.

### **3. Running the Microservice**
** Once the dependencies are installed, you can run the application on your local machine. To start the server, use the following command:
node server.js

** The microservice will now be running locally on **http://localhost:3000** by default.

### **4. Accessing the API**
** Once the server is running, you can test the API endpoints using a web browser, Postman, or curl commands:

Open a web browser and visit the following URLs for different operations:

#Addition: http://localhost:3000/add?a=5&b=3
#Subtraction: http://localhost:3000/subtract?a=10&b=4
#Multiplication: http://localhost:3000/multiply?a=6&b=7
#Division: http://localhost:3000/divide?a=10&b=2
#Exponentiation: http://localhost:3000/power?a=2&b=3
#Square Root: http://localhost:3000/sqrt?a=25
#Modulo: http://localhost:3000/mod?a=10&b=3

* Postman: 
It Creates requests for each endpoint, specifying the query parameters a and b as needed. 
Send GET requests to the appropriate URL.


### **5. Trouble shooting**
** Ensure Node.js is installed: Make sure you have Node.js installed by running node -v in the terminal. If it's not installed, download it from here.

** Check for missing dependencies: If you see errors about missing modules, run npm install again to ensure that all dependencies are installed properly.

** Server not starting: If the server doesn't start, ensure that port 3000 is not already in use. You can change the port by modifying the value of the PORT variable in server.js.

### **6. Pushing changes to Git**