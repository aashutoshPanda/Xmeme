
from rest_framework.response import Response
from rest_framework import pagination


class CustomPagination(pagination.PageNumberPagination):
    """
        the default return format of DRF is 
            { 
                count:NUM,
                next:URL,
                prev:URL,
                results:ARRAY[]
            }
        but we want only the data so return data directly

    """

    def get_paginated_response(self, data):
        return Response(data)
