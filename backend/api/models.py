from django.db import models
from django.contrib.auth.models import User

# Create class intitializing fields of user data
class Data(models.Model):
    time = models.DateTimeField(auto_now_add=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="creator")

    def __str__(self):
        return self.creator