# Product Management Frontend

This is the frontend of a full-stack product management application. It is built with **React** and styled using **Tailwind CSS** to provide an attractive, intuitive user interface. The app allows users to view, add, edit, delete, and manage product availability by connecting to a REST API backend deployed in another domain.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Deployment](#deployment)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Features

- **User-Friendly Interface**: Built with **React** and **Tailwind CSS** for a clean and responsive design.
- **CRUD Functionality**: Full Create, Read, Update, Delete (CRUD) functionality for managing products visually.
- **API Integration**: Communicates with a REST API backend to handle product data efficiently.

## Tech Stack

- **React** - JavaScript library for building user interfaces.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **Vercel** - Platform used for deploying the frontend.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/product-management-frontend.git
   cd product-management-frontend
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Environment Variables:** Create a .env file in the root directory and add the following:
   ```plaintext
   VITE_API_URL=https://rest-api-product-management.onrender.com
   ```
4. **Run the App:**
   ```bash
   npm run dev
   ```
The app will be available at `http://localhost:5173` by default.
   
## Deployment
The frontend is deployed on Vercel for production, ensuring scalability and high availability.

## Usage

- **Product Management:** Users can create, view, edit, and delete products.
- **Availability Toggle:** A patch endpoint allows toggling product availability, making it easy to manage stock visibility.

## Future Enhancements

- **User Authentication:** Add user accounts to secure product management.
- **Enhanced Filtering:** Add filters and search functionality to streamline product views.
- **Improved UX/UI:** Expand styles and add animations for a smoother user experience.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note:** For backend setup and API documentation, refer to the [REST API repository](https://github.com/Thomas465xd/rest_api-product-management).

---

**Made with ♥️ Thomas Schrödinger**
