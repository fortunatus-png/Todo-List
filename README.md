# Todo List App

A simple and intuitive todo list application built with vanilla JavaScript, CSS, and HTML. This project demonstrates core web development concepts including DOM manipulation, event handling, and client-side state management.

> **Human-Written Code**  
> This project was independently developed, using AI only as tool for troubleshooting and learning.  
> Hence this project demonstrates the acquired basic programming skills and an authentic learning progress.

## Table of Contents

- [Todo List App](#todo-list-app)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Setup \& Installation](#setup--installation)
    - [Prerequisites](#prerequisites)
    - [Installation Steps](#installation-steps)
  - [Project Structure](#project-structure)
  - [Screenshots](#screenshots)
  - [Learning Outcomes](#learning-outcomes)
    - [Styling](#styling)
    - [Logic \& Programming](#logic--programming)
    - [Testing](#testing)
  - [Timeline](#timeline)
    - [Development Tasks](#development-tasks)

## Description

This Todo List app is a hands-on learning project designed to practice fundamental JavaScript DOM manipulation and event-driven programming. The application allows users to manage their daily tasks with a clean, intuitive interface.

The project follows a structured, top-down code organization approach, emphasizing well-defined function naming, semantic HTML, and programmatic element creation.

## Features

- ✅ **Add Tasks** - Create new todo items with ease
- ❌ **Delete Tasks** - Remove individual tasks from your list
- 🎯 **Toggle Task Status** - Mark tasks as done/incomplete
- 🗑️ **Clear All** - Remove all tasks at once
- 📱 **Responsive Design** - Flexbox-based layout for various screen sizes
- ⚡ **Vanilla JavaScript** - No dependencies, pure JavaScript implementation

## Tech Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Styling** | CSS Flexbox |
| **Testing** | Playwright |
| **Server** | Serve (for testing/development) |

## Setup & Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   or use Serve for testing:
   ```bash
   npx serve
   ```

3. **Open in browser:**
   Navigate to `http://localhost:3000` (or the port shown in your terminal)


## Project Structure

```
Todo-List/
├── index.html           # Main HTML file
├── styles.css           # Styling with Flexbox
├── script.js            # JavaScript logic & DOM manipulation
├── tests/               # End-to-end tests
├── docs/
│   ├── plan.md          # Project planning & timeline
│   └── learnings.md     # Key learning outcomes
└── README.md            # This file
```

## Screenshots

- **Main Interface:** (./images/main-interface.png)
- **Completed Tasks:** (./images/completed-tasks.png)
- **Mobile View:** (./images/mobile-view.png)

## Learning Outcomes

This project provided valuable hands-on experience with:

### Styling
- **Flexbox Mastery:** Deep understanding of flex properties including `flex-shrink`
- **Responsive Design:** Creating layouts that adapt to different screen sizes

### Logic & Programming
- **Descriptive Naming:** Writing functions with clear, meaningful names
- **DOM Manipulation:** Creating HTML elements programmatically using `createElement()`
- **Event Handling:** Using `target.closest()` for event delegation
- **Code Structure:** Organizing code top-down approach:
  - Variables & constants declarations
  - Function definitions
  - Parent/orchestrating functions
  - Child/helper functions
  - Grouped function calls in logical order

### Testing
- **Playwright Setup:** Configuring and running end-to-end tests with Playwright and Serve

See [docs/learnings.md](./docs/learnings.md) for detailed learning notes.

## Timeline

The project was developed according to the following timeline:

| Date | Milestone |
|------|-----------|
| 26.02.2026 | Project started |
| 27.02.2026 | Layout implemented with CSS Flexbox |
| 28.02 - 06.03.2026 | JavaScript logic implemented |
| 07.03.2026 | Project finalized |

### Development Tasks

**Phase 1 (26-27.02):**
- [Style with CSS flexbox](https://github.com/fortunatus-png/Todo-List/pull/1)

**Phase 2 (28.02-07.03):**
- [Add new tasks](https://github.com/fortunatus-png/Todo-List/pull/9)
- [Delete task](https://github.com/fortunatus-png/Todo-List/pull/11)
- [Clear all tasks](https://github.com/fortunatus-png/Todo-List/pull/12)
- [Toggle task done](https://github.com/fortunatus-png/Todo-List/pull/10)

See [docs/plan.md](./docs/plan.md) for the detailed project plan.
