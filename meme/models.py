from django.db import models


class Meme(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    caption = models.CharField(max_length=100)
    # because max-length of URL can be 2048
    url = models.URLField(max_length=2048)
    name = models.CharField(max_length=100)

    class Meta:
        """
            sort in - latest first order
            we want unique memes (comb of caption,name,url)
        """
        ordering = ['-created']
        unique_together = ('caption', 'url', 'name')
