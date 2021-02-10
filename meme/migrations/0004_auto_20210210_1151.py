# Generated by Django 3.1.2 on 2021-02-10 11:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meme', '0003_auto_20210210_0559'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meme',
            name='caption',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='meme',
            name='name',
            field=models.CharField(editable=False, max_length=100),
        ),
        migrations.AlterField(
            model_name='meme',
            name='url',
            field=models.URLField(max_length=2048),
        ),
    ]
