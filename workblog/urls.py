from django.urls import path

from . import views

from django.conf import settings
from django.conf.urls.static import static

app_name = 'workblog'
urlpatterns = [
    path('', views.index, name="index"),
    path('machine/<str:position>/', views.get_maschine_move, name='get_move'),
    path('project_sticker', views.project_sticker, name="project_sticker"),
    path('project_smetnaki', views.project_smetnaki, name="project_smetnaki"),
    path('project_personal_website', views.project_personal_website, name="project_personal_website"),
    path('blog', views.blog, name='blog'),
    path('resume', views.resume, name='resume'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)