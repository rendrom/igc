from django.contrib.auth.models import User
from rest_framework import permissions

from igc.models import CommunityMember


class IsStaffOrTargetUser(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.is_staff or request.user.slug == obj.slug


class IsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.slug == obj.slug


class IsPublicationStaffOrTargetUser(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.is_staff or request.user == obj.author.user


class IsPublicationOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user == obj.author.user


class IsCommunityMember(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if obj.is_public:
            return True
        else:
            community_member = CommunityMember.objects.get(member = request.user, community=obj)
            if community_member:
                return True
        return False