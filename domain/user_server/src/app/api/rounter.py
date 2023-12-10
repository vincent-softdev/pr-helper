from fastapi import APIRouter

from .user import router as user_router  # , product_category, product_category_relationship

api_router = APIRouter()
api_router.include_router(user_router, prefix="/users", tags=["users"], )

