from typing import List
from fastapi import APIRouter

from src.app import schemas

router = APIRouter()


sample_user = {
        "name": "vinh",
        "current_visa_code": 500,
        "age": 30,
        "english_score": 6,
        "australian_education": True,
        "region_education": True,
        "research_education": False,
        "professional_year": False,
        "qualification": 3,
        "oversear_work_year": 0,
        "australia_work_year": 0,
        "partner": 0,
        "designated_language": False
    }

@router.get("", response_model=List[schemas.User])
def get_users():
    return []

@router.get("/{user_id}", response_model=schemas.User)
def get_user(user_id: int):
    return sample_user

@router.put("/{user_id}", response_model=schemas.User)
def update_user(user_id: int, user_in: schemas.UserUpdate):
    return sample_user

@router.delete("/{user_id}")
def delete_user(user_id: int):
    return 200

@router.post("", response_model=schemas.User)
def create_user(user_in: schemas.UserCreate):
    return user_in
