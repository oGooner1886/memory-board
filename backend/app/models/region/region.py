from sqlalchemy import Column, String
from backend.app.models.base_entity import BaseEntity



class Region(BaseEntity):
    __tablename__ = 'regions'

    name = Column(String)