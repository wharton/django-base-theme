### Table of Contents
- Introduction
- Components & Standards
- Quick note
- Modifying Settings.py
	- Adding Directories
	- Adding Installed Apps
- PIP installation
- Updating Base-Theme
- Adding custom stylesheets/javascript
- Adding custom templates
	- Example breakdown of static file organization
	- Example of base.html file
	- Example of extending your app's base file
	- Examples of different template layout options
- Utilizing the Django Block System
	- A list of blocks available with base-theme
- Adding Django Debug Toolbar
- Example test view & url configuration
- Example url.py file
- Using Gulp to automate your front-end workflow
- List of Contributors
	
### Introduction
- A responsive Django-based theme designed for Wharton apps (v1.0).
- Includes official Wharton branding styles, logos, layouts and fonts.

### Components & Standards: 
- Twitter Bootstrap 3
- Normalize
- HTML5 Boilerplate 
- HTML5 & CSS3
- Responsive
- SASS/SCSS
- jQuery
- Modernizer.js
- Respond.js
- Font Awesome
- Custom fonts served via Fonts.com
- Gulp

### Quick note on this Guide

"Project" refers to the entire application and "app" refers to a submodule of the application.

### Modifying Settings.py

#### Add the following to the bottom of your settings.py file:

<pre><code>STATIC_ROOT = os.path.join(BASE_DIR, "static")

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, "assets"),
)

TEMPLATE_DIRS = (
    os.path.join(BASE_DIR, 'templates'),
)
</code></pre>

#### Add the following to the 'Installed_Apps' section: 

<pre><code>'bootstrap3',
'base_theme',
</code></pre>

### PIP installation

<pre><code>pip install git+https://github.com/chadwhitman/Django-Base-Theme</code></pre>
	
<pre><code>pip install django-bootstrap3</code></pre>

### Updating Base-Theme

To get the latest updates to the base theme, just run the following command: 

<pre><code>pip install git+https://github.com/chadwhitman/Django-Base-Theme --upgrade</code></pre>

### Add custom stylesheets or javascript

1.) Create a new folder in your project directory called "assets"

2.) Create your custom stylesheets and/or javascript files in the assets folder.

3.) Include a link to your custom styles/js in your template, like this: 
    https://github.com/wharton/django-base-theme/blob/master/base_theme/templates/your_app/base.html

### Add custom templates:

1.) Create a new folder in your project directory called "templates."
		
2.) Create a directory within "templates" for your app and call it the name of your app. 
    So, if your app is "polls," your folder would be called "polls."

3.) Within that app folder, create a template called "base.html." You must have this file in your app directory.

#### Below is an example breakdown for custom templates and other static files:

<pre><code>project/
		manage.py
project/
		settings.py
		urls.py
your-app/
		models.py
		views.py
assets/
		 styles.css #### Your custom styles here.
		 scripts.js #### Your custom js here.
templates/
     your-app/ #### same name as your app
           base.html #### Your base extends one of the layout templates.
           	i.e. {% extends "left_sidebar.html" %}
           list.html #### Your other templates can extend from your app's base template
           	i.e. {% extends "your-app/base.html" %}
           detail.html
</code></pre>

4.) Note: The layouts (left, right, both, full) extend the original base.html.
		The original base.html is in your site-packages directory (after you pip install it).

#### Here is an example of what would go into your app's base.html file:
    https://github.com/wharton/django-base-theme/blob/master/base_theme/templates/your_app/base.html

#### If you wanted to extend your app's base.html into, say, your app's list.html template, you would just need  to make sure your extends path is pointing to your app's base template, like this:

<pre><code>{% extends "your-app/base.html" %}</code></pre>
    

#### You can find different layouts for your app here: 
<pre><code>https://github.com/wharton/django-base-theme/tree/master/base_theme/templates.</code></pre>
           
### Utilizing the Django Block System

The official Django docs do a good job of explaining how template inheritance works and how to utilize the block system.

<pre><code>https://docs.djangoproject.com/en/dev/topics/templates/#template-inheritance</code></pre>

#### Here is a list of blocks included in the Django Base Theme that you can use to customize your own template as needed. You can also find them listed in the base.html template found here: 

<pre><code>https://github.com/wharton/django-base-theme/tree/master/base_theme/templates.</code></pre>

<pre><code>- {% block head_css %}
- {% block site_title %}
- {% block extra_head_top %} 
- {% block extra_head_bottom %}
- {% block header_wrapper %}
- {% block header %}
- {% block banner_wrapper %}
- {% block banner_logo %}
- {% block banner_title %}
- {% block main_nav_wrapper %}
- {% block main_nav %}
- {% block mobile_sidebar_nav %}
- {% block breadcrumb_wrapper %}
- {% block breadcrumb %}
- {% block content_wrapper %}
- {% block content %}
- {% block inner_content %}
- {% block left_sidebar %}
- {% block right_sidebar %}
- {% block footer_wrapper %}
- {% block footer %}
- {% block footer_js %}
- {% block extra_footer_js %}
</code></pre>

### Adding the Django Debug Toolbar

These Django docs do a good job of explaining how to integrate the toolbar:
<pre><code>http://django-debug-toolbar.readthedocs.org/en/latest/installation.html</code></pre>

### Initial Test View & Url Configuration

This is just an example to get your started:

<pre><code>from django.views.generic import TemplateView

class BaseView(TemplateView):
    template_name = "your_app/base.html" 
    #### Remember to make sure your app's 'url.py' is pointing to your 'base.html' template.
</code></pre>
    
### And in your urls.py file:

<pre><code>from project.views import BaseView

urlpatterns = patterns('',
    url(r'^$', BaseView.as_view()),
    url(r'^admin/', include(admin.site.urls)),
)
</code></pre>

### Using Gulp to automate your front-end workflow 

Included in this repo is an example gulpfile (copied from: http://www.revsys.com/blog/2014/oct/21/ultimate-front-end-development-setup/). But, if you use Gulp, you will need to manually add it to your project's root directory. For more info on how to use Gulp go here: http://gulpjs.com.

### Contributors

Thank you to our contributors!

* Chad Whitman https://github.com/chadwhitman
* Tim Allen https://github.com/flipperpa
* Frank Wiles https://github.com/frankwiles
