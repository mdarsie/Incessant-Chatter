from rest_framework import serializers
from .models import User, Patter, Comment, Like

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ('id')

