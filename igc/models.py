# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from djoser.views import User



class Fellow(models.Model):
    user = models.OneToOneField(User, related_name='fellow', primary_key=True, on_delete=models.CASCADE)

    vita = models.TextField("Биография", blank=True)
    phone = models.CharField("Номер телеофна", max_length=100, blank=True)

    post = models.CharField("Должность", max_length=50, blank=True)
    post_sci = models.CharField("Учёная степень", max_length=50, blank=True)
    post_academy = models.CharField("Учёное звание", max_length=50, blank=True)

    def __str__(self):  # __unicode__
        return self.title

    @property
    def title(self):
        return self.user.email.split("@")[0]

    @property
    def slug(self):
        return self.user.slug


@receiver(post_save, sender=User)
def create_favorites(sender, instance, created, **kwargs):
    if created:
        Fellow.objects.create(user=instance)


class Publications(models.Model):
    author = models.ForeignKey(Fellow, related_name='publications', on_delete=models.CASCADE)
    year = models.IntegerField("Год", null=True, blank=True)
    name = models.CharField("Название", max_length=300, blank=True)
    bibliography = models.TextField("Библиографичесая ссылка")
    link = models.URLField("Библиографичесая ссылка", blank=True)

    def __str__(self):  # __unicode__
        return self.bibliography
