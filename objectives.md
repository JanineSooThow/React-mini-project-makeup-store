MINI-PROJECT 2 - Project objectives

<!-- write your project objectives here -->
1. To create a dynamic and interactive frontend Application that uses the core principles of React by using the external API https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian

Here are the main principles of React:

Component-Based Architecture: React follows a component-based approach, where the user interface is broken down into reusable and independent components. Each component manages its own state and can be composed together to build complex UIs. This promotes modularity, reusability, and maintainability of code.

Virtual DOM: React utilizes a virtual representation of the Document Object Model (DOM) called the Virtual DOM. Changes to the UI are first made to the Virtual DOM, and then React efficiently updates the actual DOM with only the necessary changes. This minimizes expensive direct DOM manipulations, resulting in improved performance.

Unidirectional Data Flow: React enforces a unidirectional data flow. Data flows from parent components to child components through properties (props). Child components cannot directly modify the props but can notify the parent component of any necessary changes through callback functions. This ensures predictable and maintainable data flow throughout the application.

JSX: JSX is a syntax extension used in React that allows you to write HTML-like code within JavaScript. It enables you to define the structure and appearance of components in a declarative and intuitive way. JSX gets transpiled into JavaScript function calls that create and update the React elements.

Reconciliation: React efficiently updates the UI by performing a process called reconciliation. When state or props change, React compares the previous and new states of the components and determines the minimum set of changes required to update the UI. This reconciliation process optimizes performance by minimizing unnecessary updates.

State Management: React components can have local state that can be managed and updated independently within each component. State management libraries like Redux or React's built-in Context API can be used to manage global or shared state across multiple components, enabling centralized and predictable state management.

Lifecycle Methods: React provides a set of lifecycle methods that allow you to hook into different stages of a component's life, such as component creation, updates, and removal. These methods enable you to perform actions like initializing state, making API calls, and cleaning up resources.
