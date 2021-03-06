
from rest_framework.urlpatterns import format_suffix_patterns

from django.conf.urls import url, include
from metro.api.views import AccountViewSet
from metro import views

from rest_framework import routers

router = routers.SimpleRouter()

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^$', views.homepage, name='index'),
    url(r'^(/P<path>.*)/$', views.homepage),
]

urlpatterns = format_suffix_patterns(urlpatterns)