from django.contrib.auth.models import User
from rest_framework import permissions


class IsStaffOrTargetUser(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.is_staff or request.user.slug == obj.slug


class IsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.slug == obj.slug


class IsPublicationStaffOrTargetUser(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.is_staff or request.user == obj.author


class IsPublicationOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user == obj.author