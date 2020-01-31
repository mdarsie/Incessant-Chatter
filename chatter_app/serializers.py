from rest_framework import serializers
from .models import User, Patter, Comment, Like


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'


class PatterSerializer(serializers.ModelSerializer):
    likes = LikeSerializer(Many=True, read_only=True)
    comments = CommentSerializer(Many=True, read_only=True)

    class Meta:
        model = Patter
        fields = ('id', 'content', 'image_url', 'likes', 'comments')


class UserSerializer(serializers.ModelSerializer):
    patter = PatterSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('id', 'name', 'handle', 'bio', 'picture_url', 'is_verified', 'patter')


