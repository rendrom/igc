from django.contrib.auth.models import User
from dynamit.models import DynamitModel
from rest_framework import permissions


class IsStaffOrTargetUser(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.is_staff or obj.user == request.user


class IsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user == obj.user

