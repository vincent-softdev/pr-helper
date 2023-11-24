from typing import List
from fastapi import APIRouter

from src.app import schemas

router = APIRouter()

sample_pr = {
    "name": "student visa",
    "type": "student",
    "code": "500",
    "waiting_time": 6,
    "min_stay": 0,
    "max_stay": 5,
    "cost": 710,
    "condition": "pply online in or outside Australia \
                be enrolled in a course of study in Australia \
                hold Overseas Student Health Cover (OSHC), or fall in one of the exemption categories \
                must be 6 years or older \
                prove you have a welfare arrangement, if you are under 18 \
                If in Australia hold an eligible substantive visa. See, ‘Have this Visa if applying while in Australia” in Eligibility Tab.",
    "ability": "participate in an eligible course of study in Australia \
                travel in and out of Australia \
                work up to 48 hours a fortnight when your course of study or training is in session."
}

@router.get("", response_model=List[schemas.PR])
def get_prs():
    return []

@router.get("/{pr_id}", response_model=schemas.PR)
def get_pr(pr_id: int):
    return sample_pr

@router.put("/{pr_id}", response_model=schemas.PR)
def update_pr(pr_id: int, pr_in: schemas.PRUpdate):
    return pr_in

@router.delete("/{pr_id}")
def delete_pr(pr_id: int):
    return 200

@router.post("", response_model=schemas.PR)
def create_pr(pr_in: schemas.PRCreate):
    return pr_in
