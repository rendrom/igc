# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import pre_save

from igc.utils import unique_slug_generator


class Fellow(AbstractUser):
    middle_name = models.CharField('Отчество', max_length=50, blank=True)

    slug = models.SlugField(unique=True, blank=True)

    vita = models.TextField("Биография", blank=True)
    phone = models.CharField("Номер телеофна", max_length=100, blank=True)

    post = models.CharField("Должность", max_length=50, blank=True)
    post_sci = models.CharField("Учёная степень", max_length=50, blank=True)
    post_academy = models.CharField("Учёное звание", max_length=50, blank=True)

    def __str__(self):  # __unicode__
        return self.title

    @property
    def title(self):
        return self.username


def fellow_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(fellow_pre_save_receiver, sender=Fellow)


class Publications(models.Model):
    author = models.ForeignKey(Fellow, related_name='publications', on_delete=models.CASCADE)
    year = models.IntegerField("Год", null=True, blank=True)
    name = models.CharField("Название", max_length=300, blank=True)
    bibliography = models.TextField("Библиографичесая ссылка")
    link = models.URLField("Библиографичесая ссылка", blank=True)

    def __str__(self):  # __unicode__
        return self.bibliography
