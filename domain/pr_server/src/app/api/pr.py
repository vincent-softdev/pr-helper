from typing import List
from fastapi import APIRouter, HTTPException
from pysondb import db
import uuid

from app import schemas

router = APIRouter()
pr_db = db.getDb("./app/db/pr.json")

@router.get("", response_model=List[schemas.PR])
def get_prs():
    return pr_db.getAll()

@router.get("/{pr_id}")
def get_pr(pr_id: int):
    # Convert pr_id to string if the IDs in your database are stored as strings
    pr = pr_db.getById(pk=pr_id)
    if pr:
        return pr
    else:
        raise HTTPException(status_code=404, detail="PR not found")

@router.put("/{pr_id}")
def update_pr(pr_id: int, pr_in: schemas.PRUpdate):
    # Convert pr_id to string if the IDs in your database are stored as strings
    pr = pr_db.getById(pk=pr_id)
    if pr:
        pr_db.updateByQuery(db_dataset={"id": pr_id}, new_dataset=pr_in.dict())
        return {'status_code': 200, 'data': pr_in.dict()}
    else:
        raise HTTPException(status_code=404, detail="PR not found")

@router.delete("/{pr_id}")
def delete_pr(pr_id: int):
    return pr_db.deleteById(pk=pr_id)

@router.post("")
def create_pr(pr_in: schemas.PRCreate):
    random_uuid = uuid.uuid4()
    uuid_int_64 = int(random_uuid.int >> 96)

    if len(pr_db.getBy({"name":pr_in.name})) <= 0:
        pr_db.add(pr_in.dict())
        current_db = {"name": pr_in.name}
        update_id = {"name": pr_in.name, "id": uuid_int_64}
        pr_db.updateByQuery(db_dataset=current_db, new_dataset=update_id)
    else:
        raise HTTPException(status_code=409, detail='data with this name already exist')
    return {'status_code': 200, 'data': {"id": uuid_int_64}}
