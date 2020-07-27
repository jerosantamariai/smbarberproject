from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Roles (db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    rolename = db.Column(db.String(50), unique=True, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "rolename": self.rolename
        }

class Users (db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(100), nullable=False)
    name = db.Column(db.String(100), nullable=True)
    lastname = db.Column(db.String(100), nullable=True)
    email = db.Column(db.String(100), nullable=False)
    avatar = db.Column(db.String(100), nullable=True, default='defaultavatar.jpg')
    phone = db.Column(db.String(12), nullable=True)
    createdate = db.Column(db.DateTime, default=datetime.now())
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'), nullable=False)
    role = db.relationship(Roles)
    # appointment = db.relationship("Appointment", backref="appointment", cascade="delete")

    def serialize(self):
        # appointment = []
        # appointment = list(map(lambda appoint: appoint.serialize(), self.appointment))
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "avatar": self.avatar,
            "phone": self.phone,
            "createdate": self.createdate,
            "role": self.role.serialize(),
            # "appointment": appointment,
        }

class Appointment (db.Model):
    __tablename__ = 'appointment'
    id = db.Column(db.Integer, primary_key=True)
    app_name = db.Column(db.String(100), nullable=False)
    app_lastname = db.Column(db.String(100), nullable=False)
    app_email = db.Column(db.String(100), nullable=False)
    app_phone = db.Column(db.String(12), nullable=False)
    app_time = db.Column(db.String(100), nullable=False)
    app_message = db.Column(db.String(500), nullable=False)
    app_status = db.Column(db.Boolean, nullable=True, default=False)
    cont_createdate = db.Column(db.DateTime, default=datetime.now())
    # user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    def serialize(self):
        return {
            "id": self.id,
            "app_name": self.app_name,
            "app_lastname": self.app_lastname,
            "app_email": self.app_email,
            "app_phone": self.app_phone,
            "app_time": self.app_time,
            "app_message": self.app_message,
            "app_status": self.app_status,
            "app_createdate": self.cont_createdate,
        }

class Blogs (db.Model):
    __tablename__ = 'blogs'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    bintro = db.Column(db.String(100), nullable=False)
    publictext = db.Column(db.String(100), nullable=False)
    privatext = db.Column(db.String(1000), nullable=False)
    blogimagen = db.Column(db.String(100), nullable=True, default='noimage.jpg')
    blogvideo = db.Column(db.String(100), nullable=True)
    createdate = db.Column(db.DateTime, default=datetime.now())

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "bintro": self.bintro,
            "publictext": self.publictext,
            "privatext": self.privatext,
            "blogimagen": self.blogimagen,
            "blogvideo": self.blogvideo,
            "createdate": self.createdate,
        }

class Contact (db.Model):
    __tablename__ = 'contact'
    id = db.Column(db.Integer, primary_key=True)
    cont_name = db.Column(db.String(100), nullable=False)
    cont_lastname = db.Column(db.String(100), nullable=False)
    cont_email = db.Column(db.String(100), nullable=False)
    cont_phone = db.Column(db.String(12), nullable=False)
    cont_message = db.Column(db.String(500), nullable=False)
    cont_createdate = db.Column(db.DateTime, default=datetime.now())

    def serialize(self):
        return {
            "id": self.id,
            "cont_name": self.cont_name,
            "cont_lastname": self.cont_lastname,
            "cont_email": self.cont_email,
            "cont_phone": self.cont_phone,
            "cont_message": self.cont_message,
            "cont_createdate": self.cont_createdate,
        }

