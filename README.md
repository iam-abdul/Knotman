# Knotman

Knotman is a no-code API testing tool designed to simplify API testing workflows. By allowing users to drag and drop their API contracts (Swagger definitions), Knotman transforms API endpoints into interactive nodes that can be connected to create comprehensive testing flows. 

With a focus on ease of use, Knotman helps you design, validate, and export test cases without writing a single line of code.

## Key Features

- **Drag-and-Drop API Contracts**: Import your Swagger API definitions to generate nodes for each API endpoint.
- **Interactive Graph Interface**: Arrange API nodes on a canvas and interconnect them to define testing flows.
- **Validation with Operator Nodes**: Use operator nodes to define validation rules, such as:
  - Equality (`=` / `!=`)
  - Existence (`exists` / `not exists`)
  - Inclusion (`in array` / `not in array`)
  - Data types (`is a number`, `is a char`)
  - Length checks (`length >=`, `length <=`, etc.)
- **Positive and Negative Flows**: Create both happy paths and error scenarios to thoroughly test your APIs.
- **Dynamic Input/Output Linking**: Connect operator inputs to outputs from previous API requests, enabling dynamic validation.
- **Test Case Export**: Export testing flows into Cypress or Selenium test cases for seamless integration into your CI/CD pipeline.

---

## Getting Started

### Prerequisites

To use Knotman, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (for development)
- [Docker](https://www.docker.com/) (optional, for deployment)
- A valid Swagger API definition

### Installation (coming soon)

Detailed setup instructions will be provided here once development begins.

---

## How It Works

1. **Import Swagger Definition**:
   - Drag and drop your Swagger JSON/YAML file into the app.
   - Knotman will automatically generate nodes for each API endpoint.

2. **Design Your Flow**:
   - Arrange API endpoint nodes on a canvas.
   - Connect them to define request sequences or interdependent workflows.

3. **Add Validations**:
   - Use operator nodes to define validation logic.
   - Link operator inputs to API outputs or other operator results.

4. **Export Test Cases**:
   - Convert your testing flow into Cypress or Selenium test cases for automation.

---

## Roadmap & Milestones

### Milestone 1: Basic Functionality (ETA: 31st Dec 2024)
- Drag-and-drop interface for Swagger file upload.
- Generate nodes for API endpoints.
- Interactive canvas to arrange and connect nodes.

### Milestone 2: Validation Operators (ETA: 31st Jan 2025)
- Implement operator nodes for basic validations like `=`, `!=`, and `exists`.
- Support input/output linking between API and operator nodes.

### Milestone 3: Export Features
- Export API testing flows to Cypress test cases.
- Add support for Selenium export.

### Milestone 5: Beta Release
- Polish the UI/UX.
- Launch a public beta.

### Milestone 6: Full Release 
- Finalize core features.
- Provide detailed documentation and tutorials.
- Ensure compatibility with popular CI/CD tools.

---

## Contributing

We welcome contributions from the community! Whether it’s fixing bugs, suggesting features, or improving documentation, your help is appreciated. Please check the [CONTRIBUTING.md](CONTRIBUTING.md) (coming soon) for guidelines.

---

## License

This project will be licensed under the [MIT License](LICENSE) (to be finalized).

---

## Stay Updated

Follow this repository to get the latest updates, or reach out via:

- **Email**: mohammadabdulrehman739@gmail.com

---

Let’s simplify API testing together with Knotman!
