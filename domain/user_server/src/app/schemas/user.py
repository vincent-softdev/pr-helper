from typing import Optional

from pydantic import BaseModel

class UserBase(BaseModel):
    name: Optional[str] = None
    current_visa_code: Optional[int]
    age: Optional[int]
    english_score: Optional[int]
    australian_education: Optional[bool]
    region_education: Optional[bool]
    research_education: Optional[bool]
    professional_year: Optional[bool]
    # Enum later for diploma, bachelor, PhD
    qualification: Optional[int]
    oversear_work_year: Optional[int]
    australia_work_year: Optional[int]
    partner: Optional[int]
    pr_score: Optional[int]
    designated_language: Optional[bool]

class UserCreate(BaseModel):
    name: str
    current_visa_code: int
    age: int
    english_score: int
    australian_education: bool
    region_education: bool
    research_education: bool
    professional_year: bool
    # Enum later for diploma, bachelor, PhD
    qualification: int
    oversear_work_year: int
    australia_work_year: int
    partner: int
    pr_score: int
    designated_language: bool

class UserUpdate(UserBase):
    pass

class User(UserCreate):
    id: int