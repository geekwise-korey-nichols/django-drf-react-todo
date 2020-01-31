from rest_framework import viewsets, permissions
from .serializers import Branch_Serializer, Customer_Serializer, Account_Serializers, Product_Serializer
from .models import Branch, Customer, Account, Product

class Branch_Viewset(viewsets.ModelViewSet):
    queryset = Branch.objects.all()
    serializer_class = Branch_Serializer

class Customer_Viewset(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = Customer_Serializer

class Account_Viewset(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = Account_Serializers

class Product_Viewset(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = Product_Serializer

class BranchView(viewsets.ModelViewSet):
    queryset = Branch.objects.all().order_by('id')

    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = Branch_Serializer

    def get_queryset(self):
        return self.request.user.users.all()

    def perform_create(self, serializer):
        serializer.save(users=self.request.user)