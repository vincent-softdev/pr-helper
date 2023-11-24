from typing import Optional

from pydantic import BaseModel

class PRBase(BaseModel):
    name: Optional[str] = None
    type: Optional[str] = None
    code: Optional[str] = None
    waiting_time: Optional[int]
    min_stay: Optional[int]
    max_stay: Optional[int]
    cost: Optional[int]
    condition: Optional[str]
    ability: Optional[str]

class PRCreate(BaseModel):
    name: str
    type: str
    code: str
    waiting_time: int
    min_stay: int
    max_stay: int
    cost: int
    condition: str
    ability: str

class PRUpdate(PRBase):
    pass

class PR(PRCreate):
    pass