# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-05-24 13:35
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='user_mention_notification',
            field=models.CharField(choices=[('', 'No notification'), ('sms', 'Text Message (SMS)'), ('email', 'Email')], default='', max_length=20, verbose_name='Notification when mentioned'),
        ),
    ]