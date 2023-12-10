from typing import List
from fastapi import APIRouter, HTTPException
from pysondb import db
import uuid

from app import schemas

router = APIRouter()
user_db = db.getDb("./app/db/user.json")

@router.get("", response_model=List[schemas.User])
def get_users():
    return user_db.getAll()

@router.get("/{user_id}", response_model=schemas.User)
def get_user(user_id: int):
    user = user_db.getById(pk=user_id)
    if user:
        return user
    else:
        raise HTTPException(status_code=404, detail="PR not found")

@router.put("/{user_id}", response_model=schemas.User)
def update_user(user_id: int, user_in: schemas.UserUpdate):
    user = user_db.getById(pk=user_id)
    if user:
        user_db.updateByQuery(db_dataset={"id": user_id}, new_dataset=user_in.dict())
        return {'status_code': 200, 'data': user_in.dict()}
    else:
        raise HTTPException(status_code=404, detail="PR not found")

@router.delete("/{user_id}")
def delete_user(user_id: int):
    return user_db.deleteById(pk=user_id)

@router.post("")
def create_user(user_in: schemas.UserCreate):
    random_uuid = uuid.uuid4()
    uuid_int_64 = int(random_uuid.int >> 96)

    if len(user_db.getBy({"name":user_in.name})) <= 0:
        user_db.add(user_in.dict())
        current_db = {"name": user_in.name}
        update_id = {"name": user_in.name, "id": uuid_int_64}
        user_db.updateByQuery(db_dataset=current_db, new_dataset=update_id)
    else:
        raise HTTPException(status_code=409, detail='data with this name already exist')
    return {'status_code': 200, 'data': {"id": uuid_int_64}}
