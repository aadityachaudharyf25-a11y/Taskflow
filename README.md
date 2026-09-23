# TaskFlow – Personal Task Manager

TaskFlow is a responsive React-based personal task management application designed to help users create, organize, track, edit, and complete their daily tasks. The application uses React functional components, React Hooks, reusable components, and browser localStorage to provide a simple and responsive task management experience.

## Features

* Add new tasks
* Edit existing tasks
* Delete tasks
* Mark tasks as completed
* Filter tasks by All, Active, and Completed
* Organize tasks using categories
* Display total, remaining, and completed task statistics
* Save tasks using browser localStorage
* Restore saved tasks after page refresh
* Dark/light mode
* Responsive design for desktop and mobile devices
* Controlled form inputs
* Conditional rendering
* Reusable React components
* Interactive task management using React state

## Technologies Used

* React.js
* JavaScript
* HTML5
* CSS3
* Vite
* React Hooks

  * useState
  * useEffect
* Browser localStorage

## Project Structure

```text
TaskFlow/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskStats.jsx
│   │   ├── FilterBar.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskItem.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── screenshots/
│   ├── dashboard.png
│   ├── tasks.png
│   └── dark-mode.png
├── index.html
├── package.json
└── README.md
```

## Installation and Setup

### 1. Clone or download the project

Clone the repository or download the project files and open the project folder in a terminal.

### 2. Install dependencies

Run:

```bash
npm install
```

### 3. Start the development server

Run:

```bash
npm run dev
```

Vite will start the development server and provide a local URL, normally using a localhost address. Open the URL shown in the terminal in your web browser.

### 4. Build the project

To create a production build, run:

```bash
npm run build
```

## How to Use

1. Enter a task title in the task form.
2. Select a category for the task.
3. Click **+ Add Task**.
4. Use the check button to mark a task as completed.
5. Click **Edit** to change the task title or category.
6. Click **Delete** to remove a task.
7. Use the **All**, **Active**, and **Completed** filters to view specific tasks.
8. Use the **Dark/Light** button to change the application theme.
9. Refresh the page to verify that saved tasks remain available.

## Data Persistence

TaskFlow uses the browser's `localStorage` to save task information. Tasks are automatically stored whenever the task data changes and are loaded again when the application starts.

This allows tasks to remain available after refreshing the browser without requiring a backend database or user account.

## React Concepts Demonstrated

This project demonstrates several important React concepts:

* Functional React components
* Component reusability
* Props and callback functions
* `useState` for interactive application state
* `useEffect` for localStorage synchronization
* Controlled form inputs
* Event handling
* Conditional rendering
* Array `.map()` for rendering task lists
* Unique keys for list items
* Array filtering for task filters
* Responsive CSS design

## Screenshots

### Main Dashboard

![TaskFlow Dashboard](screenshots/dashboard.png)

### Task Management

![Task Management](screenshots/tasks.png)

### Dark Mode

![TaskFlow Dark Mode](screenshots/dark-mode.png)

## Known Limitations

* Tasks are stored only in the user's browser using localStorage.
* There is no user account or cloud synchronization.
* Tasks cannot currently be shared between different devices.
* Data may be lost if the browser's localStorage is manually cleared.
* There are no push notifications or reminder services.

## Future Improvements

Possible future improvements include:

* Drag-and-drop task reordering
* Due dates and reminders
* Cloud synchronization
* User authentication
* More advanced task categories
* Notifications
* Task search functionality
* Multi-device synchronization

## Testing

The application should be tested by running:

```bash
npm install
npm run dev
```

The following functionality should be checked:

* Adding tasks
* Editing tasks
* Deleting tasks
* Completing and uncompleting tasks
* Filtering tasks
* Category selection
* Task statistics
* localStorage persistence after refresh
* Dark/light mode
* Responsive mobile layout

A production build can also be checked using:

```bash
npm run build
```

## Author

**Aditya Chaudhary**

TaskFlow – Personal Task Manager

