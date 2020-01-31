from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('user', views.UserView)
router.register('patter', views.PatterView)
router.register('comment', views.CommentView)
router.register('like', views.LikeView)

urlpatterns = [
    path('', include(router.urls))
]
