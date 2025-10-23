from django.db import models


class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    age = models.IntegerField(max_length=10)
    email = models.EmailField()

class Product(models.Model):
    name = models.CharField(max_length=250)
    
    