from fastapi import APIRouter

import user  # , product_category, product_category_relationship

api_router = APIRouter()
api_router.include_router(user.router, prefix="/users", tags=["users"])