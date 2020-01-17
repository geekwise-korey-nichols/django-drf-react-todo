from rest_framework import serializers
from .models import Branch, Customer, Account, Product
from django.contrib.auth.models import User

class User_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id']

class Branch_Serializer( serializers.HyperlinkedModelSerializer ):
    users = User_Serializer(many=True, read_only=True)

    class Meta:
        model = Branch
        fields = [ 'location_name', 'location', 'id', 'users']

class Customer_Serializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Customer
        fields = [
            'id',
            'customer_name',
            'customer_email',
            'branch',
            'branch_id'
        ]

class Account_Serializers( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Account
        fields = [
            'id',
            'account_id'
        ]

class Product_Serializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Product
        fields = [
            'id',
            'account',
            'amount',
            'product_type'
        ]

        