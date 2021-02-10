from rest_framework.viewsets import ModelViewSet

from .serializers import MemeSerializer
from .models import Meme
from rest_framework import status
from rest_framework.response import Response
from rest_framework.settings import api_settings
from rest_framework.exceptions import MethodNotAllowed


class MemeViewSet(ModelViewSet):
    serializer_class = MemeSerializer
    queryset = Meme.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        results = Meme.objects.filter(**request.data)
        # to return HTTP STATUS CODE 409 instead of django's default 400 for duplicate post requests
        if results.count() > 0:
            return Response(
                {"detail": "Duplicate POST requests with the same payload"},
                status.HTTP_409_CONFLICT
            )
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        # to return latest 100
        return Response(serializer.data[:100])

    def perform_update(self, serializer):
        raise MethodNotAllowed(
            method='PUT', detail='Method "GET" not allowed without lookup')
