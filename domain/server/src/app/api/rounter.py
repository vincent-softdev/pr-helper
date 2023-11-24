from fastapi import APIRouter

from .user import router as user_router  # , product_category, product_category_relationship
from .pr import router as pr_router

api_router = APIRouter()
api_router.include_router(user_router, prefix="/users", tags=["users"], )
api_router.include_router(pr_router, prefix="/prs", tags=["prs"])
