from django.db import models

# Model, that represents daily entry of my blog.
# It has:
# 1. Date and time (auto set)
# 3. Things done
# 4. Tomorrow's work plan

class Daily(models.Model):
    pub_date = models.DateTimeField()
    work_done = models.CharField(max_length = 1000)
    tomorrow_work = models.CharField(max_length = 500)

    # If objects of Daily will be called, they will be represented by the value of variable 'things_learned'. 
    def __str__(self):
        return self.tomorrow_work

class Project(models.Model):
    title = models.CharField(max_length = 50)
    github_url = models.CharField(max_length = 100)
    site_url = models.CharField(max_length = 100)
    description = models.TextField()
    bulit_with_icon = models.ImageField(upload_to='project_icons/', blank=False)

    def __str__(self):
        return self.title
