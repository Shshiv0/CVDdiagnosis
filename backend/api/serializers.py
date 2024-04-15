from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Data

#Create a class that serializes user info
class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        additional_kwargs = {"password": {"write_only": True}}

    #Create new user with validated data
    def create(self, validatedData):
        user = User.objects.create_user(**validatedData)
        return user

#Create a class that serializes user data   
class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields = ["time", "creator"]
        additional_kwargs = {"creator": {"read_only": True}}