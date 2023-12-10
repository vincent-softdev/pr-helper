from typing import Optional, List

from pydantic import BaseModel

class PRBase(BaseModel):
    name: Optional[str] = None
    type: Optional[str] = None
    code: Optional[str] = None
    waiting_time: Optional[float]
    min_stay: Optional[float]
    max_stay: Optional[float]
    cost: Optional[float]
    condition: Optional[str]
    ability: Optional[str]
    connect_with: Optional[List[str]]

class PRCreate(BaseModel):
    name: str
    type: str
    code: str
    waiting_time: float
    min_stay: float
    max_stay: float
    cost: float
    condition: str
    ability: str
    connect_with: Optional[List[str]]

class PRUpdate(PRBase):
    pass

class PR(PRCreate):
    id: int