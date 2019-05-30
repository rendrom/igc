# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from django.utils.translation import ugettext_lazy as _
from users.utils import unique_slug_generator
from django.conf import settings

User = settings.AUTH_USER_MODEL


class Community(models.Model):
    name = models.CharField("Короткое название", max_length=100, unique=True)
    long_name = models.CharField("Полное название", max_length=250, blank=True, null=True)
    description = models.TextField("Описание", blank=True, null=True)
    slug = models.SlugField(unique=True, blank=True, editable=False)

    # private configurations
    is_public = models.BooleanField("Открытое сообщество", default=False,
                                    help_text="Сообщество будет видно для любых зарегистрированных пользователей")
    open_registration = models.BooleanField("Свободная регистрация", default=False,
                                            help_text="Любой желающий зарегистрированный пользователь "
                                                      "может вступить в сообщество")
    show_members = models.BooleanField("Показывать участников", default=False,
                                       help_text="Показывать список участников для любого "
                                                 "зарегистрированного пользователя если сообщество публичное")

    class Meta:
        verbose_name = "Сообщество"
        verbose_name_plural = "Сообщества"

    @property
    def title(self):
        return self.name

    def __unicode__(self):
        return self.name


def communities_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)

pre_save.connect(communities_pre_save_receiver, sender=Community)


class Fellow(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, related_name='fellow', primary_key=True, on_delete=models.CASCADE)

    vita = models.TextField("Биография", blank=True)
    phone = models.CharField("Номер телеофна", max_length=100, blank=True)

    post = models.CharField("Должность", max_length=50, blank=True)
    post_sci = models.CharField("Учёная степень", max_length=50, blank=True)
    post_academy = models.CharField("Учёное звание", max_length=50, blank=True)

    class Meta:
        verbose_name = "Сотрудник"
        verbose_name_plural = "Сотрудники"

    def __unicode__(self):
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


class CommunityMember(models.Model):
    community = models.ForeignKey(Community, related_name='member', on_delete=models.CASCADE)
    member = models.ForeignKey(Fellow, related_name='community_member', on_delete=models.CASCADE)
    is_staff = models.BooleanField(
        _('staff status'),
        default=False,
    )
    is_active = models.BooleanField(
        _('active'),
        default=False,
    )
    is_invited = models.BooleanField("По приглашению", default=False)

    class Meta:
        verbose_name = "Участник сообщества"
        verbose_name_plural = "Участники сообществ"
        unique_together = ('community', 'member')

    def __unicode__(self):
        return "%s - %s" % (self.community.title, self.member.title)


class Publications(models.Model):
    author = models.ForeignKey(Fellow, related_name='publications', on_delete=models.CASCADE)
    year = models.IntegerField("Год", null=True, blank=True)
    name = models.CharField("Название", max_length=300, blank=True)
    bibliography = models.TextField("Библиографичесая ссылка")
    link = models.URLField("Библиографичесая ссылка", blank=True)

    class Meta:
        verbose_name = "Публикация"
        verbose_name_plural = "Публикации"

    def __unicode__(self):
        return self.bibliography
