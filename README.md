[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11326299&assignment_repo_type=AssignmentRepo)
</br></br></br>
# "Please note that this project is a work in progress and is still being actively worked on
![iod logo](https://x4w8f4y8.rocketcdn.me/wp-content/uploads/2020/05/iod_h_tp_white_c.png)
</br></br></br>
![iod_miniproject_2](https://i.ibb.co/GQrydxK/Screenshot-2023-06-07-at-8-41-59-PM.png)
</br></br></br>

<div align="center">

# *REACT*

</div>

</br>

> # Objective


### *Create a dynamic and interactive frontend Application that uses the core principles of React.*

<br>

## Design Steps:

1. Decide on what you work on
2. Write down your objectives in the file *objectives.md* , in the root directory of this repository.

- Optional: Draw a wireframe of your app
- Optional: List of [FREE APIs](https://docs.google.com/spreadsheets/d/15iDpjqyBkSse9wcN7vvQvORBvX8P_ivAjm-iKXp776Y/edit#gid=0) to integrate.

<br>

3. ## Build steps:

Follow the link to the Github Classroom repo and clone it to your local computer
(Inside the repo)

       1. `npx create-next-app@latest`
       2.  When asked..
              - to provide a name for your mini project: **Yes**, *(e.g. mini-project-2)*
              - Would you like to use TypeScript with this project ? **Yes**, **HIGHLY ENCOURAGED, not required*
              - Would you like to use ESLint with this project? **Yes**
              - Would you like to use Tailwind CSS with this project? **Optional*
              - Would you like to use `src/` directory with this project? **No**
              - Use App Router ? **Yes** **RECOMMENDED*
              - Would you like to customize the default import alias? **No**

       3. `cd mini-project-2` <sup><sub>(or whatever you named your project)</sub></sup>
       4. `npm install`
       5. `npm run dev`

5. Present your backend project to the class (Aim for a 5min presentation). The presentation date is in the 3rd of JULY, 2023.

<br>

<hr>

<br><br>

## Ideas to talk about in the presentation


<br/>

▪ What was your requirements gathering and design process? Was it useful/successful?
   ```md
  1. User registration and account: to provide whether you will require users to create accoutns to make purchases or provide a guest checkout option
 2. Secure payment gateway - integrating a secure and reliable payment gateway is essential to process online transactions securely - unsuccessful in implementing this due to time constraints however this is something I will continue to work on for this project. 
 3. Security measures - although this was not implemented for this project as the aim was to create a dynamic front-end, this is important to consider to prtct customer data and maintain a secure browsing experience. 
 4. Inventory management - althought this was not implemented for this project, this is something I would like to continue working on. The aim will be to manage the inventory effectively which will involve tracking stock levels, updating product availability and ensuring accurate info is displayed to customers. 
 5. Privacy and data collection 
   ```

</br>

▪ Give a high level overview of your application and its features.
 ```md
    Makeup Mirage is an ecommerce website that sells makeup products for women online. Its key features are:
  1. Account profile: The website allows individuals to create a personal account 
  2. Blog: the blog will contain an updated stream of blogposts, videos and photos and other content (such as events and groups) to keep users updated and informed. 
  3. Newsletter: Users can subscribe to the ecommerce newsletter. 
 ```


</br>

▪ How can the user interact with this app?
 ```md
      The user goes to the landing page where there is an autoslider of images and a navigation bar (the header) and a footer (with more links and a form to subscribe to the store's newsletter). The user can click on each link in the navbar and it will take them to a page (depending on the products they are looking for). The products from the API have been filtered according to product_type. The user can click on each product and can also navigate back to the homepage. 

   The user should be able to click on the icons in the navbar and add items to the shopping cart. They can also click the avatar and login or fill out a form. 
 ```

</br>

▪ Which specific methods from the React library have you utilized in your projects, and what are your experiences or insights regarding their usage and effectiveness?
 ```md
   Components
   Props 
   Hooks - useState and useEffect
```

</br>

▪ If you used Next.JS, could you please share your thoughts on the routing capabilities it offers? How does the routing functionality in Next.js compare to other frameworks or libraries you have worked with in terms of ease of use, flexibility, and any notable features?
 ```md
  Using the app router (which is the updated version) is much easier than using the pages router. With the app router, the pages automatically become a route. 
```

</br>

▪ What external tools/libraries have you used? How? Why?
*(eg. bootstrap/material ui/tailwind)*
 ```md
   React Bootstrap 
   Styled Components
   MDB - react-ui-kit
   react-js-pagination
   Fontawesome for icons
   Canva, Unsplash, Pixabay for stock images 
 ```

</br>

▪ How might you extend the features of your application in future?
 ```md
   I would like to add more interactive content to the blog section such as videos on how to put on makeup which will also contain advice on different products. 
   I would like to create a secure payment gateway and magnify the images of each card when they are clicked on along with the descriptions of the product allow users to submit feedback. 
   Have a virtual assistant that works so customers can have their queries responded to 24/7 
   I would like to add security mesures, have a way to manage inventory effectively, and update shipping and fulfillment.
 ```

 </br>

<div>
<sup>optional*</sup>
</div>

▪ Where does its data come from (external/internal APIs)?


 ```md
  The data came from an external API 'https://makeup-api.herokuapp.com/api/v1/products.json' however this API had to be modified as some of the products in this API had no images or the image URLs were broken. To counteract this I read through this document https://vercel.com/guides/loading-static-file-nextjs-api-route and followed the steps here. I created a file called apidata.json. Then I created a file called staticdata.js ie pages/api folder in my app folder - which created a serverless function that will load the json data from the file and return it as a response
 ```


▪ *If you used Typescript, how does TypeScript compare to JavaScript in terms of their features, benefits, and differences?


 ```md
One of the benefits of using TypeScript compared to JavaScript is that TypeScript can pick up errors and it will tell you whereas JS doesn't. 
 ```

</br></br></br></br></br>


