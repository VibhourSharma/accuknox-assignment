![Screenshot 2024-08-21 182339](https://github.com/user-attachments/assets/b1440eaf-1395-4dcf-8954-d7df79b23ea4)

# Dynamic Dashboard with Categories and Widgets

This is a dynamic dashboard built using React, Redux, Recharts, and Tailwind CSS, designed to manage categories and widgets. Users can create new categories, add widgets to these categories, search widgets, and control their visibility on the dashboard. The project is deployed on Netlify.

## Features

- **Dynamic Categories**: Users can create new categories.
- **Dynamic Widgets**: Users can add widgets with customizable names and content under each category.
- **Widget Search**: A search bar to filter and find specific widgets.
- **Hide/Show Widgets**: Users can hide or show widgets using a checkbox list.
- **Widget and Category Deletion**: Both categories and widgets can be deleted dynamically.

## Usage Instructions

**Adding a Category:**
Click the Create New Category button on the dashboard.
Enter the name of the category in the input field and click Add.
The new category will appear on the dashboard.

**Adding a Widget:**
Inside any category, click the +Add Widget button.
Enter the widget name and text content in the form provided.
The widget will be added to the selected category.

**Searching for a Widget:**
Use the search bar at the top of the dashboard to search for widgets by name.
Results will be filtered based on your input.

**Hiding/Showing Widgets:**
Click the Categories button in the header to see all the categories and their widgets.
Use the checkboxes next to each widget to toggle its visibility on the dashboard.
Deleting Categories and Widgets
To delete a category, click the Delete button next to the category.
To delete a widget within a category, click the Delete button next to the widget.
  
## Tech Stack

- **React**: Frontend library used for building user interfaces.
- **Redux**: State management for handling categories, widgets, and interactions.
- **Recharts**: For displaying data visualization in widgets.
- **Tailwind CSS**: Utility-first CSS framework for responsive and customizable UI.
- **Netlify**: Used for deployment.
