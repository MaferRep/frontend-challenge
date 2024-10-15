

# FrontendChallenge

This front-end application was developed in Angular, with styling achieved using pure CSS to showcase fundamental web technologies. The design is fully responsive, adapting seamlessly to mobile, tablet, and desktop screens. Special attention was given to maintaining consistent card proportions across all devices to ensure a uniform user experience. 

## Live demo 
https://maferrep.github.io/frontend-challenge/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


# Project Structure and Components
This Angular project includes a variety of components to structure the frontend:

## app.component.html:

This is the main template, arranging key components:

### `<app-navbar>`

The NavbarComponent provides a responsive navigation bar with a brand logo, menu toggle, and navigation controls. It includes:

- Menu Toggle: Opens and closes the mobile menu (menuOpen state).
  
- Sections:

  - Brand: Displays a logo.
  - Links: Items like "ITEMS" and "ACCOUNTS" for medium and small screens.
  - Controls: Includes currency selector, cart, and sign-in options.

This component allows easy access to various sections, with desktop and mobile views managed through CSS classes and menuOpen state.

### `<app-filter-navbar>`

 Secondary navigation for filtering content. The toolbar component includes:

- Title: Displays a header (h1) with the text "Condimentum consectetur."
- Filter Buttons: Three buttons allow users to filter by game, price, and item type, each with an icon and a dropdown arrow.
- Search: Includes a search input with an icon for keyword filtering.

This layout provides filtering and search functionalities with a user-friendly interface, leveraging icons for easy navigation and interaction.

### `<app-card>`

Repeated component for displaying card items within a grid. The CardComponent displays product information with dynamic content and interactive elements. It includes:

Properties:

- counterValue: Tracks quantity, adjustable with increment/decrement buttons.
- randomImageUrl & randomItemName: Display a randomly selected product image and name.

Methods:

- randomizeItem(): Chooses a random product on load.
- increment() & decrement(): Adjust counterValue.
- isIncrementDisabled() & isDecrementDisabled(): Manage button states.

The template includes product details, a price section, and buttons for details and adding to the cart.

### `<app-paginator>`

Component for pagination controls. The PaginatorComponent provides pagination controls with customizable page navigation. It includes:

- Input: totalPages to define the total pages.
- Properties: currentPage and pagesToShow for current page tracking and visible page range.
- Methods: goToPage, prevPage, and nextPage to navigate; updatePagesToShow for adjusting displayed pages.

The template uses navigation buttons and spans for page numbers, with ellipses ('...') to indicate gaps. Commented code in the template allows for dynamic data integration.

### `<app-footer>`

The FooterComponent displays payment methods, social links, contact info, and legal sections, along with a Trustpilot rating. Key features include:

- Dynamic Star Rating: Uses generateStars() to display a rating with full, partial, and empty stars, rendered based on a 4.4 rating.
- Platform Check: Ensures generateStars() only runs in the browser using isPlatformBrowser.
- Template Layout: Organizes payment methods, social links, and sections for "Chicks Gold," "Support," and "Legal," with branding and copyright at the bottom.

This component integrates dynamic ratings with static information in a responsive layout.

### `<app-background>`

The BackgroundComponent creates an animated background with waves and adjusts their opacity based on scroll position. Key details:

- Scroll Listener: Uses @HostListener to track window scroll events.
- Opacity Adjustment: Dynamically changes the background opacity (--grad-opacity) based on scroll position, creating a fade effect.
- Template Layout: Contains multiple .wave divs for layered animation.
  
This component enhances the visual effect by creating a responsive, scroll-sensitive animated background.

### `app.component.ts`

Imports Angular’s `RouterOutlet` and project components.
Uses the `standalone` option to make the component independent.
Sets the template and styles for the root component.
This setup modularizes the project, organizing key UI elements within reusable components.

### `index.ts`

Exports all components, allowing them to be easily imported elsewhere.







