from django.conf.urls import url

from .views import FellowList, FellowDetail

urlpatterns = [
    url(r'^$', FellowList.as_view()),
    url(r'^(?P<slug>[\w-]+)/$', FellowDetail.as_view()),
]
