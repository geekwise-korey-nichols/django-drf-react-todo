from django.db import models
import uuid
# Create your models here.

# Branch model
class Branch(models.Model):
    location_name = models.CharField(max_length=30)
    location = models.CharField(max_length=30)
    location_id = str(uuid.uuid4())

    def __str__(self):
        return f"{self.location_name} - {self.location}"
    
# Customer model

# Account model

# Product model