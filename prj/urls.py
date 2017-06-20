from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/igc/', include('igc.api.urls')),
    url(r'^account/', include('djoser.urls')),
    url(r'^api-token-auth/', obtain_jwt_token, name='auth'),
    url(r'^.*', TemplateView.as_view(template_name="igc/index.html"), name='home'),
]
