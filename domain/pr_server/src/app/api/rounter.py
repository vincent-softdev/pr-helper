from fastapi import APIRouter

from .pr import router as pr_router

api_router = APIRouter()
api_router.include_router(pr_router, prefix="/prs", tags=["prs"])
