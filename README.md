### Configuration under the src directory

components/ - Presentational components
  Place the UI component (.tsx) that defines the "look and feel".
  This component does not have any logic, but purely draws the given props.
  Components that have some logic (data fetching with hooks, state management) should be placed in the containers directory instead.
  This directory can be further hierarchized by category.
containers/ - Container components
  Place components (.tsx) that define "behavior".
  It contains the logic for fetching data through hook functions, saving and changing states, etc., and ultimately passes the data to be displayed as props objects in other components.
  Under this directory, the components can be further hierarchized by category
hooks/ - Custom hooks
  Place custom React hooks (e.g. useAuth.ts).
  The application logic should not be written in the component, but implemented as hook functions as much as possible.
  Basically, hook functions are called from components under the comtainers directory or from other hook functions.
pages/ - Page components
  Place Next.js page components (.tsx), _app.tsx and _document.tsx.
  The files (xxx.tsx) are loaded according to the URL path when the website is accessed.
  This corresponds to Templates (Pages) in Atomic Design.
types/ - Type definitions
  This is where TypeScript type definitions shared by multiple files are placed.
  Types exported from index.ts are imported as import { UserInfo } from '. /types'.
utils/ - Other utilities
  Place utilities (configs, data fetch functions, etc.) that do not fall into any of the above categories.

