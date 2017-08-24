from django.conf.urls import url

from .views import FellowList, FellowDetail, PublicationDetail, PublicationList, AllowedCommunitiesList, \
    MemberCommunitiesList, CommunityMemberList, CommunityMemberView, CommunityDetail

fellow_detail = FellowDetail.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

community_detail = CommunityDetail.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

community_member = CommunityMemberView.as_view({
    'post': 'create',
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

publications_detail = PublicationDetail.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = [
    url(r'^fellow/$', FellowList.as_view()),
    url(r'^fellow/(?P<user__slug>[\w-]+)/publications/(?P<pk>[0-9]+)/$', publications_detail),
    url(r'^fellow/(?P<user__slug>[\w-]+)/publications/$', PublicationList.as_view()),
    url(r'^fellow/(?P<user__slug>[\w-]+)/$', fellow_detail),

    url(r'^community/$', AllowedCommunitiesList.as_view()),
    url(r'^community/my/$', CommunityMemberList.as_view()),
    url(r'^community/member/$', community_member),
    url(r'^community/member/(?P<community__slug>[\w-]+)/$', community_member),
    url(r'^community/detail/(?P<slug>[\w-]+)/$', community_detail),
]
