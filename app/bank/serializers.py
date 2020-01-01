from rest_framework import serializers
from .models import Branch, Customer, Account, Product

class Branch_Serializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Branch
        fields = [
            'id',
            'location_name',
            'location'
        ]

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

        