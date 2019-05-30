from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/igc/', include('igc.api.urls')),
    url(r'^api/token/$', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    url(r'^api/token/refresh/$', TokenRefreshView.as_view(), name='token_refresh'),
    url(r'^account/', include('djoser.urls')),

    url(r'^.*', TemplateView.as_view(template_name="igc/index.html"), name='home'),
]
