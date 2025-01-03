# Shippex

Shippex is a shipment tracker application designed to provide seamless tracking of shipments. Users can log in and retrieve shipment details using a tracking ID. This README file also includes developer-friendly instructions for setting up and running the application locally

## Project features

1. User Login: Secure login with valid credentials.
2. Shipment Tracking: Fetch real-time shipment details using a tracking ID.

## How to use
1. Login:
Open the application.
Enter your login credentials (username and password).
Click on the Login button.

2. Track a Shipment:
Once logged in, locate the Tracking ID field.
Enter your shipment's Tracking ID.
Click on the track button to view the shipment status and other details.

Note: The application automatically logs you out after 1 hour.

## Developer usage
1. Clone the Repository with git clone https://github.com/Rahmannugar/shippex.git
2. Install dependencies with npm run dev and run locally
3. Unzip the provided .zip file containing environment configuration files and place them in the project root directory.

Note: The url has authorization parameters so youll need to use the local nextjs route to bypass the cors error and sign in and fetch shipment details