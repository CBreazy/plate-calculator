# Barbell Plate Calculator

A sleek, modern web application that helps weightlifters quickly calculate which plates to load on each side of a barbell to achieve their target weight. Built with React and TypeScript, featuring a beautiful, responsive design.

![Plate Calculator Preview](https://images.unsplash.com/photo-1526401485004-46910ecc8e51?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

## Features

- 🏋️‍♂️ Calculate plates needed for standard Olympic barbells
- 🎯 Intuitive increment/decrement controls
- ⌨️ Direct weight input - type your target weight directly
- 🔄 Adjustable barbell weight - customize for different bars
- 💪 Support for standard weight plates (45, 35, 25, 10, 5, 2.5 lbs)
- 🎨 Modern, dark-themed UI with smooth gradients
- 📱 Fully responsive design
- ✨ Real-time calculation updates
- 🔒 Smart validation to prevent invalid weight combinations

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Linting:** ESLint
- **Development Environment:** Node.js

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd barbell-plate-calculator
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

4. Open your browser and navigate to the local server URL provided by Vite (typically `http://localhost:5173`)

## Usage Guide

### Setting Total Weight
- Use the + and - buttons to adjust in 5lb increments
- Click the weight number to type a specific value
- Press Enter or click outside to confirm

### Adjusting Barbell Weight
- Click the barbell weight value to edit
- Enter your custom barbell weight
- Press Enter or click outside to confirm
- The calculator automatically ensures total weight stays above barbell weight

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint to check code quality

## Project Structure

```
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── public/              # Static assets
├── index.html          # HTML entry point
└── package.json        # Project dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch:
    ```sh
    git checkout -b feature/amazing-feature
    ```
3. Commit your changes:
    ```sh
    git commit -m 'Add some amazing feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature/amazing-feature
    ```
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Icons provided by [Lucide](https://lucide.dev/)
- Styling powered by [Tailwind CSS](https://tailwindcss.com/)
- **Special Thanks** to Chris Bemis and Steve 'Gonzo" Gonzalez for their contributions to feature development.