# Generated by Django 3.1.2 on 2021-02-10 05:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('meme', '0002_auto_20210207_1200'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='meme',
            options={'ordering': ['-created']},
        ),
        migrations.AlterUniqueTogether(
            name='meme',
            unique_together={('caption', 'url', 'name')},
        ),
    ]
