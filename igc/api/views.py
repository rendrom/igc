from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from igc.models import Fellow
from .serializers import FellowSerializer, FellowDetailSerializer


class FellowList(generics.ListAPIView):
    serializer_class = FellowSerializer
    permission_classes = []
    authentication_classes = []

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
            # qs = Video.objects.filter(name__icontains=query)
            qs = Fellow.objects.search(query)
        else:
            qs = Fellow.objects.all()
        return qs


class FellowDetail(generics.RetrieveAPIView):
    # queryset                = Video.objects.all()
    serializer_class = FellowDetailSerializer
    lookup_field = 'slug'
    permission_classes = []
    authentication_classes = []

    def get_queryset(self):
        return Fellow.objects.all()

