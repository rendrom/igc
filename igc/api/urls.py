from django.conf.urls import url

from .views import FellowList, FellowDetail, PublicationDetail, PublicationList, PublicCommunitiesList, MemberCommunitiesList

fellow_detail = FellowDetail.as_view({
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

    url(r'^community/$', PublicCommunitiesList.as_view()),
    url(r'^community/my/$', MemberCommunitiesList.as_view()),
    # url(r'^community/(?P<slug>[\w-]+)/$', community_detail),
]
