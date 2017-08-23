# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import Fellow, Publications, Community, CommunityMember

admin.site.register(Community)
admin.site.register(CommunityMember)

admin.site.register(Fellow)
admin.site.register(Publications)
