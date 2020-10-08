from django.db import models

class Project(models.Model):
    title = models.CharField(max_length = 50)
    github_url = models.CharField(max_length = 100)
    site_url = models.CharField(max_length = 100)
    description = models.TextField()
    bulit_with_icon = models.ImageField(upload_to='project_icons/', blank=False)

    def __str__(self):
        return self.title
