from fastapi import APIRouter

router = APIRouter()

@router.get("")
def get_users():
    pass

@router.get("/{user_id}")
def get_user(user_id: int):
    pass

@router.put("/{user_id}")
def update_user(user_id: int):
    pass

@router.delete("/{user_id}")
def delete_user(user_id: int):
    pass

@router.post("")
def create_user():
    pass
