# 🚀 @anillakhlan/scaffy

A powerful Node.js CLI tool to instantly scaffold scalable, modular, and TypeScript-ready Express applications using clean architecture principles.

---

![npm](https://img.shields.io/npm/v/@anillakhlan/scaffy)
![license](https://img.shields.io/npm/l/@anillakhlan/scaffy)
![node](https://img.shields.io/node/v/@anillakhlan/scaffy)
![issues](https://img.shields.io/github/issues/anillakhlan/scaffy)

---

## ✨ Features

- ✅ Zero-config CLI for scaffolding Express-based backends
- ⚙️ Built-in TypeScript & ESM support
- 📁 Clean and scalable folder structure
- 🧱 Modular structure with controller-service-model separation
- ✅ Auto-generated boilerplate for:
  - Middleware
  - Routes
  - Role/User/Auth modules
  - Swagger setup
  - RBAC & Auth logic
- 🧪 Integrated error and response utils
- 🧹 Linting ready (ESLint + Prettier)
- 🔐 JWT-based Auth with Role-based Access Control
- 🧰 Custom interface-driven architecture for flexibility
- 🧪 `lib/` and `src/` folders to extend and customize the CLI

---

## 📦 Installation

```bash
npm install -g @anillakhlan/scaffy
```


## 🚀 Usage

```bash
scaffy create <project-name>
```

#### Then follow the CLI prompts to generate your project.


## 🗂️ Generated Project Structure
```bash
<project-name>/
├── dist/                       # Compiled files (auto-generated)
├── config/
│   ├── bootstrap.js            # App bootstrapping logic
│   ├── db.js                   # DB configuration
│   ├── logger.js               # Logger setup
│   └── swagger.js             # Swagger integration
├── constants/                  # App-wide constants
├── interfaces/                 # Reusable TS interfaces
├── middlewares/               # All Express middlewares
├── modules/
│   ├── auth/                   # Auth module
│   ├── role/                   # Role module
│   ├── user/                   # User module
│   └── common/                 # Base model/service/controller/route
├── routes/
│   ├── v1/                     # API versioned routes
│   └── index.js                # Entry point for routes
├── utils/
│   ├── apiError.js             # Custom error classes
│   ├── apiResponse.js         # Standardized API responses
│   ├── customerError.js
│   ├── customerErrorHandler.js
│   └── errors/                 # Custom error subclasses (BadRequest, Conflict, etc.)
├── server.js                   # Entry point
└── app.js                      # Application wrapper
```

## 🔧 Commands

```
scaffy create <project-name>      # Scaffold a new project
scaffy --help                     # Show help
scaffy --version                  # Show version
```


## 🔍 Under the Hood

CLI Core
	•	bin/index.js – CLI entry point
	•	bin/commands.js – CLI command parser

Scaffolding Logic
	•	lib/generate.js – Project generation logic
	•	templates/ – Pre-configured app template with clean architecture

Developer Tools
	•	eslint.config.mjs – ESLint base config
	•	src/ – Extend or write your own features to enhance scaffy


##  🧠 Philosophy

Scaffy is built to solve a common backend development problem: repetitive setup. It’s opinionated yet flexible, providing a robust foundation to build enterprise-level applications faster without sacrificing structure or scalability.

## 🛠️ Tech Stack
	•	Node.js
	•	Express
	•	TypeScript (compiled to JS)
	•	JWT
	•	Swagger
	•	ESLint
	•	ESM Modules


## 📌 Future Roadmap
	•	Custom templates support
	•	Frontend framework scaffolding (React, Next)
	•	Database scaffolding (PostgreSQL/MongoDB integration)
	•	Plugin system for add-ons
	•	Project settings config file (YAML/JSON)


## 🤝 Contributing
	1.	Fork the repository
	2.	Create your branch: git checkout -b feature-name
	3.	Commit your changes: git commit -m "feat: added X"
	4.	Push to the branch: git push origin feature-name
	5.	Open a pull request

## 📜 License

This project is licensed under the MIT License.


## 📣 Author

Anil Lakhlan
- GitHub: [your-github-username](https://github.com/anillakhlan21)
- LinkedIn: [your-name](https://www.linkedin.com/in/anilkumar2107)


## 🙌 Acknowledgements

Thanks to all the developers and open-source tools that inspired Scaffy. Special thanks to the Node.js and Express communities.

### ⚡ If you like this package, give it a ⭐ on GitHub and share it with other devs!


