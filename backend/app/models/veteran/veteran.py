from uuid import UUID
from sqlalchemy import Column, ForeignKey, Integer, String, Date
from sqlalchemy.orm import relationship
from backend.app.models.base_entity import BaseEntity



class Veteran(BaseEntity):
    __tablename__ = 'veterans'

    first_name = Column(String)
    last_name = Column(String)
    middle_name = Column(String)
    birth_date = Column(Date)
    death_date = Column(Date)
    description = Column(String)
    volunteer_id = Column(Integer)
    awards = Column(String)
    volunteer_id = Column(UUID(as_uuid=True), ForeignKey('volunteer.id'))
    volunteer = relationship('Volunteer', backref='veterans')
    