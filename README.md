#### A responsive base theme for Wharton Django applications.
- Version: 1.0
- To be added to your Django application and customized to your needs.

##### Components & Standards: 
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

##### Notes on this Guide

"Project" refers to the entire application and "app" refers to a submodule of the application.

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

#### To customize your app's stylesheets or javascript

1.) Create a new folder in your project directory called "assets"

2.) Create your custom stylesheets and/or javascript files in the assets folder.

#### To customize your app's templates:

1.) Create a new folder in your project directory called "templates."
		
2.) Create a directory within "templates" for your app and call it the name of your app. 
    So, if your app is "polls," your folder would be called "polls."

3.) Within that app folder, create a template called "base.html." 

##### Below is an example breakdown for custom templates and other static files:

<pre><code>project/
		manage.py
project/
		settings.py
your-app/
		views.py
assets/
		 styles.css #### Your custom styles here.
		 scripts.js #### Your custom js here.
templates/
     your-app/ #### same name as your app
           base.html #### Your base inherits from one of the layout templates.
           list.html
           detail.html
</code></pre>

4.) You can find an example of an app's base.html file here: https://github.com/wharton/django-base-theme/blob/master/base_theme/templates/your_app/base.html

5.) And that is all you need to get started!
    Remember extends must always be at the top of your file and nothing can be above it. 

6.) You can find different layouts for your app here: https://github.com/wharton/django-base-theme/tree/master/base_theme/templates.
           
#### Utilizing the Django Block System

The official Django docs do a good job of explaining how template inheritance works and how to utilize the block system.

https://docs.djangoproject.com/en/dev/topics/templates/#template-inheritance

Here is a list of blocks included in the Django Base Theme that you can use to customize your own template as needed. You
can also find them listed in the base.html template found here: https://github.com/wharton/django-base-theme/tree/master/base_theme/templates.

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
-	{% block content_wrapper %}
- {% block content %}
- {% block left_sidebar %}
- {% block right_sidebar %}
- {% block content_area %}
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
