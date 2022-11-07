# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory.

Project:- Implement an API fetch of your Gifhub portfolio,show a page with a list of all your repositories on Github(the page should implement pagination for the repolist),and create another page showing data for a single repo clicked from list of repos using nested routes while using all the neccessary tools in react. Implement the proper SEO,Error Boundary(show a page to test the error boundary) and 404 pages. Good UI and design are important.


Walk through:- Going from bottom to top,
   <li>Create a 404 page which is called using the * as it path for routing</li>
   <li>Create a Error Boundary component, that catches the error and display it unto the screen, wrapp the whole component in the Error Boundary and create a fallback component, which is displayed when an error occurs</li>
   <li>install <b>React Helmet</b> from proper SEO, content description and title manipulation for each page.</li>
   <li>Create a component that contains list of repositories, this data would be gotten through the use of useEffect hook, which enable it mount everytime it reload. Assign the fetched data to a state value called repos</li>
   <li>Create another component that get the data for each repository clicked on, I made use of <b>useParams</b> to pass data forward and use it to get the name of each data clicked on.</li>
   <li>