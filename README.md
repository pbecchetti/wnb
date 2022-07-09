# WnbInterviewMiniProject

## Goal

The goal of this mini project is to test your skill on a real-world case: building a new administration screen/view to allow
associations to follow their volunteers' subscriptions.

To do that, you will have 3 resources at your disposal:

- A REST API from which you will need to pull the data
- Mockups produced by our UX designer. It also contains comments about what the view should do and what data to fetch from the REST API
- This source project that will help you getting started

## Project dependencies

This project has been generated using `@angular/cli@8.3.22`. Some librairies have been already installed (see `package.json`) but you are free to use any extra librairies you may find useful to have the best interface and user experience. However, we recommend to not use external UI libraries with existing components as we want to asset your ability to create components/styles from scratch (HTML/CSS skills).

## Submission process

This project has been downloaded from one of Wenabi's internal repositories. Since it is already a fully functionnal Angular application, you can start working on it right away.

However, in order for us to review your work, you will need to upload it to a public Github repository and share the link with Wenabi's development team. We recommend to initialize the Git repository **as soon as possible** and split your work into different commits (see [Expectations](#expectations) section).

Finally, once you are satisfied with the end result, don't forget to complete the [final feedback](feedback.md) file (i.e `feedback.md`). This will help us assess your work objectively and improve the examination process 🙏.

## REST API

Base url is `https://6143a763c5b553001717d062.mockapi.io/api`

### Retrieve wishes

- Resource is located at `GET https://6143a763c5b553001717d062.mockapi.io/api/wishes`
- It represents a subscription (called _wish_). Each subscription is made by a user to participate in an initiative proposed by an association.
- A subscription is composed of different properties (e.g its status, the user's profile that subscribed and many more):
  - Subscriptions follow a straightforward process and each step of the process is identified by a status: `APPLICATION`, `DISCUSSION`, `WAITING_ASSOCIATION_VALIDATION`, `WAITING_MANAGER_VALIDATION`, `IN_PROGRESS`, `USER_HAS_PARTICIPATED`, and `CANCELLED`
- This resource can be queried, filtered, sorted by any property of a wish:
  - For example, to get all wishes in status `APPLICATION`, call `GET /api/wishes?status=APPLICATION`.
- For more information, you can refer to the [official mockapi documentation](https://mockapi.io/docs). In it, you will find examples on how to sort, filter, paginate your data.

### Retrieve statistics

- Resource is located at `GET https://6143a763c5b553001717d062.mockapi.io/api/stats`
- It represents a list of the number of wishes per status.

### Problems

If for some reasons the REST API becomes unavailable, you can find JSON files with the same data in `/test-data` folder. These files should only be used if the API is down as we expect you to implement Angular services and make real HTTP calls to retrieve the necessary data.

## Mockups

You can find the mockups at the following address: https://xd.adobe.com/view/2e4fee58-835e-40db-8a56-61ecb8bf72a8-7b1c/.

Developer mode has been activated so it means you can click on any block and see various css properties (e.g color). Comments on the mockups explain what needs to be done and what should be the expected behavior.

One the right side of Adobe XD interface, you can find 2 buttons that you have to be familiar with:

- "Chat bubble": show/hide all the comments
- "Code brackets": show/hide developer view

![image](https://user-images.githubusercontent.com/7816661/133766989-6a5e0426-387f-4f32-a1e7-23a4d28eecf3.png)

### Fonts

Some fonts used in these mockups might not be free (e.g `Ano`). In that case, you can replace these by any other one you might find suitable. It does not necessary have to be a font that look the same, just a free one.

## Acceptance criteria

We are not looking for pixel-perfect design but the final view should be as close as possible to the initial mockups.

### Expectations

- All changes should be tracked in a Git repository publicly available on Github.
  - It is also expected that you split your work in different commits. A single commit with all the changes is not practical and not recommended
- Build (without warnings or errors) and serve project using `npm start` only
- Code should be well-structured and commented as needed. It should follow Angular dev team recommandations and best practices
- View should not be wider than `1200px`. When displayed on very large screens (`> 1200px`), the view should be centered
- Should display nicely on small screens (i.g mobile phones and tablets, smaller than `978px`)
- Should display nicely on IE11+ and EdgeHTML (+ latest versions of Firefox and Chrome of course 😉)
- In any case, if either the specifications or the mockups are not clear enough or contain a mistake (it can always happen),
  go with what you think is best in terms of UX and leave a comment on your decisions

### Nice to have

If you feel adventurous and want to show us your dedication and passion, here is a **non-exhaustive** list of features that can
be added to this mini project:

- Background with linear gradient color from #FFD400 (dark yellow) to #FFD40080 (light yellow)
- Autoscroll to wish list when clicking on status button in stats panel
- Pagination or infinite scroll
- Angular unit testing and/or headless browser testing
- Anything you feel that can enhance the user experience 🚀

Keep in mind that these are not a priority and should not be developped before having a nice-looking interface, as close to the mockups as possible !
