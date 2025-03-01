from sqlalchemy import Column, ForeignKey, Integer, String
from backend.app.models.base_entity import BaseEntity
from sqlalchemy.orm import relationship



class Volunteer(BaseEntity):
    __tablename__ = 'volunteers'

    name = Column(String)
    email = Column(String)
    phone = Column(String)
    region_id = Column(Integer, ForeignKey('regions.id'))
    region = relationship('Region', backref='volunteers')
