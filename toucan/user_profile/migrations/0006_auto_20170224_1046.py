# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-24 10:46
from __future__ import unicode_literals

import django.contrib.gis.db.models.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0005_auto_20161114_1043'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notificationsettings',
            name='point',
            field=django.contrib.gis.db.models.fields.PointField(srid=4326),
        ),
    ]