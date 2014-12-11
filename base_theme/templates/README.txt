If you are customizing the base.html for your own app, create a new directory for your app's templates and have your base.html extend off the main base.html template, like this:

templates/
     base.html #### main base.html
     your-app1/ #### same name as your app
           base.html #### Inherits from main base.html
           list.html
           detail.html
     your-app2/ #### same name as your app
           base.html #### Inherits from main base.html 
           list.html
           detail.html
           
There are a few layout options already created in the 'templates/layout_options" directory, each option extends the main 'base.html' template. You can simply copy and paste the code from one of those layouts into your app's 'base.html.' Remember to make sure your app's 'url.py' is pointing to your 'base.html' template.