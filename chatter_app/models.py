from django.db import models


class User(models.Model):
    name = models.CharField(max_length=100)
    handle = models.CharField(max_length=100)
    bio = models.CharField(max_length=240, default='')
    picture_url = models.TextField(default='')
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return self.handle

class Patter(models.Model):
    content = models.CharField(max_length=240)
    image_url = models.TextField(default='')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='prattle')

    def __str__(self):
        return self.content

class Comment(models.Model):
    content = models.CharField(max_length=240)
    image_url = models.TextField(default='')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='replies')
    tweet = models.ForeignKey(Patter, on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return self.content

class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_likes')
    tweet = models.ForeignKey(Patter, on_delete=models.CASCADE, related_name='likes')

    def __str__(self):
        return 'like'