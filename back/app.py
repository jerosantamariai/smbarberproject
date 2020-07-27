import os  
from flask import Flask, jsonify, request, render_template, send_from_directory
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from models import db, Users, Roles, Blogs, Contact, Appointment
from flask_mail import Mail, Message
from werkzeug.utils import secure_filename
from functions import allowed_file
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity
)

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
ALLOWED_EXTENSIONS_IMAGES = {'png', 'jpg', 'jpeg', 'gif', 'svg'}

app = Flask(__name__)
app.url_map.strict_slashes = False
app.config['DEBUG '] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'super-secret'  # Change this!
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'jerosantamariai@gmail.com' #La cuenta de correo electronico de donde saldran los correos
app.config['MAIL_PASSWORD'] = ''
app.config['UPLOAD_FOLDER'] = os.path.join(BASE_DIR, 'static')
jwt = JWTManager(app)

db.init_app(app)

Migrate(app, db)
CORS(app)
bcrypt = Bcrypt(app)
mail = Mail(app)
manager = Manager(app)
manager.add_command("db", MigrateCommand)

@app.route("/")
def root():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "The number is not correct"}), 400

    email = request.json.get('email', None)
    password = request.json.get('password', None)
    

    if not email or email == '':
        return jsonify({"msg": "email / password invalid"}), 400
    if not password or password == '':
        return jsonify({"msg": "email / password invalid"}), 400

    users = Users.query.filter_by(email=email).first()
    if not users:
        return jsonify({"msg": "Ops! Try again"}), 401

    if bcrypt.check_password_hash(users.password, password):
        access_token = create_access_token(identity=users.email)
        data = {
            "access_token": access_token,
            "users": users.serialize()
        }
        return jsonify(data), 201
    else:
        return jsonify({"msg": "Ops! Try again"}), 401

@app.route('/register', methods=['POST'])
def register():
    if not request.is_json:
        return jsonify({"msg": "Invalid format"}), 400

    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if not email or email == '':
        return jsonify({"msg": "ERROR: Enter correct mail"}), 400
    if not password or password == '':
        return jsonify({"msg": "ERROR: Enter correct password"}), 400

    users = Users.query.filter_by(email=email).first()
    if users:
        return jsonify({"msg": "ERROR: Username all ready exist"}), 400

    users = Users()
    users.email = email
    users.password = bcrypt.generate_password_hash(password)
    users.role_id = 2

    db.session.add(users)
    db.session.commit()

    access_token = create_access_token(identity=users.email)
    data = {
        "access_token": access_token,
        "users": users.serialize()
    }

    return jsonify(data), 201

@app.route('/changepassword', methods=['POST'])
@jwt_required
def changepassword():
    if not request.is_json:
        return jsonify({"msg": "Ingresar formato correcto"}), 400

    oldpassword = request.json.get('oldpassword', None)
    password = request.json.get('password', None)

    if not oldpassword or oldpassword == '':
        return jsonify({"msg": "ERROR: tyoe the last password"}), 400
    if not password or password == '':
        return jsonify({"msg": "Enter new password"}), 400

    email = get_jwt_identity()

    users = Users.query.filter_by(email=email).first()

    if bcrypt.check_password_hash(users.password, oldpassword):
        users.password = bcrypt.generate_password_hash(password)
        db.session.commit()
        return jsonify({"success": "Your password has changed!"}), 200
    else:
        return jsonify({"msg": "Enter your last password!"}), 400

