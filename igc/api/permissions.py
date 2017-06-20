from django.contrib.auth.models import User
from rest_framework import permissions


class IsStaffOrTargetUser(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.is_staff or obj.user.slug == request.user.slug or request.user.autor == request.user


class IsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user.slug == request.user.slug or request.user.autor == request.user

