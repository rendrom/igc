from django.db.models import Q
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from igc.api.permissions import IsStaffOrTargetUser, IsPublicationStaffOrTargetUser, IsCommunityMember
from igc.models import Fellow, Publications, Community, CommunityMember
from .serializers import FellowSerializer, FellowDetailSerializer, PublicationDetailSerializer, CommunitySerializer, \
    CommunityMemberSerializer, CommunityDetailSerializer


class CommunityMemberList(generics.ListAPIView):
    serializer_class = CommunityMemberSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return CommunityMember.objects.filter(member__user=self.request.user)


class CommunityMemberView(ModelViewSet):
    serializer_class = CommunityMemberSerializer
    lookup_field = 'community__slug'
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        return CommunityMember.objects.filter(member__user=self.request.user)



class CommunitiesList(generics.ListAPIView):
    serializer_class = CommunitySerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Community.objects.all()


class AllowedCommunitiesList(CommunitiesList):
    def get_queryset(self):
        return Community.objects.filter(~Q(member__member__user=self.request.user) & Q(is_public=True))


class MemberCommunitiesList(CommunitiesList):
    def get_queryset(self):
        return Community.objects.filter(member__member__user=self.request.user, member__is_active=True)


class MemberInvitationCommunitiesList(CommunitiesList):
    def get_queryset(self):
        return Community.objects.filter(member__member__user=self.request.user, member__is_invited=True,
                                        member__is_active=False)


class CommunityDetail(ModelViewSet):
    serializer_class = CommunityDetailSerializer
    lookup_field = 'slug'
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Community.objects.filter(member__member__user=self.request.user)


class FellowList(generics.ListAPIView):
    serializer_class = FellowSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Fellow.objects.all()


class FellowDetail(ModelViewSet):
    serializer_class = FellowDetailSerializer
    lookup_field = 'user__slug'
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
    serializer_class = PublicationDetailSerializer
    lookup_field = 'pk'
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
    serializer_class = PublicationDetailSerializer
    lookup_field = 'pk'
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
