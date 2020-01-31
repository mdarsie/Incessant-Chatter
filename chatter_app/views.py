from rest_framework import viewsets

from .serializers import UserSerializer, PatterSerializer, CommentSerializer, LikeSerializer
from .models import User, Patter, Comment, Like


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class PatterView(viewsets.ModelViewSet):
    queryset = Patter.objects.all()
    serializer_class = PatterSerializer


class CommentView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class LikeView(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer
