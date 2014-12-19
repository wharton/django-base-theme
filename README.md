#### A responsive base theme for Wharton Django applications.
- Version: 1.0
- To be added to your Django application and customized to your needs.

##### Components & Standards: 
- Twitter Bootstrap 3
- Normalize
- HTML5 Boilerplate 
- HTML5 & CSS3
- SASS/SCSS
- jQuery
- Modernizer.js
- Respond.js
- Font Awesome
- Fonts from fontpro.com (Open Font License)

##### Notes on this Guide

I use "project" to refer to the entire application and "app" to refer to a submodule of the application.

#### Update your project's settings.py file

##### Add the following to the bottom of your settings.py file:

<pre><code>STATIC_ROOT = os.path.join(BASE_DIR, "static")

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, "assets"),
)

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

3.) If you need to update any of these apps, just include "--upgrade" at the end of the pip install.


#### To customize your project's or app's styles and javascript

1.) Create a new folder in your project directory called "assets"

2.) Create your custom stylesheets and/or javascript files in the assets folder. Below is an example breakdown:

<pre><code>project/
		manage.py
project/
		settings.py
static/
		css/
your-app/
		views.py
assets/
     custom.css
     custom.js
</code></pre>

#### To customize your app's templates:

1.) Create a new folder in your project directory called "templates."
		
2.) Create a directory within "templates" for your app and call it the name of your app. 
    So, if your app is "polls," your folder would be called "polls."

3.) Within that app folder, create a template called "base.html." Below is an example breakdown:

<pre><code>project/
		manage.py
project/
		settings.py
static/
		css/
your-app/
		views.py
templates/
     your-app/ #### same name as your app
           base.html #### Your base inherits from one of the layout templates.
           list.html
           detail.html
</code></pre>

4.) The Django Base Theme includes the following as an example in the templates folder:

<pre><code>{% extends "left_sidebar.html" %}
{% load staticfiles %}
{% block title %}Your App Name{% endblock %}
{% block extra_head_bottom %}<link href="{% static "your-app/compiled_scss.css" %}" rel="stylesheet" type="text/css">{% endblock extra_head_bottom %}
<!--- ==========================================================================
   Include your custom blocks/html below:
   ========================================================================== --->
   
   
   




<!-- Placed at the end of the document so the pages load faster -->
{% block extra_footer_js %}<script src="{% static "js/custom.js" %}"></script>{% endblock extra_footer_js %}</code></pre>

5.) And that is all you need to get started!
    Remember extends must always be at the top of your file and nothing can be above it. 

6.) You can find different layouts for your app: https://github.com/wharton/django-base-theme/tree/master/base_theme/templates.
           

#### Utilizing the Django Block System

The official Django docs do a good job of explaining how template inheritance works and how to utilize the block system.

https://docs.djangoproject.com/en/dev/topics/templates/#template-inheritance

Here is a list of blocks included in the Django Base Theme that you can use to customize your own template as needed:

- {% block title %}
- {% block extra_head %} 
- {% block extra_head_bottom %}
- {% block header_wrapper %}
- {% block header %}
- {% block banner_wrapper %}
- {% block header_logo %}
- {% block header_title %}
- {% block main_nav_wrapper %}
- {% block header_main_nav %}
- {% block mobile_sidebar_nav %}
- {% block breadcrumb_wrapper %}
- {% block breadcrumb %}
- {% block content_wrapper %}
- {% block content %}
- {% block main_sidebar %}
- {% block right_sidebar %}
- {% block main_text_area %}
- {% block footer_wrapper %}
- {% block footer %}
- {% block footer_js %}
- {% block extra_footer_js %}


#### Initial Test View/Url Configuration

This is just an example:

<pre><code>from django.views.generic import TemplateView

class BaseView(TemplateView):
    template_name = "your_app/base.html" #### Remember to make sure your app's 'url.py' is pointing to your 'base.html' template.
</code></pre>
    
And in your urls.py file:

<pre><code>from project.views import BaseView

urlpatterns = patterns('',
    url(r'^$', BaseView.as_view()),
    url(r'^admin/', include(admin.site.urls)),
)
</code></pre>