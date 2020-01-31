from django.contrib import admin
from .models import User, Patter, Comment, Like

admin.site.register([User, Patter, Comment, Like])

# Register your models here.
