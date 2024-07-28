# BizGenius Project

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup and Installation](#setup-and-installation)
5. [Usage](#usage)
6. [Contributing](#contributing)

## Project Overview

The **BizGenius Project** is a web application designed to help users manage and display business information. it also enable users to generate pdf printing for their business information. Users can create, edit, delete, and view details of their businesses. Additionally, this application allow users to sign up, log in, create profile, and can update their profiles, including their name, gender, phone number, and profile picture, which are stored and displayed exclusively to the account owner. The dashboard displays the newest businesses in a card grid. The page allows users to create new businesses, view businesses, and log out.

You can view the live project [here](https://feranmygit.github.io/BizGen/).

The project includes functionality for:
- Creating and managing business entries.
- Viewing business details on a separate page.
- Truncating long usernames for a cleaner UI.
- Toggling dropdown menus and underlays for better UX.
- Searching businesses by name.
- Updating user profile details, with information stored in `localStorage`.
- Generating PDF reports of business entries.

## Features

- **Business Management:** Create, edit, delete, and view business details.
- **Profile Management:** Update user profile information and profile picture.
- **Search Functionality:** Search for businesses by name.
- **Responsive Design:** Mobile and desktop friendly layout.
- **User-Specific Data:** Data is stored in `localStorage` and is user-specific.
- **PDF Generation:** Generate a PDF report of created business entries.

## Technologies Used

This project is built using the following technologies:

- **HTML:** Structure of the web application.
- **CSS:** Styling for the web application to ensure a responsive and visually appealing design.
- **JavaScript:** Core functionality, including:
  - Handling business and profile CRUD operations.
  - Managing data in `localStorage`.
  - Implementing search and filtering capabilities.
  - Toggling dropdown menus and underlays.
  - Generating PDF reports of business entries.

## Setup and Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/feranmygit/BizGen.git
    ```

2. **Navigate to the project directory:**
    ```sh
    cd BizGen
    ```

3. **Open `landingPage.html` in your preferred browser:**
    ```sh
    open landingPage.html
    ```

No additional dependencies are required as this project is built using JavaScript, HTML, and CSS.

## Usage

1. **User Registration and Login:**
   - Register a new account or login using existing credentials.

2. **Business Management:**
   - Create a new business entry by filling out the form and submitting.
   - View a list of businesses created.
   - Edit or delete existing businesses using the dropdown menu.

3. **Profile Management:**
   - Navigate to the profile page to update your personal information.
   - Change your profile picture, name, gender, and phone number.

4. **Search Functionality:**
   - Use the search bar to filter businesses by name.

5. **PDF Generation:**
   - Generate a PDF report of your business entries by clicking the "Print" or "Download" button available in the dropdown menu for each business.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please feel free to submit a pull request or open an issue.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.


