Project ReadMe: React Apollo GraphQL Country Explorer
Overview
This React application leverages Apollo GraphQL to fetch and display a list of countries. Users can explore a comprehensive
list and access detailed information about any chosen country. The project incorporates TypeScript for type safety and uses
Yarn as the package manager. React Router DOM is also integrated, enabling the use of useNavigate for seamless navigation when clicking on a country to retrieve its details.

Struggles Encountered
During the development of this application, some challenges were faced:

Query Issues: There were difficulties with GraphQL queries, including incorrect syntax while fetching data from the schema.
URI Placement: Properly placing the URI in the right component was a challenge.
Repository Management: Multiple repositories were created and had to be restarted due to installation errors.
There were also issues using a personal GitHub account alongside work VS Code, necessitating collaboration invites to push code to GitHub.
Features
Country Cards: Utilized CSS and useEffect to create visually appealing country cards to display each country on load.
Country Details Card: Designed a detailed country card using CSS to showcase all the information about a selected country.
Loading Animation: Implemented a loading state with CSS animation to indicate when components are loading.
Prerequisites
Node.js
Yarn package manager
Installation
Clone the Repository

bash
Copy code
git clone [repository-url]
Navigate to the Directory

bash
Copy code
cd [repository-name]
Install Dependencies

Copy code
yarn install
Running the Application
Start the Server

sql
Copy code
yarn start
This runs the app in development mode. Open http://localhost:3000 in your browser to view it.

Build for Production

Copy code
yarn build
This builds the app for production to the build folder.

Technologies Used
React: A JavaScript library for building user interfaces.
TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
Apollo GraphQL: A comprehensive GraphQL client for data fetching, caching, and UI updates.
GraphQL: A query language for APIs.
CSS: Used for creating visually appealing country cards and loading animations.
File Structure
/src: Source files.
/components: React components.
/queries: GraphQL queries.
/types: TypeScript type definitions.
/public: Public files like HTML template.
package.json: Project metadata and dependencies.
Contributing
Contributions to enhance the application are welcome. Follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -am 'Add some feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
License
This project is licensed under the MIT License.
