# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-12-20 16:11
from __future__ import unicode_literals

from django.db import migrations


def migrate_owner_to_admin(apps, schema_editor):
    Membership = apps.get_model(
        "organisations",
        "Membership"
    )
    Membership.objects.filter(role=10).update(role=5)


class Migration(migrations.Migration):

    dependencies = [
        ('organisations', '0005_auto_20161025_1542'),
    ]

    operations = [
        migrations.RunPython(migrate_owner_to_admin)
    ]
