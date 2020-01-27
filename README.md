![Tempo Logo](/public/img/Tempo_logo.png)

tem·po /ˈtempō/ - the speed at which a passage of music is or should be played; the rate or speed of motion or activity; pace.
**When it comes to music, you want to keep up with the tempo.** Where's the band from? Where are they touring? What's their discography?

Tempo is a centralized database for bands. But not just the well-known or celebrity bands. If you register with Tempo, you can upload your own band's information and be part of the Tempo database. You can also come back and edit or update your band's information. Easy as that! Get your band's name out there and be seen!

## About
TEMPO helps users keep up with band information. It displays information for all bands in the database and allows new bands to add their information for other users to see. 

This app uses the Model-View-Controller (MVC) structure to organize our file set up, and Express Handlebars to create our html templates and display our database information. Sequel is used to store band data. 

 
## How it Works

### 1. Our Home Page displays a **Featured Artist**, click on the band name to find out more information about them!

![Loading Page Demo](..\tempo_demos\loading_page.gif)

### 2. Click on the **About** page to learn more about our motivation behind the project and meet the team.

![Loading Page Demo](..\tempo_demos\about_page.gif)

### 3. Our **Band Directory** displays all of our bands, categorized alphabetically and by genre.

![Loading Page Demo](..\tempo_demos\directory_page.gif)

### 4. Click on the **ADD A BAND** button to enter a new band's information!

![Loading Page Demo](..\tempo_demos\add_a_band.gif)

## Frameworks Used

* [JavaScript](https://www.javascript.com/)
  * [Node.js](https://nodejs.org/en/)
      * Node packages:
        * [express](https://www.npmjs.com/package/express)
        * [express-handlebars](https://www.npmjs.com/package/express-handlebars)
        * [body-parser](https://www.npmjs.com/package/body-parser)
        * [mysql](https://www.npmjs.com/package/mysql)
        * [nodemon](https://www.npmjs.com/package/nodemon)
  * [Bootstrap](https://getbootstrap.com/)
  * [Heroku](http://www.heroku.com)
      * Heroku Add-ons:
        * [JawsDB](https://elements.heroku.com/addons/jawsdb)