# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import pre_save

from igc.utils import unique_slug_generator


class Fellow(models.Model):
    user = models.ForeignKey(User)
    name = models.CharField("Имя", max_length=220)
    surname = models.CharField("Фамилия", max_length=220)
    slug = models.SlugField(unique=True, blank=True)

    biography = models.TextField("Биография")
    email = models.EmailField("Эл. адрес")
    phone = models.CharField("Номер телеофна", max_length=100)

    active = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):  # __unicode__
        return self.name

    @property
    def title(self):
        return "%s %s" % (self.name, self.surname)


def fellow_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(fellow_pre_save_receiver, sender=Fellow)
