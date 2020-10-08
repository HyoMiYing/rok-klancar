from django.db import models

#class DailyKata(models.Model):
#    pub_date = models.DateTimeField()
#    kata_name = models.CharField(max_length = 500)
#    kata_link = models.URLField()
#    kata_description = models.TextField()
#    my_code = models.TextField()
#    highlighted_code = models.TextField(editable=False)

#    def __str__(self):
#        return self.kata_name

#    def save(self, *args, **kwargs):
#        self.highlighted_code = self.highlight()
#        super(DailyKata, self).save(*args, **kwargs)

#    def highlight(self):
#        return highlight(self.my_code,
#                         python_lexer,
#                         formatters.HtmlFormatter(linenos=False))

class Project(models.Model):
    title = models.CharField(max_length = 50)
    github_url = models.CharField(max_length = 100)
    site_url = models.CharField(max_length = 100)
    description = models.TextField()
    bulit_with_icon = models.ImageField(upload_to='project_icons/', blank=False)

    def __str__(self):
        return self.title
