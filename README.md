#### A responsive base theme for Wharton Django applications.
- Version: 1.0
- To be added to your Django application and customized to your needs.

##### Components & Standards: 
- Twitter Bootstrap 3
- Normalize
- HTML5 Boilerplate 
- HTML5 & CSS3
- SASS/SCSS (compiled via Compass)
- jQuery
- Modernizer.js
- Respond.js
- Fonts from fontpro.com (Open Font License)

#### Update your project's settings.py file

##### Add the following to the bottom of your settings.py file:

<pre><code>STATIC_URL = '/static/'

STATIC_ROOT = os.path.join(BASE_DIR, "static")

TEMPLATE_DIRS = (
    os.path.join(BASE_DIR, 'templates'),
)
</code></pre>

##### Add the following to the 'Installed_Apps' section: 

<pre><code>'bootstrap3',
'base_theme',
</code></pre>

#### Installation via pip

1.) pip install git+https://github.com/wharton/django-base-theme
	
2.) pip install django-bootstrap3 

3.) Run "python manage.py collectstatic" to update your static files in your project directory.

###### You may need to add '--upgrade' to the end of the pip install to get the latest files.

#### Installation via Git Clone

If you don't want to pip install, you can always just clone the repo into your project and move
the files where you want them.

#### To customize your app's templates:
		
Create a new directory for your app's templates and have your base.html extend off the main base.html template, like this:

<pre><code>templates/
     your-app1/ #### same name as your app
           base.html #### Inherits from project's base.html in your site-packages folder
           list.html
           detail.html
     your-app2/ #### same name as your app
           base.html #### Inherits from project's base.html in your site-packages folder
           list.html
           detail.html
</code></pre>
           
#### Customizing your Layout

There are a few layout options included in the base-theme pip install (i.e. left_nav, full-width, etc.). Each option
extends the main base.html template. You can extend the layout you prefer in your app's
base.html like this: (just an example): 

<pre><code>{% extends 'full_width.html' %}</code></pre>

#### Utilizing the Django Block System

The official Django docs do a good job of explaining how template inheritance works and how to utilize
the block system.

https://docs.djangoproject.com/en/dev/topics/templates/#template-inheritance

#### Initial Test View/Url Configuration

###### Remember to make sure your app's 'url.py' is pointing to your 'base.html' template.

This is just an example:

<pre><code>from django.views.generic import TemplateView

class BaseView(TemplateView):
    template_name = "your_app/base.html" 
</code></pre>
    
And in your urls.py file:

<pre><code>from project.views import BaseView

urlpatterns = patterns('',
    url(r'^$', BaseView.as_view()),
    url(r'^admin/', include(admin.site.urls)),
)
</code></pre>

#### Updating your project's stylesheets

##### You can update the styles via the SASS files (file extension .scss). Example paths:

<pre><code>'static/scss/scss/example-folder/example-file.scss'</code></pre>

##### Or if you don't want to use SASS (or just need to add a few custom styles), you could add your custom styles here:

<pre><code>'static/scss/compiled_css/custom.css'</code></pre>

###### Note: Don't add styles to 'compiled_css/all.css' directly, as they could potentially get overwritten when SASS is compiled. 
