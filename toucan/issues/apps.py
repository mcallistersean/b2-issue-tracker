from django.apps import AppConfig
from django.db.models.signals import post_save

class IssuesConfig(AppConfig):
    name = 'toucan.issues'

    def ready(self):
        from . import signals
