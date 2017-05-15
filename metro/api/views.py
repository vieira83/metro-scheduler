# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from metro.models import Account
from metro.api.permissions import IsAccountOwner
from metro.api.account_serializers import AccountSerializer

from rest_framework.response import Response
from rest_framework import permissions, viewsets, status


# Create your views here.
class AccountViewSet(viewsets.ModelViewSet):
    """
        This viewset automatically provides `list`, `create`, `retrieve`,
        `update` and `destroy` actions.
    """

    lookup_field = 'username'
    # http://stackoverflow.com/questions/27963899/django-rest-framework-using-dot-in-url
    lookup_value_regex = '[0-9a-z.@]+'
    queryset = Account.objects.all()
    serializer_class = AccountSerializer


    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)

        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (permissions.IsAuthenticated(), IsAccountOwner(),)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            Account.objects.create_user(**serializer.validated_data)

            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)

        return Response({
            'status': 'Bad request',
            'message': 'Account could not be created with received data.'
        }, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request):
        serializer = self.serializer_class(self.queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # def retrieve(self, request, pk=None):
    #     pass