@app.route('/users', methods=['GET', 'POST'])
@app.route('/users/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# @jwt_required
def users(id = None):
    if request.method == 'GET':
        if id is not None:
            user = Users.query.get(id)
            if user:
                return jsonify(user.serialize()), 200
            else:
                return jsonify({"msg": "Username not exist"}), 404
        else:
            users = Users.query.all()
            print("aqui!!")
            users = list(map(lambda user: user.serialize(), users))
            return jsonify(users), 200

    if request.method == 'POST':
        name = request.json.get('name', None)
        lastname = request.json.get('lastname', None)
        phone = request.json.get('phone', None)
        email = request.json.get('email', None)
        
        users = Users()
        
        users.name = name 
        users.lastname = lastname 
        users.phone = phone
        users.email = email
        
        db.session.add(users) 
        db.session.commit()  

        return jsonify(users.serialize()), 201
    
    if request.method == 'PUT':
        name = request.json.get('name', None)
        lastname = request.json.get('lastname', None)
        phone = request.json.get('phone', None)
        email = request.json.get('email', None)

        if not name or name == "":
            return jsonify({"msg":"Insert your name"}), 400
        if not lastname or lastname == "":
            return jsonify({"msg":"Insert your lastname"}), 400
        if not phone or phone == "":
            return jsonify({"msg":"Insert your phone"}), 400
        if not email or email == "":
            return jsonify({"msg":"Confirm your email"}), 400

        users = Users.query.get(id)
        if not users:
            return jsonify({"msg": "Not Found"}), 404
         
        users.name = name 
        users.lastname = lastname 
        users.phone = phone
        users.email = email
        
        db.session.commit()  

        return jsonify(users.serialize()), 201

    if request.method == 'DELETE':
        users = Users.query.get(id)
        if not blog:
            return jsonify({"msg": "User not found"}), 404
        db.session.delete(users)
        db.session.commit()
        return jsonify({"msg":"You delete the User"}), 200

@app.route('/users/avatar/<int:id>', methods=['PUT'])
# @jwt_required
def setavatar(id = None):
    if request.method == 'PUT':
        file = request.files['avatar']
    
        if file and file.filename != '' and allowed_file(file.filename, ALLOWED_EXTENSIONS_IMAGES):
            filename = secure_filename(file.filename)
            file.save(os.path.join(os.path.join(app.config['UPLOAD_FOLDER'], 'img/avatars'), filename))
        else:
            return jsonify({"msg": "File is not correct "}), 400
                
        users = Users.query.get(id)
        if not users:
            return jsonify({"msg": "Not Found"}), 404

        if file:
            users.avatar = filename
        
        db.session.commit()  

        return jsonify(users.serialize()), 201

@app.route('/users/setrole/<int:id>', methods=['PUT'])
# @jwt_required
def setrole(id = None):
    if request.method == 'PUT':
        role_id = request.json.get('role_id', None)
                
        users = Users.query.get(id)
        if not users:
            return jsonify({"msg": "Not Found"}), 404

        role = Roles.query.filter_by(rolename = "admin").first()
        if not role:
            return jsonify({"msg": "Not Found"}), 404
        print(role)

        users.role_id = role_id
        
        db.session.commit()  

        return jsonify(users.serialize()), 201

@app.route('/blog', methods=['GET', 'POST'])
@app.route('/blog/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# @jwt_required
def blog(id = None):
    if request.method == 'GET':
        if id is not None :
            blog = Blogs.query.get(id)
            if blog:
               return jsonify(blog.serialize()), 200
            else:
               return jsonify({"msg": "Blog not found"}), 404   
        else :
            blogs = Blogs.query.all()
            blogs = list(map(lambda blog: blog.serialize(), blogs))
            return jsonify(blogs), 200

    if request.method == 'POST':
        title = request.form.get('title', None)
        bintro = request.form.get('bintro', None)
        publictext = request.form.get('publictext', None)
        privatext = request.form.get('privatext', None)
       
        if not title or title == "":
           return jsonify({"msg":"Insert the blog title"}), 400
        if not bintro or bintro == "":
           return jsonify({"msg":"Insert the blog introduction"}), 400
        if not publictext or publictext == "":
            return jsonify({"msg":"Insert the blog public text"}), 400
        if not privatext or privatext == "":
            return jsonify({"msg":"Insert the blog private text"}), 400
        # if not blogimagen or blogimagen == "":
        #     return jsonify({"msg":"Debes agregar una foto para el blog"}), 400
        
        file = request.files['blogimagen']
    
        if file and file.filename != '' and allowed_file(file.filename, ALLOWED_EXTENSIONS_IMAGES):
            filename = secure_filename(file.filename)
            file.save(os.path.join(os.path.join(app.config['UPLOAD_FOLDER'], 'img/blog'), filename))
        else:
            return jsonify({"msg": "Incorrect File"}), 400

        blogs = Blogs()
         
        blogs.title = title 
        blogs.bintro = bintro
        blogs.publictext = publictext 
        blogs.blogvideo = blogvideo
        blogs.privatext = privatext
        if file:
            blogs.blogimagen = filename
        
        db.session.add(blogs) 
        db.session.commit()  

        blogs = Blogs.query.all()
        blogs = list(map(lambda blog: blog.serialize(), blogs))
        return jsonify(blogs), 201

    if request.method == 'PUT':
        title = request.json.get('title', None)
        bintro = request.json.get('bintro', None)
        publictext = request.json.get('publictext', None)
        privatext = request.json.get('privatext', None)
       
        if not title or title == "":
            return jsonify({"msg":"Insert the blog title"}), 400
        if not bintro or bintro == "":
            return jsonify({"msg":"Insert the blog introduction"}), 400
        if not publictext or publictext == "":
            return jsonify({"msg":"Insert the blog public text"}), 400
        if not privatext or privatext == "":
            return jsonify({"msg":"Insert the blog private text"}), 400

        blogput = Blogs.query.get(id) #busca por el id
            
        if not blogput:
            return jsonify({"msg": "Not Found"}), 404 # para no actualizar algo q no existe
         
        blogput.title = title
        blogput.bintro = bintro
        blogput.publictext = publictext 
        blogput.privatext = privatext
 
        db.session.commit()
        
        blogput = Blogs.query.all()
        blogput = list(map(lambda blog: blog.serialize(), blogput))
        return jsonify(blogput), 200

    if request.method == 'DELETE':
        blog = Blogs.query.get(id)
        if not blog:
            return jsonify({"msg": "Blog not found"}), 404
        db.session.delete(blog)
        db.session.commit()
        return jsonify({"msg":"Blog deleted"}), 200

@app.route('/blog/imagen/<int:id>', methods=['PUT'])
# @jwt_required
def setimgblog(id = None):
    if request.method == 'PUT':
        file = request.files['blogimagen']
    
        if file and file.filename != '' and allowed_file(file.filename, ALLOWED_EXTENSIONS_IMAGES):
            filename = secure_filename(file.filename)
            file.save(os.path.join(os.path.join(app.config['UPLOAD_FOLDER'], 'img/blog'), filename))
        else:
            return jsonify({"msg": "File incorrect"}), 400
                
        blogs = Blogs.query.get(id)
        if not blogs:
            return jsonify({"msg": "Not found"}), 404

        if file:
            blogs.blogimagen = filename
        
        db.session.commit()  

        return jsonify(blogs.serialize()), 201

@app.route('/appointment', methods=['GET', 'POST'])
@app.route('/appointment/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# @jwt_required
def appointment(id = None):
    if request.method == 'GET':
        if id is not None :
            appoint = Appointment.query.get(id)
            if appoint:
               return jsonify(appoint.serialize()), 200
            else:
               return jsonify({"msg": "Appointment not found"}), 404   
        else :
            appoints = Appointment.query.all()
            appoints = list(map(lambda appoint: appoint.serialize(), appoints))
            return jsonify(appoints), 200

    if request.method == 'POST':
        if not request.is_json:
            return jsonify({"msg": "Incorrect format"}), 400

        app_name = request.json.get('app_name', None)
        app_lastname = request.json.get('app_lastname', None)
        app_email = request.json.get('app_email', None)
        app_phone = request.json.get('app_phone', None)
        app_time = request.json.get('app_time', None)
        app_message = request.json.get('app_message', None)

        if not app_name or app_name == '':
            return jsonify({"msg": "Please enter Name"}), 400
        if not app_lastname or app_lastname == '':
            return jsonify({"msg": "Please enter Last name"}), 400
        if not app_email or app_email == '':
            return jsonify({"msg": "Please enter email"}), 400
        if not app_time or app_time == '':
            return jsonify({"msg": "Please enter date"}), 400
        if not app_phone or app_phone == '':
            return jsonify({"msg": "Please enter a phone number"}), 400
        if not app_message or app_message == '':
            return jsonify({"msg": "Please enter a message"}), 400

        appoints = Appointment()
        appoints.app_name = app_name
        appoints.app_lastname = app_lastname
        appoints.app_email = app_email
        appoints.app_time = app_time
        appoints.app_phone = app_phone
        appoints.app_message = app_message
        
        db.session.add(appoints)
        db.session.commit()  

        appoints = Appointment.query.all()
        appoints = list(map(lambda appoint: appoint.serialize(), appoints))
        return jsonify(appoints), 201

    if request.method == 'PUT':
        if not request.is_json:
            return jsonify({"msg": "Ingresar formato correcto"}), 400

        app_name = request.json.get('app_name', None)
        app_lastname = request.json.get('app_lastname', None)
        app_email = request.json.get('app_email', None)
        app_phone = request.json.get('app_phone', None)
        app_time = request.json.get('app_time', None)
        app_message = request.json.get('app_message', None)
        app_status = request.json.get('app_status', None)

        # if not app_status or app_status == '':
        #     return jsonify({"msg": "Por favor cambiar status"}), 400

        setappoints = Appointment.query.get(id) #busca por el id
            
        if not setappoints:
            return jsonify({"msg": "Not Found"}), 404 # para no actualizar algo q no existe

        setappoints.app_status = app_status
        setappoints.app_name = app_name
        setappoints.app_lastname = app_lastname
        setappoints.app_email = app_email
        setappoints.app_time = app_time
        setappoints.app_phone = app_phone
        setappoints.app_message = app_message
        
        db.session.commit()  

        setappoints = Appointment.query.all()
        setappoints = list(map(lambda setappoint: setappoint.serialize(), setappoints))
        return jsonify(setappoints), 201

@app.route('/contact', methods=['GET', 'POST'])
@app.route('/contact/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# @jwt_required
def contact(id = None):
    if request.method == 'GET':
        if id is not None :
            contact = Contact.query.get(id)
            if contact:
               return jsonify(contact.serialize()), 200
            else:
               return jsonify({"msg": "Comment not Found"}), 404   
        else :
            contacts = Contact.query.all()
            contacts = list(map(lambda contact: contact.serialize(), contacts))
            return jsonify(contacts), 200
        
    if request.method == 'POST':
        if not request.is_json:
            return jsonify({"msg": "Incorrect format"}), 400

        cont_name = request.json.get('cont_name', None)
        cont_lastname = request.json.get('cont_lastname', None)
        cont_email = request.json.get('cont_email', None)
        cont_phone = request.json.get('cont_phone', None)
        cont_message = request.json.get('cont_message', None)

        if not cont_name or cont_name == '':
            return jsonify({"msg": "Please enter Name"}), 400
        if not cont_lastname or cont_lastname == '':
            return jsonify({"msg": "Please enter Last name"}), 400
        if not cont_email or cont_email == '':
            return jsonify({"msg": "Please enter email"}), 400
        if not cont_phone or cont_phone == '':
            return jsonify({"msg": "Please enter a phone number"}), 400
        if not cont_message or cont_message == '':
            return jsonify({"msg": "Please enter a message"}), 400

        contact = Contact()
        contact.cont_name = cont_name
        contact.cont_lastname = cont_lastname
        contact.cont_email = cont_email
        contact.cont_phone = cont_phone
        contact.cont_message = cont_message
        
        db.session.add(contact)
        db.session.commit()  

        return jsonify(contact.serialize()), 201

    if request.method == 'DELETE':
        contact = Contact.query.get(id)
        if not contact:
            return jsonify({"msg": "Contact message not found"}), 404
        db.session.delete(contact)
        db.session.commit()
        return jsonify({"msg":"Contact message was erased"}), 200

@app.route('/users/avatar/<filename>')
def getavatar(filename):
    return  send_from_directory(os.path.join(app.config['UPLOAD_FOLDER'], 'img/avatars'), filename)

@app.route('/blog/<filename>')
def getblogimg(filename):
    return  send_from_directory(os.path.join(app.config['UPLOAD_FOLDER'], 'img/blog'), filename)

@manager.command
def loadroles():
    role = Roles()
    role.rolename = "admin"

    db.session.add(role)
    db.session.commit()

    role = Roles()
    role.rolename = "customer"

    db.session.add(role)
    db.session.commit()

    print("Roles Creados")

@manager.command
def loadblogs():
    blogs = Blogs()
    blogs.title = "Bienvenido!" 
    blogs.bintro = "Te dejo un saludo y una pequeña presentación!"
    blogs.publictext = "Si estas leyendo estas líneas es por que quieres revisar el trabajo que puedo hacer como Desarrollor Full Stack. Tengo habilidades tanto en el Front como en el Back End. Recomiendo que puedas ver esta pagina como usuario registrado o loguearte como usuario administrador que tiene como correo admin@gmail.com y clave 123456, y así podras ver todo el contenido que tengo para ti, incluyendo videos."
    blogs.blogvideo = "https://www.youtube.com/embed/AOzjMEIZkrg"
    blogs.privatext = "Para no tomar mucho de tu tiempo, te cuento que soy Ingeniero Comercial de la Universidad de la Universidad de los Andes y Desarrollador de Software Full Stack de 4Geeks. Cuento con más de 8 años como profesional y la habia desarrollado en el área comercial y de marketing liderando equipos de trabajos, negociaciones con todo nivel de clientes y estrategia empresarial. Lo que me incentivo a dedicarme al área tecnologica fue principalmente que en todas las empresas donde trabajé, la evaluación, implementación y administración de TICs en ellas, y al verme cada vez mas interesado en como se hacen las cosas, descubrí un mundo enorme que terminó siendo más que un pasatiempo, una pasión"

    db.session.add(blogs)
    db.session.commit()

    print("Blogs Creados!")

@manager.command
def loadadmin():
    users = Users()
    users.email = "admin@gmail.com"
    users.password = bcrypt.generate_password_hash("123456")
    users.role_id = "1"

    db.session.add(users)
    db.session.commit()

    print("Administrador Creado! Buena Suerte!")

if __name__ == '__main__':
    manager.run()