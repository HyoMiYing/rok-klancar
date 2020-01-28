from django.urls import path

from . import views

from django.conf import settings
from django.conf.urls.static import static

app_name = 'workblog'
urlpatterns = [
    path('', views.index, name="index"),
    path('projects', views.projects, name="projects"),
    path('blog', views.blog, name='blog'),
    path('resume', views.resume, name='resume'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)