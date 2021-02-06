from django.db import models


class Meme(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    caption = models.CharField(max_length=100, blank=True, default='')
    url = models.CharField(max_length=100, blank=True, default='')
    name = models.CharField(max_length=100, blank=True, default='')

    class Meta:
        ordering = ['created']
