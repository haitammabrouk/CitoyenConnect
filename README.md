# Citoyen Connect

Citoyen Connect is a web application designed to streamline administrative services between districts (arrondissements) and citizens. It leverages modern web technologies such as Spring Boot, Spring MVC, Spring Data, React.js, and Tailwind CSS to provide a user-friendly and efficient platform.

## Features

### 1. Digitalization of Documents
Citoyen Connect facilitates the digitalization of documents related to egalisation and conformations, ensuring that they are in compliance with legal requirements. Citizens can upload their documents securely through the platform, eliminating the need for physical paperwork.

### 2. Document Conformity Verification
The application performs automatic verification of document conformity based on predefined standards. This helps in reducing errors and ensures that documents meet the necessary criteria before proceeding further.

### 3. Confidential Document Generation
Citoyen Connect generates confidential documents that require the signature of the district administrator. These documents are securely handled within the platform, maintaining privacy and confidentiality.

### 4. District Administration Interface
Administrators of districts (arrondissements) have access to a dedicated interface where they can review and sign confidential documents. This interface provides tools for efficient document management and ensures smooth administrative processes.

## Technologies Used

- **Spring Boot**: Provides the backend framework for building robust and scalable Java applications.
- **Spring MVC**: Facilitates the development of web applications based on the Model-View-Controller architecture.
- **Spring Data**: Simplifies data access and persistence by providing a consistent data access layer.
- **React.js**: A JavaScript library for building user interfaces, enabling dynamic and interactive frontend experiences.
- **Tailwind CSS**: A utility-first CSS framework that helps in quickly building custom designs with minimal effort.

## Getting Started

To run Citoyen Connect locally, follow these steps:

1. Clone the repository:
git clone https://github.com/haitammabrouk/CitoyenConnect

2. Navigate to the project directory:
cd CitoyenConnect

3. Install dependencies for both backend : 'mvn install' and frontend: 'npm install'

4. Configure database settings in `application.properties` file located in the `backend/src/main/resources` directory.

5. Run the backend server:
mvn spring-boot:run

6. Run the frontend development server:
npm start


7. Access the application in your web browser 

## Contributors
- Mabrouk Haitam
