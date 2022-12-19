![logo](https://user-images.githubusercontent.com/44912347/202296600-c5f247d6-9616-49db-88f0-38433429d781.jpg)

# Wikiverse
You are a creative content developer that needs a better system for publishing articles. You stumble across a great example called [Wikipedia](https://en.wikipedia.org/wiki/React_(JavaScript_library)) and decide to implement something like it, with a twist: You’ll build it as a Single Page Application, using React! ⚛️

We have already learned back end servers, so we get to start with a pre-built db connection via Sequelize, including express routes serving up the data via different REST verbs (GET, POST, PUT, and DELETE).

We have 3 database models:
- `Page`
- `User`
- `Tag`

## Getting Started
After forking and cloning down your repository, run the following:

1. `npm install`
2. `npm run seed`
3. `npm run server-dev`
4. In a seperate terminal, `npm run client-dev`

## Single Page View

![A basic list of details for a post](https://user-images.githubusercontent.com/44912347/202553319-5c3cd524-64ab-4524-a64c-fc2be96cf209.png)

Once you’ve got the app started up, it’s time to make your first edit and add support for the single page view! Here are a few requirements:
1. When a user clicks a single article in the list, the details show the articles: 
    - Title
    - Author
    - Content
    - Tags
    - Date (createdAt)
2. You’ll have to
    - Make a fetch request to the /wiki/:slug endpoint for the specific article.
    - Set the article data on state (a new piece of state)
    - Render the article data in a component
3. If a user clicks a “Back to Wiki List” button, the view shows original list of all the articles, no details (just title)

## Adding a Page

![A basic example of what the form could look like](https://user-images.githubusercontent.com/44912347/202553670-eb39915e-3e4f-47fa-be9c-f02727b4d6e8.png)

We now have 2 different views (list view and single view). We now want to add support for creating pages!
1. Create a button on the main page
2. When the button is clicked, set a boolean to true on state (something like isAddingArticle or something
3. When the boolean is true display a form (instead of the list of pages)
4. The form should have inputs for all the required fields
    - Title
    - Content
    - Author name (should be sent as name in the body of the request)
    - Author email (should be sent as email in the body of the request)
    - Optionally, a list of tags, sent as a single string separated by spaces.
5. When the form is submitted, the data should be sent in a `POST` request to `POST /wiki`, with the data as the body of the request. The data sent should look something like this:
```js
const articleData = {
  title: "Amazing",
  content: "This article is amazing",
  name: "Billy Bob",
  email: "billybob@example.com",
  tags: "tag1 tag2 tag3"
};
```
6. This is a tricky step, since we will need to send data in a fetch that is not a `GET`, but a `POST` request. Here’s an example of how to create a `POST` request
```js
const response = await fetch('https://url.com/', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(
    articleData // our data TO CREATE here
  )
});
const data = await response.json();
```

7. For future reference, [check out this gist on using Fetch](https://gist.github.com/wallacepreston/d645727890565aeb6e4168771feb7f97) with different http methods, sending a body, and even using auth tokens!
8. Finally, re-fetch all the articles, and switch the view to show the list of articles.

## Delete Page
![A basic example of what the form could look like](https://user-images.githubusercontent.com/44912347/202554199-e0e69faf-1294-4c35-9812-71176472f367.png)

Finally, we want to to add a delete button that will remove the entry.

1. Create a button on the single page view (the one with the details on that page)
2. When the button is clicked, send a `DELETE` request to `DELETE /wiki/:slug`. Though we don’t need to send anything in the body of the request, we will need to call fetch a tad differently. This fetch is also not a get, but a delete request. Here’s an example of how to create a delete request
```js
const response = await fetch('https://url.com/some-endpoint', {
  method: "DELETE"
});
const data = await response.json();
```
3. Again, re-fetch all the articles, and switch the view to show the list of articles.
4. That’s it! Your project is now has the minimum requirements. At this point, you can:
    - View all titles
    - Click to view details on an article/page
    - Add a page via form inputs
    - Delete a page
5. If you’re done but want to build out your app more, read on! There are still extra credit stretch goals.
