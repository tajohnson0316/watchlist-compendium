from flask import render_template, request, redirect, session
from flask_app import app
from flask_app.models.user_model import User


# Login and registration form routes - GET
@app.route("/", methods=["GET"])
@app.route("/login", methods=["GET"])
@app.route("/register", methods=["GET"])
def display_login_and_registration():
    return render_template("login_registration.html")


# Register new user route - POST
@app.route("/users/new", methods=["POST"])
def register_user():
    if not User.validate_registration(request.form):
        return redirect("/")

    session["user_id"] = User.create_one(
        {**request.form, "password": User.encrypt_string(request.form["password"])}
    )

    return redirect("/home")


# Login route - POST
@app.route("/users/login", methods=["POST"])
def login():
    email = request.form["login_email"]
    if not User.validate_login_email(email):
        return redirect("/")

    user = User.get_one_by_email({"email": email})

    if not User.validate_password(user.password, request.form["login_password"]):
        return redirect("/")

    session["user_id"] = user.id

    return redirect("/home")


# Logout route - POST
@app.route("/logout", methods=["POST"])
def logout():
    session.clear()
    return redirect("/")


# Display registration platform form route - GET
@app.route("/users/new/platforms", methods=["GET"])
def display_registration_platforms():
    # TODO: session validation
    return render_template("new_user_platform_form.html")


# Display homepage route - GET
@app.route("/home/unlisted", methods=["GET"])
def display_homepage():
    # TODO: session validation
    # TODO: homepage route
    return render_template("user_dashboard_platform_focus.html")


@app.route("/platforms/new")
def display_new_platform_form():
    return render_template("new_platform_form.html")


@app.route("/platforms/unlisted")
def display_platform():
    return render_template("display_platform.html")


@app.route("/platforms/unlisted/edit")
def edit_platform():
    return render_template("edit_platform_form.html")


@app.route("/media/new")
def display_new_media_form():
    return render_template("new_media_form.html")


@app.route("/media/attack-on-titan/edit")
def display_edit_media_form():
    return render_template("edit_media_form.html")
