from django.shortcuts import render
from django.http import HttpResponse
from workblog.models import *

# The only view right now is a funciton 'index'.
# It returns a HttpResponse, and loads a html template, and includes variable dailys.
# Variable dailys contains all instances of the class Daily that are saved in the database.

def projects(request):
    projects = Project.objects.all()
    return render(request, 'workblog/projects.html', {'projects':projects})

def index(request):
    return render(request, 'workblog/index.html')

def blog(request):
    dailys = Daily.objects.all().order_by('-pub_date')
    return render(request, 'workblog/detail.html', {'dailys': dailys})

def resume(request):
    return render(request, 'workblog/resume.html', {})