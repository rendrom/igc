from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from igc.api.permissions import IsStaffOrTargetUser, IsPublicationStaffOrTargetUser
from igc.models import Fellow, Publications
from .serializers import FellowSerializer, FellowDetailSerializer, PublicationDetailSerializer


class FellowList(generics.ListAPIView):
    serializer_class = FellowSerializer
    permission_classes = (IsAuthenticated,)
    # authentication_classes = []

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
            # qs = Video.objects.filter(name__icontains=query)
            qs = Fellow.objects.search(query)
        else:
            qs = Fellow.objects.all()
        return qs


class FellowDetail(ModelViewSet):
    # queryset                = Video.objects.all()
    serializer_class = FellowDetailSerializer
    lookup_field = 'slug'
    # authentication_classes = []
    permission_classes = (IsAuthenticated,)

    def get_permissions(self):
        if self.request.method in ['GET', 'OPTIONS']:
            return IsAuthenticated(),
        elif self.request.method == 'POST':
            return IsStaffOrTargetUser(),
        else:
            return IsStaffOrTargetUser(),

    def get_queryset(self):
        return Fellow.objects.all()


class PublicationList(generics.ListCreateAPIView):
    # queryset                = Video.objects.all()
    serializer_class = PublicationDetailSerializer
    lookup_field = 'pk'
    # authentication_classes = []
    permission_classes = (IsAuthenticated,)

    def get_permissions(self):
        if self.request.method in ['GET', 'OPTIONS']:
            return IsAuthenticated(),
        elif self.request.method == 'POST':
            return IsPublicationStaffOrTargetUser(),
        else:
            return IsPublicationStaffOrTargetUser(),

    def get_queryset(self):
        return Publications.objects.all()


class PublicationDetail(ModelViewSet):
    # queryset                = Video.objects.all()
    serializer_class = PublicationDetailSerializer
    lookup_field = 'pk'
    # authentication_classes = []
    permission_classes = (IsAuthenticated,)

    def get_permissions(self):
        if self.request.method in ['GET', 'OPTIONS']:
            return IsAuthenticated(),
        elif self.request.method == 'POST':
            return IsPublicationStaffOrTargetUser(),
        else:
            return IsPublicationStaffOrTargetUser(),

    def get_queryset(self):
        return Publications.objects.all()

