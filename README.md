# shuffler;

Shuffler is a web application designed to simplify the process of assigning items (tasks, responsibilities, etc.) to a group of people or categories (assignees). It features multiple shuffling strategies and generates shareable configurations directly through URL parameters, making it easy to share and reproduce specific assignments.

## Features

- **Dynamic Assignment Management**: Easily manage lists of assignees and the items to be assigned.
- **Multiple Shuffling Strategies**: Choose from various algorithms to distribute items:
  - **Round-Robin**: Distributes items sequentially among assignees.
  - **Random**: Assigns items to assignees in a purely random fashion.
  - **Greedy**: Aims to distribute items as evenly as possible among assignees.
  - **Sequential**: Assigns a contiguous sequence of items to each assignee.
- **Shareable Configurations**: All assignment configurations (assignees, items, and selected strategy) are stored in the URL query parameters, allowing for easy sharing and bookmarking of specific shuffle setups.

## Technologies Used

- [Next.js 14 (App Router)](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [nuqs](https://nuqs.r4ai.fyi/) for URL state management
- [lucide-react](https://lucide.dev/) for icons
- [Vitest](https://vitest.dev/) for unit testing

## Getting Started

First, install the project dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Running Tests

To run the unit tests for the project, use the following command:

```bash
pnpm test
```
