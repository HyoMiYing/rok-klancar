from django.contrib import admin
from .models import *

# model Daily can be registered via admin into postgreSQL database.
admin.site.register(Daily)
admin.site.register(Project)