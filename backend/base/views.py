from rest_framework.response import Response
from base.products import products
from rest_framework.decorators import api_view
from rest_framework import status 

# return all products
@api_view(['GET'])
def all_products(request):
    if request.method == 'GET':
        return Response(products)

# return product by id & if not found then return 404 not found status
@api_view(['GET'])
def product(request,ID): 
    if request.method == 'GET':  
        for product in products:
            if product['_id'] == str(ID):
                return Response(product)
        return Response(status.HTTP_404_NOT_FOUND)
        
