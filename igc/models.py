# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import pre_save

from igc.utils import unique_slug_generator


class Fellow(AbstractUser):
    slug = models.SlugField(unique=True, blank=True)

    biography = models.TextField("Биография")
    phone = models.CharField("Номер телеофна", max_length=100)

    def __str__(self):  # __unicode__
        return self.title

    @property
    def title(self):
        return self.username


def fellow_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(fellow_pre_save_receiver, sender=Fellow)
